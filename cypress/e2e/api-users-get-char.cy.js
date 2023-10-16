describe("Log in user", () => {
  let userId;
  let token;
  it("Admin user Login and get token", () => {
    cy.request({
        method: "POST",
        url: "http://localhost:3001/api/v1/auth/login",
        body: {
          username: "Freddy Testman",
          password: "Ft3st123",
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("token");
        token = response.body.token;
    });
})

});

describe("character get", () => {
    // Fetches a character
    it("Fetches a character", () => {
      cy.request({
        method: "GET",
        url: "http://localhost:3001/api/v1/character",
        body: {
          "name": "bob_test",
          "gender": "MALE",
          "buildId": 1
          },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("msg");
        // expect(response.body.msg).to.eq("Character retrieved");
      });
    }); // END OF Fetches a character
  });
  