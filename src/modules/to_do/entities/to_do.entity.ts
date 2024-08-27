import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("to_do", { schema: "public" })
export class ToDoEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "title", length: 50 })
  title: string;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @Column("integer", { name: "priority", default: () => "1" })
  priority: number;

  @Column("date", { name: "deadline", nullable: true })
  deadline: string | null;

  @Column("integer", { name: "created_by", nullable: true })
  createdBy: number | null;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("integer", { name: "updated_by", nullable: true })
  updatedBy: number | null;

  @Column("timestamp without time zone", {
    name: "updated_at",
    default: () => "now()",
  })
  updatedAt: Date;
}
