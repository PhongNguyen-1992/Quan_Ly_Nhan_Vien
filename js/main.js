import Nhan__Vien from "./newnhanvien.js";
import List_Nhan_Vien from "./listnhanvien.js";

const listNhanVien = new List_Nhan_Vien();

const getEle = (id) => {
    return document.getElementById(id)
};

// Chỉnh út Thêm Ẩn Nút Cập Nhật
getEle("btnThem").onclick = function () {
    getEle("btnThemNV").style.display = "block";

    getEle("btnCapNhat").style.display = "none"
    getEle("header-title").innerHTML = "Thêm Người Dùng Mới"
    getEle("tknv").disabled = false; // Mở quyền sử do khi cập nhật đã khóa
    resetForm(); // xóa form

};
// Hàm lấy giá trị từ form và kiểm tra tính hợp lệ
const getValue = () => {
    const taiKhoan = getEle("tknv").value;
    const name = getEle("name").value;
    const email = getEle("email").value;
    const passWord = getEle("password").value;
    const ngayLam = getEle("datepicker").value;
    const tbLuongCB = getEle("luongCB").value
    const chucVu = getEle("chucvu").value;
    const gioLam = getEle("gioLam").value;

    let isValue = true;
    getEle("tknv").addEventListener("blur", function () {
        const taiKhoan = getEle("tknv").value;
        if (listNhanVien.findIndex(taiKhoan) !== -1) {
            getEle("tbTKNV").innerHTML = "(*) Tài khoản đã tồn tại";
            getEle("tbTKNV").style.display = "block";
        } else {
            getEle("tbTKNV").innerHTML = "";
            getEle("tbTKNV").style.display = "none";
        }
    });
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

    const regexDate = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (ngayLam === "") {
        getEle("tbNgay").innerHTML = "(*) Vui lòng nhập Ngày làm";
        getEle("tbNgay").style.display = "block";
        isValue = false;
    } else if (!regexDate.test(ngayLam)) {
        getEle("tbNgay").innerHTML = "(*) Ngày làm phải đúng định dạng mm/dd/yyyy";
        getEle("tbNgay").style.display = "block";

        isValue = false;
    } else {
        getEle("tbNgay").innerHTML = "";
        getEle("tbNgay").style.display = "none";

    }

    const luong = parseFloat(tbLuongCB);
    if (tbLuongCB === "") {
        getEle("tbLuongCB").innerHTML = "(*) Vui lòng nhập Lương cơ bản";
        getEle("tbLuongCB").style.display = "block";

        isValue = false;
    } else if (isNaN(luong) || luong < 1000000 || luong > 20000000) {
        getEle("tbLuongCB").innerHTML = "(*) Lương phải từ 1.000.000 đến 20.000.000";
        getEle("tbLuongCB").style.display = "block";

        isValue = false;
    } else {
        getEle("tbLuongCB").innerHTML = "";
        getEle("tbLuongCB").style.display = "none";

    }

    const chucVuHopLe = ["Sếp", "Trưởng phòng", "Nhân viên"];
    if (!chucVuHopLe.includes(chucVu)) {
        getEle("tbChucVu").innerHTML = "(*) Vui lòng chọn chức vụ hợp lệ";
        getEle("tbChucVu").style.display = "block";

        isValue = false;
    } else {
        getEle("tbChucVu").innerHTML = "";
        getEle("tbChucVu").style.display = "none";

    }

    const gio = parseFloat(gioLam);
    if (gioLam === "") {
        getEle("tbGiolam").innerHTML = "(*) Vui lòng nhập số giờ làm";
        getEle("tbGiolam").style.display = "block";
        isValue = false;
    } else if (isNaN(gio) || gio < 80 || gio > 200) {
        getEle("tbGiolam").innerHTML = "(*) Giờ làm phải từ 80 đến 200 giờ";
        getEle("tbGiolam").style.display = "block";
        isValue = false;
    } else {
        getEle("tbGiolam").innerHTML = "";
        getEle("tbGiolam").style.display = "none";

    }

    if (!isValue) return null;

    const nhanVien = new Nhan__Vien(taiKhoan, name, email, passWord, ngayLam, tbLuongCB, chucVu, gioLam);
    nhanVien.calTotalSalary();
    nhanVien.tinhXepLoai();
    return nhanVien;
};

const renderListNhanVien = (data) => {
    let contentHTML = "";
    for (let i = 0; i < data.length; i++) {
        const nhanVien = data[i];
        contentHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${nhanVien.taiKhoan}</td>
                <td>${nhanVien.name}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.ngayLam}</td>
                <td>${nhanVien.chucVu}</td>
                <td>${nhanVien.totalSalary}</td>     
                <td>${nhanVien.xeploai}</td> 
                <td>
  <div class="d-flex gap-2">
    <button class="btn btn-info" style="margin-right: 10px;" data-toggle="modal" data-target="#myModal" onclick="onEditNV('${nhanVien.taiKhoan}')">Edit</button>
    <button class="btn btn-danger" onclick="onDeleteNV('${nhanVien.taiKhoan}')">Delete</button>
  </div>
</td>     

            </tr>
        `;
    }
    getEle("tableDanhSach").innerHTML = contentHTML;
};
const resetForm = () => {
    getEle("formDangKy").reset();
}
// Nút Thêm Nhân Viên/ reset form
getEle("btnThemNV").onclick = function () {
    const nhanVien = getValue();
    if (!nhanVien) return;
    listNhanVien.addNhanVien(nhanVien);
    renderListNhanVien(listNhanVien.array);
    setLocalStorage(listNhanVien.array);
    // Close modal
    getEle("btnDong").click();

};

// Nút Delete
const onDeleteNV = (taiKhoan) => {
    listNhanVien.removeNhanVien(taiKhoan);
    renderListNhanVien(listNhanVien.array);
    setLocalStorage(listNhanVien.array);
};
// Nút Edit
const onEditNV = (taiKhoan) => {
    getEle("btnCapNhat").style.display = "block";
    getEle("btnThemNV").style.display = "none";
    getEle("header-title").innerHTML = "Cập Nhật Nhân Viên";
    const nhanVien = listNhanVien.getNhanVien(taiKhoan);
    if (!nhanVien) return;
    //Hien thị thông tin nhân viên lên form
    getEle("tknv").disabled = true; // Khóa quyền sử
    getEle("tknv").value = nhanVien.taiKhoan;
    getEle("name").value = nhanVien.name;
    getEle("email").value = nhanVien.email;
    getEle("password").value = nhanVien.passWord;
    getEle("datepicker").value = nhanVien.ngayLam;
    getEle("luongCB").value = nhanVien.luongCB;
    getEle("chucvu").value = nhanVien.chucVu;
    getEle("gioLam").value = nhanVien.gioLam;

    // Close modal
    getEle("btnDong").click();
};
window.onEditNV = onEditNV;
// Nút Cập Nhật
getEle("btnCapNhat").onclick = function () {
    const nhanVien = getValue();
    if (!nhanVien) return;
    console.log(nhanVien);
    listNhanVien.updateNhanVien(nhanVien);
    renderListNhanVien(listNhanVien.array);
    setLocalStorage(listNhanVien.array);
    getEle("btnDong").click();



}
// khai báo đối tượng onDeleteNV ra đối tượng window
window.onDeleteNV = onDeleteNV;
// Hàm tìm kiếm nhân viên dựa xếp loại
const onSearch = () => {
    const searchValue = getEle("searchName").value.toLowerCase();
    const filteredList = listNhanVien.array.filter(nv => nv.xeploai.toLowerCase().includes(searchValue));
    renderListNhanVien(filteredList);
};
// Gọi hàm tìm kiếm khi người dùng nhập vào ô tìm kiếm
getEle("searchName").addEventListener("input", onSearch);


// Sét dữ liệu xuống LocalStorage
const setLocalStorage = (data) => {
    const dataString = JSON.stringify(data);
    localStorage.setItem("LISTNV", dataString);
};
// Lấy dữ liệu dưới LocalStorage lên
const getLocalStorage = () => {
    const dataString = localStorage.getItem("LISTNV");
    if (dataString) {
        const data = JSON.parse(dataString);
        listNhanVien.array = data
        renderListNhanVien(listNhanVien.array);
    }
};
// Gọi hàm lấy dữ liệu từ LocalStorage khi trang được tải
getLocalStorage("LISTNV");

