const express = require("express")
const { PostService } = require("./service")
const router = express.Router()

const service = new PostService()

router.get("/", async (req, res) => {
  const list = await service.getAll()
  res.status(200).send(list)
})

router.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const post = await service.getById(id)
    res.status(200).send(post)
  } catch (error) {
    res.status(404).send(error)
  }
})

router.post("/", async (req, res) => {
  try {
    const result = await service.create(req.body)
    res.status(201).send(result)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.patch("/", async (req, res) => {
  try {
    const result = await service.update(req.body)
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    await service.delete(id)
    res.status(204).send()
  } catch (error) {
    res.status(400).send(error)
  }
})

exports.router = router
