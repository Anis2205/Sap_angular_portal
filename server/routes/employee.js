const { Router } = require('express')
const express = require('express')
const router = express.Router()
var unirest = require('unirest');
const request= require('request')
const parser = require('xml-js');

router.get('/', function(req, res) {
    res.send('Vendor Index Page');
});

router.post('/employeedata',(req,res,next)=>{
    const {callbapi} = req.body
    if(callbapi == "LOGIN"){
        const {id,password} = req.body
        var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_EMP_PORTAL_DATA xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><WF_CALLBAPICALL>LOGIN</WF_CALLBAPICALL><WF_EMPID>3</WF_EMPID><WF_EMPLOYEE_ID>'+id+'</WF_EMPLOYEE_ID><WF_EMPLOYEE_PASSWORD>'+password+'</WF_EMPLOYEE_PASSWORD><WF_LEAVE_DATA_ID>3</WF_LEAVE_DATA_ID><WF_PAYSLIP_ID>3</WF_PAYSLIP_ID><WF_PROFILE_ID>3</WF_PROFILE_ID><WF_SEQNO>0001</WF_SEQNO><IT_PAYSLIP><item></item></IT_PAYSLIP><LEAVEDATA><item></item></LEAVEDATA><PAYSLIP_HTML><item></item></PAYSLIP_HTML><PAYSLIP_TAB><item></item></PAYSLIP_TAB></ns0:ZFM_EMP_PORTAL_DATA>'
        var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/EMP_AA_ANGULAR_DATA')
    .headers({
        'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy'
    })
    .send(
       data
    )
    .end(function(result){
    if(result.error){
        console.log('unable to fetch data')
    }
    else{
        this.res = result.body;
        console.log(this.res)
    }
    res.status(200).json(result.body)
    })
    }
    else{
        const {id,seqno} = req.body
        console.log(id,seqno,callbapi)
        var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_EMP_PORTAL_DATA xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><WF_CALLBAPICALL>'+callbapi+'</WF_CALLBAPICALL><WF_EMPID>'+id+'</WF_EMPID><WF_EMPLOYEE_ID>'+id+'</WF_EMPLOYEE_ID><WF_EMPLOYEE_PASSWORD></WF_EMPLOYEE_PASSWORD><WF_LEAVE_DATA_ID>'+id+'</WF_LEAVE_DATA_ID><WF_PAYSLIP_ID>'+id+'</WF_PAYSLIP_ID><WF_PROFILE_ID>'+id+'</WF_PROFILE_ID><WF_SEQNO>'+seqno+'</WF_SEQNO><IT_PAYSLIP><item></item></IT_PAYSLIP><LEAVEDATA><item></item></LEAVEDATA><PAYSLIP_HTML><item></item></PAYSLIP_HTML><PAYSLIP_TAB><item></item></PAYSLIP_TAB></ns0:ZFM_EMP_PORTAL_DATA>'
        var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/EMP_AA_ANGULAR_DATA')
    .headers({
        'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy'
    })
    .send(
       data
    )
    .end(function(result){
    if(result.error){
        console.log('unable to fetch data')
    }
    else{
        this.res = result.body;
        // console.log(this.res)
    }
    res.status(200).json(result.body)
    })
    }
    
})


router.post('/employeedatasoap',(req,res,next)=>{
    console.log(req.body)
    const {id,password,callbapi,seqno} = req.body
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EMP_AA_ANGULAR_SOAP&receiverParty=&receiverService=&interface=SI_EMP_AA_ANGULAR&interfaceNamespace=http://angularportal.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'text/xml',
    'Authorization': 'Basic UE9VU0VSQDI6MjAyMkBUZWNo',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDgwMzA3MTMFAAQAAAAICgAIUE9VU0VSQDH%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwODAzMDcxMzMyWjAjBgkqhkiG9w0BCQQxFgQUUnkvRbjVy13kI8H%2FWV5y3dqvAmkwCQYHKoZIzjgEAwQuMCwCFCDNgLjaQ8a5I8eWFY2lLrh9RGEAAhR!qJeIb2wM6zdIYE%2F4Rpt5!ijUkg%3D%3D; JSESSIONID=Px7aW1tNR7q3WNyEpRZKBOS1bY1iggF-Y2kA_SAPVjoMSGxAyZzV9vuH7_1Kl9gU; JSESSIONMARKID=PgzQgw3-eaRCrUOsV49-KbVGl6E7DZtmIy3n5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_EMP_PORTAL_DATA>\r\n         <!--You may enter the following 12 items in any order-->\r\n         <WF_CALLBAPICALL>'+callbapi+'</WF_CALLBAPICALL>\r\n         <!--Optional:-->\r\n         <WF_EMPID>'+id+'</WF_EMPID>\r\n         <!--Optional:-->\r\n         <WF_EMPLOYEE_ID>'+id+'</WF_EMPLOYEE_ID>\r\n         <!--Optional:-->\r\n         <WF_EMPLOYEE_PASSWORD>'+password+'</WF_EMPLOYEE_PASSWORD>\r\n         <!--Optional:-->\r\n         <WF_LEAVE_DATA_ID>'+id+'</WF_LEAVE_DATA_ID>\r\n         <!--Optional:-->\r\n         <WF_PAYSLIP_ID>'+id+'</WF_PAYSLIP_ID>\r\n         <!--Optional:-->\r\n         <WF_PROFILE_ID>'+id+'</WF_PROFILE_ID>\r\n         <!--Optional:-->\r\n         <WF_SEQNO>'+seqno+'</WF_SEQNO>\r\n         <!--Optional:-->\r\n         <IT_PAYSLIP>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               <!--Optional:-->\r\n               <SEQUENCENUMBER></SEQUENCENUMBER>\r\n               <!--Optional:-->\r\n               <FPPERIOD></FPPERIOD>\r\n               <!--Optional:-->\r\n               <FPBEGIN></FPBEGIN>\r\n               <!--Optional:-->\r\n               <FPEND></FPEND>\r\n               <!--Optional:-->\r\n               <BONUSDATE></BONUSDATE>\r\n               <!--Optional:-->\r\n               <PAYDATE></PAYDATE>\r\n               <!--Optional:-->\r\n               <PAYTYPE></PAYTYPE>\r\n               <!--Optional:-->\r\n               <PAYID></PAYID>\r\n               <!--Optional:-->\r\n               <OCREASON></OCREASON>\r\n               <!--Optional:-->\r\n               <PAYTYPE_TEXT></PAYTYPE_TEXT>\r\n               <!--Optional:-->\r\n               <OCREASON_TEXT></OCREASON_TEXT>\r\n            </item>\r\n         </IT_PAYSLIP>\r\n         <!--Optional:-->\r\n         <LEAVEDATA>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               <!--Optional:-->\r\n               <EMPLOYEENO></EMPLOYEENO>\r\n               <!--Optional:-->\r\n               <SUBTYPE></SUBTYPE>\r\n               <!--Optional:-->\r\n               <OBJECTID></OBJECTID>\r\n               <!--Optional:-->\r\n               <LOCKINDIC></LOCKINDIC>\r\n               <!--Optional:-->\r\n               <VALIDEND></VALIDEND>\r\n               <!--Optional:-->\r\n               <VALIDBEGIN></VALIDBEGIN>\r\n               <!--Optional:-->\r\n               <RECORDNR></RECORDNR>\r\n               <!--Optional:-->\r\n               <START></START>\r\n               <!--Optional:-->\r\n               <END></END>\r\n               <!--Optional:-->\r\n               <ABSENCETYPE></ABSENCETYPE>\r\n               <!--Optional:-->\r\n               <NAMEOFABSENCETYPE></NAMEOFABSENCETYPE>\r\n               <!--Optional:-->\r\n               <ABSENCEDAYS></ABSENCEDAYS>\r\n               <!--Optional:-->\r\n               <ABSENCEHOURS></ABSENCEHOURS>\r\n            </item>\r\n         </LEAVEDATA>\r\n         <!--Optional:-->\r\n         <PAYSLIP_HTML>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               <!--Optional:-->\r\n               <LINE></LINE>\r\n            </item>\r\n         </PAYSLIP_HTML>\r\n         <!--Optional:-->\r\n         <PAYSLIP_TAB>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               <!--Optional:-->\r\n               <FORMAT_COL></FORMAT_COL>\r\n               <!--Optional:-->\r\n               <TEXT_COL></TEXT_COL>\r\n            </item>\r\n         </PAYSLIP_TAB>\r\n      </urn:ZFM_EMP_PORTAL_DATA>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

};
request(options, function (error, response,body) {
    if(!error && response.statusCode ==200){
        var result1 = parser.xml2json(body,{compact : true , spaces: 4});
        result1 = JSON.parse(result1);
        res.send(result1);
        console.log(result1);
    }
})
})



module.exports = router;