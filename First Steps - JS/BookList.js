function bookList(input){
    let numPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let result = (numPages/pagesPerHour)/days;
    console.log(result);
}

bookList([212,20,2]);