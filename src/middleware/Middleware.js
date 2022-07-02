const tokenService = require('../services/TokenService');

module.exports =
{
    checkAuth(req, res, next) {
        console.log(req.headers)
        var auth = req.headers['authorization'];

        if(!auth){
            return res.status(403).send("Token not provided.")
        }

        if (auth.startsWith('Bearer ')) {
            auth = auth.replace("Bearer","");
            auth = auth.trim();
        }
        else{
            auth = auth.trim();
        }

        tokenService.check(auth).then(() => {
            next();
        }).catch((error) => {
            return res.status(403).send(error);
        })
    }
}