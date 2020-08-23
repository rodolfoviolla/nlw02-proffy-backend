import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class CreateUserEmailPassword1598197445201
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('users', [
      new TableColumn({
        name: 'email',
        type: 'varchar',
        default: `'default@default.com'`,
      }),
      new TableColumn({
        name: 'password',
        type: 'varchar',
        default: `'default'`,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'password');
    await queryRunner.dropColumn('users', 'email');
  }
}
