class List_Nhan_Vien {
    constructor(){
        this.array = [];

    }

    addNhanVien (nhanVien){
        this.array.push(nhanVien);
    }
    findIndex (taiKhoan){
        let index = -1;
        for (let i = 0; i < this.array.length; i++) {
            const nv = this.array[i];
            if (nv.taiKhoan === taiKhoan) {
                index = i;
                break;
            }
        }
        return index;
    }
    removeNhanVien (taiKhoan){
        let index = this.findIndex(taiKhoan);
        if (index !== -1) {
            this.array.splice(index, 1);
        }
    }
    getNhanVien (taiKhoan){
        let index = this.findIndex(taiKhoan);
        if (index !== -1) {
            // Tìm thấy nhân viên, nếu index !== -1 thì trả về nhân viên
            // tại vị trí index trong mảng array
            return this.array[index];
        }
        return null;
    }
    updateNhanVien (taiKhoan){
        let index = this.findIndex(taiKhoan.taiKhoan)
        if (index !== -1) {
            this.array[index] = taiKhoan;
        }
    }
  
//    filterNhanVien(type){
//     let arrFilter = [];
//     for (let i =0; i <this.array.length;i++){
//         const nv = this.array[i];
//         if(nv.type === type){
//             arrFilter.push(nv)
//         }
//     }
//     return arrFilter
//    }
}


export default List_Nhan_Vien