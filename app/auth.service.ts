import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: max-line-length
  registerUser({ fname, mname, lname, gender, dob, pass, bgroup, weight, height, ddate, hemo, age, flat, street, city, state, country, pincode, connum, email, diabetes, heart, cancer, jaundies, malaria, btransform, ptattoo, pragnancy, hepatitisb, tb, cjd, hivaids, ivdrug, odiseases }: { fname; mname; lname; gender; dob; pass; bgroup; weight; height; ddate; hemo; age; flat; street; city; state; country; pincode; connum; email; diabetes; heart; cancer; jaundies; malaria; btransform; ptattoo; pragnancy; hepatitisb; tb; cjd; hivaids; ivdrug; odiseases; }) {
  // tslint:disable-next-line: max-line-length
  this.http.post('http://localhost:8000/registeruser', { fname , mname , lname , gender , dob , pass , bgroup , weight , height , ddate , hemo , age , flat , street , city , state , country , pincode , connum , email , diabetes , heart , cancer , jaundies , malaria , btransform , ptattoo , pragnancy , hepatitisb , tb , cjd , hivaids , ivdrug , odiseases })
  .subscribe( (response: any) => {
    if ( response.isSucceed ) {
      localStorage.setItem('registernew', '1');
    }
  }, (error: any) => {
    if (error.isSucceed === 'false') {
      localStorage.setItem('registernew', '0');
    }  });
  }

  alreadyLogin({email}: {email: any}) {
    this.http.post('http://localhost:8000/alreadylogin', { email })
    .subscribe( (response: any) => {
      if (response.emailregister) {
        // localStorage.removeItem('alreadyLogin');
        localStorage.setItem('alreadyLogin', '1');
      }
    }, (error: any) => {});
  }

  updatePassword({email, pass}: { email; pass; }) {
    this.http.post('http://localhost:8000/updatepassword', { email , pass })
    .subscribe( (response: any) => {
      if ( response.updated ) {
        localStorage.setItem('update', '1');
      }
    }, (error: any) => {});
  }

  userLogin({email, pass}: { email; pass; }) {
    this.http.post('http://localhost:8000/userlogin', { email , pass })
    .subscribe( (response: any) => {
      if ( response.ulogin ) {
        localStorage.setItem('userlogin', '1');
        localStorage.setItem('email', email);
      } else {
        localStorage.setItem('userlogin', '0');
      }
    }, (error: any) => {
      localStorage.setItem('userlogin', '0');
    });
  }

  sendMail({email, otp}: { email; otp; }) {
    this.http.post('http://localhost:8000/sendmail', { email , otp })
    .subscribe( (response: any) => {
    }, (error: any) => {});
  }

  // tslint:disable-next-line: max-line-length
  newRequest({pname, gender, bgroup, bags, hname, email, connum, city, address}: {pname, gender, bgroup, bags, hname, email, connum, city, address}) {
    this.http.post('http://localhost:8000/newrequest', { pname, gender, bgroup, bags, hname, email, connum, city, address })
    .subscribe( (response: any) => {
      if ( response.isSucceed ) {
        localStorage.setItem('newRegister', '1');
      }
    }, (error: any) => {
      localStorage.setItem('newRegister', '0');
    });
  }

  getRequests() {
    return this.http.post('http://localhost:8000/getrequest', { });
  }

  getUserInfo() {
    return this.http.post('http://localhost:8000/getuserinfo', {});
  }

}
