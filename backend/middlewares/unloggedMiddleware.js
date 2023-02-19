function unloggedMiddleware(req,res,next) {
    
    if(req.session.userId){
        return res.status(401).json({
            error: 'Usuario con sesión iniciada.'
        })
    }

        next()

}

module.exports = unloggedMiddleware;