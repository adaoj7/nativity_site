const handlerFunctions = {

    login: (req, res) => {
        const sess = req.session;
        sess.email = req.body.email; // add the user's email to the session
        // res.render('dashboard.html');
        console.log('hit the login')
    },

}

export default handlerFunctions