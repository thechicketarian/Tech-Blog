const { User } = require('../models');

const userData = [
    {
        username: "jenna",
        password: "password"
    },
    {
        username: "jonah",
        password: "chickenLover"
    },
    {
        username: "bob",
        password: "bobRoss"
    }

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;