const express = require('express');
const router = express.Router();

const comments = [
    { id:1, title: 'comment1', postId: 1},
    { id:2, title: 'comment2', postId: 1},
    { id:3, title: 'comment3', postId: 1}
];

router.get('/comments/:postId', (req, res) => {
    res.json(comments);
});

router.get('/comments/:id', (req, res) => {
    const comment = getcomment(req.params.id);
    if (!comment) {
        res.status(404).send('The comment with the given ID was not found!');
        res.send(comment);
    }
});

router.post('/comments/:postId', (req, res) => {
    const { error } = validatecomment(req.body);

    if (error) return res.send(400).send(error.details[0].message);
   
    const comment = {
        id: comments.length + 1,
        title: req.body.title,
        postId: req.body.postId
    };

    comments.push(comment);
    res.send(comment);
});

router.put('/comments/:id', (req, res) => {
    const comment = getcomment(req.params.id);
    if (!comment) return res.status(404).send('The comment with the given ID was not found!');

    const { error } = validatecomment(req.body);

    if (error) return res.send(400).send(error.details[0].message);
     
    // UPDATE
    comment.title = req.body.title;
    res.send(comment);
});

router.delete('/comments/:id', (req, res) => {
    const comment = getcomment(req.params.id);
    if (!comment) return res.status(404).send('The comment with the given ID was not found!');
    
    const index = comments.indexOf(comment);
    comments.splice(index, 1);

    res.send(comment);
});

function validatecomment(comment) {
    const schema = {
        title: Joi.string().min(3).required()
    };

    return Joi.validate(comment, schema);
}

function getcomment(id) {
    return comments.find(c => c.id === parseInt(id));
}

module.exports = router;