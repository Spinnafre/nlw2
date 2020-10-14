import knex from 'knex'

export async function up(knex:knex){
    return knex.schema.createTable('Classes',table=>{
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.string('cost').notNullable();
        table.integer('UserId').notNullable()
        .references('id')
        .inTable('Users')
        .onUpdate('CASCADE')
        // Quando deletar o usuário, irá deletar todas as aulas referenciadas
        // A ele
        .onDelete('CASCADE')
    })
}
export async function down(knex:knex){
    return knex.schema.dropTable('Classes')
}