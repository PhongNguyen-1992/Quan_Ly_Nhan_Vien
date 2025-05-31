class Nhan__Vien {
    constructor(_taiKhoan, _name, _email, _passWord, _ngayLam, _luongCB, _chucVu, _gioLam) {
        this.taiKhoan = _taiKhoan;
        this.name = _name;
        this.email = _email;
        this.passWord = _passWord;
        this.ngayLam = _ngayLam;
        this.luongCB = parseFloat(_luongCB);
        this.chucVu = _chucVu;
        this.gioLam = parseFloat(_gioLam);
    }

    getTotalSalary() {
        switch (this.chucVu) {
            case "Sếp":
                return this.luongCB * 3;
            case "Trưởng phòng":
                return this.luongCB * 2;
            case "Nhân viên":
                return this.luongCB * 1;
            default:
                return 0;
        }
    }

    getxepLoai() {
        if (this.gioLam >= 192) return "Xuất sắc";
        if (this.gioLam >= 176) return "Giỏi";
        if (this.gioLam >= 160) return "Khá";
        return "Trung bình";
    }
}



export default Nhan__Vien