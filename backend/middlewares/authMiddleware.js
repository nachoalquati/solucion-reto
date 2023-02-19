function authMiddleware(req,res,next) {
    
    if(!req.session.userId){
        return res.status(401).json({
            error: 'Usuario sin sesión iniciada.'
        })
    }

        next()

}

module.exports = authMiddleware