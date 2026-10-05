Node.js  Simple And Easy Reverse Shell By KaliMan

Just a lightweight Proof of Concept (PoC) written in Node.js to test reverse shells and understand basic socket networking in node js.

--------------------------------------------------------------------------------------------------------------------------------
Disclaimer 
This repo is purely for educational purposes.
Don't do anything stupid or illegal with it. Test it only on your own local machines or in a controlled lab where you have full permission.
I take zero responsibility for what anyone does with this code or any damage caused by it. Use it to learn, not to break things.
--------------------------------------------------------------------------------------------------------------------------------
(Note : u have to adjust the Ip and The port Before Using the script and don't change nothing else)
After that u can try if the script working by using nc
split the terminal By CTRL+SHIFT+D And use this command in the first tab

```
nc -nvlp 8000
```
now in the second tab:

```
node reverse_shell.js
```

now u should get reverse shell in ur own local host

---------------------------------------------------------------------------
Note : if u are using this against real website (u have premission at)
don't forget to use Public ip and Port Forwarding in ur Router to ur machine 
or just use vps to get the shell
u can search how to receive shell correctly in internet ;)
---------------------------------------------------------------------------
