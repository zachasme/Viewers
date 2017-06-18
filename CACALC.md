# Develop

```
git clone ...
METEOR_PACKAGE_DIRS="../Packages" meteor --settings ../config/orthancDICOMWeb.json
```

# Build
```
METEOR_PACKAGE_DIRS="../Packages" METEOR_SETTINGS=$(cat ../config/orthancDICOMWeb.json) meteor build package
```
