# Merging from upstream
```
git remote add upstream https://github.com/OHIF/Viewers
git merge upstream/master
```

# Develop

```
git clone ...
METEOR_PACKAGE_DIRS="../Packages" meteor --settings ../config/orthancDICOMWeb.json
```

# Build
```
METEOR_PACKAGE_DIRS="../Packages" METEOR_SETTINGS=$(cat ../config/orthancDICOMWeb.json) meteor build package
```
