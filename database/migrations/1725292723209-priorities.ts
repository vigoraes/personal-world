import { PriorityService } from "../../src/modules/priority/priority.service";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Priorities1725292723209 implements MigrationInterface {
    private priorityService: PriorityService;

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
              name: 'priorities',
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
                  name: 'color',
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

        await this.afterMigration(queryRunner);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('priorities');
    }

    private async afterMigration(queryRunner: QueryRunner): Promise<void> {
        // Custom logic after the migration
        await queryRunner.query(`INSERT INTO priorities (id, title, color) VALUES (1, 'Normal', '#56F000')`);
    }

}
