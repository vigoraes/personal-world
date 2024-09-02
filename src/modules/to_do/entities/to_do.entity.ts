import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PrioritiesEntity } from "../../priority/entities/priorities.entity";
import { TypesEntity } from "../../type/entities/types.entity";

@Entity("to_do", { schema: "public" })
export class ToDoEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "title", length: 50 })
  title: string;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @Column("boolean", { name: "active", default: () => "true" })
  active: boolean;

  @Column("timestamp without time zone", { name: "deadline", nullable: true })
  deadline: Date | null;

  @Column("boolean", { name: "finished", default: () => "false" })
  finished: boolean;

  @Column("timestamp without time zone", {
    name: "finished_at",
    nullable: true,
  })
  finishedAt: Date | null;

  @ManyToOne(
    () => PrioritiesEntity,
    (prioritiesEntity) => prioritiesEntity.toDos
  )
  @JoinColumn([{ name: "priority", referencedColumnName: "id" }])
  priority: PrioritiesEntity;

  @ManyToOne(() => TypesEntity, (typesEntity) => typesEntity.toDos)
  @JoinColumn([{ name: "type", referencedColumnName: "id" }])
  type: TypesEntity;
}
