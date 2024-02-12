import express from 'express';
const router = express.Router();


//All student Routes
router.get('/all', (req,res) => {
    res.send('All Student');
})
router.post('/create', (req,res) => {
    res.send('add new Student');
})
router.put('/update', (req,res) => {
    res.send('Update Student');
})
router.delete('/delete', (req,res) => {
    res.send('Delete Student');
})


// module.exports = router;   //old version (old type to export)
export default router;     //new version to export