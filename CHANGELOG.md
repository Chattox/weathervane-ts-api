# Changelog

## [1.3.0](https://github.com/Chattox/weathervane-ts-api/compare/v1.2.0...v1.3.0) (2024-08-23)


### Features

* **api:** daterange endpoint ([#17](https://github.com/Chattox/weathervane-ts-api/issues/17)) ([67000c2](https://github.com/Chattox/weathervane-ts-api/commit/67000c2096386fb427117f142d13d9079a67581a))
* **api:** ssupport battery voltage data in readings ([#16](https://github.com/Chattox/weathervane-ts-api/issues/16)) ([25e6bed](https://github.com/Chattox/weathervane-ts-api/commit/25e6bed986f4808b28b22b11fc3c51903137974c))
* **console-logging:** improve console log readability ([#15](https://github.com/Chattox/weathervane-ts-api/issues/15)) ([759ec02](https://github.com/Chattox/weathervane-ts-api/commit/759ec028a4f556cb38b9e39a6518b80b79785532))
* **db:** ability to receive logs from enviro as part of reading upload ([#13](https://github.com/Chattox/weathervane-ts-api/issues/13)) ([cf6ca31](https://github.com/Chattox/weathervane-ts-api/commit/cf6ca3128f440f1d741adbc1491df476fc575ae7))

## [1.2.0](https://github.com/Chattox/weathervane-ts-api/compare/v1.1.0...v1.2.0) (2024-07-09)


### Features

* **api:** stations GET endpoint ([#11](https://github.com/Chattox/weathervane-ts-api/issues/11)) ([c267977](https://github.com/Chattox/weathervane-ts-api/commit/c2679775a58d7bdb73b576fdc6e1725e8aa830dd))

## [1.1.0](https://github.com/Chattox/weathervane-ts-api/compare/v1.0.0...v1.1.0) (2024-07-09)


### ⚠ BREAKING CHANGES

* **api:** add station URL param to GET endpoints to handle multiple stations ([#9](https://github.com/Chattox/weathervane-ts-api/issues/9))

### Features

* **api:** add station URL param to GET endpoints to handle multiple stations ([#9](https://github.com/Chattox/weathervane-ts-api/issues/9)) ([13c04de](https://github.com/Chattox/weathervane-ts-api/commit/13c04de9284644920602e54ccff6a8f3acbc8b77))

## [1.0.0](https://github.com/Chattox/weathervane-ts-api/compare/v0.9.0...v1.0.0) (2024-07-09)


### Features

* add cors ([bf49633](https://github.com/Chattox/weathervane-ts-api/commit/bf49633cd196c5c4fef6f518f2af1d40bcaad43d))
* generate test data util ([eff53b0](https://github.com/Chattox/weathervane-ts-api/commit/eff53b071fabbb6880813d0ef0ce9b360df7f06f))
* generateTestData endpoint ([9f30684](https://github.com/Chattox/weathervane-ts-api/commit/9f306845fbe79f098cee4b59c6777c5f69b7bab0))
* get all readings ([6d1dfda](https://github.com/Chattox/weathervane-ts-api/commit/6d1dfdaf818fcc3df1c2c1103a984947434135d6))
* get latest reading endpoint ([1f091c6](https://github.com/Chattox/weathervane-ts-api/commit/1f091c67af273ccc41cbab29c0b0716440ab949a))
* ignore db collection env var in dev mode ([a45cfb6](https://github.com/Chattox/weathervane-ts-api/commit/a45cfb6cb9d0915be96d522feb0a500a519635dd))
* improve console logging for adding new entry ([5f05d81](https://github.com/Chattox/weathervane-ts-api/commit/5f05d8181950f38040d899d3f9666db2f2f945a9))
* improve post logging ([07cbca6](https://github.com/Chattox/weathervane-ts-api/commit/07cbca6a9f014886c81907e026b8f8f3b8cbaefb))
* initial api setup ([7c3b8f2](https://github.com/Chattox/weathervane-ts-api/commit/7c3b8f215335eba65842e2b11f4aaca57638d2b9))
* save readings to database ([664ecb6](https://github.com/Chattox/weathervane-ts-api/commit/664ecb66909648bbf1d73ab21bafca0813bd6d02))


### Bug Fixes

* latest reading endpoint returning earliest reading ([3cd2763](https://github.com/Chattox/weathervane-ts-api/commit/3cd2763a9596f3a59af4fde5e9417981a1d3b5a1))
* recording anomalous wind speed when sensor glitches ([a0c46a7](https://github.com/Chattox/weathervane-ts-api/commit/a0c46a7a9c811ecb524cbca399d863301013a800))
