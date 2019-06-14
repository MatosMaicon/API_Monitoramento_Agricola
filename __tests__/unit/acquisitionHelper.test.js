const { parseModelAcquisition } = require('../../src/app/helpers/AcquisitionsHelper')

describe("Acquisition Helper", () => {

  it("should convert array to model format", async () => {
    const acquisitions = [
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

    const resExpect = [
      {
        "platformId": 1,
        "startedAcquisitionTime": "2019-06-03 14:00:00",
        "finishedAcquisitionTime": "2019-06-03 15:00:00",
        "sensorNumber": 1,
        "rain": 15,
        "atmosphericPressure": 789,
        "temperature": 25,
      },
      {
        "platformId": 1,
        "startedAcquisitionTime": "2019-06-03 14:00:00",
        "finishedAcquisitionTime": "2019-06-03 15:00:00",
        "sensorNumber": 2,
        "rain": 14,
        "atmosphericPressure": 788,
        "temperature": 25
      },
      {
        "platformId": 1,
        "startedAcquisitionTime": "2019-06-03 15:00:00",
        "finishedAcquisitionTime": "2019-06-03 16:00:00",
        "sensorNumber": 1,
        "rain": 15,
        "atmosphericPressure": 789,
        "temperature": 25,
      },
      {
        "platformId": 1,
        "startedAcquisitionTime": "2019-06-03 15:00:00",
        "finishedAcquisitionTime": "2019-06-03 16:00:00",
        "sensorNumber": 2,
        "rain": 14,
        "atmosphericPressure": 788,
        "temperature": 25
      }
    ]

    const response = await parseModelAcquisition(acquisitions, 1)

    expect(response).toEqual(expect.arrayContaining(resExpect));
  });
});