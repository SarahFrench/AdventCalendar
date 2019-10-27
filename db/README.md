## 20191027 - Attached PG to Heroku app

Picked basic hobbyist plan (free), attached to advent calendar project

Then ran this in terminal:

```
➜  advent-calendar git:(master) ✗ heroku run rails db:migrate      
Running rails db:migrate on ⬢ evening-badlands-40503... up, run.2931 (Free)
D, [2019-10-27T15:51:40.395404 #4] DEBUG -- :    (16.4ms)  CREATE TABLE "schema_migrations" ("version" character varying NOT NULL PRIMARY KEY)
D, [2019-10-27T15:51:40.411115 #4] DEBUG -- :    (11.9ms)  CREATE TABLE "ar_internal_metadata" ("key" character varying NOT NULL PRIMARY KEY, "value" character varying, "created_at" timestamp NOT NULL, "updated_at" timestamp NOT NULL)
D, [2019-10-27T15:51:40.413924 #4] DEBUG -- :    (1.2ms)  SELECT pg_try_advisory_lock(5001499553977906140)
D, [2019-10-27T15:51:40.432113 #4] DEBUG -- :    (1.3ms)  SELECT "schema_migrations"."version" FROM "schema_migrations" ORDER BY "schema_migrations"."version" ASC
I, [2019-10-27T15:51:40.435105 #4]  INFO -- : Migrating to CreateClickScores (20191027104458)
D, [2019-10-27T15:51:40.438681 #4] DEBUG -- :    (1.1ms)  BEGIN
== 20191027104458 CreateClickScores: migrating ================================
-- create_table(:click_scores)
D, [2019-10-27T15:51:40.444455 #4] DEBUG -- :    (5.1ms)  CREATE TABLE "click_scores" ("id" bigserial primary key, "created_at" timestamp NOT NULL, "updated_at" timestamp NOT NULL)
   -> 0.0056s
== 20191027104458 CreateClickScores: migrated (0.0058s) =======================

D, [2019-10-27T15:51:40.450344 #4] DEBUG -- :   ActiveRecord::SchemaMigration Create (2.1ms)  INSERT INTO "schema_migrations" ("version") VALUES ($1) RETURNING "version"  [["version", "20191027104458"]]
D, [2019-10-27T15:51:40.452923 #4] DEBUG -- :    (2.3ms)  COMMIT
I, [2019-10-27T15:51:40.453032 #4]  INFO -- : Migrating to AddColumnsToClickScores (20191027104936)
D, [2019-10-27T15:51:40.454977 #4] DEBUG -- :    (1.0ms)  BEGIN
== 20191027104936 AddColumnsToClickScores: migrating ==========================
-- add_column(:click_scores, :score, :integer)
D, [2019-10-27T15:51:40.456761 #4] DEBUG -- :    (1.3ms)  ALTER TABLE "click_scores" ADD "score" integer
   -> 0.0016s
-- add_column(:click_scores, :name, :string)
D, [2019-10-27T15:51:40.460988 #4] DEBUG -- :    (3.9ms)  ALTER TABLE "click_scores" ADD "name" character varying
   -> 0.0041s
== 20191027104936 AddColumnsToClickScores: migrated (0.0060s) =================

D, [2019-10-27T15:51:40.462927 #4] DEBUG -- :   ActiveRecord::SchemaMigration Create (1.1ms)  INSERT INTO "schema_migrations" ("version") VALUES ($1) RETURNING "version"  [["version", "20191027104936"]]
D, [2019-10-27T15:51:40.465298 #4] DEBUG -- :    (2.1ms)  COMMIT
D, [2019-10-27T15:51:40.473495 #4] DEBUG -- :   ActiveRecord::InternalMetadata Load (1.2ms)  SELECT  "ar_internal_metadata".* FROM "ar_internal_metadata" WHERE "ar_internal_metadata"."key" = $1 LIMIT $2  [["key", "environment"], ["LIMIT", 1]]
D, [2019-10-27T15:51:40.480740 #4] DEBUG -- :    (1.0ms)  BEGIN
D, [2019-10-27T15:51:40.482899 #4] DEBUG -- :   ActiveRecord::InternalMetadata Create (1.2ms)  INSERT INTO "ar_internal_metadata" ("key", "value", "created_at", "updated_at") VALUES ($1, $2, $3, $4) RETURNING "key"  [["key", "environment"], ["value", "production"], ["created_at", "2019-10-27 15:51:40.481074"], ["updated_at", "2019-10-27 15:51:40.481074"]]
D, [2019-10-27T15:51:40.485012 #4] DEBUG -- :    (1.8ms)  COMMIT
D, [2019-10-27T15:51:40.486319 #4] DEBUG -- :    (1.1ms)  SELECT pg_advisory_unlock(5001499553977906140)```
