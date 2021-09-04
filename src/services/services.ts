import { ApolloClient, InMemoryCache } from "@apollo/client";

export default new ApolloClient({
    uri: "https://harura-fliper-test.herokuapp.com/v1/graphql",
    headers: {
        "X-Hasura-Admin-Secret": process.env.HASURA_ADMIN_SECRET,
    },
    cache: new InMemoryCache(),
});
