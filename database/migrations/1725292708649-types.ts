import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { TypeService } from '../../src/modules/type/type.service';


export class Types1725292708649 implements MigrationInterface {
    private typesService: TypeService;

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
                    {
                    name: 'icon',
                    type: 'varchar',
                    length: '10',
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
        await queryRunner.dropTable('types');
    }

    private async afterMigration(queryRunner: QueryRunner): Promise<void> {
        // Custom logic after the migration
        await queryRunner.query(`INSERT INTO types (id, title) VALUES (1, 'Outros')`);
    }

}
