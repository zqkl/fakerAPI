const { faker } = require("@faker-js/faker")


class Company {
    constructor(){
        this._id = faker.database.mongodbObjectId();
        this.name = faker.company.name();
        this.address = [
            faker.address.street(),
            faker.address.city(),
            faker.address.state(),
            faker.address.zipCode(),
            faker.address.country(),
        ]

    }
}


module.exports = {Company};