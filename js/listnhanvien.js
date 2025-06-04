class List_Nhan_Vien {
    constructor(){
        this.array = [];

    }

    addNhanVien (nhanVien){
        this.array.push(nhanVien);
    }
    removeNhanVien (taiKhoan){
        let index = -1;
        for (let i = 0; i < this.array.length; i++) {
            const nv = this.array[i];
            if (nv.taiKhoan === taiKhoan) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            this.array.splice(index, 1);
        }
    }

    updateNhanVien (){}
    seachNhanVien (){}
    filterNhanVien (){}
}


export default List_Nhan_Vien