// show numbe of stars depending on the number of rows
showStars(10);

function showStars(rows){
    for(let row = 1;row<=rows;row++){
        let stars = '';
        for(i=0;i<row;i++)
            stars +='*'
        console.log(stars)
    }
}