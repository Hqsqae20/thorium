function trim()
{
   const res='     Hello world!   '
   console.log(res.trim())
}
function toLowerCase()
{
   const res='Hello world!'
   console.log(res.toLowerCase())
}
function toUpperCase()
{
    const res='Hello world!'
    console.log(res.toUpperCase())
}

module.exports.trim=trim  
module.exports.toLowerCase=toLowerCase
module.exports.toUpperCase=toUpperCase