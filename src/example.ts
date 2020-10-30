//Task-1

type ConcatFn = (str1:string,str2:string) => string

const concat: ConcatFn = ((str1, str2) => `${str1} ${str2}`)

concat("Hello","World")


//Task-2

interface Sample {
    howIDoIt: string,
    simeArray: Array<string | number>,
}

interface HomeTask extends Sample{
    withData: Array<Sample>
}

const myHometask: HomeTask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

//Task-3


interface MyArray<T> {
    [N: number]: T;

    map<U>(fn:(el:T) => U): U[];

    reduce<U>(fn:(prevVal:U,currVal:T) => U,accInitialVal:U): U;
}


