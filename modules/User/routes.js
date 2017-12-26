const express = require('express')
const router = express.Router()

const Controller = require('./controller')

/* GET users listing. */
router.get('/', (req, res, next) =>
  Controller.find(req, res, {})
)

router.get('/:id', (req, res, next) =>
  Controller.findOne(req, res)
)

router.post('/', (req, res, next) =>{
      console.log(req.body)
  Controller.create(req, res)
}
)

router.put('/:id', (req, res, next) =>
  Controller.update(req, res)
)

router.delete('/:id', (req, res, next) =>
  Controller.remove(req, res)
)

module.exports = router
