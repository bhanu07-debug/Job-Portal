const home = (req, res) => {
    res.render('../views/frontend/home', {
        title: 'Home | BWES'
    })
}


module.exports = {
    home
}