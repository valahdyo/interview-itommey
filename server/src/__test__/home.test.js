const app = require("../../server.js")
const supertest = require("supertest")

test("GET home", async () => {
  const res = await supertest(app).get("/")
  expect(res.statusCode).toEqual(200)
  expect(res.text).toBe("Hello world")
})
