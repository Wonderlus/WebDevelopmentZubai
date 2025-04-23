import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column('varchar', { length: 40 })
  readonly login: string;

  @Column('text')
  readonly first: string;

  @Column('text', { nullable: true })
  readonly last?: string;

  @Column('text')
  readonly password?: string;
}
