const { faker } = require("@faker-js/faker")


class User {
    constructor(){
        this._id = faker.database.mongodbObjectId();
        this.name = [
            faker.name.firstName(),
            faker.name.lastName(),
        ]
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this.phoneNumber = faker.phone.number();
        
    }
}



module.exports = {User};