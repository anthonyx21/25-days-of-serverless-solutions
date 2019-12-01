
const FACES = require("./faces.json")

function roll(){
    const rollResult = Math.floor( Math.random() * FACES.length ) 
    return FACES[ rollResult ]
}

module.exports = async function (context, req) {
    const result = roll()
    context.res = {
        body: result
    }
};