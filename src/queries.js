// if using apollo-boost
import { gql } from "apollo-boost";

// query
export const GET_PRODUCTS = gql`
query Products {
  products {
    code
    price
  }
}
`;