const withAuth = (req, res, next) => {
    // Authorization to game once username is logged in/// If name is not sign in, redirects to login/signup page
    if(!req.session.logged_in){
        res.redirect('/');
    }else{
        next();
    }
};
module.exports = withAuth;