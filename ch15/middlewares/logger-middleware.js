var myLogger = (req,res,next) => {
    console.log('Logger');
    next();
}



export default myLogger;