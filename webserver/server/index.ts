const snap7 = require('node-snap7');
const s7Client = new snap7.S7Client();

const PLC_IP = "192.168.1.26";
const RACK = 0;
const SLOT = 1;

s7Client.ConnectTo(PLC_IP, RACK, SLOT, (err) => {
    if (err) {
        console.log("Connection failed: ", s7Client.ErrorText(err));
        return;
    }
    console.log("Connected to PLC!");

    s7Client.DBRead(1, 0, 2, (err, buffer) => {
        if (err) {
            console.log("Read error: ", s7Client.ErrorText(err));
        } else {
            const intValue = buffer.readInt16BE(0);
            console.log("READ INT FROM DB1: ", intValue)

        }
    });
});
