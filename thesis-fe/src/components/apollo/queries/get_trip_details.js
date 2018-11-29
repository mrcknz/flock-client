import gql from "graphql-tag";

const GET_MY_TRIPS = gql` query GET_TRIP_DETAILS ($tripID: ID!)
  {
    trip (id: $tripID) {
      name,
      participants {
        email,
        lastName,
      },
      destination {
        isDictated
        chosenDestination {
          name
        },
      },
      budget {
        isDictated,
        chosenBudget {
          value
        },
      }
    }
  }
`;

export default GET_MY_TRIPS;