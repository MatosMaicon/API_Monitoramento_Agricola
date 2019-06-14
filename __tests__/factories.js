const faker = require("faker");
const { Customer, Platform } = require("../src/app/models");

class Factory {

  async customer (attributes) {
    let att_default = {
      name: faker.name.findName()
    }

    return await Customer.create({ ...att_default, ...attributes })
  }

  async platform (attributes) {
    const att_default = {
      customerId: 1,
      hardwareKey: "df:dd:de:12:54:65",
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude()
    }

    return await Platform.create({ ...att_default, ...attributes })
  }
}

module.exports = new Factory();
