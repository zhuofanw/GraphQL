const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString} = require('graphql');

const BookType = GraphQLObjectType({
    name:"Book",
    field: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre:{type: GraphQLString}
    })
})