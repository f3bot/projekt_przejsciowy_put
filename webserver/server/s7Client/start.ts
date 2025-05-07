const snap7 = require('node-snap7');
const s7Client = new snap7.S7Client();

const PLC_IP = "192.168.1.26";
const RACK = 0;
const SLOT = 1;

s7Client.ConnectTo(PLC_IP, RACK, SLOT, (err : any) => {
    if (err) {
        console.log("Connection failed: ", s7Client.ErrorText(err));
        return;
    }
    console.log("Connected to PLC!");

    s7Client.DBRead(1, 0, 2, (err : any, buffer : Buffer) => {
        if (err) {
            console.log("Read error: ", s7Client.ErrorText(err));
        } else {
            const intValue = buffer.readInt16BE(0);
            console.log("READ INT FROM DB1: ", intValue)

        }
    });

    const intValueToWrite = 69;
    const writeBuffer = Buffer.alloc(2);
    writeBuffer.writeInt16BE(intValueToWrite, 0);

    s7Client.DBWrite(1, 0, 2, writeBuffer, (err: any) => {
        if (err) {
            console.log("Write error: ", s7Client.ErrorText(err));
        } else {
            console.log("Successfully wrote value:", intValueToWrite);
        }
    });
});
