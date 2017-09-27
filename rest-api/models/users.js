var _ = require('underscore');

// The seeded state of our in-memory "database"
var users = [
  {
    id: 1,
    name: 'Taka',
    email: 'taka@taka.com'
  },
  {
    id: 2,
    name: 'Nayo',
    email: 'nayo@nayo.com'
  },
  {
    id: 3,
    name: 'Amrit',
    email: 'amrit@amrit.com'
  }
];

var nextId = 4;

var getNextId = function () {
  return nextId++;
};

// Public methods. Build out these functions as necessary
// The first two have been done for you!
exports.getAll = function () {
  return users;
};

exports.setAll = function (newUsers) {
  users = newUsers;
  nextId = newUsers.length + 1;
  return newUsers;
};

exports.getOne = function (id) {
  db.test.find({"mhd._id": ObjectId("id")},
    {"mhd.$": true})
};

exports.addOne = function (user) {
  db.col.update(user);
    // { name: 'doc', 'list.id': 2 }, 
    // {$push: {'list.$.items': {id: 5, name: 'item5'}}}
};

exports.updateOne = function (id, newProperties) {
  users.update({"id"},{$set:{"newProperties"}})

};

exports.deleteOne = function (id) {
  users.remove( {"_id": ObjectId("id")});

};
