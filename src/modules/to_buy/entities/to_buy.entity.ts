import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PrioritiesEntity } from "../../priority/entities/priorities.entity";
import { TypesEntity } from "../../type/entities/types.entity";

@Entity("to_buy", { schema: "public" })
export class ToBuyEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "title", length: 50 })
  title: string;

  @Column("integer", { name: "quantity", default: () => "1" })
  quantity: number;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @Column("boolean", { name: "active", default: () => "true" })
  active: boolean;

  @Column("timestamp with time zone", { name: "deadline", nullable: true })
  deadline: Date | null;

  @Column("boolean", { name: "buyed", default: () => "false" })
  buyed: boolean;

  @Column("timestamp with time zone", { name: "buyed_at", nullable: true })
  buyedAt: Date | null;

  @Column("integer", { name: "created_by", nullable: true })
  createdBy: number | null;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("integer", { name: "updated_by", nullable: true })
  updatedBy: number | null;

  @Column("timestamp with time zone", {
    name: "updated_at",
    default: () => "now()",
  })
  updatedAt: Date;

  @ManyToOne(
    () => PrioritiesEntity,
    (prioritiesEntity) => prioritiesEntity.toBuys
  )
  @JoinColumn([{ name: "priority", referencedColumnName: "id" }])
  priority: PrioritiesEntity;

  @ManyToOne(() => TypesEntity, (typesEntity) => typesEntity.toBuys)
  @JoinColumn([{ name: "type", referencedColumnName: "id" }])
  type: TypesEntity;
}
