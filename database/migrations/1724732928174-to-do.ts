import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class ToDo1724732928174 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'to_do',
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
                {
                  name: 'priority',
                  type: 'int',
                  default: 1,
                },
                {
                  name: 'deadline',
                  type: 'date',
                  isNullable: true,
                },
                {
                  name: "created_by",
                  type: "int",
                  isNullable: true
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: "updated_by",
                    type: "int",
                    isNullable: true
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                },
              ],
        //       foreignKeys: [
        //         {
        //           columnNames: ['priority'],
        //           referencedTableName: 'priorities',
        //           referencedColumnNames: ['id'],
        //           // columnNames: ,
        // //   referencedColumnNames: ["id"],
        // //   referencedTableName: "priorities"
        //         }
        //       ]
            }),
            true,
          );

        // await queryRunner.createForeignKey(`to_do`, new TableForeignKey({
        //   columnNames: ["priority"],
        //   referencedColumnNames: ["id"],
        //   referencedTableName: "priorities"
        // }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('to_do');
    }

}
