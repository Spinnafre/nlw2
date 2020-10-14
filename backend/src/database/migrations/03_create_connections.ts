import knex from 'knex'

export async function up(knex:knex){
    return knex.schema.createTable('Connections',table=>{
        table.increments('id').primary()

        table.integer('user_id').notNullable()
        .references('id')
        .inTable('Users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

        // Cria o horário em que a conexão ocorreu
        // Pega o horário atual em que foi criado
        table.timestamp('created_at')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        .notNullable()
    })
}
export async function down(knex:knex){
    return knex.schema.dropTable('Connections')
}