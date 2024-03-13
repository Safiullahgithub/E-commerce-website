import { type SchemaTypeDefinition } from 'sanity'
import { Product } from "./Product"
import { category } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    Product , category
  ],
}
