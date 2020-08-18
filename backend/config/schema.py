import graphene

import backend.shortner.schema

class Query(backend.shortner.schema.Query, graphene.ObjectType):
    pass

class Mutation(backend.shortner.schema.Mutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)