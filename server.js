const express = require("express");
const app=express();
const faker=require("faker");

const createCompany=()=>
{
    const newCompany={
        name:faker.company.companyName(),
        companySuffix:faker.company.companySuffix(),
        department:faker.commerce.department()
    };
    return newCompany;
}
const createUser=()=>
{
    const newUser={
        name:faker.name.firstName(),
        lastname:faker.name.lastName(),
        department:faker.name.jobTitle()
    };
    return newUser;
}
app.get("/api/users/new", (req, res) => {
    const newFakeUser = createUser();
    res.send(newFakeUser);
  });

  app.get("/api/company/new", (req, res) => {
    const newFakeCompany = createCompany();
    res.send(newFakeCompany);
  });

  app.get("/api/users/company", (req, res) => {
    const newFakeUser = createUser();
    const newFakeCompany = createCompany();
    const user_company={
        newFakeUser,
        newFakeCompany,
    }
    res.send(user_company);
  });
const server = app.listen(8000, () =>
console.log(`Server is locked and loaded on port ${server.address().port}!`)
);