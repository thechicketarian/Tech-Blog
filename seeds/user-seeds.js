const { User } = require('../models');

const userData = [
    {
        name: 'eric',
        last_name: 'jones',
        email: 'jenna',
        password:'password'
    },
    {
        name: 'eric',
        last_name: 'jones',
        email: 'jonah',
        password: 'chickenLover'
    },
    {
        name: 'eric',
        last_name: 'jones',
        email: 'bob',
        password: 'bobRoss'
    }

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;