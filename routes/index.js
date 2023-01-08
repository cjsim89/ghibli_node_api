const peopleRoutes = (app, fs) => {
   // variables
   const dataPath = './data/data.json';

   // READ
   app.get('/', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
         if (err) {
            throw err;
         }

         res.send(JSON.parse(data));
      });
   });

};

module.exports = peopleRoutes;