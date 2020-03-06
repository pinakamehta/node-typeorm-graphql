import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {
    Field,
    Int,
    ObjectType
} from "type-graphql";

@Entity("products") //products will be your table name
@ObjectType()
export class Product {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Column()
    @Field()
    product_name: string;

    @Column()
    @Field()
    product_price: number;
}
