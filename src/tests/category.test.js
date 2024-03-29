const request = require("supertest")
const app = require("../app")


const URL_BASE = '/categories'
const URL_BASE_USER = '/users'
const category = {
    name: "electronica"
}
let categoryId
let TOKEN

beforeAll(async() => {
  const user =  {
     email: "john.dejesus@gmail.com",
     password: "jhon123"
    }

    const res = await request(app)
        .post(`${URL_BASE_USER}/login`)
        .send(user)
    TOKEN = res.body.token 
})

test("POST -> 'URL_BASE', should return status code 201, res.body to be defined and res.body.name ===categosy.name", async () => {
    const res = await request(app)
        .post(URL_BASE)
        .send(category)
        .set("Authorization", `Bearer ${TOKEN}`)

        categoryId= res.body.id

    expect(res.statusCode).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(category.name)

})

test("GET -> 'URL_BASE', should return status code 200, res. body to be defined and res.body to have length ===1", async () => {
    const res = await request(app)
    .get(URL_BASE)

    expect(res.status).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body).toHaveLength(1)
})

test("delete -> 'URL_BASE/category'should return status code 200,", async () => {
    const res= await request(app)
    .delete(`${URL_BASE}/${categoryId}`)
    .set('Authorization',`Bearer ${TOKEN}`)

    expect(res.status).toBe(204)
})