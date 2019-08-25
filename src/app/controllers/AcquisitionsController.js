const { Platform, PlatformAcquisition } = require('../models')
const { parseModelAcquisition } = require('../helpers/AcquisitionsHelper')

class AcquisitionsController {
    async store(req, res) {
        try {
            const platform = await Platform.findOne({ where: { hardwareKey: req.body.hardware_key } })

            if (!platform) return res.status(400).json({ message: "Platform not found!" })

            const acquisitions = await parseModelAcquisition(req.body.acquisitions, platform.id)

            // bulk create, PlatformAcquisition
            await PlatformAcquisition.bulkCreate(acquisitions);

            return res.json({ success: true })
        } catch (err) {
            return res.status(400).json({ erro: err })
        }
    }
}

module.exports = new AcquisitionsController();