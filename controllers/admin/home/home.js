module.exports = {
    home: async (req, res) => {
        res.render('admin/body', {
            title: 'Home page',
            layout: '../admin/layouts/main'
        })
    }
}