import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ToBuy1724733676322 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'to_buy',
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
                    name: 'type',
                    type: 'int',
                    default: 1
                },
                {
                    name: 'quantity',
                    type: 'int',
                    default: 1
                    
                },
                {
                  name: 'description',
                  type: 'varchar',
                  isNullable: true,
                },
                {
                  name: 'active',
                  type: 'boolean',
                  default: true,
                },
                {
                  name: 'priority',
                  type: 'int',
                  default: 1,
                },
                {
                  name: 'deadline',
                  type: 'timestamptz',
                  isNullable: true,
                },
                {
                  name: 'buyed',
                  type: 'boolean',
                  default: false,
                },
                {
                  name: 'buyed_at',
                  type: 'timestamptz',
                  isNullable: true,
                },
                {
                  name: "created_by",
                  type: "int",
                  isNullable: true
                },
                {
                    name: 'created_at',
                    type: 'timestamptz',
                    default: 'now()'
                },
                {
                    name: "updated_by",
                    type: "int",
                    isNullable: true
                },
                {
                    name: 'updated_at',
                    type: 'timestamptz',
                    default: 'now()'
                },
              ],
              foreignKeys: [
                {
                  columnNames: ['type'],
                  referencedTableName: 'types',
                  referencedColumnNames: ['id'],
                },
                {
                    columnNames: ['priority'],
                    referencedTableName: 'priorities',
                    referencedColumnNames: ['id'],
                  },
              ]
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('to_buy');
    }

}
