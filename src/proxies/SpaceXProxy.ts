import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Ship } from '../data/Models';
import { ApolloQueryResult, ApolloError } from '@apollo/client';


export default class SpaceXProxy {

    client: ApolloClient<object>;

    constructor() {
        this.client = new ApolloClient({
            uri: 'https://api.spacex.land/graphql/',
            cache: new InMemoryCache(),
        });
    }

    getShips = async () => {

        return await this.client
            .query({
                query: gql`
                query shipsQuery {
                    ships {
                        id
                        image
                        name
                        type
                      }
                }
                `,
            })
            .then(function (response: ApolloQueryResult<{ships: Ship[]}>) {
                return response.data.ships;
            })
            .catch((error: ApolloError) => {
                console.log(JSON.stringify(error))
            });
    }

    getShip = async (shipId: string | string[] | undefined) => {
        return await this.client
            .query({
                variables: {
                    id: shipId,
                },
                query: gql`
                query shipQuery($id: ID!) {
                    ship(id: $id) {
                      image
                      name
                      type
                      weight_kg
                      year_built
                      class
                      missions {
                        flight
                        name
                      }
                      home_port
                    }
                  }
                  
                `,
            })
            .then(function (response: ApolloQueryResult<{ship: Ship}>) {
                return response.data.ship;
            })
            .catch((error: ApolloError) => {
                console.log(JSON.stringify(error))
            });
    }
}
