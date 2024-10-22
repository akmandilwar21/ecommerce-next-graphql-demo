import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query {
    products(first: 30, channel: "default-channel") {
      edges {
        node {
          id
          name
          description
          thumbnail {
            url
          }
          rating
          isAvailableForPurchase
          pricing {
            priceRange {
              stop {
                currency
                net {
                  amount
                  currency
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query MyQuery($id: ID!) {
    product(id: $id, channel: "default-channel") {
      channel
      created
      description
      images {
        url
      }
      name
      rating
      id
      category {
        name
        description
      }
      isAvailableForPurchase
      pricing {
        priceRange {
          start {
            currency
            gross {
              amount
              currency
            }
          }
        }
        discount {
          currency
          gross {
            amount
            currency
          }
        }
      }
      weight {
        unit
        value
      }
      thumbnail {
        url
        alt
      }
    }
  }
`;
