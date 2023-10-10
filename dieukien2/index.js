//Bai 6 : giai phuong trinh bac 1 ax+b=0
// let a=+prompt("Nhap a");
// let b=+prompt("Nhap b");
// if(a!=0){
//     if(b!=0){
//         alert(-b/a);
//     }
//     else {
//         alert('phuong trinh vo so nghiem');
//     }
//
// }
// else if(a==0){
//    if(b==0){
//        alert('pt vo so nghiem')
//    }
//    else {
//        alert('pt vo nghiem ')
//    }
// }
//Bai 7 : Giai Phuong Trinh Bac 2
// let a=+prompt("Nhap a");
// let b=+prompt("Nhap b");
// let c=+prompt("Nhap c");
// Denta= b*b-4*a*c;
// if(Denta>0){
//     alert((b-Math.sqrt(Denta))/(2*a) + " & " +(-b-Math.sqrt(Denta))/(2*a))
// }
//
// else if(Denta==0){
//     alert(-b/a);
// }
// else {
//     alert('phuowng trinh vo nghiem')
// }
// Bai 8:
// let age=+prompt(" nhap vao tuoi ");
// if(0<age<120){
//     alert("day la tuoi 1 nguoi ")
// else{
//     alert("khong phai tuoi ")
//}
//
// }
//Bai 9: kiem tra canh tam giac
// let a=+prompt("Nhap a");
// let b=+prompt("Nhap b");
// let c=+prompt("Nhap c");
// if( a>0&& b>0&& c>0){
//     if(b + a >c){
//         if(b+c>a){
//             if(a+c> b){
//                 alert(" a,b,c la canh tam giac ")
//             }else
//                 alert(" a,b,c  khong la canh tam giac ")
//
//         }else
//             alert(" a,b,c  khong la canh tam giac ")
//     }else
//         alert(" a,b,c  khong la canh tam giac ")
// }else
// alert(" a,b,c  khong la canh tam giac ")
//Bai 10;Tinh gia dien
// let a = +prompt("nhập số điện của bạn(kWh)")
// let muc1 = 1345;
// let muc2 = 1843;
// let muc3 = 2193;
// let muc4 = 2636;
// let muc5 = 2934;
// let muc6 = 2927;
//
// if(a>0){
//     if(a<=50){
//         alert('số tiền bạn cần trả:' + a*muc1)
//     }
//     else if(a<50 && a<=100){
//         alert('số tiền bạn cần trả:' +(50*muc1+(a-50)*muc2)  )
//     }
//     else if(a<100 && a<=200){
//         alert('số tiền bạn cần trả:' +(50*(muc1+muc2)+(a-100)*muc3)  )
//     }
//     else if(a<200 && a<=300){
//         alert('số tiền bạn cần trả:' +(50*(muc1+muc2)+100*muc3+(a-200)*muc4) )
//     }
//     else if(a<300 && a<=400){
//         alert('số tiền bạn cần trả:' +(50*(muc1+muc2)+100*(muc3+muc4)+(a-300)*muc5)  )
//     }
//     else{
//         alert('số tiền bạn cần trả:' + (50*(muc1+muc2)+100*(muc3+muc4+muc5)+(a-400)*muc6)  )
//     }
// }

//Bai 11: Viet chuong trinh thue ca nhan
let a=+prompt("Muc Thu Nhap Hang Nam");

