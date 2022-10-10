import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  constructor(public httpClient: HttpClient) { }

  ngOnInit(){}

  URL = 'https://test.paydollar.com/b2cDemo/eng/payment/payForm.jsp';
  merchantId = "88159266";
  amount = "0.05";
  orderRef = "000000001001";
  currCode = "344";
  mpsMode = "NIL";
  successUrl = "https://asiapaytest.flywheelsites.com/Success.html";
  failUrl = "https://asiapaytest.flywheelsites.com/Fail.html";
  cancelUrl = "https://asiapaytest.flywheelsites.com/Cancel.html";
  payType = "N";
  lang = "E";
  payMethod = "ALL";

  sendPostRequest() {
        //用window.open()来创建一个空的页面
    var newWin = window.open();
//为兼容火狐和谷歌，表单action中的请求需要window.location.origin,但是window.location.origin在IE下不兼容为undefined,故使用以下写法
    var httpPath = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
//动态创建一个表单，将要传递的数据，填充到这个表单中
    var formStr = '<form id="myform" name="myform" method="post" action="https://test.paydollar.com/b2cDemo/eng/payment/payForm.jsp"/>' +
                    '<input type="hidden" name="merchantId" value="88159266"/>' +
                    '<input type="hidden" name="amount" value="0.05" /> ' +
                    '<input type="hidden" name="orderRef" value="000000001005"/> ' +
                    '<input type="hidden" name="currCode" value="344" /> ' +
                    '<input type="hidden" name="mpsMode" value="NIL" /> ' +
                    //'<input type="hidden" name="successUrl" value="http://www.yourdomain.com/Success.html"/>'+
                    //'<input type="hidden" name="failUrl" value="http://www.yourdomain.com/Fail.html"/>' +
                    //'<input type="hidden" name="cancelUrl" value="http://www.yourdomain.com/Cancel.html"/>' +
                    '<input type="hidden" name="payType" value="N"/>'+
                    '<input type="hidden" name="lang" value="E"/>'+
                    '<input type="hidden" name="payMethod" value="ALL"/>'




//把这个表单插入到这个空页面中
    newWin.document.body.innerHTML = formStr;
//提交表单
    newWin.document.forms[0].submit();
    


    /*    let form = new FormData();
        form.append ('merchantId',this.merchantId);
        form.append('amount',this.amount);
        form.append('orderRef',this.orderRef);
        form.append('currCode',this.currCode);
        form.append('mpsMode',this.mpsMode);
        form.append('successUrl',this.successUrl);
        form.append('failUrl',this.failUrl);
        form.append('cancelUrl',this.cancelUrl);
        form.append('payType',this.payType);
        form.append('lang',this.lang);
        form.append('payMethod',this.payMethod);
        

        return this.httpClient.post(this.URL,form)
    */
          };

    }


