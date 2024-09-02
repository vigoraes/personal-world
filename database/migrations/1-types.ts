import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Types1725238379990 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'types',
              columns: [
                {
                  name: 'id',
                  type: 'int',
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: 'increment',
                },
                // {
                //     name: 'uuid',
                //     type: 'uuid',
                //     isPrimary: true,
                //     default: 'uuid_generate_v4()',
                //     isGenerated: true,
                //     generationStrategy: 'uuid',
                // },
                {
                  name: 'title',
                  type: 'varchar',
                  length: '50'
                },
                {
                  name: 'description',
                  type: 'varchar',
                  isNullable: true,
                },
                // {
                //   name: "created_by",
                //   type: "int",
                //   isNullable: true
                // },
                // {
                //     name: 'created_at',
                //     type: 'timestamptz',
                //     default: 'now()'
                // },
                // {
                //     name: "updated_by",
                //     type: "int",
                //     isNullable: true
                // },
                // {
                //     name: 'updated_at',
                //     type: 'timestamptz',
                //     default: 'now()'
                // },
              ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('types');
    }

}
