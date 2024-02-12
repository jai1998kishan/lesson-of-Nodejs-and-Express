const homeController =  (req,res) => {
    const data = {
        'name': 'Rocky',
        'id': 111,
        'marks': [40,60,80,20,70]
    }
    res.render('index', data);
}



export {homeController};