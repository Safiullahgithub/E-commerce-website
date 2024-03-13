
//schema means just a structure of our database , what will bw the structure , just like model
export const Product = {
    name: "Product",
    type: "document", //means our schema type will be a document 
    title: "Products", //this is just a label for the products while name is the actual name through which i will fetch the data
    //   fields: [ //fields in our schema document
    //         {
    //             name: "title",
    //             title: "product title",
    //             type: "string"
    //         },
    //         {
    //             name: "price",
    //             title: "product price",
    //             type: "number"
    //         },
    //         {
    //             name: "description",
    //             title: "product description",
    //             type: "string"
    //         },
    //         {
    //             name: "image",
    //             title: "product image",
    //             type: "image"
    //         },
    //         {
    //             name:"category",
    //             title: "product category",
    //             type: "reference",
    //             to: [
    //                     {
    //                         type: "category"
    //                     },
    //                 ]
    //         }

    //   ] 

    fields: [
        {
            name: 'productName',
            type: 'string',
            title: 'ProductName'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'productName',
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input: any) => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: 'description',
            type: 'array',
            title: 'Description',
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: 'image',
            type: 'array',
            title: 'Image',
            of: [
                {
                    type: 'image',
                    fields: [
                        {
                            name: "alt",
                            type: "text",
                            title: "Alternative text",
                        }
                    ]
                }
            ]
        },
        {
            name: 'productTypes',
            type: 'array',
            title: 'ProductType',
            of: [{ type: 'string' }]
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'size',
            type: 'array',
            title: 'Sizes',
            of: [{ type: 'string' }]
        },
        {
            name: 'quantity',
            type: 'number',
            title: 'Quantity'
        },
        {
            name: "category",
            title: "product category",
            type: "reference",
            to: [
                {
                    type: "category"
                },
            ]
        }
    ]
}
