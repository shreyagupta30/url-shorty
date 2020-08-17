import graphene

import  shortner.schema

class Query(shortner.schema.Query, graphene.ObjectType):
    pass

class Mutation(shortner.schema.Mutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)