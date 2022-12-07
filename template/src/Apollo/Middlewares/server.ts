import { HttpLink } from '@apollo/client';
import { GRAPHQL_ENDPOINT } from '@env';

export const serverLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
});
