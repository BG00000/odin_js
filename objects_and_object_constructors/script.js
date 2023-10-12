//object constructors:

// function createObject(_key, _value) {
//     this._key = _key
//     this._value = _value

//     this.aFunction = function () {
//         console.log('function triggered')
//     }
// }

// const element = new createObject('KEY', 'VALUE')
// console.log(`Key: ${element._key}
// Value: ${element._value}`)

// element.aFunction()

//exercise:

function createBookObjet(_title, _author, _pages, _read) {
    this._title = _title
    this._author = _author
    this._pages = _pages
    this._read = _read

    this.info = () => {
        return `${this._title}, ${this._author}, ${this._pages} pages, ${this._read}`
    }
}

const elephantsOnAcid = new createBookObjet('Elephants on Acid', 'Alex Boese', '283', 'has been read')
console.log(elephantsOnAcid.info())

const testProtoFunc = new createBookObjet()


console.log(Object.getPrototypeOf(elephantsOnAcid) === createBookObjet.prototype)

createBookObjet.prototype.protoFunction = () => {
    console.log('This can be accessed by all instances of createBookObject')
}

elephantsOnAcid.protoFunction()
testProtoFunc.protoFunction()

console.log(elephantsOnAcid.valueOf())



