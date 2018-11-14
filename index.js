module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  app.on('issues.opened', async context => {
    //Put Name of Assignees in this list
    const assigned_folks = ['albert-guo-exa'];

    if (assigned_folks.includes(context.payload.pull_request.user.login)) {
      const assigneesBody = context.issue({
        assignees: assigned_folks
      });
      return context.github.issues.addAssigneesToIssue(assigneesBody);
    }
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
