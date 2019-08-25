class AcquisitionsHelper {
    // converte um objeto JSON com varios sensores para uma lista de 'acquisition' que seja capaz de persistir no Model.
    async parseModelAcquisition(acquisitions, platformId) {
        let resAcquisitions = []
        for (let acquisition of acquisitions) {
            let i = 1
            do {
                resAcquisitions.push({
                    "platformId": platformId,
                    "startedAcquisitionTime": acquisition.startedAcquisitionTime,
                    "finishedAcquisitionTime": acquisition.finishedAcquisitionTime,
                    "sensorNumber": i,
                    "rain": acquisition['rain' + (i == 1 ? '' : i)],
                    "atmosphericPressure": acquisition['atmosphericPresure' + (i == 1 ? '' : i)],
                    "temperature": acquisition['temperature' + (i == 1 ? '' : i)],
                })
                i++
            } while (acquisition['rain' + i]);
        }

        return resAcquisitions
    }
}

module.exports = new AcquisitionsHelper();
