import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("typeorm_migrations", { schema: "public" })
export class TypeormMigrationsEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("bigint", { name: "timestamp" })
  timestamp: string;

  @Column("character varying", { name: "name" })
  name: string;
}
