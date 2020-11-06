const path = require("path")
const {Router} = require("express");
const router = Router();

router.get("/stats", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/stats.html"));
})
router.get("/exercise", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/exercise.html"));
})
router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/index.html"));
})

module.exports = router;