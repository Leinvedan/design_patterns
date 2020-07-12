class SingletonTS {
    public database = "Foo"
    public pass = 23
    private static INSTANCE: SingletonTS = new SingletonTS();
    private constructor() { }
    public static getInstance(): SingletonTS {
        return this.INSTANCE
    }
}
// let singleton = new SingletonTS() // doesnt work
let singleton = SingletonTS.getInstance()
let singleton2 = SingletonTS.getInstance()

console.log(singleton.database)
console.log(singleton === singleton2)