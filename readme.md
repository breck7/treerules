# Tree Rules

![A screenshot](/screenshot.png "Screenshot")

A quick exploration of what json-rules-engine + Tree Notation might look like. For now just called it "treerules", but you may want to have a better language name.

I just took the example from "https://github.com/CacheControl/json-rules-engine/blob/master/docs/walkthrough.md" and wrote it in a Tree Language instead of JSON. You can see that at "sample.treerules".

The Grammar file is at "treerules.grammar"

### Running

    git clone https://github.com/breck7/treerules
    cd treerules
    npm install .
    ./testWithoutTreeNotation.js
    ./testWithTreeNotation.js

### Editing

You can get autocomplete, syntax highlighting, and type checking at http://treenotation.org/sandbox/grammars.html

Just paste the "treerules.grammar" code into the box on the left, and your source code on the right.

Reading:
https://www.npmjs.com/package/json-rules-engine
https://levelup.gitconnected.com/trool-a-spreadsheet-rule-engine-for-nodejs-typescript-edcb05fca231
https://github.com/RxNT/json-rules-engine-simplified
https://github.com/noolsjs/nools (abandoned)
https://github.com/jwadhams/json-logic
https://github.com/jsdevtom/truegin (typescript clone)
