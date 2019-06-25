#! /usr/local/bin/node

global.RulesEngine = require("json-rules-engine")
const TreeRulesProgram = require("./TreeRulesProgram.js")

const code = require("fs").readFileSync(__dirname + "/sample.treerules", "utf8")
const program = new TreeRulesProgram(code)
const engine = program.getEngine()

require("./facts.js")(engine)

// subscribe to any event emitted by the engine
engine.on("success", function(event, engine) {
  console.log("Success event:\n", event)
})

// Optionally, facts known at runtime may be passed to run()
engine.run({ userId: 1 }) // any time a rule condition requires 'userId', '1' will be returned
