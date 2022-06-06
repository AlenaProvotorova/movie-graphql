import { createServer } from '@graphql-yoga/node'
import {join} from 'path'
import {readFileSync} from 'fs'
import resolvers from './graphql/resolvers.js'

const typeDefs = readFileSync(join(process.cwd(), 'schema.graphql'), {
    encoding: 'utf-8'
})

const server = new createServer({
    schema: {
        typeDefs,
        resolvers
    }
})

server.start(() => console.log('=====success=====', ))