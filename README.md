Migrations record changes to the database structure over time, just like git comits records changes to code

Configure knex connections

- knex init

Commonly used migration commands:

- npx knex migrate:make <name> <--- runs any pending migrations>
- npx knex migrate:latest <---- run pending migrations to update the database>
- npx knex migrate:rollback <--- rolls back most recent migrations>

Track Food AKA menu items

menu_items table
- id: primary key, unsigned (no negative numbers) integer.
- name: string, required (NOT NULL), unique, make searching by name fast
- price: floating point, not required.
- available: boolean, default to false.

clients table
- id: pk, uuid, string (128), unique, required
- email: string, unique, indexed
- name: string, indexed

> EVERY CHANGE TO DATABASE SCHEMA SHOULD BE DONE WITH A NEW MIGRATION



