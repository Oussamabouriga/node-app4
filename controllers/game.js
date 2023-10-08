import Game from '../../model/game.js';

const games = [new Game('dmc5', 2019), new Game('re8', 2021), new Game('nfs', 2019)];

export function addOnce(req, res) {
    Game
        .create(req.body)
        .then(newGame => {
            res.status(200).json(newGame);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export function getAll(req, res) {
    Game
        .find({})
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export function putAll(req, res) {
    Game.updateMany({}, { "onSale": true })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export function patchOnce(req, res) {
    Game.findOneAndUpdate({ "name": req.params.name }, { "onSale": false })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export function deleteOnce(req, res) {
    Game.remove({ "onSale": false })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export function deleteByName(req, res) {
    Game.findOneAndRemove({ "name": req.params.name })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

/** 

export function getAll(req, res) {
    res.status(200).json(games);
}
export function addOnce(req, res) {
    const game = new Game(req.body.name, req.body.year);
    games.push(game);
    res.status(201).json({  message: "Created" , entity: game });
    
}
export function getOnce(req, res) {
    res.status(200).json(games.find(val.name === req.params.name));
}
export function putOnce(req, res) {
    res.status(200).json({ message :"update !" ,name : req.params.name});
}
export function patchOnce(req, res) {
    res.status(200).json({ message :"update !" ,name : req.params.name});
}
export function deleteOnce(req, res) {
    res.status(200).json({ message :"Deleted !" ,name : req.params.name});
}

*/
