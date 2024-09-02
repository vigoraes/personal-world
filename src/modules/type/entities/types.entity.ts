import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ToBuyEntity } from "../../to_buy/entities/to_buy.entity";
import { ToDoEntity } from "../../to_do/entities/to_do.entity";

@Entity("types", { schema: "public" })
export class TypesEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "title", length: 50 })
  title: string;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @OneToMany(() => ToBuyEntity, (toBuyEntity) => toBuyEntity.type)
  toBuys: ToBuyEntity[];

  @OneToMany(() => ToDoEntity, (toDoEntity) => toDoEntity.type)
  toDos: ToDoEntity[];
}
