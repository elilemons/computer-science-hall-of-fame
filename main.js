$(() => {
    $.get('https://dwolverton.github.io/fe-demo/data/computer-science-hall-of-fame.json', (data) => {
        parseData(data.complete);
    });


    function parseData(data) {
        console.log(data);
        for (let person of data) {
            $('#app').append($('<h1 />').text(`${person.firstName} ${person.lastName}`));
            $('#app').append($('<p />').text(`${person.innovation} in ${person.year}`));
        }
        
    }
});