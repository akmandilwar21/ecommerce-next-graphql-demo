import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://store-vi5ykv9t.saleor.cloud/graphql/",
    cache: new InMemoryCache(),
});

export default client;