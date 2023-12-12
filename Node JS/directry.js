import fs from 'fs'

// how to remove file
fs.unlink("./FSModule2.text",(err)=>{
    console.log("file Deletred Succesfully.");
})

// how to create directory.

fs.mkdir("newDir1",(err)=>{
    console.log("Directory Created Succefully");

})

// how to remove directory,

fs.rmdir("newDir1",(err)=>{
    console.log("Directory removed Succesfully.");
})


// create directory ,read file and write it.

fs.mkdir("newDir2",(err)=>{
    fs.readFile("./writeme2.text","utf-8",(err,data)=>{
        fs.writeFile("newDir2/writeme3.text",data,(err,data)=>{
            console.log("Directory and mfile read and write successfully.");
        })
    })
})


// how to remove directory with file
fs.unlink("./newDir2/writeme3.text",(err)=>{
    fs.rmdir("./newDir2",(err)=>{ 
        console.log("Deleted Succssfully.");
    })
})

