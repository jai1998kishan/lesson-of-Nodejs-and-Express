const HomeController = (req,res) => {
    res.render('index',{'name': 'Rocky'});
}

export {HomeController};