
import {join} from 'path';




const aboutController = (req,res) => {
    // res.send('About Page');
    // res.sendFile('E:\\jaikishan\\classes\\nodejs_Youtube\\geeky shows\\ch10\\views\\about.html');
    console.log(join(process.cwd(), 'views', 'about.html'));
    res.sendFile(join(process.cwd(), 'views', 'about.html'));
    
}

export {aboutController};