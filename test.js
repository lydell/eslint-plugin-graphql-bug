const NamedOperationsTest = gql`
  query {
    something
  }
`

const RequiredFieldsTest = gql`
  query Greetings {
    greetings {
      hello
    }
  }
`

const CapitalizedTypeNameTest = gql`
  query Union {
    someUnion {
      ... on SomeType {
        someField
      }
    }
  }
`

const TemplateStringsTest = gql`
  query Missing {
    missing
  }
`
