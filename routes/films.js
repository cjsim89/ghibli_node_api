const filmsRoutes = (app, fs) => {
   // variables
   const dataPath = './data/data.json';

   // READ
   app.get('/films', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
         if (err) {
            throw err;
         }

         obj = JSON.parse(data).films;

         res.send(obj);
      });
   });

   // READ BY ID
   app.get('/films/:id', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
         if (err) throw err; 
         obj = (JSON.parse(data)).films.find(x => x.id === req.params.id);

         res.send(obj);
      })
   });


};

module.exports = filmsRoutes;