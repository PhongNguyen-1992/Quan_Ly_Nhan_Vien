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
        this.totalSalary = 0;
        this.xeploai = "";
    }

    calTotalSalary() {              
    if (this.chucVu === "Sếp") {
        this.totalSalary = this.luongCB * 3;
    } else if (this.chucVu === "Trưởng phòng") {
        this.totalSalary = this.luongCB * 2;
    } else if (this.chucVu === "Nhân viên") {
        this.totalSalary = this.luongCB * 1;
    } else {
        this.totalSalary = 0;
    }
}

    tinhXepLoai() {
        if(this.gioLam<160){
            this.xeploai = "Trung Bình"
        } else if(this.gioLam >= 160 && this.gioLam< 176){
            this.xeploai = "Khá"
        } else if (this.gioLam >=176 && this.gioLam<190){
            this.xeploai = " Giỏi"
        } else {
            this.xeploai = "Xuất Sắc"
        }
    }
 
}



export default Nhan__Vien