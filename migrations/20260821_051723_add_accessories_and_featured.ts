import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_products_category" ADD VALUE 'accessories';
  ALTER TABLE "products" DROP CONSTRAINT "products_image_id_media_id_fk";
  
  DROP INDEX "products_image_idx";
  ALTER TABLE "products" ADD COLUMN "image" varchar;
  ALTER TABLE "products" ADD COLUMN "featured" boolean DEFAULT false;
  ALTER TABLE "products" DROP COLUMN "image_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "products" ALTER COLUMN "category" SET DATA TYPE text;
  DROP TYPE "public"."enum_products_category";
  CREATE TYPE "public"."enum_products_category" AS ENUM('solar', 'security-systems', 'it-hardware');
  ALTER TABLE "products" ALTER COLUMN "category" SET DATA TYPE "public"."enum_products_category" USING "category"::"public"."enum_products_category";
  ALTER TABLE "products" ADD COLUMN "image_id" integer;
  ALTER TABLE "products" ADD CONSTRAINT "products_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "products_image_idx" ON "products" USING btree ("image_id");
  ALTER TABLE "products" DROP COLUMN "image";
  ALTER TABLE "products" DROP COLUMN "featured";`)
}
