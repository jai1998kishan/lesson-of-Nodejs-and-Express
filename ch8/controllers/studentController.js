const allStudent = (req,res) => {
    res.send('All Student');
}

const deleteStudent = (req,res) => {
    console.log(req.params);
    const {id} = req.params;
    console.log(id);
    if(id== 10){
        res.send('Ye Mahi ki ID hai 10 so ye Delete nahi hoga');
    }else{
        res.send(`Student Delete ${id}`);
    }
    
}

export {allStudent, deleteStudent}    //new way to export
// module.exports = {allStudent,deleteStudent};   //old way to export