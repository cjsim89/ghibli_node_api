const peopleRoutes = (app, fs) => {
   // variables
   const dataPath = './data/data.json';

   // READ
   app.get('/people', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
         if (err) {
            throw err;
         }

         obj = JSON.parse(data).people;

         res.send(obj);      });
   });

   // READ BY ID
   app.get('/people/:id', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
         if (err) throw err;
         obj = (JSON.parse(data)).people.find(x => x.id === req.params.id);

         res.send(obj);
      })
   });


};

module.exports = peopleRoutes;