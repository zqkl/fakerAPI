const express = require('express');
const app = express()


const {Company, companies} = require('./models/company.model');
const {User, users} = require('./models/users.model');

app.get('/api/companies',(req,res)=>{
    res.status(200).json(new Company);

});

app.get('/api/users',(req,res)=>{
    res.status(200).json(new User);

});

app.get('/api/companiesAndUsers',(req,res)=>{
    let newUser = new User;
    let newCompany = new Company;
    let final = {
        user: newUser,
        company: newCompany,
    }
    res.status(200).json(final);

});



const PORT = 5001;
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});
