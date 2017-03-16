Error.stackTraceLimit = Infinity;

// Load scripts needed by angular
require('core-js/es6');
require('core-js/es7/reflect');
require('reflect-metadata');
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

// Load RxJS
require('rxjs/Rx');

// Load all ts files for tests
var testContext = require.context('./client', true, /\.spec\.ts$/);
testContext.keys().forEach(testContext);

// Load all components (for coverage)
var componentContext = require.context('./client/modules', true, /\.ts$/);
componentContext.keys().forEach(componentContext);

// Wire upp angular testing framework
var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting());
