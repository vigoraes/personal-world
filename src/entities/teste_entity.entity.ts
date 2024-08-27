import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("teste_entity_pk", ["id"], { unique: true })
@Entity("teste_entity", { schema: "public" })
export class TesteEntityEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "teste" })
  teste: string;
}
