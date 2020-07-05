const SingletonJS = function() {
    let instance = null
    return function () {
        if (instance) {
            return instance
        }
        instance = {
            database: "Foo",
            pass: 23
        }
        return instance
    }
}()

const singleton = SingletonJS()
console.log(singleton.database)

singleton.database = "bar"

const singleton2 = SingletonJS() // returns same instance
console.log(singleton2.database)
console.log(singleton === singleton2)
