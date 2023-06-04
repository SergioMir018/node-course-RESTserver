const {Router} = require('express')

const router = Router();

router.get('/', );

router.put('/', (req, res) => {
    res.status(400).json({
        msg: 'put API'
    });
});

router.post('/', (req, res) => {
    res.status(201).json({
        msg: 'post API'
    });
});

router.delete('/', (req, res) => {
    res.json({
        msg: 'delete API'
    });
});

module.exports = router;