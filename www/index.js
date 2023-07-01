async function init(){

    const memory = new WebAssembly.Memory({
        initial: 1
    });
    const importObject = {
        js: {
            mem: memory
        },
        console: {
            log: () => {
                console.log("Just logging ---->\n");
            },
            error: () => {
                console.log("Error -------> \n");
            }
        }
    }
    const resp = await fetch("sum.wasm");
    const buffer = await resp.arrayBuffer();
    // const byteArray = new Int8Array([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00, 0x01, 0x07, 0x01, 0x60, 0x02, 0x7f, 0x7f, 0x01, 0x7f, 0x03, 0x02, 0x01, 0x00, 0x07, 0x07, 0x01, 0x03, 0x73, 0x75, 0x6d, 0x00, 0x00, 0x0a, 0x09, 0x01, 0x07, 0x00, 0x20, 0x00, 0x20, 0x01, 0x6a, 0x0b, 0x00, 0x18, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x01, 0x06, 0x01, 0x00, 0x03, 0x73, 0x75, 0x6d, 0x02, 0x09, 0x01, 0x00, 0x02, 0x00, 0x01, 0x61, 0x01, 0x01, 0x62]);
debugger
await WebAssembly.instantiate(buffer, importObject);
// const sumFunction = wasm.instance.exports.sum;
debugger
const uint8Array = new Uint8Array(memory.buffer, 0, 2);
const hiText = new TextDecoder().decode(uint8Array);
console.log(hiText);
// debugger
// const result = sumFunction(100, 1);
// console.log(result);
}
init()