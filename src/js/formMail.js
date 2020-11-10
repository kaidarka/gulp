$("#sendMail").on("click", function(){
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();

    if(name == ""){
        $("#errorMess").text("Введите имя");
        return false;
    } else if(phone == ""){
        $("#errorMess").text("Введите телефон");
        return false;
    }

    $("#errorMess").text("");

    $.ajax({
        url: './ajax/mail.php',
        type: 'POST',
        cache: false,
        data: { 'name': name, 'phone': phone},
        dataType: 'html',
        beforeSend: function () {
            $("#sendMali").prop("disabled", true);
        },
        success: function(data) {
            if(!data)
                alert("Ошибка, сообщение не отправлено");
            else
                $("#mailForm").trigger("reset");

                
            $("#sendMail").prop("disabled", false);
        }
    });
});
