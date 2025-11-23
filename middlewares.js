module.exports.isLoggedIn=(req,res,next)=>{
    
if (!req.isAuthenticated()) {
    return res.redirect("/login"); // <--- return stops execution
}
next();
};
