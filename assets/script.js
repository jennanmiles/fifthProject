// pseudo code

// reflect current date in the title
let date = moment();
$('#currentDay').text(date.format('dddd, MMMM Do YYYY'));

// block out current hour in the schedule in red and text "current hour"
let curHour = moment().format('H');

$('.col.time').each(function(){
    let loopHour = $(this).data('hour');
    let textArea = $(this).siblings('textarea');
    if ( textArea.length ) {
        // set value of text area from database
        let curVal = localStorage.getItem(textArea.attr('id'));
        if (curVal != null) {
            textArea.val(curVal);
        }

        // set color of textarea 
        if ( curHour == loopHour ) {
            textArea.addClass('current');
            textArea.attr('disabled', true);
        } else if ( loopHour > curHour) {
            textArea.addClass('coming');
        } else {
            textArea.attr('disabled', true);
        }
    } else {
        console.log('text area for ' + loopHour + ' not found');
    }
});



// // nine
$('#nineplus').on('click', function(event) {
    //icon changes on click
    $('#nineplus').css('display','none');
    $('#nineex').css('display','block');
    // add to local storage
    let text = $('#nine').val();
    localStorage.setItem('nine', text);
});
$('#nineex').on('click', function(event) {
    //icon changes on click
    $('#nineex').css('display','none');
    $('#nineplus').css('display','block');
    // remove from local storage 
    localStorage.removeItem('nine');
});
// //ten
$('#tenplus').on('click', function(event) {
    $('#tenplus').css('display','none');
    $('#tenex').css('display','block');
    let text = $('#ten').val();
    localStorage.setItem('ten', text);
});
$('#tenex').on('click', function(event) {
    $('#tenex').css('display','none');
    $('#tenplus').css('display','block');
    localStorage.removeItem('ten');
});
// // eleven
$('#elevenplus').on('click', function(event) {
    $('#elevenplus').css('display','none');
    $('#elevenex').css('display','block');
    let text = $('#eleven').val();
    localStorage.setItem('eleven', text);
});
$('#elevenex').on('click', function(event) {
    $('#elevenex').css('display','none');
    $('#elevenplus').css('display','block');
    localStorage.removeItem('eleven');
});
// // noon
$('#noonplus').on('click', function(event) {
    $('#noonplus').css('display','none');
    $('#noonex').css('display','block');
    let text = $('#noon').val();
    localStorage.setItem('noon', text);
});
$('#noonex').on('click', function(event) {
    $('#noonex').css('display','none');
    $('#noonplus').css('display','block');
    localStorage.removeItem('noon');
});
// // one
$('#oneplus').on('click', function(event) {
    $('#oneplus').css('display','none');
    $('#oneex').css('display','block');
    let text = $('#one').val();
    localStorage.setItem('one', text);
});
$('#oneex').on('click', function(event) {
    $('#oneex').css('display','none');
    $('#oneplus').css('display','block');
    localStorage.removeItem('one');
});
// // two
$('#twoplus').on('click', function(event) {
    $('#twoplus').css('display','none');
    $('#twoex').css('display','block');
    let text = $('#two').val();
    localStorage.setItem('two', text);
});
$('#twoex').on('click', function(event) {
    $('#twoex').css('display','none');
    $('#twoplus').css('display','block');
    localStorage.removeItem('two');
});
// // three
$('#threeplus').on('click', function(event) {
    $('#threeplus').css('display','none');
    $('#threeex').css('display','block');
    let text = $('#three').val();
    localStorage.setItem('three', text);
});
$('#threeex').on('click', function(event) {
    $('#threeex').css('display','none');
    $('#threeplus').css('display','block');
    localStorage.removeItem('three');
});
// // four
$('#fourplus').on('click', function(event) {
    $('#fourplus').css('display','none');
    $('#fourex').css('display','block');
    let text = $('#four').val();
    localStorage.setItem('four', text);
});
$('#fourex').on('click', function(event) {
    $('#fourex').css('display','none');
    $('#fourplus').css('display','block');
    localStorage.removeItem('four');
});
// // five
$('#fiveplus').on('click', function(event) {
    $('#fiveplus').css('display','none');
    $('#fiveex').css('display','block');
    let text = $('#five').val();
    localStorage.setItem('five', text);
});
$('#fiveex').on('click', function(event) {
    $('#fiveex').css('display','none');
    $('#fiveplus').css('display','block');
    localStorage.removeItem('five');
});
