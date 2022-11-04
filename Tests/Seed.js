const DB = require("../JS/DBConnect");

async function SeedUsers() {
    await DB.User.create({
        name:"Harry Potter",
        email:"HPotter@oddmedialtd.com",
    })
    await DB.User.create({
        name:"Ron Weasley",
        email:"RWeasley@oddmedialtd.com"
    })
    await DB.User.create({
        name:"Hermione Granger",
        email:"HGranger@oddmedialtd.com"
    })
    await DB.User.create({
        name:"Neville Longbottom",
        email:"NLongbottom@oddmedialtd.com"
    })   
}

async function SeedCheeses(){
    await DB.Cheese.create({
        title:"Moon",
        description:"Tastes a bit rocky"
    })
    await DB.Cheese.create({
        title:"Mars",
        description:"Has sweet undertones"
    })
    await DB.Cheese.create({
        title:"Venus",
        description:"Thin crust with a fluid centre"
    })
    await DB.Cheese.create({
        title:"Pluto",
        description:"A chewwy substitute"
    })
}

async function SeedBoards(){
    await DB.Board.create({
        type:"Spread",
        description:"mmm Cheese",
        rating:Math.floor(Math.random()*5)
    })
    await DB.Board.create({
        type:"Spread",
        description:"more cheese",
        rating:Math.floor(Math.random()*5)
    })
    await DB.Board.create({
        type:"Spread",
        description:"sussy cheese",
        rating:Math.floor(Math.random()*5)
    })
    await DB.Board.create({
        type:"Guide",
        description:"Best Tastes",
        rating:Math.floor(Math.random()*5)
    })
    await DB.Board.create({
        type:"Guide",
        description:"Unknown Flavours",
        rating:Math.floor(Math.random()*5)
    })
    await DB.Board.create({
        type:"Guide",
        description:"Travel Delights",
        rating:Math.floor(Math.random()*5)
    })
}

module.exports={SeedUsers,SeedCheeses,SeedBoards}