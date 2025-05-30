import type { LanguageRegistration } from "shiki";

// taken from https://github.com/styled-components/vscode-styled-components/tree/main/syntaxes
const language: LanguageRegistration = {
  fileTypes: ["js", "jsx", "ts", "tsx", "vue", "svelte"],
  injectionSelector: "L:source -comment -string",
  injectTo: [
    "source.js",
    "source.ts",
    "source.jsx",
    "source.js.jsx",
    "source.tsx",
    "source.vue",
    "source.svelte",
  ],
  repository: {},
  scopeName: "styled",
  name: "styled",
  patterns: [
    {
      contentName: "source.css.scss",
      begin:
        "([\\s\\S][sS][tT][yY][lL][eE][dD](?:<.+>(?=\\())?(?:\\.[_$[:alpha:]][_$[:alnum:]]*|\\s*\\(['\"][_$[:alpha:]][_$[:alnum:]]*['\"]\\)|\\s*\\((.+)\\))*(?:\\s*<.+>)?\\(?)\\s*(\\([\\{\\}\\w,\\:\\s]+?\\)\\s*=>\\s*)?(`)",
      beginCaptures: {
        "1": {
          patterns: [
            {
              include: "source.ts#expression",
            },
          ],
        },
        "2": {
          patterns: [
            {
              include: "source.ts#expression",
            },
          ],
        },
        "3": {
          patterns: [
            {
              include: "source.ts#expression",
            },
          ],
        },
        "4": {
          name: "punctuation.definition.string.template.begin.js string.template.js",
        },
      },
      end: "`",
      endCaptures: {
        "0": {
          name: "punctuation.definition.string.template.end.js string.template.js",
        },
      },
      patterns: [
        {
          include: "source.css.styled",
        },
      ],
    },
    {
      contentName: "source.css.scss",
      begin:
        "(css|keyframes|injectGlobal|createGlobalStyles?|stylesheet)(<.+>)?(`)",
      beginCaptures: {
        "1": {
          name: "entity.name.function.tagged-template.js",
        },
        "2": {
          patterns: [
            {
              include: "source.ts#type-parameters",
            },
          ],
        },
        "3": {
          name: "punctuation.definition.string.template.begin.js string.template.js",
        },
      },
      end: "`",
      endCaptures: {
        "0": {
          name: "punctuation.definition.string.template.end.js string.template.js",
        },
      },
      patterns: [
        {
          include: "source.css.styled",
        },
      ],
    },
    {
      contentName: "source.css.scss",
      begin: "(?:}>|\\)\\))(`)",
      beginCaptures: {
        "1": {
          name: "punctuation.definition.string.template.begin.js string.template.js",
        },
      },
      end: "`",
      endCaptures: {
        "0": {
          name: "punctuation.definition.string.template.end.js string.template.js",
        },
      },
      patterns: [
        {
          include: "source.css.styled",
        },
      ],
    },
    {
      contentName: "source.css.scss",
      begin: "(.+)(\\.)(extend)(`)",
      beginCaptures: {
        "1": {
          patterns: [
            {
              include: "source.ts#var-expr",
            },
            {
              include: "source.ts#object-literal",
            },
            {
              include: "source.ts#object-member",
            },
          ],
        },
        "2": {
          name: "punctuation.accessor.js",
        },
        "3": {
          name: "entity.name.function.tagged-template.js variable.other.property.js",
        },
        "4": {
          name: "punctuation.definition.string.template.begin.js string.template.js",
        },
      },
      end: "`",
      endCaptures: {
        "0": {
          name: "punctuation.definition.string.template.end.js string.template.js",
        },
      },
      patterns: [
        {
          include: "source.css.styled",
        },
      ],
    },
    {
      contentName: "source.css.scss",
      begin:
        "([_$[:alpha:]][_$[:alnum:]]*\\.withComponent\\((?:['\"][_$[:alpha:]][_$[:alnum:]]*['\"]|[_$[:alpha:]][_$\\.[:alnum:]]*)\\))\\s*(?:(\\.)(extend))?(`)",
      beginCaptures: {
        "1": {
          patterns: [
            {
              include: "source.ts#expression",
            },
          ],
        },
        "2": {
          name: "punctuation.accessor.js",
        },
        "3": {
          name: "entity.name.function.tagged-template.js variable.other.property.js",
        },
        "4": {
          name: "punctuation.definition.string.template.begin.js string.template.js",
        },
      },
      end: "`",
      endCaptures: {
        "0": {
          name: "punctuation.definition.string.template.end.js string.template.js",
        },
      },
      patterns: [
        {
          include: "source.css.styled",
        },
      ],
    },
    {
      contentName: "source.css.scss",
      begin:
        "([mM][eE][dD][iI][aA]\\.[[:alpha:]][[:alnum:]]*(?:\\(.*?\\))?)\\s*(`)",
      beginCaptures: {
        "1": {
          patterns: [
            {
              include: "source.ts#expression",
            },
          ],
        },
        "2": {
          name: "punctuation.definition.string.template.begin.js string.template.js",
        },
      },
      end: "`",
      endCaptures: {
        "0": {
          name: "punctuation.definition.string.template.end.js string.template.js",
        },
      },
      patterns: [
        {
          include: "source.css.styled",
        },
      ],
    },
    {
      begin:
        "(?:([\\s\\S][sS][tT][yY][lL][eE][dD](?:<[_$[:alpha:]][_$[:alnum:]]+>)?(?:\\.[_$[:alpha:]][_$[:alnum:]]*|\\(['\"][_$[:alpha:]][_$[:alnum:]]*['\"]\\)|\\([_$[:alpha:]][_$\\.[:alnum:]]*(?:\\s+as\\s+.*?)?\\)))|(\\.)(extend))(?=\\.(attrs|withConfig)\\s*(?:<.+>)?\\s*\\()",
      beginCaptures: {
        "1": {
          patterns: [
            {
              include: "source.ts#expression",
            },
          ],
        },
        "2": {
          name: "punctuation.accessor.js",
        },
        "3": {
          name: "entity.name.function.tagged-template.js",
        },
      },
      end: "(?<!\\G)(?<=`)",
      patterns: [
        {
          contentName: "source.css.scss",
          begin: "`",
          beginCaptures: {
            "0": {
              name: "punctuation.definition.string.template.begin.js string.template.js",
            },
          },
          end: "`",
          endCaptures: {
            "0": {
              name: "punctuation.definition.string.template.begin.js string.template.js",
            },
          },
          patterns: [
            {
              include: "source.css.styled",
            },
          ],
        },
        {
          include: "source.ts#expression",
        },
      ],
    },
    {
      contentName: "source.css.scss",
      begin: "\\s*(css)(=)(\\{)(`)",
      beginCaptures: {
        "1": {
          name: "entity.other.attribute-name.jsx",
        },
        "2": {
          name: "keyword.operator.assignment.jsx",
        },
        "3": {
          name: "punctuation.section.embedded.begin.jsx",
        },
        "4": {
          name: "punctuation.definition.string.template.begin.jsx string.template.js",
        },
      },
      end: "(`)(\\})\\s*",
      endCaptures: {
        "1": {
          name: "punctuation.definition.string.template.end.jsx string.template.js",
        },
        "2": {
          name: "punctuation.section.embedded.end.jsx",
        },
      },
      patterns: [
        {
          include: "source.css.styled",
        },
      ],
    },
    {
      contentName: "source.css.scss",
      begin: "(.+)?(\\.)?(keyframes)(`)",
      beginCaptures: {
        "1": {
          patterns: [
            {
              include: "source.ts#var-expr",
            },
            {
              include: "source.ts#object-literal",
            },
            {
              include: "source.ts#object-member",
            },
          ],
        },
        "2": {
          name: "punctuation.accessor.js",
        },
        "3": {
          name: "entity.name.function.tagged-template.js variable.other.property.js",
        },
        "4": {
          name: "punctuation.definition.string.template.begin.js string.template.js",
        },
      },
      end: "`",
      endCaptures: {
        "0": {
          name: "punctuation.definition.string.template.end.js string.template.js",
        },
      },
      patterns: [
        {
          captures: {
            "1": {
              name: "entity.other.attribute-name.scss",
            },
            "2": {
              name: "entity.other.attribute-name.scss",
            },
          },
          match:
            "(?xi)\n(?<![\\w-]) (from|to) (?![\\w-])         # Keywords for 0% | 100%\n|\n([-+]?(?:\\d+(?:\\.\\d+)?|\\.\\d+)%)     # Percentile value",
        },
        {
          include: "source.css.styled#interpolation",
        },
        {
          include: "source.css.styled#property_list",
        },
        {
          include: "source.css.styled#rules",
        },
      ],
    },
    {
      contentName: "source.css.scss",
      begin: "(?<=<style\\s(?:jsx|jsx\\s+global|global\\s+jsx)+\\>\\{)`",
      beginCaptures: {
        "0": {
          name: "punctuation.definition.string.template.begin.js string.template.js",
        },
      },
      end: "`(?=\\}\\<\\/style\\>)",
      endCaptures: {
        "0": {
          name: "punctuation.definition.string.template.end.js string.template.js",
        },
      },
      patterns: [
        {
          include: "source.css.styled",
        },
      ],
    },
  ],
};

export default language;
