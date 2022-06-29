module.exports = {
    home: async (req, res) => {
        res.render('admin/category', {
            title: 'Home page',
            layout: '../admin/layouts/main'
        })
    }
}