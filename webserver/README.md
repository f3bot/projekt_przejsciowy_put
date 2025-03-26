# Running the server
### Firstly, you need to download NetToPLCsim 
[Download link](https://nettoplcsim.sourceforge.net/)
Make sure to run the program **as administrator** and **before you start TIAPortal**
Then, start TIAPortal, configure your device (S7-1200).
[See notes](https://snap7.sourceforge.net/snap7_client.html#1200_1500)
Once you've configured your device and datablocks, add your connection to NetToPLCsim, and start the server.
**The IP address to your PLC will be the same as your internal network adress**
**For Siemens S7 PLC, rack slot configuration is as follows:
rack: 0
slot: 1**

Then, you can run the server with

    npm run dev
    

