
let dogColumn0 = document.querySelector('#dog-table-count-0');
let dogColumn1 = document.querySelector('#dog-table-count-1');
let dogColumn2 = document.querySelector('#dog-table-count-2');
//counter variables


let dogVoteCount0 = localStorage.getItem('dogVoteCount0');

if (dogVoteCount0 === null){
    dogVoteCount0 = 0;
}

dogColumn0.textContent = dogVoteCount0;
//let dogVoteCount0 = 0; //pip


let dogVoteCount1 = localStorage.getItem('dogVoteCount1');

if (dogVoteCount1 === null){
    dogVoteCount1 = 0;
}

dogColumn1.textContent = dogVoteCount1;

//let dogVoteCount1 = 0; //tess


let dogVoteCount2 = localStorage.getItem('dogVoteCount2');

if (dogVoteCount2 === null){
    dogVoteCount2 = 0;
}

dogColumn2.textContent = dogVoteCount2;





//let dogVoteCount2 = 0; //rizzo





//selectors
let header = document.querySelector( '#page-header' )
let dogDescriptions = document.querySelectorAll('.dog-description');
let dogImages = document.querySelectorAll('.dog-image')
let dogNames = document.querySelectorAll('.dog-name');
let columns = document.querySelectorAll('.column')



header.style.textAlign = 'left'




for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}




for(let x = 0; x < dogNames.length; x++){

    
if (x % 2 === 0){

dogNames[x].style.color = 'red'
} else {
    
    dogNames[x].style.color = 'blue'
}


  dogNames[x].style.textAlign = 'left';
}

let dogFooter = document.querySelector( '.footer' )
dogFooter.style.color = "blue"


for(let i = 0; i < dogDescriptions.length; i++){
    dogDescriptions[i].remove();

}

for (let i = 0; i < columns.length; i++){
    let button = document.createElement('button');



    button.textContent = 'Vote';
    let idName = 'dog-name-' + i;
    button.setAttribute('id', idName);
    
    columns[i].append(button)



}
// button IDs:
// dog-name-0 pip
// dog-name-1 tess
// dog-name-2 rizzo

let dogButton0 = document.querySelector('#dog-name-0');


let dogButton1 = document.querySelector('#dog-name-1');


let dogButton2 = document.querySelector('#dog-name-2');



dogButton0.addEventListener('click', function(){
    dogVoteCount0 = parseInt(dogVoteCount0) + 1
    //console.log(dogVoteCount0);
    dogColumn0.textContent = dogVoteCount0;
    localStorage.setItem('dogVoteCount0', dogVoteCount0);


})

dogButton1.addEventListener('click', function(){
    dogVoteCount1 = parseInt(dogVoteCount1) + 1
    //console.log(dogVoteCount1);
    dogColumn1.textContent = dogVoteCount1;
    localStorage.setItem('dogVoteCount1', dogVoteCount1);


})

dogButton2.addEventListener('click', function (){
    dogVoteCount2 = parseInt(dogVoteCount2) + 1
    dogColumn2.textContent = dogVoteCount2;
    localStorage.setItem('dogVoteCount2', dogVoteCount2);
    
})