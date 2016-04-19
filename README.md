# Recreate Issue

Start test mode with

`meteor test --driver-package practicalmeteor:mocha`

You will see the following err:

```
/Users/manuelschoebel/.meteor/packages/meteor-tool/.1.3.2_2.1rvzhiz++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/server-lib/node_modules/fibers/future.js:267
						throw(ex);
						      ^

TypeError: Cannot read property 'Stream' of undefined
   at Object.<anonymous> (.../meteorTestModeIssueWithAWSSdk/node_modules/aws-sdk/lib/http/node.js:2:44)
   at Module._compile (module.js:456:26)
   at Object.Module._extensions..js (module.js:474:10)
   at Module.load (module.js:356:32)
   at Function.Module._load (module.js:312:12)
   at Module.require (module.js:364:17)
   at require (module.js:380:17)
   at Object.<anonymous> (.../meteorTestModeIssueWithAWSSdk/node_modules/aws-sdk/lib/aws.js:11:1)
   at Module._compile (module.js:456:26)
   at Object.Module._extensions..js (module.js:474:10)
```

This comes from:

`var Stream = AWS.util.nodeRequire('stream').Stream;`

Is that not available in Test mode?
