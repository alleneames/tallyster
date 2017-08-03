let express = require("express");

let tallyRouter = express.Router();

let Tally = require("../models/tally.js");

tallyRouter.use((req, res, next)=> {
    for(let key in req.query) {
        if(typeof req.query[key] === "string") {
            req.query[key] = req.query[key].toLowerCase();
        }
    }
    next();
});

tallyRouter.route("/")
.get((req, res)=> {
    Tally.find(req.query, (err, data)=> {
        if(err) {
            res.status(500).send({"message": "SERVER ERROR", err});
        } else {
            res.status(200).send({"message": "SUCCESS", data});
        }
    })
})
.post((req, res)=> {
    let newTally = new Tally(req.body);
    newTally.save((err, data)=> {
        if(err) {
            res.status(500).send({"message": "SERVER ERROR", err});
        } else {
            res.status(200).send({"message": "SUCCESS"});
        }
    })
});

tallyRouter.route("/:id")
.get((req, res)=> {
    Tally.findOne({"_id": req.params.id}, (err, data)=> {
        if(err) {
            res.status(500).send({"message": "SERVER ERROR", err});
        } else if(data === null) {
            res.status(404).send({"message": "DATA NOT FOUND", err});
        } else {
            res.status(200).send({"message": "SUCCESS", data});
        }
    })
})
.delete((req, res)=> {
    Tally.findByIdAndRemove(req.params.id, (err, data)=> {
        if(err) {
            res.status(500).send({"message": "SERVER ERROR", err});
        } else if(data === null) {
            res.status(404).send({"message": "DATA NOT FOUND", err});
        } else {
            res.status(200).send({"message": "SUCCESS", data});
        }
    })
})
.put((req, res)=> {
    Tally.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data)=> {
        if(err) {
            res.status(500).send({"message": "SERVER ERROR", err});
        } else if(data === null) {
            res.status(404).send({"message": "DATA NOT FOUND", err});
        } else {
            res.status(200).send({"message": "SUCCESS", data});
        }
    })
});

tallyRouter.route("/upvote/:id")
.put((req, res)=> {
    Tally.findOne({"_id": req.params.id}, (err, data)=> {
        if(err) {
            res.status(500).send({"message": "SERVER ERROR", err});
        } else if(data === null) {
            res.status(404).send({"message": `ID of ${req.params.id} was not found`, err});
        } else {
            data.upvote += 1;
            data.save((err, data)=> {
                if(err) {
                    res.status(500).send({"message": "SERVER ERROR", err});
                } else {
                    res.status(200).send({"message": "SUCCESS", data});
                }
            });
        }
    })
})

tallyRouter.route("/downvote/:id")
.put((req, res)=> {
    Tally.findOne({"_id": req.params.id}, (err, data)=> {
        if(err) {
            res.status(500).send({"message": "SERVER ERROR", err});
        } else if(data === null) {
            res.status(404).send({"message": `ID of ${req.params.id} was not found`, err});
        } else {
            data.downvote += 1;
            data.save((err, data)=> {
                if(err) {
                    res.status(500).send({"message": "SERVER ERROR", err});
                } else {
                    res.status(200).send({"message": "SUCCESS", data});
                }
            });
        }
    })
})

tallyRouter.route("/comment/:id")
.put((req, res)=> {
    Tally.findOne({"_id": req.params.id}, (err, data)=> {
        if(err) {
            res.status(500).send({"message": "SERVER ERROR", err})
        } else if(data === null) {
            res.status(404).send({"message": `Item with ID of ${req.params.id} was not found`})
        } else {
            data.comments.push(req.body.comment);
            data.save((err, data)=> {
                if(err) {
                    res.status(500).send({"message": "SERVER ERROR", err});
                } else {
                    res.status(200).send({"message": "SUCCESS", data});
                }
            })
        }
    })
})



module.exports = tallyRouter;