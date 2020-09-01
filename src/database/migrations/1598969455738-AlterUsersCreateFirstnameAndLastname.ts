import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterUsersCreateFirstnameAndLastname1598969455738
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('users', 'name', 'firstname');

    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'lastname',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'lastname');

    await queryRunner.renameColumn('users', 'firstname', 'name');
  }
}
