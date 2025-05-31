import Nhan__Vien from "./newnhanvien.js";
import List_Nhan_Vien from "./listnhanvien.js";

const listNhanVien = new List_Nhan_Vien();

const getEle = (id) => document.getElementById(id);

const getValue = () => {
    const taiKhoan = getEle("tknv").value.trim();
    const name = getEle("name").value.trim();
    const email = getEle("email").value.trim();
    const passWord = getEle("password").value.trim();
    const ngayLam = getEle("tbNgay").value;
    const tbLuongCB = getEle("tbLuongCB").value
    const chucVu = getEle("chucvu").value;
    const gioLam = getEle("gioLam").value.trim();

    let isValue = true;

    const regexTaiKhoan = /^\d{4,6}$/;
    if (taiKhoan === "") {
        getEle("tbTKNV").innerHTML = `(*) Vui lòng nhập Tài Khoản`;
        getEle("tbTKNV").style.display = "block";
        isValue = false;
    } else if (!regexTaiKhoan.test(taiKhoan)) {
        getEle("tbTKNV").innerHTML = `(*) Tài khoản phải gồm 4-6 chữ số`;
        getEle("tbTKNV").style.display = "block";
        isValue = false;
    } else {
        getEle("tbTKNV").innerHTML = "";
        getEle("tbTKNV").style.display = "none";
    }

    const regexTen = /^[A-Za-zÀ-ỹ\s]+$/u;
    if (name === "") {
        getEle("tbTen").innerHTML = `(*) Vui lòng nhập Tên`;
        getEle("tbTen").style.display = "block";
        isValue = false;
    } else if (!regexTen.test(name)) {
        getEle("tbTen").innerHTML = `(*) Tên chỉ được chứa chữ cái và khoảng trắng`;
        getEle("tbTen").style.display = "block";
        isValue = false;
    } else {
        getEle("tbTen").innerHTML = "";
        getEle("tbTen").style.display = "none";
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        getEle("tbEmail").innerHTML = "(*) Vui lòng nhập Email";
        getEle("tbEmail").style.display = "block";
        isValue = false;
    } else if (!regexEmail.test(email)) {
        getEle("tbEmail").innerHTML = "(*) Email không đúng định dạng";
        getEle("tbEmail").style.display = "block";
        isValue = false;
    } else {
        getEle("tbEmail").innerHTML = "";
        getEle("tbEmail").style.display = "none";

    }

    const regexPass = /^(?=.*\d)(?=.*[A-Z])(?=.*[\W_]).{6,10}$/;
    if (passWord === "") {
        getEle("tbMatKhau").innerHTML = "(*) Vui lòng nhập Mật khẩu";
        getEle("tbMatKhau").style.display = "block";

        isValue = false;
    } else if (!regexPass.test(passWord)) {
        getEle("tbMatKhau").innerHTML = "(*) Mật khẩu 6-10 ký tự, gồm số, in hoa, đặc biệt";
        getEle("tbMatKhau").style.display = "block";
        isValue = false;
    } else {
        getEle("tbMatKhau").innerHTML = "";
        getEle("tbMatKhau").style.display = "none";

    }

    const regexDate = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
    if (ngayLam === "") {
        getEle("tbNgay").innerHTML = "(*) Vui lòng nhập Ngày làm";
        isValue = false;
    } else if (!regexDate.test(ngayLam)) {
        getEle("tbNgay").innerHTML = "(*) Ngày làm phải đúng định dạng mm/dd/yyyy";
        isValue = false;
    } else {
        getEle("tbNgay").innerHTML = "";
    }

    const luong = parseFloat(tbLuongCB);
    if (tbLuongCB === "") {
        getEle("tbLuongCB").innerHTML = "(*) Vui lòng nhập Lương cơ bản";
        isValue = false;
    } else if (isNaN(luong) || luong < 1000000 || luong > 20000000) {
        getEle("tbLuongCB").innerHTML = "(*) Lương phải từ 1.000.000 đến 20.000.000";
        isValue = false;
    } else {
        getEle("tbLuongCB").innerHTML = "";
    }

    const chucVuHopLe = ["Giám đốc", "Trưởng Phòng", "Nhân Viên"];
    if (!chucVuHopLe.includes(chucVu)) {
        getEle("tbChucVu").innerHTML = "(*) Vui lòng chọn chức vụ hợp lệ";
        isValue = false;
    } else {
        getEle("tbChucVu").innerHTML = "";
    }

    const gio = parseFloat(gioLam);
    if (gioLam === "") {
        getEle("tbGiolam").innerHTML = "(*) Vui lòng nhập số giờ làm";
        isValue = false;
    } else if (isNaN(gio) || gio < 80 || gio > 200) {
        getEle("tbGiolam").innerHTML = "(*) Giờ làm phải từ 80 đến 200 giờ";
        isValue = false;
    } else {
        getEle("tbGiolam").innerHTML = "";
    }

    if (!isValue) return null;

    const nhanVien = new Nhan__Vien(taiKhoan, name, email, passWord, ngayLam, tbLuongCB, chucVu, gioLam);
    nhanVien.getTotalSalary();
    return nhanVien;
};

const renderListNhanVien = (data) => {
    let contentHTML = "";
    for (let i = 0; i < data.length; i++) {
        const nv = data[i];
        contentHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${nv.taiKhoan}</td>
                <td>${nv.name}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.getTotalSalary()}</td>     
            </tr>
        `;
    }
    getEle("tableDanhSach").innerHTML = contentHTML;
};

getEle("btnThemNV").onclick = function () {
    const nhanVien = getValue();
    if (!nhanVien) return;
    listNhanVien.addNhanVien(nhanVien);
    renderListNhanVien(listNhanVien.array);
};
