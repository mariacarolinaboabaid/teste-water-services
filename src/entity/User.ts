import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { Post } from "./Post";

//TODO Crie a entidade de User
@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string = uuidv4();

  @Column("varchar", { length: 100 })
  firstName: string;

  @Column("varchar", { length: 100 })
  lastName: string;

  @Column("varchar", { length: 100 })
  email: string;

  @OneToMany(() => Post, post => post.user)  
  posts!: Post[];  

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}