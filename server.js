import express from "express"
import nunjucks from "nunjucks"
import morgan from "morgan"
import indexRouter from "./routes/index.js"
import searchRouter from "./routes/search.js"
import calcRouter from "./routes/calc.js"

const app = express()
nunjucks.configure("views", {
  autoescape: true,
  express: app
})

app.use(express.static("public"))

app.use(morgan("dev"))
app.use("/search", searchRouter)
app.use("/", indexRouter)
app.use("/calc", calcRouter)

app.use((req, res) => {
  res.status(404).render(`404.njk`, {
    title:`404 not found`
  })
})

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`)
})