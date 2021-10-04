const core = require('@actions/core');
const github = require('@actions/github');

try {
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
  if (github.context.payload.pull_request.assignee === null) {
    console.log(`The assignee is null`);
    core.setOutput("assignee", "mobile-infra");
  } else {
    const assignee = JSON.stringify(github.context.payload.pull_request.assignee.login)
    console.log(`The assignee is ${assignee}`);
    core.setOutput("assignee", assignee);
  }
} catch (error) {
  core.setFailed(error.message);
}
