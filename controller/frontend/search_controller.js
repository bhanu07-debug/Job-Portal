const search = (req, res) => {
    res.render('../views/frontend/searchJob', {
        title: 'Search'
    })
}

module.exports = {
    search
}