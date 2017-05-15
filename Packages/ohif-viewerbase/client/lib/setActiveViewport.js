import { Session } from 'meteor/session';
import { $ } from 'meteor/jquery';
import { Random } from 'meteor/random';

import { OHIF } from 'meteor/ohif:core';
import { StudyPrefetcher } from './classes/StudyPrefetcher';
import { displayReferenceLines } from './displayReferenceLines';

// Update the list of active viewports
// It's now possible to select more than one viewport when holding the shift key.
// The `activeViewport` session will contain the most recent selected viewport (compatibility)
const updateActiveViewportsSession = (viewportIndex, event = {}) => {
    const multiSelection = event.shiftKey || (event.event && event.event.shiftKey);
    const currentActiveViewports = Session.get('activeViewports') || [];
    let newActiveViewports = currentActiveViewports.slice();

    if (multiSelection) {
        if (newActiveViewports.indexOf(viewportIndex) === -1) {
            newActiveViewports.push(viewportIndex);
        }
    } else {
        newActiveViewports = [viewportIndex];
    }

    const areEqual = currentActiveViewports.length === newActiveViewports.length && 
                     _.difference(currentActiveViewports, newActiveViewports).length === 0;

    if (!areEqual) {
        // This session will all active viewports (multiSelection === shift key)
        Session.set('activeViewports', newActiveViewports);
    }
};

// Add the 'active' class to the parent container of all active viewports
const updateActiveViewportsClass = () => {
    const $viewerports = $('.imageViewerViewport');
    const activeViewportsIndexes = Session.get('activeViewports') || [];

    // Add the 'active' class to the parent container to highlight the active viewport
    $('#imageViewerViewports .viewportContainer').removeClass('active');

    activeViewportsIndexes.forEach(activeViewportIndex => {
        const $viewport = $($viewerports.get(activeViewportIndex));
        $viewport.parents('.viewportContainer').addClass('active');
    });
};

/**
 * Sets a viewport element active
 * @param  {node} element DOM element to be activated
 */
export function setActiveViewport(element, event) {
    if (!element) {
        OHIF.log.info('setActiveViewport element does not exist');
        return;
    }

    const $viewerports = $('.imageViewerViewport');
    const viewportIndex = $viewerports.index(element);
    const $element = $(element);

    OHIF.log.info(`setActiveViewport setting viewport index: ${viewportIndex}`);

    // If viewport is not active
    if (!$element.parents('.viewportContainer').hasClass('active')) {
        // Trigger an event for compatibility with other systems
        $element.trigger('OHIFBeforeActivateViewport');
    }

    // When an OHIFActivateViewport event is fired, update the Meteor Session
    // with the viewport index that it was fired from.
    Session.set('activeViewport', viewportIndex);

    // Update the list of active viewports
    // It's now possible to select more than one viewport when holding the shift key.
    // The `activeViewport` session will contain the most recent selected viewport (compatibility)
    updateActiveViewportsSession(viewportIndex, event);

    const randomId = Random.id();

    // Update the Session variable to inform that a viewport is active
    Session.set('viewportActivated', randomId);

    // Update the Session variable to the UI re-renders
    Session.set('LayoutManagerUpdated', randomId);

    // Add the 'active' class to the parent container of all active viewports
    updateActiveViewportsClass();

    // Finally, enable stack prefetching and hide the reference lines from
    // the newly activated viewport that has a canvas

    if ($element.find('canvas').length) {
        // Cornerstone Tools compare DOM elements (check getEnabledElement cornerstone function)
        // so we can't pass a jQuery object as an argument, otherwise it throws an excepetion
        const domElement = $element.get(0);
        displayReferenceLines(domElement);
        StudyPrefetcher.getInstance().prefetch();

        // @TODO Add this to OHIFAfterActivateViewport handler...
        if (OHIF.viewer.stackImagePositionOffsetSynchronizer) {
            OHIF.viewer.stackImagePositionOffsetSynchronizer.update();
        }
    }

    // Set the div to focused, so keypress events are handled
    //$(element).focus();
    //.focus() event breaks in FF&IE
    $element.triggerHandler('focus');

    // Trigger OHIFAfterActivateViewport event on activated instance
    // for compatibility with other systems
    $element.trigger('OHIFAfterActivateViewport');

}
