function loadBtns() {
    // id button.click(function(){
    // Hide other id's  use .hide(number---450?) (rest of the page***)
    $('#btn-project').click(function() {
        $('#Projects').show(500);
        console.log('Hello World');
    });
}

function main() {
    loadBtns();
}

$(main);
