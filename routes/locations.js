const locationsRoutes = (app, fs) => {
   // variables
   const dataPath = './data/data.json';

   // READ
   app.get('/locations', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
         if (err) {
            throw err;
         }

         obj = JSON.parse(data).locations;

         res.send(obj);
      });
   });

   // READ BY ID
   app.get('/locations/:id', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
         if (err) throw err;
         obj = (JSON.parse(data)).locations.find(x => x.id === req.params.id);

         res.send(obj);
      })
   });


};

module.exports = locationsRoutes;