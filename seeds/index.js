const sequelize = require('../config/connection');
const seedComment = require('./comment-seeds');
const seedPost = require('./post-seeds');
const seedUser = require('./user-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  console.log('\n----- User SEEDED -----\n');
  await seedUser();
  console.log('\n----- Posts SEEDED -----\n');
  await seedPost();
  console.log('\n----- Comments SEEDED -----\n');
  await  seedComment();

  process.exit(0);
};

seedAll();
