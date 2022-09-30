const { Router } = require('express')
const express = require('express')
const router = express.Router()
var unirest = require('unirest');
const request= require('request')
const parser = require('xml-js');


router.get('/', function(req, res) {
    res.send('Vendor Index Page');
});

router.get('/vendorprofile',(req,res,next)=>{
    console.log(req.query['id'])
    const id = req.query['id']
    var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_PROFILE_VEN xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><P_VENDOR_ID>'+id+'</P_VENDOR_ID><BANKDATA><item></item></BANKDATA><VENDORBANKDATA><item></item></VENDORBANKDATA></ns0:ZFM_PROFILE_VEN>'
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/VEN_AA_PROFILE_ANGULAR')
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

router.get('/vendorpayment',(req,res,next)=>{
    console.log(req.query['id'])
    const id = req.query['id']
    var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_PAYMENT_VEN xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><COMPCODE>0001</COMPCODE><KEYDATEFROM/><P_VENDOR_ID>'+id+'</P_VENDOR_ID><TODATE/><DATACLOSE><item></item></DATACLOSE><DATAOPEN><item></item></DATAOPEN></ns0:ZFM_PAYMENT_VEN>'
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/VEN_AA_PAYMENT_ANGULAR')
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

router.get('/vendorpurchase',(req,res,next)=>{
    console.log(req.query['id'])
    const id = req.query['id']
    var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_PURCHASE_VEN xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><P_VENDOR_ID>'+id+'</P_VENDOR_ID><HEADERDATA><item></item></HEADERDATA><ITEMDATA><item></item></ITEMDATA><PURCHORDER><item></item></PURCHORDER></ns0:ZFM_PURCHASE_VEN>'
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/VEN_AA_PURCHASE_ANGULAR')
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

router.get('/vendorinvoicedetail',(req,res,next)=>{
    console.log(req.query['id'])
    const id = req.query['id']
    var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_INVOICE_DETAIL_VEN xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><P_NUMBER>'+id+'</P_NUMBER><DATA><item></item></DATA></ns0:ZFM_INVOICE_DETAIL_VEN>'
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/VEN_AA_INVOICE_DETAIL_ANGULAR')
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

router.get('/vendorcreditmemo',(req,res,next)=>{
    console.log(req.query['id'])
    const id = req.query['id']
    var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_CREDITMEMO_VEN xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><P_VENDOR_ID>'+id+'</P_VENDOR_ID><CREDDATA><item></item></CREDDATA><DEBDATA><item></item></DEBDATA></ns0:ZFM_CREDITMEMO_VEN>'
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/VEN_AA_CREDITMEMO_ANGULAR')
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

router.get('/vendorquotation',(req,res,next)=>{
    console.log(req.query['id'])
    const id = 0000000005
    var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_QUOTATION_VEN xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><P_VENDOR_ID>'+id+'</P_VENDOR_ID><EKPODATA><item></item></EKPODATA><QUOTHEAD><item></item></QUOTHEAD><QUOTVALUES><item></item></QUOTVALUES><RETURN><item></item></RETURN></ns0:ZFM_QUOTATION_VEN>'
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/VEN_AA_QUOTATION_ANGULAR')
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

router.get('/vendorinvoicelist',(req,res,next)=>{
    console.log(req.query['id'])
    const id = req.query['id']
    var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_INVOICE_LIST_VEN xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><P_VENDOR_ID>'+id+'</P_VENDOR_ID><INVOICE><item></item></INVOICE><RETURN><item></item></RETURN></ns0:ZFM_INVOICE_LIST_VEN>'
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/VEN_AA_INVOICE_LIST_ANGULAR')
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

router.get('/vendorgoods',(req,res,next)=>{
    console.log(req.query['id'])
    const id = req.query['id']
    var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_GOODS_VEN xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><P_VENDOR_ID>'+id+'</P_VENDOR_ID><GOODSHEAD><item></item></GOODSHEAD><GOODSVALUE><item></item></GOODSVALUE><RESULT><item></item></RESULT></ns0:ZFM_GOODS_VEN>'
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/VEN_AA_GOODS_ANGULAR')
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

router.post('/vendorlogin',(req,res,next)=>{
    const {id,password} = req.body
    var data = '<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_LOGIN_VEN xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><P_VENDOR_ID>'+id+'</P_VENDOR_ID><P_VENDOR_PASSWORD>'+password+'</P_VENDOR_PASSWORD></ns0:ZFM_LOGIN_VEN>'
    var req = unirest('POST','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/VEN_AA_LOGIN_ANGULAR')
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


router.post('/vendordatasoap',(req,res,next)=>{
    const {id,password,code,callbapi,no} = req.body
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VEN_AA_SOAP&receiverParty=&receiverService=&interface=SI_VEN_AA_SOAP&interfaceNamespace=http://angularportal.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'text/xml',
    'Authorization': 'Basic UE9VU0VSQDI6MjAyMkBUZWNo',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDgwNDA0MDIFAAQAAAAICgAIUE9VU0VSQDH%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwODA0MDQwMjAzWjAjBgkqhkiG9w0BCQQxFgQUQ8m1swmdNIdvNT5YrrVOgA5HaocwCQYHKoZIzjgEAwQuMCwCFEAcJEG6DhDNNyVsZ5EoAU67ce7aAhQQB%2F6EeEUxd0kNcQyuLbYcZxSouA%3D%3D; JSESSIONID=UxU0dN4ctTSDYrc0-w6qisQ4fQRnggF-Y2kA_SAPShfXn__Sqd70HtrR74QPm2Gm; JSESSIONMARKID=zyQwLwEkavFiSjzjDz6BT8JnfvOot7E0OdH35jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_VEN_PORTAL_DATA>\r\n         <!--You may enter the following 26 items in any order-->\r\n         <!--Optional:-->\r\n         <COMPCODE>'+code+'</COMPCODE>\r\n         <!--Optional:-->\r\n         <KEYDATEFROM></KEYDATEFROM>\r\n         <P_CALLBAPI>'+callbapi+'</P_CALLBAPI>\r\n         <!--Optional:-->\r\n         <P_NUMBER>'+no+'</P_NUMBER>\r\n         <!--Optional:-->\r\n         <P_VENDOR_ID>'+id+'</P_VENDOR_ID>\r\n         <!--Optional:-->\r\n         <P_VENDOR_PASSWORD>'+password+'</P_VENDOR_PASSWORD>\r\n         <!--Optional:-->\r\n         <TODATE></TODATE>\r\n         <!--Optional:-->\r\n         <BANKDATA>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </BANKDATA>\r\n         <!--Optional:-->\r\n         <CREDDATA>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n              \r\n            </item>\r\n         </CREDDATA>\r\n         <!--Optional:-->\r\n         <DATA>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </DATA>\r\n         <!--Optional:-->\r\n         <DATACLOSE>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </DATACLOSE>\r\n         <!--Optional:-->\r\n         <DATAOPEN>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </DATAOPEN>\r\n         <!--Optional:-->\r\n         <DEBDATA>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </DEBDATA>\r\n         <!--Optional:-->\r\n         <EKPODATA>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </EKPODATA>\r\n         <!--Optional:-->\r\n         <GOODSHEAD>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </GOODSHEAD>\r\n         <!--Optional:-->\r\n         <GOODSRESULT>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </GOODSRESULT>\r\n         <!--Optional:-->\r\n         <GOODSVALUE>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </GOODSVALUE>\r\n         <!--Optional:-->\r\n         <HEADERDATA>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </HEADERDATA>\r\n         <!--Optional:-->\r\n         <INVOICE>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </INVOICE>\r\n         <!--Optional:-->\r\n         <INVOICERETURN>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </INVOICERETURN>\r\n         <!--Optional:-->\r\n         <ITEMDATA>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </ITEMDATA>\r\n         <!--Optional:-->\r\n         <PURCHORDER>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </PURCHORDER>\r\n         <!--Optional:-->\r\n         <QUOTHEAD>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </QUOTHEAD>\r\n         <!--Optional:-->\r\n         <QUOTVALUES>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </QUOTVALUES>\r\n         <!--Optional:-->\r\n         <RETURN>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </RETURN>\r\n         <!--Optional:-->\r\n         <VENDORBANKDATA>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </VENDORBANKDATA>\r\n      </urn:ZFM_VEN_PORTAL_DATA>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

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