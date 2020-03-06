import {
    Field,
    InputType,
    Int
} from "type-graphql";

@InputType()
export class ProductInput {
    @Field(() => Int, {nullable: true})
    id?: number;

    @Field()
    product_name: string;

    @Field()
    product_price: number;
}
