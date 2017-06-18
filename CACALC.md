# Interesting files:

### `Packages/ohif-study-list/client/components/studylist/studylistResult/studylistResult.html` and `Packages/ohif-study-list/client/components/studylist/studylistResult/studylistResult.js`:
Add input[type="file"] element in .html file, and add change handler in .js for, which loads files into the WADOLoader

### `Packages/ohif-study-list/client/lib/retrieveStudyMetadata.js`
Need to override some code to not fail due to missing metadata for server. THIS CAN PROBABLY BE SOLVED BETTER

### `Packages/ohif-cornerstone/package.js`
Change cornerstone-tools npm dependency url to use our own fork.


# Commands
## Merging from upstream
```
git remote add upstream https://github.com/OHIF/Viewers
git merge upstream/master
```

## Develop

```
git clone ...
METEOR_PACKAGE_DIRS="../Packages" meteor --settings ../config/orthancDICOMWeb.json
```

## Build
```
METEOR_PACKAGE_DIRS="../Packages" METEOR_SETTINGS=$(cat ../config/orthancDICOMWeb.json) meteor build package
```
