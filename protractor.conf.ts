import { browser, Config, ProtractorBrowser } from 'protractor';
import protractor = require('protractor');

var HtmlReporter = require('protractor-beautiful-reporter');

export const config: Config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: ["--headless", "--disable-gpu" ]
        },
    },
    framework: 'jasmine',
    spec: [
    './test_suite/e2e/spec/*.spec.js'
    ],




}