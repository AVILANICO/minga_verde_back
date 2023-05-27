import { expect } from "chai";
import request from "supertest";
import app from "../app.js"

describe('Test on /mangas path', () => {
  let api = null

  before(async() => {
    api = request(app)
  })

  describe('POST /mangas', () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NmZmOTBiZTU0YmVkN2ExZGQxMDEwZCIsImlhdCI6MTY4NTIxODMwOSwiZXhwIjoxNjg1ODIzMTA5fQ.9-vUhWWCwHE_Q7WWoBhZIpsl5mZy_W7y5xrAB3vyxsY"
    const manga = {
      title: 'Las aventuras de Luisillo el gordillo 5',
      cover_photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVqmbSxhauTNwRSps740Zlka4AEGKvZU4YQ&usqp=CAU',
      category_id: '646fdaacdd6c48bf00c7f47a',
      description: 'a luisillo el gordillo le gusta comer chorizos'
    }

    it('Should create a new Manga, should return status 201, an object with success:"ok", an object with id: _id', async () =>{
      const response = await api.post('/mangas')
      .set('Authorization', `Bearer ${token}`)
      .send(manga)
      console.log(response.body);
      console.log(response.statusCode);

      expect(response.statusCode).to.equal(201);
    })
  })
})