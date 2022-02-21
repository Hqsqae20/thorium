function printDate()
{
    console.log( new Date().toJSON().slice(0,10).replace(/-/g,'/'));
}
function printMonth() 
{
    currentdate=new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    console.log( monthNames[currentdate.getMonth()]) 
}

function getBatchInfo() 
{
    console.log('Thorium, W3D1, the topic for today is Nodejs module system')
}
module.exports.printDate=printDate  
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo 