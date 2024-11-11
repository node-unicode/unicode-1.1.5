# Unicode v1.1.5 data [![@unicode/unicode-1.1.5 on npm](https://img.shields.io/npm/v/@unicode/unicode-1.1.5)](https://www.npmjs.com/package/@unicode/unicode-1.1.5)

JavaScript-compatible Unicode data for use in Node.js. Included: arrays of code points, arrays of symbols, and regular expressions for Unicode v1.1.5’s categories, scripts, script extensions, blocks, and properties, as well as bidi mirroring and case folding data.

The data files in this module are generated as part of the [node-unicode-data](https://mths.be/node-unicode-data) project. **Please report any bugs or requests [in the appropriate issue tracker](https://github.com/node-unicode/node-unicode-data/issues).**

## Installation

```bash
npm install @unicode/unicode-1.1.5 --save-dev
```

**Note:** _@unicode/unicode-1.1.5_ is supposed to be used in build scripts (i.e. as a `devDependency`), and not at runtime (i.e. as a regular `dependency`).

## Regular expressions

The Unicode data modules ship with pre-compiled regular expressions for categories, scripts, script extensions, blocks, and properties. But maybe you want to create a single regular expression that combines several categories, scripts, etc. In that case, [***you should use Regenerate***](https://mths.be/regenerate). For example, to construct a regex that matches all symbols in the Arabic and Greek scripts as per Unicode v6.3.0:

```js
const regenerate = require('regenerate');
const set = regenerate()
  .add(require('@unicode/unicode-6.3.0/Script_Extensions/Arabic/code-points.js')) // or `…/symbols`, doesn’t matter
  .add(require('@unicode/unicode-6.3.0/Script_Extensions/Greek/code-points.js')); // or `…/symbols`, doesn’t matter
console.log(set.toString());
// Then you might want to use a template like this to write the result to a file, along with any regex flags you might need:
// const regex = /<%= set.toString() %>/gim;
```

## Usage

```js
// Get an array of code points in a given Unicode category:
const codePoints = require('@unicode/unicode-1.1.5/General_Category/Uppercase_Letter/code-points.js');
// Get an array of symbols (strings) in a given Unicode category:
const symbols = require('@unicode/unicode-1.1.5/General_Category/Uppercase_Letter/symbols.js');
// Get a regular expression that matches any symbol in a given Unicode category:
const regex = require('@unicode/unicode-1.1.5/General_Category/Uppercase_Letter/regex.js');
// Get the canonical category a given code point belongs to:
// (Note: U+0041 is LATIN CAPITAL LETTER A)
const category = require('@unicode/unicode-1.1.5/General_Category').get(0x41);
// Get an array of all code points with a given bidi class:
const on = require('@unicode/unicode-1.1.5/Bidi_Class/Other_Neutral/code-points.js');
// Get a map from code points to bidi classes:
const bidiClassMap = require('@unicode/unicode-1.1.5/Bidi_Class');
// Get the directionality of a given code point:
const directionality = require('@unicode/unicode-1.1.5/Bidi_Class').get(0x41);

// …you get the idea.
```

Other than categories, data on Unicode properties, blocks, scripts, and script extensions is available too (for recent versions of the Unicode standard). Here’s the full list of the available data for v1.1.5:

```js
// `Names`:

require('@unicode/unicode-1.1.5/Names/index.js'); // array of canonical names


// `Binary_Property`:

require('@unicode/unicode-1.1.5/Binary_Property/ASCII/code-points.js');
require('@unicode/unicode-1.1.5/Binary_Property/ASCII/symbols.js');
require('@unicode/unicode-1.1.5/Binary_Property/ASCII/regex.js');

require('@unicode/unicode-1.1.5/Binary_Property/Any/code-points.js');
require('@unicode/unicode-1.1.5/Binary_Property/Any/symbols.js');
require('@unicode/unicode-1.1.5/Binary_Property/Any/regex.js');

require('@unicode/unicode-1.1.5/Binary_Property/Assigned/code-points.js');
require('@unicode/unicode-1.1.5/Binary_Property/Assigned/symbols.js');
require('@unicode/unicode-1.1.5/Binary_Property/Assigned/regex.js');

require('@unicode/unicode-1.1.5/Binary_Property/Bidi_Mirrored/code-points.js');
require('@unicode/unicode-1.1.5/Binary_Property/Bidi_Mirrored/symbols.js');
require('@unicode/unicode-1.1.5/Binary_Property/Bidi_Mirrored/regex.js');

// `General_Category`:

require('@unicode/unicode-1.1.5/General_Category').get(codePoint); // lookup map

require('@unicode/unicode-1.1.5/General_Category/Cased_Letter/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Cased_Letter/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Cased_Letter/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Close_Punctuation/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Close_Punctuation/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Close_Punctuation/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Control/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Control/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Control/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Currency_Symbol/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Currency_Symbol/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Currency_Symbol/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Dash_Punctuation/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Dash_Punctuation/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Dash_Punctuation/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Decimal_Number/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Decimal_Number/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Decimal_Number/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Letter/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Letter/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Letter/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Line_Separator/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Line_Separator/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Line_Separator/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Lowercase_Letter/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Lowercase_Letter/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Lowercase_Letter/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Mark/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Mark/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Mark/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Math_Symbol/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Math_Symbol/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Math_Symbol/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Modifier_Letter/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Modifier_Letter/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Modifier_Letter/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Nonspacing_Mark/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Nonspacing_Mark/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Nonspacing_Mark/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Number/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Number/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Number/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Open_Punctuation/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Open_Punctuation/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Open_Punctuation/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Other/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Other/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Other/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Other_Letter/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Other_Letter/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Other_Letter/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Other_Number/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Other_Number/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Other_Number/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Other_Punctuation/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Other_Punctuation/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Other_Punctuation/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Other_Symbol/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Other_Symbol/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Other_Symbol/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Paragraph_Separator/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Paragraph_Separator/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Paragraph_Separator/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Punctuation/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Punctuation/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Punctuation/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Separator/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Separator/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Separator/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Space_Separator/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Space_Separator/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Space_Separator/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Spacing_Mark/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Spacing_Mark/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Spacing_Mark/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Symbol/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Symbol/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Symbol/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Unassigned/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Unassigned/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Unassigned/regex.js');

require('@unicode/unicode-1.1.5/General_Category/Uppercase_Letter/code-points.js');
require('@unicode/unicode-1.1.5/General_Category/Uppercase_Letter/symbols.js');
require('@unicode/unicode-1.1.5/General_Category/Uppercase_Letter/regex.js');

// `Bidi_Class`:

require('@unicode/unicode-1.1.5/Bidi_Class').get(codePoint); // lookup map

require('@unicode/unicode-1.1.5/Bidi_Class/Arabic_Number/code-points.js');
require('@unicode/unicode-1.1.5/Bidi_Class/Arabic_Number/symbols.js');
require('@unicode/unicode-1.1.5/Bidi_Class/Arabic_Number/regex.js');

require('@unicode/unicode-1.1.5/Bidi_Class/Common_Separator/code-points.js');
require('@unicode/unicode-1.1.5/Bidi_Class/Common_Separator/symbols.js');
require('@unicode/unicode-1.1.5/Bidi_Class/Common_Separator/regex.js');

require('@unicode/unicode-1.1.5/Bidi_Class/European_Number/code-points.js');
require('@unicode/unicode-1.1.5/Bidi_Class/European_Number/symbols.js');
require('@unicode/unicode-1.1.5/Bidi_Class/European_Number/regex.js');

require('@unicode/unicode-1.1.5/Bidi_Class/European_Separator/code-points.js');
require('@unicode/unicode-1.1.5/Bidi_Class/European_Separator/symbols.js');
require('@unicode/unicode-1.1.5/Bidi_Class/European_Separator/regex.js');

require('@unicode/unicode-1.1.5/Bidi_Class/European_Terminator/code-points.js');
require('@unicode/unicode-1.1.5/Bidi_Class/European_Terminator/symbols.js');
require('@unicode/unicode-1.1.5/Bidi_Class/European_Terminator/regex.js');

require('@unicode/unicode-1.1.5/Bidi_Class/Left_To_Right/code-points.js');
require('@unicode/unicode-1.1.5/Bidi_Class/Left_To_Right/symbols.js');
require('@unicode/unicode-1.1.5/Bidi_Class/Left_To_Right/regex.js');

require('@unicode/unicode-1.1.5/Bidi_Class/Other_Neutral/code-points.js');
require('@unicode/unicode-1.1.5/Bidi_Class/Other_Neutral/symbols.js');
require('@unicode/unicode-1.1.5/Bidi_Class/Other_Neutral/regex.js');

require('@unicode/unicode-1.1.5/Bidi_Class/Paragraph_Separator/code-points.js');
require('@unicode/unicode-1.1.5/Bidi_Class/Paragraph_Separator/symbols.js');
require('@unicode/unicode-1.1.5/Bidi_Class/Paragraph_Separator/regex.js');

require('@unicode/unicode-1.1.5/Bidi_Class/Right_To_Left/code-points.js');
require('@unicode/unicode-1.1.5/Bidi_Class/Right_To_Left/symbols.js');
require('@unicode/unicode-1.1.5/Bidi_Class/Right_To_Left/regex.js');

require('@unicode/unicode-1.1.5/Bidi_Class/White_Space/code-points.js');
require('@unicode/unicode-1.1.5/Bidi_Class/White_Space/symbols.js');
require('@unicode/unicode-1.1.5/Bidi_Class/White_Space/regex.js');

// `Simple_Case_Mapping`:

require('@unicode/unicode-1.1.5/Simple_Case_Mapping/Lowercase/code-points.js'); // lookup map from code point to code point or array of code points
require('@unicode/unicode-1.1.5/Simple_Case_Mapping/Lowercase/code-points.js').get(codePoint);
require('@unicode/unicode-1.1.5/Simple_Case_Mapping/Lowercase/symbols.js'); // lookup map from symbol to symbol(s)
require('@unicode/unicode-1.1.5/Simple_Case_Mapping/Lowercase/symbols.js').get(symbol);

require('@unicode/unicode-1.1.5/Simple_Case_Mapping/Titlecase/code-points.js'); // lookup map from code point to code point or array of code points
require('@unicode/unicode-1.1.5/Simple_Case_Mapping/Titlecase/code-points.js').get(codePoint);
require('@unicode/unicode-1.1.5/Simple_Case_Mapping/Titlecase/symbols.js'); // lookup map from symbol to symbol(s)
require('@unicode/unicode-1.1.5/Simple_Case_Mapping/Titlecase/symbols.js').get(symbol);

require('@unicode/unicode-1.1.5/Simple_Case_Mapping/Uppercase/code-points.js'); // lookup map from code point to code point or array of code points
require('@unicode/unicode-1.1.5/Simple_Case_Mapping/Uppercase/code-points.js').get(codePoint);
require('@unicode/unicode-1.1.5/Simple_Case_Mapping/Uppercase/symbols.js'); // lookup map from symbol to symbol(s)
require('@unicode/unicode-1.1.5/Simple_Case_Mapping/Uppercase/symbols.js').get(symbol);
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This module is available under the [MIT](https://mths.be/mit) license.
