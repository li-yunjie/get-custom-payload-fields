const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
  console.log(`Body is : ${github.context.payload.pull_request.body}`);
  const assignee = JSON.stringify(github.context.payload.pull_request.assignee.login, undefined, 2)
  console.log(`Assignee is ${assignee}`);
  core.setOutput("assignee", assignee);
} catch (error) {
  core.setFailed(error.message);
}