require('dotenv/config')
const db = require('./db');
const { usersTable } = require('./drizzle/schema');

async function getAllUsers() {
    const users = await db.select().from(usersTable);
    console.log('users in Db', users);
    return users;
}

async function createUsers({ id, name, email }) {
    await db.insert(usersTable).values({
        id,
        name,
        email
    });
}

// createUsers({ id: 1, name: 'user', email: 'user@gmail.com'});
// createUsers({ id: 2, name: 'user1', email: 'user1@gmail.com'});
// createUsers({ id: 3, name: 'user3', email: 'user3@gmail.com'});

getAllUsers();