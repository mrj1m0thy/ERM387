'use strict';
const models = require('./models/index');
const endpoint = require('./endpoint/index');

// App

models.sequelize.sync(/*{force:true}*/).then(() => {
  //endpoint testing
  endpoint.getRoomItems(1).then(aa => console.log(aa));
});
