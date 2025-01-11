// const coding = ["js","rb","c++","python","java"]
// const values = coding.forEach( (item)=> {
//    console.log(item)
//   //  return item //forEach doesnt return any value so nothing with be stored in values hence output of console.log(values) will be undefined
// })
// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]
// let newNums= myNums.filter( (num) => num > 4 )
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]
// let newNums= myNums.filter( (num) => {
//     return num>4
// } )
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

// const newNums = []
// myNums.forEach( (num) => {
//     if (num>4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums) //output [5,6,7,8,9,10]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
// //filters this is how we filter in our websites too
// // arrow function single line mai jb bina curly braces khole without blockscope initiate krke likhte h toh return algse nhi likhna pdta but agr curly braces mai method likh rhe h toh return krna pdega wrna answer nhi aaega
// const userBooks = books.filter( (book)=> book.genre ==='History' )
// const userBooks = books.filter( (book) => {
//     return  book.publish >=1995 && book.genre === "History"
//  })
// console.log(userBooks)