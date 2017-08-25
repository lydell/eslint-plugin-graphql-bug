module.exports = {
  env: {
    es6: true,
  },
  plugins: [
    "graphql",
  ],
  // Enable one rule at a time below. Then run `npm test` to try it out.
  rules: {
    // Should report an error, but doesn't.
    // "graphql/named-operations": "error",

    // Should report an error, but doesn't.
    // "graphql/named-operations": ["error"],

    // Does report error.
    // "graphql/named-operations": ["error", {}],



    // Should report config validation error, but nothing happens.
    // "graphql/required-fields": "error",

    // Should report config validation error, but nothing happens.
    // "graphql/required-fields": ["error"],

    // Should report config validation error, but crashes:
    // TypeError: Cannot read property 'forEach' of undefined
    // "graphql/required-fields": ["error", {}],

    // Does report error.
    // "graphql/required-fields": ["error", {requiredFields: ["id"]}],



    // Should report an error, but doesn't.
    // "graphql/capitalized-type-name": "error",

    // Should report an error, but doesn't.
    // "graphql/capitalized-type-name": ["error"],

    // Should report an error, but prints validation error:
    // Configuration for rule "graphql/capitalized-type-name" is invalid:
    //   Value "[object Object]" should have required property '.schemaJson'.
    //   Value "[object Object]" should have required property '.schemaJsonFilepath'.
    //   Value "[object Object]" should have required property '.schemaString'.
    //   Value "[object Object]" should match exactly one schema in oneOf.
    // "graphql/capitalized-type-name": ["error", {}],



    // Does nothing.
    // "graphql/template-strings": "error",

    // Does nothing.
    // "graphql/template-strings": ["error"],

    // Does report error.
    // "graphql/template-strings": ["error", {}],
  }
}
