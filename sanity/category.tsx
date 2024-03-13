import {defineType , defineField} from "sanity"; // we use these for type safe , type inteligence

export const category = defineType (
    { 
    name: "category",
    title: "Products Category",
    type: "document",
    fields:
    [
       defineField ({
        name: "name",
        title: "category Name",
        type: "string"
        }),
    ]
}
)