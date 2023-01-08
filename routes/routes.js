// load up our shiny new route for users
const indexRoutes = require('./index')
const filmsRoutes = require('./films');
const peopleRoutes = require('./people');
const locationsRoutes = require('./locations');
const speciesRoutes = require('./species');
const vehiclesRoutes = require('./vehicles');

const appRouter = (app, fs) => {
   // we've added in a default route here that handles empty routes
   // at the base API url
   indexRoutes(app, fs);

   // run our user route module here to complete the wire up
   filmsRoutes(app, fs);
   peopleRoutes(app, fs);
   locationsRoutes(app, fs);
   speciesRoutes(app, fs);
   vehiclesRoutes(app, fs);

};

// this line is unchanged
module.exports = appRouter;