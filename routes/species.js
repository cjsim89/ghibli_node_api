const speciesRoutes = (app, fs) => {
   // variables
   const dataPath = './data/data.json';

   // READ
   app.get('/species', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
         if (err) {
            throw err;
         }

         obj = JSON.parse(data).species;

         res.send(obj);
      });
   });

   // READ BY ID
   app.get('/species/:id', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
         if (err) throw err;
         obj = (JSON.parse(data)).species.find(x => x.id === req.params.id);

         res.send(obj);
      })
   });


};

module.exports = speciesRoutes;