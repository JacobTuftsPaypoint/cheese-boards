const { User } = require("../JS/DBConnect");
const { Board } = require("../JS/DBConnect");
const { Cheese } = require("../JS/DBConnect");
const { SeedUsers, SeedBoards, SeedCheeses } = require("./Seed");

beforeAll(async()=>{
    await User.sync({force:true})
    await Board.sync({force:true})
    await Cheese.sync({force:true})
    await SeedUsers()
    await SeedBoards()
    await SeedCheeses()
})

describe("Test Users",()=>{
    test("Is name correct",async()=>{
        let obj = await User.findOne({where:{name:"Harry Potter"}})
        expect(obj.name).toBe("Harry Potter")
    })
    test("Is email correct",async()=>{
        let obj = await User.findOne({where:{name:"Harry Potter"}})
        expect(obj.email.toLowerCase()).toBe("hpotter@oddmedialtd.com")
    })
})

describe("Test Board",()=>{
    test("Is description correct",async()=>{
        let obj2 = await Board.findOne({where:{description:"mmm Cheese"}})
        expect(obj2.description).toBe("mmm Cheese")
    })
    test("Is type correct",async()=>{
        let obj2 = await Board.findOne({where:{description:"mmm Cheese"}})
        expect(obj2.type).toBe("Spread")
    })
    test("Is rating correct",async()=>{
        let obj2 = await Board.findOne({where:{description:"mmm Cheese"}})
        let inrange = obj2.rating > 0 && obj2.rating <= 5
        expect(inrange).toBe(true)
    })
})

describe("Test Cheese",()=>{
    test("Is name correct",async()=>{
        let obj = await Cheese.findOne({where:{title:"Moon"}})
        expect(obj.title).toBe("Moon")
    })
    test("Is email correct",async()=>{
        let obj = await Cheese.findOne({where:{title:"Moon"}})
        expect(obj.description).toBe("Tastes a bit rocky")
    })
})

describe("Test User has board",()=>{
    test("Is connected to board",async()=>{
        let obj = await User.findOne({where:{name:"Harry Potter"}})
        await obj.addBoard(await Board.findOne({where:{description:"mmm Cheese"}}))
        boardarray = await obj.getBoards()
        expect(boardarray[0].type).toBe("Spread")
    })
})

describe("Test board has cheese",()=>{
    test("Is connected to board",async()=>{
        let obj = await Board.findOne({where:{description:"mmm Cheese"}})
        await obj.addCheese(await Cheese.findOne({where:{title:"Moon"}}))
        boardarray = await obj.getCheeses()
        expect(boardarray[0].title).toBe("Moon")
    })
})