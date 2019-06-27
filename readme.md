# Tree Rules

![A screenshot](/screenshot.png "Screenshot")

A quick exploration of what json-rules-engine + Tree Notation might look like. For now just called it "treerules", but you may want to have a better language name.

I just took the example from "https://github.com/CacheControl/json-rules-engine/blob/master/docs/walkthrough.md" and wrote it in a Tree Language instead of JSON. You can see that at "sample.treerules".

The Grammar file is at "treerules.grammar"

### Try it now

<a href="http://treenotation.org/sandbox/build/#grammar%0A%20grammar%0A%20%20name%20treerules%0A%20%20catchAllNodeType%20errorLine%0A%20%20description%20A%20prototype%20language%20that%20compiles%20to%20json-rules-engine%20json.%0A%20%20compilesTo%20json%0A%20%20javascript%0A%20%20%20getEngine()%20%7B%0A%20%20%20%20%20let%20engine%20%3D%20new%20RulesEngine.Engine()%0A%20%20%20%20%20this.forEach(ruleNode%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20engine.addRule(new%20RulesEngine.Rule(ruleNode.compile()))%0A%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20return%20engine%0A%20%20%20%7D%0A%20%20%20compile()%20%7B%20return%20JSON.stringify(this.map(ruleNode%20%3D%3E%20ruleNode.compile())%2C%20null%2C%202)%20%7D%0A%20%20inScope%20rule%0A%20cellType%20anyFirstWord%0A%20cellType%20eventTypeCell%0A%20%20highlightScope%20string%0A%20cellType%20factCell%0A%20%20highlightScope%20string%0A%20cellType%20keywordCell%0A%20%20highlightScope%20keyword%0A%20cellType%20operatorCell%0A%20%20enum%20equal%20notEqual%20lessThan%20lessThanInclusive%20greaterThan%20greaterThanInclusive%20in%20notIn%20contains%20doesNotContain%20%0A%20%20highlightScope%20keyword.operator.logical%0A%20cellType%20paramName%0A%20%20highlightScope%20variable%0A%20cellType%20paramValue%0A%20%20highlightScope%20constant.numeric%0A%20cellType%20valueCell%0A%20%20highlightScope%20constant.numeric%0A%20abstract%20abstract.keyword%0A%20%20firstCellType%20keywordCell%0A%20abstract%20abstract.conditionGroup%0A%20%20extends%20abstract.keyword%0A%20%20inScope%20condition%20abstract.conditionGroup%0A%20nodeType%20errorLine%0A%20nodeType%20paramNode%0A%20%20firstCellType%20paramName%0A%20%20cells%20paramValue%0A%20nodeType%20params%0A%20%20catchAllNodeType%20paramNode%0A%20%20firstCellType%20keywordCell%0A%20nodeType%20type%0A%20%20description%20Event%20type%0A%20%20cells%20eventTypeCell%0A%20%20extends%20abstract.keyword%0A%20nodeType%20all%0A%20%20extends%20abstract.conditionGroup%0A%20%20javascript%0A%20%20%20compile()%20%7B%20return%20%7Ball%3A%20this.map(condition%20%3D%3E%20condition.compile())%7D%7D%0A%20%20description%20The%20all%20operator%20specifies%20that%20all%20conditions%20contained%20within%20must%20be%20truthy%20for%20the%20rule%20to%20be%20considered%20a%20success.%0A%20nodeType%20any%0A%20%20extends%20abstract.conditionGroup%0A%20%20javascript%0A%20%20%20compile()%20%7B%20return%20%7Bany%3A%20this.map(condition%20%3D%3E%20condition.compile())%7D%7D%0A%20%20description%20The%20any%20operator%20only%20requires%20one%20condition%20to%20be%20truthy%20for%20the%20rule%20to%20succeed.%0A%20nodeType%20condition%0A%20%20extends%20abstract.keyword%0A%20%20inScope%20operator%20fact%20value%20params%0A%20%20javascript%0A%20%20%20compile()%20%7B%20return%20this.toObject()%7D%0A%20nodeType%20event%0A%20%20single%0A%20%20inScope%20type%20params%0A%20%20extends%20abstract.keyword%0A%20nodeType%20fact%0A%20%20extends%20abstract.keyword%0A%20%20catchAllCellType%20factCell%0A%20nodeType%20operator%0A%20%20extends%20abstract.keyword%0A%20%20cells%20operatorCell%0A%20nodeType%20rule%0A%20%20inScope%20any%20all%20event%0A%20%20extends%20abstract.keyword%0A%20%20javascript%0A%20%20%20compile()%20%7B%0A%20%20%20%20%20const%20rootCondition%20%3D%20this.has(%22any%22)%20%3F%20this.getNode(%22any%22).compile()%20%3A%20this.getNode(%22all%22).compile()%0A%20%20%20%20%20const%20conditions%20%3D%20Object.assign(%7B%7D%2C%20rootCondition)%0A%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20conditions%3A%20conditions%2C%0A%20%20%20%20%20%20%20event%3A%20this.getNode(%22event%22).toObject()%0A%20%20%20%20%20%7D%0A%20%20%20%7D%0A%20nodeType%20value%0A%20%20extends%20abstract.keyword%0A%20%20catchAllCellType%20valueCell%0Asample%0A%20rule%0A%20%20all%0A%20%20%20condition%0A%20%20%20%20fact%20age%0A%20%20%20%20operator%20greaterThanInclusive%0A%20%20%20%20value%2018%0A%20%20%20condition%0A%20%20%20%20fact%20age%0A%20%20%20%20operator%20lessThanInclusive%0A%20%20%20%20value%2025%0A%20%20%20any%0A%20%20%20%20condition%0A%20%20%20%20%20fact%20state%0A%20%20%20%20%20params%0A%20%20%20%20%20%20country%20us%0A%20%20%20%20%20operator%20equal%0A%20%20%20%20%20value%20CO%0A%20%20%20%20condition%0A%20%20%20%20%20fact%20state%0A%20%20%20%20%20params%0A%20%20%20%20%20%20country%20us%0A%20%20%20%20%20operator%20equal%0A%20%20%20%20%20value%20UT%0A%20%20event%0A%20%20%20type%20young-adult-rocky-mnts%0A%20%20%20params%0A%20%20%20%20giftCard%20amazon%0A%20%20%20%20value%2050">Preview the Language</a>

### Running

    git clone https://github.com/breck7/treerules
    cd treerules
    npm install .
    ./testWithoutTreeNotation.js
    ./testWithTreeNotation.js

### Editing

You can get autocomplete, syntax highlighting, and type checking at http://treenotation.org/sandbox/build/

Just paste the "treerules.grammar" code into the box on the left, and your source code on the right.

Reading:
https://www.npmjs.com/package/json-rules-engine
https://levelup.gitconnected.com/trool-a-spreadsheet-rule-engine-for-nodejs-typescript-edcb05fca231
https://github.com/RxNT/json-rules-engine-simplified
https://github.com/noolsjs/nools (abandoned)
https://github.com/jwadhams/json-logic
https://github.com/jsdevtom/truegin (typescript clone)
