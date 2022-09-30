const { Router } = require('express')
const express = require('express')
const router = express.Router()
var unirest = require('unirest');
const parser = require('xml-js');

router.get('/',(req,res)=>{
    res.send("hi")
})

//pipo customer login route
router.post('/customerlogin',(req,res,next)=>{
    const {id,password} = req.body
    console.log(req.body)
    var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_LOGIN_PORTAL_CUST xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><WF_CUSTOMER_ID>'+id+'</WF_CUSTOMER_ID><WF_CUSTOMER_PASSWORD>'+password+'</WF_CUSTOMER_PASSWORD></ns0:ZFM_LOGIN_PORTAL_CUST>'
    var req = unirest('POST','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/CUST_AA_ANGULAR_LOGIN')
.headers({
    'Authorization':'Basic UE9VU0VSQDI6MjAyMkBUZWNo'
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
}
res.status(200).json(result.body)
})
})

//pipo customer profile
router.post('/customerprofile',(req,res,next)=>{
    const {id} = req.body
    console.log(req.body)
    var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_PROFILE_CUST xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><WF_CUSTOMER_ID>'+id+'</WF_CUSTOMER_ID></ns0:ZFM_PROFILE_CUST>'
    var req = unirest('POST','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/CUST_AA_ANGULAR_PROFILE')
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
}
res.status(200).json(result.body)
})
})


//pipo customer delivery list
router.get('/customerdeliverylist',(req,res,next)=>{
    // const search_params = req.url.searchparams
    // const id = search_params.get('id')
    console.log(req.query['id'])
    const id = req.query['id']
    var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_DELIVERY_CUST xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><WF_CUSTOMER_ID>'+id+'</WF_CUSTOMER_ID></ns0:ZFM_DELIVERY_CUST>'
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/CUST_AA_ANGULAR_DELIVERY')
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
}
res.status(200).json(result.body)
})
})


//pipo inquiry list
router.get('/customerinquirylist',(req,res,next)=>{
    console.log(req.query['id'])
    const id = req.query['id']
    var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_INQUIRY_CUST xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><WF_CUSTOMER_ID>'+id+'</WF_CUSTOMER_ID><INQUIRYDATA><item></item></INQUIRYDATA></ns0:ZFM_INQUIRY_CUST>'
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/CUST_AA_ANGULAR_INQUIRY_LIST')
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
}
res.status(200).json(result.body)
})
})


//pipo inquiry details
router.get('/customerinquirydetail',(req,res,next)=>{
    console.log(req.query['id'])
    const id = req.query['id']
    var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZNK_CUST_INQUIRY_DET_FM xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><DOCID>'+id+'</DOCID><INQUIRYDETAILS><item></item></INQUIRYDETAILS></ns0:ZNK_CUST_INQUIRY_DET_FM>'
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/custinquirydetnk')
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
}
res.status(200).json(result.body)
})
})


//pipo invoice list
router.get('/customerinvoicelist',(req,res,next)=>{
    console.log(req.query['id'])
    const id = req.query['id']
    var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_CUST_INVOICELST_KIR xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><IM_CUSTOMER_ID>'+id+'</IM_CUSTOMER_ID><INVOICELST><item></item></INVOICELST></ns0:ZFM_CUST_INVOICELST_KIR>'
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/custkirinvoicelst')
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
})

//pipo salesorderlist
router.get('/customersalesorderlist',(req,res,next)=>{
    console.log(req.query['id'])
    const id = req.query['id']
    var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_SALES_ORDER_CUST xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><SALESORG>0001</SALESORG><WF_CUSTOMER_ID>'+id+'</WF_CUSTOMER_ID></ns0:ZFM_SALES_ORDER_CUST>'
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/CUST_AA_ANGULAR_SALES_ORDER')
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
}
res.status(200).json(result.body)
})
})

//pipo paymentlist
router.get('/customerpaymentlist',(req,res,next)=>{
    console.log(req.query)
    const id = req.query['id']
    const code= req.query['code']
    var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZNK_CUST_PAYMENT_FM xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><COMPANYCODE>'+code+'</COMPANYCODE><DOCUMENTDATE/><WF_CUSTOMER_ID>'+id+'</WF_CUSTOMER_ID><OPDATA><item><BILL_DOC/></item></OPDATA></ns0:ZNK_CUST_PAYMENT_FM>'
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/custpaymentnk')
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
}
res.status(200).json(result.body)
})
})

//pipo invoice detail
router.get('/customerinvoicedetail',(req,res,next)=>{
    console.log(req.query['id'])
    const id = req.query['id']
    var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZNK_CUST_INVOICE_DET_FM xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><DOCID>'+id+'</DOCID><INVOICEDETAIL><item></item></INVOICEDETAIL></ns0:ZNK_CUST_INVOICE_DET_FM>'
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/custinvoicedetnk')
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
}
res.status(200).json(result.body)
})
})

//pipo credit memo
router.get('/customercredit',(req,res,next)=>{
    console.log(req.query['id'])
    const id = req.query['id']
    var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_CREDIT_MEMO_CUST xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><P_CUSTOMER_ID>'+id+'</P_CUSTOMER_ID><CREDITDATA><item></item></CREDITDATA><DEBITDATA><item></item></DEBITDATA></ns0:ZFM_CREDIT_MEMO_CUST>'
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/CUST_AA_ANGULAR_CREDITDEBITMEMO')
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
}
res.status(200).json(result.body)
})
})



router.post('/customerdatasoap',(req,res,next)=>{
    console.log(req.body)
    const {id,password,docid,salesorg,bapitocall} = req.body
    var request = require('request');
    var options = {
      'method': 'POST',
      'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_CUST_AA_SOAP&receiverParty=&receiverService=&interface=SI_CUST_AA_SOAP&interfaceNamespace=http://angularportal.com',
      'headers': {
        'Access-Control-Request-Method': '',
        'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
        'Content-Type': 'text/xml',
        'Authorization': 'Basic UE9VU0VSQDI6MjAyMkBUZWNo',
        'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDgwMjA0MjIFAAQAAAAICgAIUE9VU0VSQDH%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwODAyMDQyMjQ1WjAjBgkqhkiG9w0BCQQxFgQUUtqxQDnCOQPQWj8TjJLlHQqBeQswCQYHKoZIzjgEAwQuMCwCFAqH9kSS0w!xoE8jzSsJWXVzLTgQAhQUlYIj%2F4IT8S%2F3gVPJImQTk1rxfA%3D%3D; JSESSIONID=p1fm7IiZZ3oBZ4Nbu2JcuEb1tspcggF-Y2kA_SAPfp_Ux9-a5JPnNl15a08LeyTC; JSESSIONMARKID=GBJlmgwV1tnPZx2lAQLvfy07A8DwwjoFd0eH5jaQA; saplb_*=(J2EE6906720)6906750'
      },
      body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_CUST_PORTAL_DATA>\r\n         <!--You may enter the following 17 items in any order-->\r\n         <BAPITOCALL>'+bapitocall+'</BAPITOCALL>\r\n         <!--Optional:-->\r\n         <COMPANYCODE>0001</COMPANYCODE>\r\n         <!--Optional:-->\r\n         <CUSTID>'+id+'</CUSTID>\r\n         <!--Optional:-->\r\n         <DOCID>'+docid+'</DOCID>\r\n         <!--Optional:-->\r\n         <DOCUMENTDATE></DOCUMENTDATE>\r\n         <!--Optional:-->\r\n         <SALESORG>'+salesorg+'</SALESORG>\r\n         <!--Optional:-->\r\n         <WF_CUSTOMER_ID>'+id+'</WF_CUSTOMER_ID>\r\n         <!--Optional:-->\r\n         <WF_CUSTOMER_PASSWORD>'+password+'</WF_CUSTOMER_PASSWORD>\r\n         <!--Optional:-->\r\n         <CREDITDATA>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n\r\n            </item>\r\n         </CREDITDATA>\r\n         <!--Optional:-->\r\n         <DEBITDATA>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </DEBITDATA>\r\n         <!--Optional:-->\r\n         <DELIVERYDATA>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n\r\n            </item>\r\n         </DELIVERYDATA>\r\n         <!--Optional:-->\r\n         <DELIVERYDETAIL>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </DELIVERYDETAIL>\r\n         <!--Optional:-->\r\n         <INQUIRYDATA>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </INQUIRYDATA>\r\n         <!--Optional:-->\r\n         <INQUIRYDETAILS>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </INQUIRYDETAILS>\r\n         <!--Optional:-->\r\n         <INVOICEDETAIL>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </INVOICEDETAIL>\r\n         <!--Optional:-->\r\n         <INVOICELIST>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </INVOICELIST>\r\n         <!--Optional:-->\r\n         <OPDATA>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </OPDATA>\r\n      </urn:ZFM_CUST_PORTAL_DATA>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
    };
    request(options, function (error, response,body) {
        if(!error && response.statusCode ==200){
            var result1 = parser.xml2json(body,{compact : true , spaces: 4});
            result1 = JSON.parse(result1);
            res.send(result1);
            console.log(result1);
        }
        else{
            console.log(error)
        }
    })

})


module.exports = router