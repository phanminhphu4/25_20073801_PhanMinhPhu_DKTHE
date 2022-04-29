$(document).ready(function() {
    var i = 1;
    $("#btn2").click(function() {
        $("#myModal").modal();

    });

    function kiemTraTen() {
        var i = 1;
        var mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-z]{1}[a-z]+){1,})$/;
        if ($("#name").val() == "") {
            $("tbName").html("Vui lòng nhập tên của bạn");
            return false;

        }
        if (!mauKT.test($("#name").val())) {
            $("#tbName").html("Mỗi ký tự đầu viết in hoa ");
            return true;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#name").blur(kiemTraTen);

    function kiemTraSoCMND() {
        var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#CMND").val() == "") {
            $("#tbCMND").html("Vui lòng nhập số CMND");
            return false;
        }
        if (!mauKT.test($("#CMND").val())) {
            $("#tbCMND").html("Nhập CMND định dạng xxx-xxx-xxx");
            return true;
        } 
        $("#tbCMND").html("*");
        return true;
            
    }
    $("#CMND").blur(kiemTraSoCMND);

    function KiemTraQueQuan() {
        var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#QQ").val() == "") {
            $("tbQQ").html("Vui lòng nhập quê quán");
            return false;

        }
        if (!mauKT.test($("QQ").val())) {
            $("tbQQ").html("Mỗi ký tự đầu phải viết hoa");
            return true;
        }
        $("tbQQ").html("*");
        return true;
    }
    $("#QQ").blur(KiemTraQueQuan);

    function kiemTraEmail() {
        if ($("#email").val() == "") {
            $("#tbEmail").html("Vui lòng không để trống");
            return false;
        }
        
        var mauKT = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (!mauKT.test($("email").val())) {
            $("#tbEmail").html("Vui lòng nhập email theo đúng định dạng");
            return false;
        }
        $("#tbEmail").html("*");
        return true;
    }
    $("email").blur(kiemTraEmail);

    function kiemTraSDT() {
        var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#SDT").val())) {
            $("#tbSDT").html("Vui lòng nhập theo dạng 09xx-xxx-xxx");
            return true;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("SDT").blur(kiemTraSDT);
    $("#Save").click(function() {
        if (kiemTraTen() == true && kiemTraSoCMND() == true && kiemTraSDT() == true && KiemTraQueQuan() == true && kiemTraEmail() == true) {
            rơw = "<tr>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#CMND").val() + "</th>";
            row += "<th>" + $("#QQ").val() + "</th>";
            row += "<th>" + $("#EMAIL").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            row += "<th>" + $("#ADD").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");



        }
    })
})
