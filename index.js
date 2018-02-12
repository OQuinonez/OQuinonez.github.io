function loadBtns() {
    $('#Display').click(function() {
        $('#Projects').hide(500);
        $('#JavaScript').hide(500);
        $('#home').hide(500);
        $('#Java').hide(500);
        $('#languages').show(1000);
    });
    $('#Home-Display').click(function() {
        $('#Projects').hide(500);
        $('#Java').hide(500);
        $('#JavaScript').hide(500);
        $('#languages').hide(500);
        $('#home').show(1000);
    });
    $('#Python-Projects').click(function() {
        $('#languages').show(500);
        $('#JavaScript').hide(500);
        $('#home').hide(500);
        $('#Java').hide(500);
        $('#Projects').show(1000);
    });
    $('#JavaScript-Projects').click(function() {
        $('#Projects').hide(500);
        $('#Java').hide(500);
        $('#languages').show(500);
        $('#home').hide(500);
        $('#JavaScript').show(1000);
    });
    $('#Java-Projects').click(function() {
        $('#Projects').hide(500);
        $('#JavaScript').hide(500);
        $('#languages').show(500);
        $('#home').hide(500);
        $('#Java').show(1000);
    });
}

function main() {
    loadBtns();
}

$(main);
