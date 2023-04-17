declare interface Math {
    floor(x: number): number;
}

const enum IrButton 
{
  //% block="⛔️"
      Power = 162,
  //% block=" "
      Any = -1,
  //% block="MENU"
      Menu = 226,

  //% block="TEST"
      Test = 34,
  //% block="➕"
      Add = 2,
  //% block="↪️"
      Return = 194,
  
  //% block="⏮"
      Left = 224 ,
  //% block="▶️"
      Play =  168,
  //% block="⏭"
      Right = 144,

  //% block="0"
      Num0 = 104,
  //% block="➖"
      Sub = 152,
  //% block="C"
      C = 176,

  //% block="1"
      Num1 = 48,
  //% block="2"
      Num2 = 24,
  //% block="3"
      Num3 = 122,

  //% block="4"
      Num4 = 16,
  //% block="5"
      Num5 = 56,
  //% block="6"
      Num6 = 90,

  //% block="7"
      Num7 = 66,
  //% block="8"
      Num8 = 74,
  //% block="9"
     Num9 = 82
    
}

const enum IrButtonAction 
{
  //% block="按下"
  Pressed = 0,
  //% block="松开"
  Released = 1,
}

const enum IrProtocol 
{
  //% block="Keyestudio"
  Keyestudio = 0,
  //% block="NEC"
  NEC = 1,
}

//% color=#27b0ba icon="\uf26c"
namespace DLM {
    let font: Buffer;


    const SSD1306_SETCONTRAST = 0x81
    const SSD1306_SETCOLUMNADRESS = 0x21
    const SSD1306_SETPAGEADRESS = 0x22
    const SSD1306_DISPLAYALLON_RESUME = 0xA4
    const SSD1306_DISPLAYALLON = 0xA5
    const SSD1306_NORMALDISPLAY = 0xA6
    const SSD1306_INVERTDISPLAY = 0xA7
    const SSD1306_DISPLAYOFF = 0xAE
    const SSD1306_DISPLAYON = 0xAF
    const SSD1306_SETDISPLAYOFFSET = 0xD3
    const SSD1306_SETCOMPINS = 0xDA
    const SSD1306_SETVCOMDETECT = 0xDB
    const SSD1306_SETDISPLAYCLOCKDIV = 0xD5
    const SSD1306_SETPRECHARGE = 0xD9
    const SSD1306_SETMULTIPLEX = 0xA8
    const SSD1306_SETLOWCOLUMN = 0x00
    const SSD1306_SETHIGHCOLUMN = 0x10
    const SSD1306_SETSTARTLINE = 0x40
    const SSD1306_MEMORYMODE = 0x20
    const SSD1306_COMSCANINC = 0xC0
    const SSD1306_COMSCANDEC = 0xC8
    const SSD1306_SEGREMAP = 0xA0
    const SSD1306_CHARGEPUMP = 0x8D
    const chipAdress = 0x3C
    const xOffset = 0
    const yOffset = 0
    let charX = 0
    let charY = 0
    let displayWidth = 128
    let displayHeight = 64 / 8
    let screenSize = 0
    //let font: Array<Array<number>>
    let loadStarted: boolean;
    let loadPercent: number;
    // let TM1650
    let COMMAND_I2C_ADDRESS = 0x24
    let DISPLAY_I2C_ADDRESS = 0x34
    let _SEG = [0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F, 0x77, 0x7C, 0x39, 0x5E, 0x79, 0x71];
    let _intensity = 3
    let dbuf = [0, 0, 0, 0]
    //let IR
    let irState: IrState;
    const MICROBIT_MAKERBIT_IR_NEC = 777;
    const MICROBIT_MAKERBIT_IR_DATAGRAM = 778;
    const MICROBIT_MAKERBIT_IR_BUTTON_PRESSED_ID = 789;
    const MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID = 790;
    const IR_REPEAT = 256;
    const IR_INCOMPLETE = 257;
    const IR_DATAGRAM = 258;
    interface IrState {protocol: IrProtocol; hasNewDatagram: boolean; bitsReceived: uint8; addressSectionBits: uint16;
        commandSectionBits: uint16;hiword: uint16;loword: uint16;}


    function oledcommand(cmd: number) {
        let buf = pins.createBuffer(2)
        buf[0] = 0x00
        buf[1] = cmd
        pins.i2cWriteBuffer(chipAdress, buf, false)
    }
    //% block="清除OLED显示"
    //% group="OLED" weight=3
    export function oledclear() {
        loadStarted = false
        loadPercent = 0
        oledcommand(SSD1306_SETCOLUMNADRESS)
        oledcommand(0x00)
        oledcommand(displayWidth - 1)
        oledcommand(SSD1306_SETPAGEADRESS)
        oledcommand(0x00)
        oledcommand(displayHeight - 1)
        let data = pins.createBuffer(17);
        data[0] = 0x40; // Data Mode
        for (let i = 1; i < 17; i++) {
            data[i] = 0x00
        }
        // send display buffer in 16 byte chunks
        for (let i = 0; i < screenSize; i += 16) {
            pins.i2cWriteBuffer(chipAdress, data, false)
        }
        charX = xOffset
        charY = yOffset
    }

    function drawLoadingFrame() {
        oledcommand(SSD1306_SETCOLUMNADRESS)
        oledcommand(0x00)
        oledcommand(displayWidth - 1)
        oledcommand(SSD1306_SETPAGEADRESS)
        oledcommand(0x00)
        oledcommand(displayHeight - 1)
        let col = 0
        let page = 0
        let data = pins.createBuffer(17);
        data[0] = 0x40; // Data Mode
        let i = 1
        for (let page = 0; page < displayHeight; page++) {
            for (let col = 0; col < displayWidth; col++) {
                if (page === 3 && col > 12 && col < displayWidth - 12) {
                    data[i] = 0x60
                } else if (page === 5 && col > 12 && col < displayWidth - 12) {
                    data[i] = 0x06
                } else if (page === 4 && (col === 12 || col === 13 || col === displayWidth - 12 || col === displayWidth - 13)) {
                    data[i] = 0xFF
                } else {
                    data[i] = 0x00
                }
                if (i === 16) {
                    pins.i2cWriteBuffer(chipAdress, data, false)
                    i = 1
                } else {
                    i++
                }

            }
        }
        charX = 30
        charY = 2
        oledwriteString("Loading:")
    }
    function drawLoadingBar(percent: number) {
        charX = 78
        charY = 2
        let num = Math.floor(percent)
        oledwriteNum(num)
        oledwriteString("%")
        let width = displayWidth - 14 - 13
        let lastStart = width * (loadPercent / displayWidth)
        oledcommand(SSD1306_SETCOLUMNADRESS)
        oledcommand(14 + lastStart)
        oledcommand(displayWidth - 13)
        oledcommand(SSD1306_SETPAGEADRESS)
        oledcommand(4)
        oledcommand(5)
        let data = pins.createBuffer(2);
        data[0] = 0x40; // Data Mode
        data[1] = 0x7E
        for (let i = lastStart; i < width * (Math.floor(percent) / 100); i++) {
            pins.i2cWriteBuffer(chipAdress, data, false)
        }
        loadPercent = num
    }

    //% block="OLED显示进度条 $percent "
    //% percent.min=0 percent.max=100
    //% group="OLED" weight=2
    export function oleddrawLoading(percent: number) {
        if (loadStarted) {
            drawLoadingBar(percent)
        } else {
            drawLoadingFrame()
            drawLoadingBar(percent)
            loadStarted = true
        }
    }


    //% block="OLED新行显示字符串 $str"
    //% group="OLED" weight=6
    export function oledwriteString(str: string) {
        for (let i = 0; i < str.length; i++) {
            if (charX > displayWidth - 6) {
                olednewLine()
            }
            drawChar(charX, charY, str.charAt(i))
            charX += 6
        }
    }
    //% block="OLED新行显示数字$n"
    //% group="OLED" weight=5
    export function oledwriteNum(n: number) {
        let numString = n.toString()
        oledwriteString(numString)
    }
    //% block="OLED显示字符串 $str"
    //% group="OLED" weight=8
    export function oledwriteStringNewLine(str: string) {
        oledwriteString(str)
        olednewLine()
    }
    //% block="OLED显示数字$n"
    //% group="OLED" weight=7
    export function oledwriteNumNewLine(n: number) {
        oledwriteNum(n)
        olednewLine()
    }
    //% block="OLED新行"
    //% group="OLED" weight=4
    export function olednewLine() {
        charY++
        charX = xOffset
    }
    function drawChar(x: number, y: number, c: string) {
        oledcommand(SSD1306_SETCOLUMNADRESS)
        oledcommand(x)
        oledcommand(x + 5)
        oledcommand(SSD1306_SETPAGEADRESS)
        oledcommand(y)
        oledcommand(y + 1)
        let line = pins.createBuffer(2)
        line[0] = 0x40
        for (let i = 0; i < 6; i++) {
            if (i === 5) {
                line[1] = 0x00
            } else {
                let charIndex = c.charCodeAt(0)
                let charNumber = font.getNumber(NumberFormat.UInt8BE, 5 * charIndex + i)
                line[1] = charNumber

            }
            pins.i2cWriteBuffer(chipAdress, line, false)
        }

    }
    function drawShape(pixels: Array<Array<number>>) {
        let x1 = displayWidth
        let y1 = displayHeight * 8
        let x2 = 0
        let y2 = 0
        for (let i = 0; i < pixels.length; i++) {
            if (pixels[i][0] < x1) {
                x1 = pixels[i][0]
            }
            if (pixels[i][0] > x2) {
                x2 = pixels[i][0]
            }
            if (pixels[i][1] < y1) {
                y1 = pixels[i][1]
            }
            if (pixels[i][1] > y2) {
                y2 = pixels[i][1]
            }
        }
        let page1 = Math.floor(y1 / 8)
        let page2 = Math.floor(y2 / 8)
        let line = pins.createBuffer(2)
        line[0] = 0x40
        for (let x = x1; x <= x2; x++) {
            for (let page = page1; page <= page2; page++) {
                line[1] = 0x00
                for (let i = 0; i < pixels.length; i++) {
                    if (pixels[i][0] === x) {
                        if (Math.floor(pixels[i][1] / 8) === page) {
                            line[1] |= Math.pow(2, (pixels[i][1] % 8))
                        }
                    }
                }
                if (line[1] !== 0x00) {
                    oledcommand(SSD1306_SETCOLUMNADRESS)
                    oledcommand(x)
                    oledcommand(x + 1)
                    oledcommand(SSD1306_SETPAGEADRESS)
                    oledcommand(page)
                    oledcommand(page + 1)
                    //line[1] |= pins.i2cReadBuffer(chipAdress, 2)[1]
                    pins.i2cWriteBuffer(chipAdress, line, false)
                }
            }
        }
    }

    //% block="OLED画直线起点:|x: $x0 y: $y0 终点| x: $x1 y: $y1"
    //% x0.defl=0
    //% y0.defl=0
    //% x1.defl=20
    //% y1.defl=20
    //% group="OLED" weight=1
    export function oleddrawLine(x0: number, y0: number, x1: number, y1: number) {
        let pixels: Array<Array<number>> = []
        let kx: number, ky: number, c: number, i: number, xx: number, yy: number, dx: number, dy: number;
        let targetX = x1
        let targetY = y1
        x1 -= x0; kx = 0; if (x1 > 0) kx = +1; if (x1 < 0) { kx = -1; x1 = -x1; } x1++;
        y1 -= y0; ky = 0; if (y1 > 0) ky = +1; if (y1 < 0) { ky = -1; y1 = -y1; } y1++;
        if (x1 >= y1) {
            c = x1
            for (i = 0; i < x1; i++ , x0 += kx) {
                pixels.push([x0, y0])
                c -= y1; if (c <= 0) { if (i != x1 - 1) pixels.push([x0 + kx, y0]); c += x1; y0 += ky; if (i != x1 - 1) pixels.push([x0, y0]); }
                if (pixels.length > 20) {
                    drawShape(pixels)
                    pixels = []
                    oleddrawLine(x0, y0, targetX, targetY)
                    return
                }
            }
        } else {
            c = y1
            for (i = 0; i < y1; i++ , y0 += ky) {
                pixels.push([x0, y0])
                c -= x1; if (c <= 0) { if (i != y1 - 1) pixels.push([x0, y0 + ky]); c += y1; x0 += kx; if (i != y1 - 1) pixels.push([x0, y0]); }
                if (pixels.length > 20) {
                    drawShape(pixels)
                    pixels = []
                    oleddrawLine(x0, y0, targetX, targetY)
                    return
                }
            }
        }
        drawShape(pixels)
    }

    //% block="OLED画矩形 起点:|x: $x0 y: $y0 终点| x: $x1 y: $y1"
    //% x0.defl=0
    //% y0.defl=0
    //% x1.defl=20
    //% y1.defl=20
    //% group="OLED" weight=0
    export function oleddrawRectangle(x0: number, y0: number, x1: number, y1: number) {
        oleddrawLine(x0, y0, x1, y0)
        oleddrawLine(x0, y1, x1, y1)
        oleddrawLine(x0, y0, x0, y1)
        oleddrawLine(x1, y0, x1, y1)
    }
    //% block="初始化OLED 宽 $width 高 $height"
    //% width.defl=128
    //% height.defl=64
    //% group="OLED" weight=9
    export function oledinit(width: number, height: number) {
        oledcommand(SSD1306_DISPLAYOFF);
        oledcommand(SSD1306_SETDISPLAYCLOCKDIV);
        oledcommand(0x80);                                  // the suggested ratio 0x80
        oledcommand(SSD1306_SETMULTIPLEX);
        oledcommand(0x3F);
        oledcommand(SSD1306_SETDISPLAYOFFSET);
        oledcommand(0x0);                                   // no offset
        oledcommand(SSD1306_SETSTARTLINE | 0x0);            // line #0
        oledcommand(SSD1306_CHARGEPUMP);
        oledcommand(0x14);
        oledcommand(SSD1306_MEMORYMODE);
        oledcommand(0x00);                                  // 0x0 act like ks0108
        oledcommand(SSD1306_SEGREMAP | 0x1);
        oledcommand(SSD1306_COMSCANDEC);
        oledcommand(SSD1306_SETCOMPINS);
        oledcommand(0x12);
        oledcommand(SSD1306_SETCONTRAST);
        oledcommand(0xCF);
        oledcommand(SSD1306_SETPRECHARGE);
        oledcommand(0xF1);
        oledcommand(SSD1306_SETVCOMDETECT);
        oledcommand(0x40);
        oledcommand(SSD1306_DISPLAYALLON_RESUME);
        oledcommand(SSD1306_NORMALDISPLAY);
        oledcommand(SSD1306_DISPLAYON);
        displayWidth = width
        displayHeight = height / 8
        screenSize = displayWidth * displayHeight
        charX = xOffset
        charY = yOffset
        font = hex`
    0000000000
    3E5B4F5B3E
    3E6B4F6B3E
    1C3E7C3E1C
    183C7E3C18
    1C577D571C
    1C5E7F5E1C
    00183C1800
    FFE7C3E7FF
    0018241800
    FFE7DBE7FF
    30483A060E
    2629792926
    407F050507
    407F05253F
    5A3CE73C5A
    7F3E1C1C08
    081C1C3E7F
    14227F2214
    5F5F005F5F
    06097F017F
    006689956A
    6060606060
    94A2FFA294
    08047E0408
    10207E2010
    08082A1C08
    081C2A0808
    1E10101010
    0C1E0C1E0C
    30383E3830
    060E3E0E06
    0000000000
    00005F0000
    0007000700
    147F147F14
    242A7F2A12
    2313086462
    3649562050
    0008070300
    001C224100
    0041221C00
    2A1C7F1C2A
    08083E0808
    0080703000
    0808080808
    0000606000
    2010080402
    3E5149453E
    00427F4000
    7249494946
    2141494D33
    1814127F10
    2745454539
    3C4A494931
    4121110907
    3649494936
    464949291E
    0000140000
    0040340000
    0008142241
    1414141414
    0041221408
    0201590906
    3E415D594E
    7C1211127C
    7F49494936
    3E41414122
    7F4141413E
    7F49494941
    7F09090901
    3E41415173
    7F0808087F
    00417F4100
    2040413F01
    7F08142241
    7F40404040
    7F021C027F
    7F0408107F
    3E4141413E
    7F09090906
    3E4151215E
    7F09192946
    2649494932
    03017F0103
    3F4040403F
    1F2040201F
    3F4038403F
    6314081463
    0304780403
    6159494D43
    007F414141
    0204081020
    004141417F
    0402010204
    4040404040
    0003070800
    2054547840
    7F28444438
    3844444428
    384444287F
    3854545418
    00087E0902
    18A4A49C78
    7F08040478
    00447D4000
    2040403D00
    7F10284400
    00417F4000
    7C04780478
    7C08040478
    3844444438
    FC18242418
    18242418FC
    7C08040408
    4854545424
    04043F4424
    3C4040207C
    1C2040201C
    3C4030403C
    4428102844
    4C9090907C
    4464544C44
    0008364100
    0000770000
    0041360800
    0201020402
    3C2623263C
    1EA1A16112
    3A4040207A
    3854545559
    2155557941
    2154547841
    2155547840
    2054557940
    0C1E527212
    3955555559
    3954545459
    3955545458
    0000457C41
    0002457D42
    0001457C40
    F0292429F0
    F0282528F0
    7C54554500
    2054547C54
    7C0A097F49
    3249494932
    3248484832
    324A484830
    3A4141217A
    3A42402078
    009DA0A07D
    3944444439
    3D4040403D
    3C24FF2424
    487E494366
    2B2FFC2F2B
    FF0929F620
    C0887E0903
    2054547941
    0000447D41
    3048484A32
    384040227A
    007A0A0A72
    7D0D19317D
    2629292F28
    2629292926
    30484D4020
    3808080808
    0808080838
    2F10C8ACBA
    2F102834FA
    00007B0000
    08142A1422
    22142A1408
    AA005500AA
    AA55AA55AA
    000000FF00
    101010FF00
    141414FF00
    1010FF00FF
    1010F010F0
    141414FC00
    1414F700FF
    0000FF00FF
    1414F404FC
    141417101F
    10101F101F
    1414141F00
    101010F000
    0000001F10
    1010101F10
    101010F010
    000000FF10
    1010101010
    101010FF10
    000000FF14
    0000FF00FF
    00001F1017
    0000FC04F4
    1414171017
    1414F404F4
    0000FF00F7
    1414141414
    1414F700F7
    1414141714
    10101F101F
    141414F414
    1010F010F0
    00001F101F
    0000001F14
    000000FC14
    0000F010F0
    1010FF10FF
    141414FF14
    1010101F00
    000000F010
    FFFFFFFFFF
    F0F0F0F0F0
    FFFFFF0000
    000000FFFF
    0F0F0F0F0F
    3844443844
    7C2A2A3E14
    7E02020606
    027E027E02
    6355494163
    3844443C04
    407E201E20
    06027E0202
    99A5E7A599
    1C2A492A1C
    4C7201724C
    304A4D4D30
    3048784830
    BC625A463D
    3E49494900
    7E0101017E
    2A2A2A2A2A
    44445F4444
    40514A4440
    40444A5140
    0000FF0103
    E080FF0000
    08086B6B08
    3612362436
    060F090F06
    0000181800
    0000101000
    3040FF0101
    001F01011E
    00191D1712
    003C3C3C3C
    0000000000`
        loadStarted = false
        loadPercent = 0
        oledclear()
    }


//TM1650 function


/**
     * send command to display
     * @param is command, eg: 0
     */
function cmd(c: number) {
    pins.i2cWriteNumber(COMMAND_I2C_ADDRESS, c, NumberFormat.Int8BE)
}

/**
 * send data to display
 * @param is data, eg: 0
 */
function dat(bit: number, d: number) {
    pins.i2cWriteNumber(DISPLAY_I2C_ADDRESS + (bit % 4), d, NumberFormat.Int8BE)
}

/**
 * turn on display
 */
//% block="四位数码管开启显示"
//% group="TM1650" weight=50 
export function tm1650on() {
    cmd(_intensity * 16 + 1)
}

/**
 * turn off display
 */
//% block="四位数码管关闭显示"
//% group="TM1650" weight=49 
export function tm1650off() {
    _intensity = 0
    cmd(0)
}

/**
 * clear display content
 */
//% block="四位数码管清除显示"
//% group="TM1650" weight=48
export function tm1650clear() {
    dat(0, 0)
    dat(1, 0)
    dat(2, 0)
    dat(3, 0)
    dbuf = [0, 0, 0, 0]
}

/**
 * show a digital in given position
 * @param digit is number (0-15) will be shown, eg: 1
 * @param bit is position, eg: 0
 */
//% block="四位数码管显示数字 %num|在 %bit位"
//% group="TM1650" weight=47
//% num.max=15 num.min=0
export function tm1650digit(num: number, bit: number) {
    dbuf[bit % 4] = _SEG[num % 16]
    dat(bit, _SEG[num % 16])
}

/**
 * show a number in display
 * @param num is number will be shown, eg: 100
 */
//% block="四位数码管显示数字 %num"
//% group="TM1650" weight=46 
export function tm1650showNumber(num: number) {
    if (num < 0) {
        dat(0, 0x40) // '-'
        num = -num
    }
    else
        tm1650digit(Math.idiv(num, 1000) % 10, 0)
    tm1650digit(num % 10, 3)
    tm1650digit(Math.idiv(num, 10) % 10, 2)
    tm1650digit(Math.idiv(num, 100) % 10, 1)
}



//MP3串口通信

export enum PrevNext {
    //% block=播放
    Play = 0x01,
    //% block=暂停
    Stop = 0x02,
    //% block=下一曲
    Next = 0x03,
    //% block=上一曲
    Prev = 0x04,
    //% block=音量加
    Volumnup = 0x05,
    //% block=音量减
    Volumndown = 0x06
}



/**
 * init mp3
 */
//% blockId="INIT_MP3" block="初始化MP3 RX|%rx TX|%tx"
//% group="MP3" weight=51 
export function initMp3(rx: SerialPin, tx: SerialPin):void {
    serial.redirect(rx as number,tx as number,BaudRate.BaudRate9600)
}

/**
 * play mp3 number
 */
//% blockId="PLAY_MP3_NUM" block="MP3播放歌曲|%num"
//% group="MP3" weight=52 
export function playNum(num: number): void{
    let buf = pins.createBuffer(6);
    buf[0] = 0x7e;
    buf[1] = 0x04;
    buf[2] = 0x41;
    buf[3] = 0x00;
    buf[4] = num;
    buf[5] = 0xef;
    serial.writeBuffer(buf);
}

/**
 * set mp3 
 */
//% blockId="SET_MP3" block="设置MP3播放器|%PrevNext"
//% group="MP3" weight=53 
export function setMp3(pn: PrevNext): void{
    let buf = pins.createBuffer(4);
    buf[0] = 0x7e;
    buf[1] = 0x02;
    buf[2] = pn;
    buf[3] = 0xef;
    serial.writeBuffer(buf);
}


//IR红外遥控
function appendBitToDatagram(bit: number): number 
    {
        irState.bitsReceived += 1;

        if (irState.bitsReceived <= 8) 
        {
            irState.hiword = (irState.hiword << 1) + bit;

            if(irState.protocol === IrProtocol.Keyestudio && bit === 1) 
            {
            // recover from missing message bits at the beginning
            // Keyestudio address is 0 and thus missing bits can be detected
            // by checking for the first inverse address bit (which is a 1)
                irState.bitsReceived = 9;
                irState.hiword = 1;
            }
        } 
        else if (irState.bitsReceived <= 16) 
        {
            irState.hiword = (irState.hiword << 1) + bit;

        } 
        else if (irState.bitsReceived <= 32) 
        {
            irState.loword = (irState.loword << 1) + bit;
        }

        if (irState.bitsReceived === 32) 
        {                                            
            irState.addressSectionBits = irState.hiword & 0xffff;
            irState.commandSectionBits = irState.loword & 0xffff;
        
            return IR_DATAGRAM;
        } 
        else 
        {
            return IR_INCOMPLETE;
        }

    } //End Function appen


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  ++                                                                     ++
  ++                              Function:Decode                        ++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  ++                                                                     ++
  ++       Input :                                                       ++
  ++                  markAndSpace =                                     ++
  ++                                                                     ++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

    function decode(markAndSpace: number): number 
    {
        if(markAndSpace < 1600)          // low bit
        {   
             return appendBitToDatagram(0);
        } 
        else if (markAndSpace < 2700)    // high bit
        {
            return appendBitToDatagram(1);
        }

        irState.bitsReceived = 0;

        if(markAndSpace < 12500)    // Repeat detected
        {
            return IR_REPEAT;
        } 
        else if (markAndSpace < 14500) 
        {
            // Start detected
            return IR_INCOMPLETE;
        } 
        else 
        {
            return IR_INCOMPLETE;
        }

    } //End Function Decode




function enableIrMarkSpaceDetection(pin: DigitalPin) 
    {
    pins.setPull(pin, PinPullMode.PullNone);

    let mark = 0;
    let space = 0;

    pins.onPulsed(pin, PulseValue.Low, () => {
      // HIGH, see https://github.com/microsoft/pxt-microbit/issues/1416
                                                 
      mark = pins.pulseDuration();
    });

    pins.onPulsed(pin, PulseValue.High, () => {
      // LOW
                                      
      space = pins.pulseDuration();
      const status = decode(mark + space);

      if (status !== IR_INCOMPLETE) {
        control.raiseEvent(MICROBIT_MAKERBIT_IR_NEC, status);
      }

    });
  }


  /**
   * Connects to the IR receiver module at the specified pin and configures the IR protocol.
   * @param pin IR receiver pin, eg: DigitalPin.P0
   * @param protocol IR protocol, eg: IrProtocol.Keyestudio
   */

  // subcategory="IR Receiver"
  //% blockId="makerbit_infrared_connect_receiver"
  // block="connect IR receiver at pin %pin and decode %protocol"   
  //% block="初始化红外接收端口 %pin"
  //% pin.fieldEditor="gridpicker"
  //% pin.fieldOptions.columns=4
  //% pin.fieldOptions.tooltips="false"
  //% group="IR" weight=54
  //export function connectIrReceiver( pin: DigitalPin,protocol: IrProtocol):void   @@@@@@
   export function connectIrReceiver( pin: DigitalPin):void 
   {
    if (irState) 
    {
      return;
    }

    irState = {
      //protocol: protocol,  @@@@@@@
      protocol : 1 ,
      bitsReceived: 0,
      hasNewDatagram: false,
      addressSectionBits: 0,
      commandSectionBits: 0,
      hiword: 0, // TODO replace with uint32
      loword: 0,
    };

                                               

    enableIrMarkSpaceDetection(pin);
   

    let activeCommand = -1;
    let repeatTimeout = 0;
    const REPEAT_TIMEOUT_MS = 120;

    control.onEvent(
      MICROBIT_MAKERBIT_IR_NEC,
      EventBusValue.MICROBIT_EVT_ANY,
      () => {
        const irEvent = control.eventValue();

        // Refresh repeat timer
        if (irEvent === IR_DATAGRAM || irEvent === IR_REPEAT) {
          repeatTimeout = input.runningTime() + REPEAT_TIMEOUT_MS;
        }

        if (irEvent === IR_DATAGRAM) {
          irState.hasNewDatagram = true;
          control.raiseEvent(MICROBIT_MAKERBIT_IR_DATAGRAM, 0);

          const newCommand = irState.commandSectionBits >> 8;

          // Process a new command
          if (newCommand !== activeCommand) {
            if (activeCommand >= 0) {
              control.raiseEvent(
                MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID,
                activeCommand
              );
            }

            activeCommand = newCommand;
            control.raiseEvent(
              MICROBIT_MAKERBIT_IR_BUTTON_PRESSED_ID,
              newCommand
            );
          }
        }
      }
    );

    control.inBackground(() => {
      while (true) {
        if (activeCommand === -1) {
          // sleep to save CPU cylces
          basic.pause(2 * REPEAT_TIMEOUT_MS);
        } else {
          const now = input.runningTime();
          if (now > repeatTimeout) {
            // repeat timed out
            control.raiseEvent(
              MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID,
              activeCommand
            );
            activeCommand = -1;
          } else {
            basic.pause(REPEAT_TIMEOUT_MS);
          }
        }
      }
    });
  }

  /**
   * Do something when a specific button is pressed or released on the remote control.
   * @param button the button to be checked
   * @param action the trigger action
   * @param handler body code to run when the event is raised
   */
  // subcategory="IR Receiver"
  //% blockId=makerbit_infrared_on_ir_button
  //% block="当红外遥控器 %button | %action"
  //% button.fieldEditor="gridpicker"
  //% button.fieldOptions.columns=3
  //% button.fieldOptions.tooltips="false"
  //% group="IR" weight=55 
  export function onIrButton(
    button: IrButton,
    action: IrButtonAction,
    handler: () => void
  ) {
    control.onEvent(
        action === IrButtonAction.Pressed
        ? MICROBIT_MAKERBIT_IR_BUTTON_PRESSED_ID
        : MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID,

      button === IrButton.Any ? EventBusValue.MICROBIT_EVT_ANY : button,
      () => {
        handler();
      }
    );
  }




} 
