const vehiclesRoutes = (app, fs) => {
   // variables
   const dataPath = './data/data.json';

   // READ
   app.get('/vehicles', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
         if (err) {
            throw err;
         }

         obj = JSON.parse(data).vehicles;

         res.send(obj);
      });
   });

   // READ BY ID
   app.get('/vehicles/:id', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
         if (err) throw err;
         obj = (JSON.parse(data)).vehicles.find(x => x.id === req.params.id);

         res.send(obj);
      })
   });


};

module.exports = vehiclesRoutes;