import {
    Arg,
    Int,
    Mutation,
    Query,
    Resolver
} from "type-graphql";
import {Product} from "../../entity/Product";
import {getRepository} from "typeorm";
import {ProductInput} from "../inputs/product-input";

@Resolver()
export class ProductResolver {
    @Query(() => [Product])
    async products(): Promise<Product[]> {
        return await getRepository(Product).find();
    }

    @Query(() => Product)
    async product(@Arg('product_id', () => Int) product_id: number): Promise<Product> {
        return await getRepository(Product).findOne(product_id);
    }

    @Mutation(() => Product)
    async addProduct(@Arg('productInput') productInput: ProductInput): Promise<Product> {
        let productObj = new Product();

        Object.assign(productObj, productInput);
        productObj = await getRepository(Product).save(productObj);
        return productObj;
    }

    @Mutation(() => Product)
    async updateProduct(@Arg('productInput') productInput: ProductInput): Promise<Product> {
        let productObj = new Product();

        Object.assign(productObj, productInput);
        productObj = await getRepository(Product).save(productObj);
        return productObj;
    }

    @Mutation(() => Boolean)
    async deleteProduct(@Arg('product_id', () => Int) product_id: number): Promise<boolean> {
        const productObj = await getRepository(Product).findOne(product_id);

        if (!productObj) {
            return false;
        }

        getRepository(Product).remove(productObj);

        return true;
    }
}
