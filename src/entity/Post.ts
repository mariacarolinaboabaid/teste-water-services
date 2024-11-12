import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from './User';  // Importando a entidade User
import { v4 as uuidv4 } from 'uuid';

//TODO Crie a entidade de Post
@Entity()
export class Post {
  @PrimaryGeneratedColumn("uuid")
  id: string = uuidv4();

  @Column("varchar", { length: 100 })
  title: string;

  @Column("varchar", { length: 255 })
  description: string;

  @ManyToOne(() => User, user => user.posts)
  @JoinColumn({ name: "userId" })
  user: User; 

  constructor(title: string, description: string, user: User) {
    this.title = title;
    this.description = description;
    this.user = user;  
  }
}