import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column('text')
  readonly title: string;

  @Column('text')
  readonly description: string;

  @Column('text')
  readonly img: string;

  @Column('numeric')
  readonly price: number;
}
