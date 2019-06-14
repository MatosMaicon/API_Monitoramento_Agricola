const AcquisitionsController = require('../app/controllers/AcquisitionsController')

module.exports = app => {
    app.group("/api/v1/", (router) => { 
        router.post('/acquisition', AcquisitionsController.store);    
    })
}
