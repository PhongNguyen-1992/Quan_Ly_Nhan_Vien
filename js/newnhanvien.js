class Nhan__Vien {
    constructor(_taiKhoan,_name,_email,_passWord,_tbNgay,_tbLuongCB,_chucVu,_gioLam)
    {
        this.taiKhoan = _taiKhoan;
        this.name = _name;
        this.email = _email;
        this.passWord = _passWord;
        this.tbNgay = _tbNgay;
        this.tbLuongCB = _tbLuongCB;
        this.chucVU = _chucVu;
        this.gioLam = _gioLam;
        this.toTalSalary = 0;
        this.xepLoai = "";
            }
    getTotalSalary() {
        switch(this.chucVU){
            case "Sếp":
                return this.tbLuongCB *3;
            case "Trưởng Phòng":
                return this.tbLuongCB *2;
            case "Nhân Viên":
                return this.tbLuongCB*1;
            default:
                return 0;
        }
    }
    getxepLoai(){
        switch(this.gioLam){

        }
    }
}


export default Nhan__Vien