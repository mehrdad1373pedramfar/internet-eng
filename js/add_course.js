$(document).ready(function () {

    $('#btn-add-course').click(function () {
        var html = '<div class="row"> <div class="medium-1 columns"> <button type="button" style="width:100%;margin-top:23px " class="button alert btn-remove-course">حذف</button> </div> <div class="medium-3 columns"> <label>زمان امتحان <input type="text" > </label> </div> <div class="medium-3 columns"> <label>زمان ارایه <input type="text" > </label> </div> <div class="medium-3 columns"> <label>استاد <select> <option value="">عیازی</option> <option value="">رضایی </option> </select> </label> </div> <div class="medium-2 columns"> <label>درس <select> <option value="">ریاضی 1</option> <option value="">ریاضی 2</option> <option value="">ریاضی 3</option> <option value="">مهندسی</option> <option value="">آمار</option> <option value="">معادلات</option> </select> </label> </div> </div> <hr>';


        $('#term_courses').append(html);

        $('.btn-remove-course').on('click', function () {
            var elm = $(this).parent().parent();
            elm.next().remove();
            elm.remove();
        })

    })




})




