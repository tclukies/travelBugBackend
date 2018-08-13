const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const port = parseInt(process.env.PORT || 3000);
const queries = require('./queries.js');

app.use(morgan('dev'));
app.use(bodyParser.json());

// app.get("/", (request, response, next) => {
//     queries.list().then(profile => {
//         response.json({profile});
//     }).catch(next);
// });

app.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(profile => {
        profile
            ? response.json({profile})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

// app.post("/", (request, response, next) => {
//     queries.create(request.body).then(profile => {
//         response.status(201).json({profile: profile});
//     }).catch(next);
// });

// app.delete("/:id", (request, response, next) => {
//     queries.delete(request.params.id).then(() => {
//         response.status(204).json({deleted: true});
//     }).catch(next);
// });

// app.put("/:id", (request, response, next) => {
//     queries.update(request.params.id, request.body).then(profile => {
//         response.json({profile: profile[0]});
//     }).catch(next);
// });


// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
    });
});

app.listen(port)
  .on('error', console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on ' + port));


