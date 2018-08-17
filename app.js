const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const port = parseInt(process.env.PORT || 3000);
const queries = require("./queries.js");
const cors = requre("cors");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors);

//profiles routes!!

app.get("/profiles", (request, response, next) => {
    queries
        .listProfs()
        .then(profile => {
            response.json({ profile });
        })
        .catch(next);
});

app.get("/profiles/:id", (request, response, next) => {
    queries
        .readProfs(request.params.id)
        .then(profile => {
            profile
                ? response.json({ profile })
                : response.status(404).json({ message: "Not found" });
        })
        .catch(next);
});

app.post("/profiles", (request, response, next) => {
    queries
        .createProfs(request.body)
        .then(profile => {
            response.status(201).json({ profile: profile });
        })
        .catch(next);
});

app.delete("/profiles/:id", (request, response, next) => {
    queries
        .deleteProfs(request.params.id)
        .then(() => {
            response.status(204).json({ deleted: true });
        })
        .catch(next);
});

app.put("/profiles/:id", (request, response, next) => {
    queries
        .updateProfs(request.params.id, request.body)
        .then(profile => {
            response.json({ profile: profile[0] });
        })
        .catch(next);
});

//posts routes!!

app.get("/posts", (request, response, next) => {
    queries
        .listPosts()
        .then(posts => {
            response.json({ posts });
        })
        .catch(next);
});

app.get("/posts/:id", (request, response, next) => {
    queries
        .readPosts(request.params.id)
        .then(posts => {
            posts
                ? response.json({ posts })
                : response.status(404).json({ message: "Not found" });
        })
        .catch(next);
});

app.post("/posts", (request, response, next) => {
    queries
        .createPosts(request.body)
        .then(posts => {
            response.status(201).json({ posts: posts });
        })
        .catch(next);
});

app.delete("/posts/:id", (request, response, next) => {
    queries
        .deletePosts(request.params.id)
        .then(() => {
            response.status(204).json({ deleted: true });
        })
        .catch(next);
});

app.put("/posts/:id", (request, response, next) => {
    queries
        .updatePosts(request.params.id, request.body)
        .then(posts => {
            response.json({ posts: posts[0] });
        })
        .catch(next);
});

app.listen(port)
    .on("error", console.error.bind(console))
    .on("listening", console.log.bind(console, "Listening on " + port));
