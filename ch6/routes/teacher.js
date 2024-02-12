import express from 'express';
const router = express.Router();

router.get('/all', (req,res) => {
    res.send('All Teacher');
})
router.post('/create', (req,res) => {
    res.send('add new Teacher');
})
router.put('/update', (req,res) => {
    res.send('Update Teacher');
})
router.delete('/delete', (req,res) => {
    res.send('Delete Teacher');
})


// module.exports = router;   //old version (old type to export)
export default router;     //new version to export