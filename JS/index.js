$(document).ready(function() {
    var i = 1;
    $("#btn2").click(function() {
        $("#myModal").modal();

    });

    function kiemTraTen() {
        var i = 1;
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-z]{1}[a-z]+){1,})$/;
        if ($("#Name").val() == "") {
            $("tbName").html("không để trống");
            return false;

        }
        if (!mauKT.test($("#Name").val())) {
            $("#tbName").html("mối ký tự đầu viết hoa ");
            return true;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemTraTen);

    function kiemTraSoAo() {
        var mauKT = /^\d*$/;
        if ($("#Ao").val() == "") {
            $("#tbAo").html("không đê trống");
            return false;
        }
        if (!mauKT.test($("#Ao").val())) {
            $("#tbAo").html("Dùng số từ 1 đến 100");
            return true;
        } else {
            var soAo = $("#Ao").val();
            if (soAo < 1 || soAo > 100) {
                $("#tbAo").html("từ 1 đến 100");
            } else {
                $("#tbName").html("*");
                return true;
            }
        }
    }
    $("#Ao").blur(kiemTraSoAo);

    function KiemTraDiaChi() {
        var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#DC").val() == "") {
            $("tbDC").html("Không để trống");
            return false;

        }
        if (!mauKT.test($("DC").val())) {
            $("tbDc").html("mõi ksy tự đầu phải viết hoa");
            return true;
        }
        $("tbDc").html("*");
        return true;
    }
    $("#DC").blur(KiemTraDiaChi);

    function kiemTraNTT() {
        if ($("#NTT").val() == "") {
            $("#tbNTT").html("không để trống");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        today = today.setDate(today.getDate() + 7);
        if (today > ntt) {
            $("#tbNTT").html("phải sau ngày hiện tại 7 ngày");
            return false;
        }
        $("#tbNTT").html("*");
        return true;
    }
    $("NTT").blur(kiemTraNTT);

    function kiemTraSDT() {
        var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html("không để trống");
            return false;
        }
        if (!mauKT.test($("#SDT").val())) {
            $("#tbSDT").html(" theo dạng");
            return true;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("SDT").blur(kiemTraSDT);
    $("#Save").click(function() {
        if (kiemTraTen() == true && kiemTraSoAo() == true && kiemTraSDT() == true && kiemTraNTT() == true && KiemTraDiaChi() == true) {
            rơw = "<tr>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#Ao").val() + "</th>";
            row += "<th>" + $("#DC").val() + "</th>";
            row += "<th>" + $("#NTT").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            row += "<th>" + $("#ADD").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");



        }
    })
})

