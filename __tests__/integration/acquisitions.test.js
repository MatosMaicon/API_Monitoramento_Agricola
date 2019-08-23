const request = require("supertest");

const app = require("../../src/app");
const factory = require("../factories");

describe("Acquisitions Controller", () => {
  it("should return success on create", async () => {
    const customer = await factory.customer();
    const platform = await factory.platform({ customerId: customer.id, hardwareKey: "df:dd:de:12:54:65" });
    
    const req = {
      "hardware_key":"df:dd:de:12:54:65",
      "acquisitions": [
        {
          "startedAcquisitionTime": "2019-06-03 14:00:00",
          "finishedAcquisitionTime": "2019-06-03 15:00:00",
          "rain": 15,
          "rain2": 14,
          "atmosphericPresure": 789,
          "atmosphericPresure2": 788,
          "temperature": 25,
          "temperature2": 25
        },
        {
          "startedAcquisitionTime": "2019-06-03 15:00:00",
          "finishedAcquisitionTime": "2019-06-03 16:00:00",
          "rain": 15,
          "rain2": 14,
          "atmosphericPresure": 789,
          "atmosphericPresure2": 788,
          "temperature": 25,
          "temperature2": 25
        }
      ]
    }

    const response = await request(app)
      .post(`${process.env.APP_URI}/acquisition`)
      .send(req);

    expect(response.status).toBe(200);
  });

  it("should return error on create with platform not found", async () => {
    const customer = await factory.customer();
    const platform = await factory.platform({ customerId: customer.id, hardwareKey: "df:dd:de:12:54:65" });
    
    const req = {
      "hardware_key":"df:dd:de:12:54:60",
      "acquisitions": [
        {
          "startedAcquisitionTime": "2019-06-03 14:00:00",
          "finishedAcquisitionTime": "2019-06-03 15:00:00",
          "rain": 15,
          "rain2": 14,
          "atmosphericPresure": 789,
          "atmosphericPresure2": 788,
          "temperature": 25,
          "temperature2": 25
        }
      ]
    }

    const response = await request(app)
      .post(`${process.env.APP_URI}/acquisition`)
      .send(req);

    expect(response.status).toBe(400);
  });

});
