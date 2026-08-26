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
import regenerate from 'regenerate';
import arabic from '@unicode/unicode-6.3.0/Script_Extensions/Arabic/code-points.mjs'; // Or `…/symbols`, doesn’t matter.
import greek from '@unicode/unicode-6.3.0/Script_Extensions/Greek/code-points.mjs'; // Or `…/symbols`, doesn’t matter.
const set = regenerate()
  .add(arabic)
  .add(greek);
console.log(set.toString());
// Then you might want to use a template like this to write the result to a file, along with any regex flags you might need:
// const regex = /<%= set.toString() %>/gim;
```

## Usage

```js
// Get an array of code points in a given Unicode category:
import uppercaseLetterCodePoints from '@unicode/unicode-1.1.5/General_Category/Uppercase_Letter/code-points.mjs';
// Get an array of symbols (strings) in a given Unicode category:
import uppercaseLetterSymbols from '@unicode/unicode-1.1.5/General_Category/Uppercase_Letter/symbols.mjs';
// Get a regular expression that matches any symbol in a given Unicode category:
import uppercaseLetterRegex from '@unicode/unicode-1.1.5/General_Category/Uppercase_Letter/regex.mjs';
// Get the canonical category a given code point belongs to:
// (Note: U+0041 is LATIN CAPITAL LETTER A)
import generalCategory from '@unicode/unicode-1.1.5/General_Category/index.mjs';
const category = generalCategory.get(0x41);
// Get an array of all code points with a given bidi class:
import otherNeutralCodePoints from '@unicode/unicode-1.1.5/Bidi_Class/Other_Neutral/code-points.mjs';
// Get a map from code points to bidi classes:
import bidiClassMap from '@unicode/unicode-1.1.5/Bidi_Class/index.mjs';
// Get the directionality of a given code point:
const directionality = bidiClassMap.get(0x41);

// …you get the idea.
```

Other than categories, data on Unicode properties, blocks, scripts, and script extensions is available too (for recent versions of the Unicode standard). Here’s the full list of the available data for v1.1.5:

```js
// `Names`:

import names from '@unicode/unicode-1.1.5/Names/index.mjs'; // Array of canonical names.


// `Binary_Property`:

import ASCIICodePoints from '@unicode/unicode-1.1.5/Binary_Property/ASCII/code-points.mjs';
import ASCIISymbols from '@unicode/unicode-1.1.5/Binary_Property/ASCII/symbols.mjs';
import ASCIIRegex from '@unicode/unicode-1.1.5/Binary_Property/ASCII/regex.mjs';

import AnyCodePoints from '@unicode/unicode-1.1.5/Binary_Property/Any/code-points.mjs';
import AnySymbols from '@unicode/unicode-1.1.5/Binary_Property/Any/symbols.mjs';
import AnyRegex from '@unicode/unicode-1.1.5/Binary_Property/Any/regex.mjs';

import AssignedCodePoints from '@unicode/unicode-1.1.5/Binary_Property/Assigned/code-points.mjs';
import AssignedSymbols from '@unicode/unicode-1.1.5/Binary_Property/Assigned/symbols.mjs';
import AssignedRegex from '@unicode/unicode-1.1.5/Binary_Property/Assigned/regex.mjs';

import Bidi_MirroredCodePoints from '@unicode/unicode-1.1.5/Binary_Property/Bidi_Mirrored/code-points.mjs';
import Bidi_MirroredSymbols from '@unicode/unicode-1.1.5/Binary_Property/Bidi_Mirrored/symbols.mjs';
import Bidi_MirroredRegex from '@unicode/unicode-1.1.5/Binary_Property/Bidi_Mirrored/regex.mjs';

// `General_Category`:

import General_Category from '@unicode/unicode-1.1.5/General_Category/index.mjs'; // Lookup map.

import Cased_LetterCodePoints from '@unicode/unicode-1.1.5/General_Category/Cased_Letter/code-points.mjs';
import Cased_LetterSymbols from '@unicode/unicode-1.1.5/General_Category/Cased_Letter/symbols.mjs';
import Cased_LetterRegex from '@unicode/unicode-1.1.5/General_Category/Cased_Letter/regex.mjs';

import Close_PunctuationCodePoints from '@unicode/unicode-1.1.5/General_Category/Close_Punctuation/code-points.mjs';
import Close_PunctuationSymbols from '@unicode/unicode-1.1.5/General_Category/Close_Punctuation/symbols.mjs';
import Close_PunctuationRegex from '@unicode/unicode-1.1.5/General_Category/Close_Punctuation/regex.mjs';

import ControlCodePoints from '@unicode/unicode-1.1.5/General_Category/Control/code-points.mjs';
import ControlSymbols from '@unicode/unicode-1.1.5/General_Category/Control/symbols.mjs';
import ControlRegex from '@unicode/unicode-1.1.5/General_Category/Control/regex.mjs';

import Currency_SymbolCodePoints from '@unicode/unicode-1.1.5/General_Category/Currency_Symbol/code-points.mjs';
import Currency_SymbolSymbols from '@unicode/unicode-1.1.5/General_Category/Currency_Symbol/symbols.mjs';
import Currency_SymbolRegex from '@unicode/unicode-1.1.5/General_Category/Currency_Symbol/regex.mjs';

import Dash_PunctuationCodePoints from '@unicode/unicode-1.1.5/General_Category/Dash_Punctuation/code-points.mjs';
import Dash_PunctuationSymbols from '@unicode/unicode-1.1.5/General_Category/Dash_Punctuation/symbols.mjs';
import Dash_PunctuationRegex from '@unicode/unicode-1.1.5/General_Category/Dash_Punctuation/regex.mjs';

import Decimal_NumberCodePoints from '@unicode/unicode-1.1.5/General_Category/Decimal_Number/code-points.mjs';
import Decimal_NumberSymbols from '@unicode/unicode-1.1.5/General_Category/Decimal_Number/symbols.mjs';
import Decimal_NumberRegex from '@unicode/unicode-1.1.5/General_Category/Decimal_Number/regex.mjs';

import LetterCodePoints from '@unicode/unicode-1.1.5/General_Category/Letter/code-points.mjs';
import LetterSymbols from '@unicode/unicode-1.1.5/General_Category/Letter/symbols.mjs';
import LetterRegex from '@unicode/unicode-1.1.5/General_Category/Letter/regex.mjs';

import Line_SeparatorCodePoints from '@unicode/unicode-1.1.5/General_Category/Line_Separator/code-points.mjs';
import Line_SeparatorSymbols from '@unicode/unicode-1.1.5/General_Category/Line_Separator/symbols.mjs';
import Line_SeparatorRegex from '@unicode/unicode-1.1.5/General_Category/Line_Separator/regex.mjs';

import Lowercase_LetterCodePoints from '@unicode/unicode-1.1.5/General_Category/Lowercase_Letter/code-points.mjs';
import Lowercase_LetterSymbols from '@unicode/unicode-1.1.5/General_Category/Lowercase_Letter/symbols.mjs';
import Lowercase_LetterRegex from '@unicode/unicode-1.1.5/General_Category/Lowercase_Letter/regex.mjs';

import MarkCodePoints from '@unicode/unicode-1.1.5/General_Category/Mark/code-points.mjs';
import MarkSymbols from '@unicode/unicode-1.1.5/General_Category/Mark/symbols.mjs';
import MarkRegex from '@unicode/unicode-1.1.5/General_Category/Mark/regex.mjs';

import Math_SymbolCodePoints from '@unicode/unicode-1.1.5/General_Category/Math_Symbol/code-points.mjs';
import Math_SymbolSymbols from '@unicode/unicode-1.1.5/General_Category/Math_Symbol/symbols.mjs';
import Math_SymbolRegex from '@unicode/unicode-1.1.5/General_Category/Math_Symbol/regex.mjs';

import Modifier_LetterCodePoints from '@unicode/unicode-1.1.5/General_Category/Modifier_Letter/code-points.mjs';
import Modifier_LetterSymbols from '@unicode/unicode-1.1.5/General_Category/Modifier_Letter/symbols.mjs';
import Modifier_LetterRegex from '@unicode/unicode-1.1.5/General_Category/Modifier_Letter/regex.mjs';

import Nonspacing_MarkCodePoints from '@unicode/unicode-1.1.5/General_Category/Nonspacing_Mark/code-points.mjs';
import Nonspacing_MarkSymbols from '@unicode/unicode-1.1.5/General_Category/Nonspacing_Mark/symbols.mjs';
import Nonspacing_MarkRegex from '@unicode/unicode-1.1.5/General_Category/Nonspacing_Mark/regex.mjs';

import NumberCodePoints from '@unicode/unicode-1.1.5/General_Category/Number/code-points.mjs';
import NumberSymbols from '@unicode/unicode-1.1.5/General_Category/Number/symbols.mjs';
import NumberRegex from '@unicode/unicode-1.1.5/General_Category/Number/regex.mjs';

import Open_PunctuationCodePoints from '@unicode/unicode-1.1.5/General_Category/Open_Punctuation/code-points.mjs';
import Open_PunctuationSymbols from '@unicode/unicode-1.1.5/General_Category/Open_Punctuation/symbols.mjs';
import Open_PunctuationRegex from '@unicode/unicode-1.1.5/General_Category/Open_Punctuation/regex.mjs';

import OtherCodePoints from '@unicode/unicode-1.1.5/General_Category/Other/code-points.mjs';
import OtherSymbols from '@unicode/unicode-1.1.5/General_Category/Other/symbols.mjs';
import OtherRegex from '@unicode/unicode-1.1.5/General_Category/Other/regex.mjs';

import Other_LetterCodePoints from '@unicode/unicode-1.1.5/General_Category/Other_Letter/code-points.mjs';
import Other_LetterSymbols from '@unicode/unicode-1.1.5/General_Category/Other_Letter/symbols.mjs';
import Other_LetterRegex from '@unicode/unicode-1.1.5/General_Category/Other_Letter/regex.mjs';

import Other_NumberCodePoints from '@unicode/unicode-1.1.5/General_Category/Other_Number/code-points.mjs';
import Other_NumberSymbols from '@unicode/unicode-1.1.5/General_Category/Other_Number/symbols.mjs';
import Other_NumberRegex from '@unicode/unicode-1.1.5/General_Category/Other_Number/regex.mjs';

import Other_PunctuationCodePoints from '@unicode/unicode-1.1.5/General_Category/Other_Punctuation/code-points.mjs';
import Other_PunctuationSymbols from '@unicode/unicode-1.1.5/General_Category/Other_Punctuation/symbols.mjs';
import Other_PunctuationRegex from '@unicode/unicode-1.1.5/General_Category/Other_Punctuation/regex.mjs';

import Other_SymbolCodePoints from '@unicode/unicode-1.1.5/General_Category/Other_Symbol/code-points.mjs';
import Other_SymbolSymbols from '@unicode/unicode-1.1.5/General_Category/Other_Symbol/symbols.mjs';
import Other_SymbolRegex from '@unicode/unicode-1.1.5/General_Category/Other_Symbol/regex.mjs';

import Paragraph_SeparatorCodePoints from '@unicode/unicode-1.1.5/General_Category/Paragraph_Separator/code-points.mjs';
import Paragraph_SeparatorSymbols from '@unicode/unicode-1.1.5/General_Category/Paragraph_Separator/symbols.mjs';
import Paragraph_SeparatorRegex from '@unicode/unicode-1.1.5/General_Category/Paragraph_Separator/regex.mjs';

import PunctuationCodePoints from '@unicode/unicode-1.1.5/General_Category/Punctuation/code-points.mjs';
import PunctuationSymbols from '@unicode/unicode-1.1.5/General_Category/Punctuation/symbols.mjs';
import PunctuationRegex from '@unicode/unicode-1.1.5/General_Category/Punctuation/regex.mjs';

import SeparatorCodePoints from '@unicode/unicode-1.1.5/General_Category/Separator/code-points.mjs';
import SeparatorSymbols from '@unicode/unicode-1.1.5/General_Category/Separator/symbols.mjs';
import SeparatorRegex from '@unicode/unicode-1.1.5/General_Category/Separator/regex.mjs';

import Space_SeparatorCodePoints from '@unicode/unicode-1.1.5/General_Category/Space_Separator/code-points.mjs';
import Space_SeparatorSymbols from '@unicode/unicode-1.1.5/General_Category/Space_Separator/symbols.mjs';
import Space_SeparatorRegex from '@unicode/unicode-1.1.5/General_Category/Space_Separator/regex.mjs';

import Spacing_MarkCodePoints from '@unicode/unicode-1.1.5/General_Category/Spacing_Mark/code-points.mjs';
import Spacing_MarkSymbols from '@unicode/unicode-1.1.5/General_Category/Spacing_Mark/symbols.mjs';
import Spacing_MarkRegex from '@unicode/unicode-1.1.5/General_Category/Spacing_Mark/regex.mjs';

import SymbolCodePoints from '@unicode/unicode-1.1.5/General_Category/Symbol/code-points.mjs';
import SymbolSymbols from '@unicode/unicode-1.1.5/General_Category/Symbol/symbols.mjs';
import SymbolRegex from '@unicode/unicode-1.1.5/General_Category/Symbol/regex.mjs';

import UnassignedCodePoints from '@unicode/unicode-1.1.5/General_Category/Unassigned/code-points.mjs';
import UnassignedSymbols from '@unicode/unicode-1.1.5/General_Category/Unassigned/symbols.mjs';
import UnassignedRegex from '@unicode/unicode-1.1.5/General_Category/Unassigned/regex.mjs';

import Uppercase_LetterCodePoints from '@unicode/unicode-1.1.5/General_Category/Uppercase_Letter/code-points.mjs';
import Uppercase_LetterSymbols from '@unicode/unicode-1.1.5/General_Category/Uppercase_Letter/symbols.mjs';
import Uppercase_LetterRegex from '@unicode/unicode-1.1.5/General_Category/Uppercase_Letter/regex.mjs';

// `Bidi_Class`:

import Bidi_Class from '@unicode/unicode-1.1.5/Bidi_Class/index.mjs'; // Lookup map.

import Arabic_NumberCodePoints from '@unicode/unicode-1.1.5/Bidi_Class/Arabic_Number/code-points.mjs';
import Arabic_NumberSymbols from '@unicode/unicode-1.1.5/Bidi_Class/Arabic_Number/symbols.mjs';
import Arabic_NumberRegex from '@unicode/unicode-1.1.5/Bidi_Class/Arabic_Number/regex.mjs';

import Common_SeparatorCodePoints from '@unicode/unicode-1.1.5/Bidi_Class/Common_Separator/code-points.mjs';
import Common_SeparatorSymbols from '@unicode/unicode-1.1.5/Bidi_Class/Common_Separator/symbols.mjs';
import Common_SeparatorRegex from '@unicode/unicode-1.1.5/Bidi_Class/Common_Separator/regex.mjs';

import European_NumberCodePoints from '@unicode/unicode-1.1.5/Bidi_Class/European_Number/code-points.mjs';
import European_NumberSymbols from '@unicode/unicode-1.1.5/Bidi_Class/European_Number/symbols.mjs';
import European_NumberRegex from '@unicode/unicode-1.1.5/Bidi_Class/European_Number/regex.mjs';

import European_SeparatorCodePoints from '@unicode/unicode-1.1.5/Bidi_Class/European_Separator/code-points.mjs';
import European_SeparatorSymbols from '@unicode/unicode-1.1.5/Bidi_Class/European_Separator/symbols.mjs';
import European_SeparatorRegex from '@unicode/unicode-1.1.5/Bidi_Class/European_Separator/regex.mjs';

import European_TerminatorCodePoints from '@unicode/unicode-1.1.5/Bidi_Class/European_Terminator/code-points.mjs';
import European_TerminatorSymbols from '@unicode/unicode-1.1.5/Bidi_Class/European_Terminator/symbols.mjs';
import European_TerminatorRegex from '@unicode/unicode-1.1.5/Bidi_Class/European_Terminator/regex.mjs';

import Left_To_RightCodePoints from '@unicode/unicode-1.1.5/Bidi_Class/Left_To_Right/code-points.mjs';
import Left_To_RightSymbols from '@unicode/unicode-1.1.5/Bidi_Class/Left_To_Right/symbols.mjs';
import Left_To_RightRegex from '@unicode/unicode-1.1.5/Bidi_Class/Left_To_Right/regex.mjs';

import Other_NeutralCodePoints from '@unicode/unicode-1.1.5/Bidi_Class/Other_Neutral/code-points.mjs';
import Other_NeutralSymbols from '@unicode/unicode-1.1.5/Bidi_Class/Other_Neutral/symbols.mjs';
import Other_NeutralRegex from '@unicode/unicode-1.1.5/Bidi_Class/Other_Neutral/regex.mjs';

import Paragraph_SeparatorCodePoints from '@unicode/unicode-1.1.5/Bidi_Class/Paragraph_Separator/code-points.mjs';
import Paragraph_SeparatorSymbols from '@unicode/unicode-1.1.5/Bidi_Class/Paragraph_Separator/symbols.mjs';
import Paragraph_SeparatorRegex from '@unicode/unicode-1.1.5/Bidi_Class/Paragraph_Separator/regex.mjs';

import Right_To_LeftCodePoints from '@unicode/unicode-1.1.5/Bidi_Class/Right_To_Left/code-points.mjs';
import Right_To_LeftSymbols from '@unicode/unicode-1.1.5/Bidi_Class/Right_To_Left/symbols.mjs';
import Right_To_LeftRegex from '@unicode/unicode-1.1.5/Bidi_Class/Right_To_Left/regex.mjs';

import White_SpaceCodePoints from '@unicode/unicode-1.1.5/Bidi_Class/White_Space/code-points.mjs';
import White_SpaceSymbols from '@unicode/unicode-1.1.5/Bidi_Class/White_Space/symbols.mjs';
import White_SpaceRegex from '@unicode/unicode-1.1.5/Bidi_Class/White_Space/regex.mjs';

// `Simple_Case_Mapping`:

import LowercaseCodePoints from '@unicode/unicode-1.1.5/Simple_Case_Mapping/Lowercase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import LowercaseSymbols from '@unicode/unicode-1.1.5/Simple_Case_Mapping/Lowercase/symbols.mjs'; // Lookup map from symbol to symbol(s).

import TitlecaseCodePoints from '@unicode/unicode-1.1.5/Simple_Case_Mapping/Titlecase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import TitlecaseSymbols from '@unicode/unicode-1.1.5/Simple_Case_Mapping/Titlecase/symbols.mjs'; // Lookup map from symbol to symbol(s).

import UppercaseCodePoints from '@unicode/unicode-1.1.5/Simple_Case_Mapping/Uppercase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import UppercaseSymbols from '@unicode/unicode-1.1.5/Simple_Case_Mapping/Uppercase/symbols.mjs'; // Lookup map from symbol to symbol(s).
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This module is available under the [MIT](https://mths.be/mit) license.
