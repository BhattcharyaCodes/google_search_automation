# google_search_automation
<h2>Purpose:</h2> A basic e2e framework for the automation testing of google search engine with Circle CI integrated.
<br> To run these tests use the following command: 
<b>npm run test</b> from your CLI.
<br> 1 Why have a spec folder with spec files? : It contains the test scripts to be executed. Since we need to organize this depending on the modules and types of automation testing implemented we create a spec folder in which all the spec tests are split and organized.
<br> 2 What does protractor configuration file contain? : Everything int he test automation lifecycle from simulating a test environment to what to do after all the tests are done executing. This contains the complete instruction for every step of the way in the lifecycle.
<br> 3 POM : The spec files import the page-object model file to help locate the web elements.
<br> 4 constants.ts : The list of constants, mock values, default wait times etc. is mentioned in the constants file
<br> 5 circleci.config.yaml: This conatins your CI integration code which must be consistent with the type of CI/CD tool being used.
 
