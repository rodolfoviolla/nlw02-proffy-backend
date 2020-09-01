import { MigrationInterface, QueryRunner } from 'typeorm';

export default class DropNotNullUsersFields1598979784638
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE users ALTER COLUMN avatar DROP NOT NULL;',
    );

    await queryRunner.query(
      'ALTER TABLE users ALTER COLUMN whatsapp DROP NOT NULL;',
    );

    await queryRunner.query(
      'ALTER TABLE users ALTER COLUMN bio DROP NOT NULL;',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE users ALTER COLUMN bio SET NOT NULL;');

    await queryRunner.query(
      'ALTER TABLE users ALTER COLUMN whatsapp SET NOT NULL;',
    );

    await queryRunner.query(
      'ALTER TABLE users ALTER COLUMN avatar SET NOT NULL;',
    );
  }
}
