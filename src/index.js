const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());


// Routes


app.use("/users", require('./routes/users'));
app.use("/admins", require('./routes/admins'));

app.use("/clients", require('./routes/clients'));
app.use("/scores", require('./routes/scores'));

app.use("/", (req, res)=> {
  res.end("Welcome to DAZABI")
});

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});