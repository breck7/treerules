#! /usr/local/bin/node

const RulesEngine = require("json-rules-engine")

const event = {
  type: "young-adult-rocky-mnts",
  params: {
    giftCard: "amazon",
    value: 50
  }
}
const conditions = {
  all: [
    {
      fact: "age",
      operator: "greaterThanInclusive",
      value: 18
    },
    {
      fact: "age",
      operator: "lessThanInclusive",
      value: 25
    },
    {
      any: [
        {
          fact: "state",
          params: {
            country: "us"
          },
          operator: "equal",
          value: "CO"
        },
        {
          fact: "state",
          params: {
            country: "us"
          },
          operator: "equal",
          value: "UT"
        }
      ]
    }
  ]
}
const rule = new RulesEngine.Rule({ conditions, event })

const engine = new RulesEngine.Engine()
engine.addRule(rule)

require("./facts.js")(engine)

// subscribe to any event emitted by the engine
engine.on("success", function(event, engine) {
  console.log("Success event:\n", event)
})

// Optionally, facts known at runtime may be passed to run()
engine.run({ userId: 1 }) // any time a rule condition requires 'userId', '1' will be returned

