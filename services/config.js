((configRepo, dotenv)=>{
    dotenv.config();
    configRepo.SetConfig = (paypal)=>{
      var config = {
        host: "api.sandbox.paypal.com",
        port: "",
        //before this app works, you will need to visit https://developer.paypal.com/developer/applications and get the client ID and Secret
        client_id:"",
        client_secret: ""
      };
      paypal.configure(config);
    };
  })
  (
    module.exports,
    require('dotenv')
  )