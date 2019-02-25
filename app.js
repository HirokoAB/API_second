

// 追加ボタンを押した時の処理
$("#btnAdd").on("click", function(){
    clearDivAlert();

    // タスクと期限テキストの値を、表に追加する
         $('#todoList').append(
         '<tr><td><button type="button" class="btn btn-outline-danger btn-sm mx-0 btnDel" id="btnDel">OK</button></td>' 
         + '<td>' + $('#inputTask').val() + '</td>' 
        + '<td>' + $('#flatpickr').val() + '</td></tr>');





  
    // タスクと期限テキストを空にして
    $('#inputTask').val('');
    $('#flatpickr').val('');

});


$(document).on("click", ".btnDel", function () {
    $(this).closest("tr").remove();
    clearDivAlert();
});

// 警告部の初期化
function clearDivAlert(){
    $('#divAlert').css('display', 'none');
    $('#inputAlert').text('');
}

flatpickr("#flatpickr", {});

