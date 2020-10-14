import knex from 'knex'

export async function up(knex:knex){
    return knex.schema.createTable('Class_Schedule',table=>{
        table.increments('id').primary()
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id').notNullable()
        .references('id')
        .inTable('Classes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
}
export async function down(knex:knex){
    return knex.schema.dropTable('Class_Schedule')
}