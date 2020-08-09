
$(function(){
    // var height = $('#height').val();
    // var weight = $('#weight').val();
    // var gender = $('#gender').val();
    // $('#predict').on('click', function(){
    //     // console.log("sdfa");
    //     $.ajax({
    //         url:'/predict',
    //         method:'POST',
    //         data: JSON.stringify({height: height }, {weight: weight}, {gender: gender}),
    //         contentType:'application/json',
    //         success: function(response){
    //             console.log(response);

    //         }
    //     })
    // })

// $('#form').on('submit',function(event){
    $(document).on('submit', '#form', function(event){
    // console.log('sfd');
    event.preventDefault();
    // event.preventDefault();
    var height = $('#height').val();
    var weight = $('#weight').val();
    var gender = $('#gender').val();
    
    console.log(height);
    console.log(weight);
    console.log(gender);
    $.ajax({
        url:'/predict',
        method: 'POST',
        contentType:'application/json',
        data: JSON.stringify({ height: height, weight: weight, gender: gender }),
        success: function(response){
            // console.log("sadf");
           var a =  $('#a');
            a.css('text-align', 'center');
            a.css('height', '52px');
            a.addClass('alert alert-info');
            a.text(response);
        }
    })
})
});