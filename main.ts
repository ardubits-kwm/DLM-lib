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

//APDS9960
enum DIR {
    DIR_NONE,
    DIR_LEFT,
    DIR_RIGHT,
    DIR_UP,
    DIR_DOWN,
    DIR_NEAR,
    DIR_FAR,
    DIR_ALL
}

/* State definitions */
enum STATE {
    NA_STATE,
    NEAR_STATE,
    FAR_STATE,
    ALL_STATE
}

enum GESTURE_TYPE {
    //% block="向上"
    UP,
    //% block="向下"
    DOWN,
    //% block="向左"
    LEFT,
    //% block="向右"
    RIGHT,
    //% block="靠近"
    NEAR,
    //% block="远离"
    FAR
}

enum GESTURE_WORKMODE {
    //% block="LIGHT MODE"
    LIGHT_MODE,
    //% block="PROXIMITY MODE"
    PROXIMITY_MODE,
    //% block="GESTURE MODE"
    GESTURE_MODE
}

enum LIGHT_UNIT {
    //% block="LUX"
    LUX = 1,
    //% block="FC"
    FC = 2
}

//DHT11---------------------------------------------------
enum DHT11Type {
    //% block="摄氏温度(℃)" enumval=0
    DHT11_temperature_C,

    //% block="华氏温度(℉)" enumval=1
    DHT11_temperature_F,

    //% block="湿度(0~100)" enumval=2
    DHT11_humidity,
}

//双色灯---------------------------------------------------
enum RBLED {
    //% block="亮"
    HIGH = 1,
    //% block="灭"
    LOW = 0
}

//马达---------------------------------------------------
enum MOTORTYPE {
    //% block="正转"
    TYPE1 = 1,
    //% block="反转"
    TYPE2 = 2,
    //% block="停止"
    TYPE3 = 0
}

enum MOTORNUM {
    //% block="M1"
    MOTORPORT1 = 1,
    //% block="M2"
    MOTORPORT2 = 2,
    //% block="全部"
    MOTORPORT3 = 3
}

//mpu6050-----------------------------------------------------
enum REGISTER {
    // 陀螺仪采样率地址
    SMPLRT_DIV = 0x19,
    // 低通滤波频率地址
    CONFIG = 0x1a,
    // 陀螺仪自检及测量范围
    GYRO_CONFIG = 0x1b,
    // 加速计自检、测量范围及高通滤波频率
    ACCEL_CONFIG = 0x1c,
    // 电源管理地
    PWR_MGMT = 0x6b,
    ACCEL_X = 0x3b,
    ACCEL_Y = 0x3d,
    ACCEL_Z = 0x3f,
    TEMPATURE = 0x41,
    GYRO_X = 0x43,
    GYRO_Y = 0x45,
    GYRO_Z = 0x47
}

enum AXIS {
    X = 1,
    Y = 2,
    Z = 3
}


enum MPU6050_I2C_ADDRESS {
    ADDR_0x68 = 0x68,
    ADDR_0x69 = 0x69
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
    // let TM1650-------------------------------------------------
    let COMMAND_I2C_ADDRESS = 0x24
    let DISPLAY_I2C_ADDRESS = 0x34
    let _SEG = [0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F, 0x77, 0x7C, 0x39, 0x5E, 0x79, 0x71];
    let _intensity = 3
    let dbuf = [0, 0, 0, 0]
    //APDS9960---------------------------------------------------
     /* Gesture parameters */
     let GESTURE_THRESHOLD_OUT = 30;
     let GESTURE_SENSITIVITY_1 = 33
     let GESTURE_SENSITIVITY_2 = 18
 
     /* Error code for returned values */
     //ERROR = 0xFF
 
     /* On/Off definitions */
     let OFF = 0;
     let ON = 1;
 
     /* Acceptable parameters for setMode */
     let POWER = 0
     let AMBIENT_LIGHT = 1
     let PROXIMITY = 2
     let WAIT = 3
     let AMBIENT_LIGHT_INT = 4
     let PROXIMITY_INT = 5
     let GESTURE = 6
     let ALL = 7
 
     /* LED Drive values */
     let LED_DRIVE_100MA = 0
     let LED_DRIVE_50MA = 1
     let LED_DRIVE_25MA = 2
     let LED_DRIVE_12_5MA = 3
 
     /* Proximity Gain (PGAIN) values */
     let PGAIN_1X = 0
     let PGAIN_2X = 1
     let PGAIN_4X = 2
     let PGAIN_8X = 3
 
     /* ALS Gain (AGAIN) values */
     let AGAIN_1X = 0
     let AGAIN_4X = 1
     let AGAIN_16X = 2
     let AGAIN_64X = 3
 
     /* Gesture Gain (GGAIN) values */
     let GGAIN_1X = 0
     let GGAIN_2X = 1
     let GGAIN_4X = 2
     let GGAIN_8X = 3
 
     /* LED Boost values */
     let LED_BOOST_100 = 0
     let LED_BOOST_150 = 1
     let LED_BOOST_200 = 2
     let LED_BOOST_300 = 3
 
     /* Gesture wait time values */
     let GWTIME_0MS = 0
     let GWTIME_2_8MS = 1
     let GWTIME_5_6MS = 2
     let GWTIME_8_4MS = 3
     let GWTIME_14_0MS = 4
     let GWTIME_22_4MS = 5
     let GWTIME_30_8MS = 6
     let GWTIME_39_2MS = 7
 
     /* Default values */
     let DEFAULT_ATIME = 219                 // 103ms
     let DEFAULT_WTIME = 246                 // 27ms
     let DEFAULT_PROX_PPULSE = 0x87          // 16us, 8 pulses
     let DEFAULT_GESTURE_PPULSE = 0x89       // 16us, 10 pulses
     let DEFAULT_POFFSET_UR = 0              // 0 offset
     let DEFAULT_POFFSET_DL = 0              // 0 offset      
     let DEFAULT_CONFIG1 = 0x60              // No 12x wait (WTIME) factor
     let DEFAULT_LDRIVE = LED_DRIVE_100MA
     let DEFAULT_PGAIN = PGAIN_4X
     let DEFAULT_AGAIN = AGAIN_4X
     let DEFAULT_PILT = 0                    // Low proximity threshold
     let DEFAULT_PIHT = 50                   // High proximity threshold
     let DEFAULT_AILT = 0xFFFF               // Force interrupt for calibration
     let DEFAULT_AIHT = 0
     let DEFAULT_PERS = 0x11                 // 2 consecutive prox or ALS for int.
     let DEFAULT_CONFIG2 = 0x01              // No saturation interrupts or LED boost  
     let DEFAULT_CONFIG3 = 0                 // Enable all photodiodes, no SAI
     let DEFAULT_GPENTH = 40                 // Threshold for entering gesture mode
     let DEFAULT_GEXTH = 30                  // Threshold for exiting gesture mode    
     let DEFAULT_GCONF1 = 0x40               // 4 gesture events for int., 1 for exit
     let DEFAULT_GGAIN = GGAIN_4X
     let DEFAULT_GLDRIVE = LED_DRIVE_100MA
     let DEFAULT_GWTIME = GWTIME_2_8MS
     let DEFAULT_GOFFSET = 0                 // No offset scaling for gesture mode
     let DEFAULT_GPULSE = 0xC9               // 32us, 10 pulses
     let DEFAULT_GCONF3 = 0                  // All photodiodes active during gesture
     let DEFAULT_GIEN = 0                    // Disable gesture interrupts
     
     /* Misc parameters */
     let FIFO_PAUSE_TIME = 30      // Wait period (ms) between FIFO reads
 
     let motion_global: number = DIR.DIR_NONE;
 
     let APDS9960_I2C_ADDR = 0x39;
     let APDS9960_ID_1 = 0xAB
     let APDS9960_ID_2 = 0x9C
 
     let gesture_data_u_data = pins.createBuffer(32);
     let gesture_data_d_data = pins.createBuffer(32);
     let gesture_data_l_data = pins.createBuffer(32);
     let gesture_data_r_data = pins.createBuffer(32);
     let gesture_data_index: NumberFormat.UInt8BE
     let gesture_data_total_gestures: NumberFormat.UInt8BE;
     let gesture_data_in_threshold: NumberFormat.UInt8BE;
     let gesture_data_out_threshold: NumberFormat.UInt8BE;
 
     let gesture_ud_delta_ = 0;
     let gesture_lr_delta_ = 0;
 
     let gesture_ud_count_ = 0;
     let gesture_lr_count_ = 0;
 
     let gesture_near_count_ = 0;
     let gesture_far_count_ = 0;
 
     let gesture_state_ = 0;
     let gesture_motion_ = DIR.DIR_NONE;

    //let IR--------------------------------------------------------------------------
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

    //DHT11-----------------------------------------------------------------------------
    let dht11Humidity = 0;
    let dht11Temperature = 0;
    //RFID------------------------------------------------------------------------------
    let idnum = 0;

    //MPU6050-------------------------------------------------------------------------
    let SMPLRT = 0x07 // 陀螺仪采样率 125Hz
    let CONFIG = 0x06 // 低通滤波频率 5Hz
    let GYRO_CONFIG = 0x18 // 典型值：0x18(不自检，2000deg/s) 
    let ACCEL_CONFIG = 0x01 // 典型值：0x01(不自检，2G，5Hz)
    let X_ACCEL_OFFSET = 0
    let Y_ACCEL_OFFSET = 0
    let Z_ACCEL_OFFSET = 0
    let X_GYRO_OFFSET = 0
    let Y_GYRO_OFFSET = 0
    let Z_GYRO_OFFSET = 0

    

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


    //% block="OLED显示字符串 $str"
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
    //% block="OLED显示数字$n"
    //% group="OLED" weight=5
    export function oledwriteNum(n: number) {
        let numString = n.toString()
        oledwriteString(numString)
    }
    //% block="OLED新行显示字符串 $str"
    //% group="OLED" weight=8
    export function oledwriteStringNewLine(str: string) {
        oledwriteString(str)
        olednewLine()
    }
    //% block="OLED新行显示数字$n"
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
//% group="四位数码管" weight=50 
export function tm1650on() {
    cmd(_intensity * 16 + 1)
}

/**
 * turn off display
 */
//% block="四位数码管关闭显示"
//% group="四位数码管" weight=49 
export function tm1650off() {
    _intensity = 0
    cmd(0)
}

/**
 * clear display content
 */
//% block="四位数码管清除显示"
//% group="四位数码管" weight=48
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
//% group="四位数码管" weight=47
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
//% group="四位数码管" weight=46 
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
    Prev = 0x04
}

export enum Volumcontrl {
    //% block=加
    Volumnup = 0x05,
    //% block=减
    Volumndown = 0x06
}


/**
 * init mp3
 */
//% blockId="INIT_MP3" block="初始化MP3 RX|%rx TX|%tx"
//% group="MP3" weight=54
export function initMp3(rx: SerialPin, tx: SerialPin):void {
    serial.redirect(rx as number,tx as number,BaudRate.BaudRate9600)
}

/**
 * play mp3 number
 */
//% blockId="PLAY_MP3_NUM" block="MP3播放歌曲|%num"
//% group="MP3" weight=53 
export function playNum(num: number): void{
    if(num == 0){
        let buf = pins.createBuffer(5);
        buf[0] = 0x7e;
        buf[1] = 0x03;
        buf[2] = 0x33;
        buf[3] = num;
        buf[4] = 0xef;
        serial.writeBuffer(buf);
    }else{
        let buf = pins.createBuffer(6);
        buf[0] = 0x7e;
        buf[1] = 0x04;
        buf[2] = 0x41;
        buf[3] = 0x00;
        buf[4] = num;
        buf[5] = 0xef;
        serial.writeBuffer(buf);
    }
}

/**
 * set mp3 
 */
//% blockId="SET_MP3" block="设置MP3播放器|%PrevNext"
//% group="MP3" weight=52
export function setMp3(pn: PrevNext): void{
    let buf = pins.createBuffer(4);
    buf[0] = 0x7e;
    buf[1] = 0x02;
    buf[2] = pn;
    buf[3] = 0xef;
    serial.writeBuffer(buf);
}

/**
 * set mp3 volumn
 */
//% blockId="SET_MP3_VOLUMN" block="设置MP3播放器音量|%Volumcontrl"
//% group="MP3" weight=51
export function setMp3volumn(pn: Volumcontrl): void{
    let buf = pins.createBuffer(4);
    buf[0] = 0x7e;
    buf[1] = 0x02;
    buf[2] = pn;
    buf[3] = 0xef;
    serial.writeBuffer(buf);
}

/**
 * set mp3 volumn size
 */
//% blockId="SET_MP3_VOLUMN_SIZE" block="设置MP3播放器的音量为%pn"
//% group="MP3" weight=50
//% pn.max=30
//% pn.min=0
export function setMp3volumnsize(pn: number): void{
    let buf = pins.createBuffer(5);
    buf[0] = 0x7e;
    buf[1] = 0x03;
    buf[2] = 0x31;
    buf[3] = pn;
    buf[4] = 0xef;
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
  //% group="红外遥控" weight=56
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
  //% group="红外遥控" weight=55
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

//APDS9960-------------------------------------------------------

    //% blockId=YFGesture_begin
    //% block="begin"
    function begin(): void {
        let id: number
        id = wireReadDataByte(APDS9960_I2C_ADDR)

        /* Set ENABLE register to 0 (disable all features) */
        // ALL, OFF
        setMode(7, 0)

        /* Set default values for ambient light and proximity registers */
        // APDS9960_ATIME, DEFAULT_ATIME
        wireWriteDataByte(0x81, 219)

        // APDS9960_WTIME, DEFAULT_WTIME
        wireWriteDataByte(0x83, 246)

        //APDS9960_PPULSE, DEFAULT_PROX_PPULSE
        wireWriteDataByte(0x8E, 0x87)

        // APDS9960_POFFSET_UR, DEFAULT_POFFSET_UR
        wireWriteDataByte(0x9D, 0)

        // APDS9960_POFFSET_DL, DEFAULT_POFFSET_DL
        wireWriteDataByte(0x9E, 0)

        // APDS9960_CONFIG1, DEFAULT_CONFIG1
        wireWriteDataByte(0x8D, 0x60)

        // DEFAULT_LDRIVE
        setLEDDrive(0)

        // DEFAULT_PGAIN
        setProximityGain(2)

        // DEFAULT_AGAIN
        setAmbientLightGain(0)

        // DEFAULT_PILT
        setProxIntLowThresh(0)

        // DEFAULT_PIHT
        setProxIntHighThresh(50)

        // DEFAULT_AILT
        setLightIntLowThreshold(0xFFFF)

        // DEFAULT_AIHT
        setLightIntHighThreshold(0)

        // APDS9960_PERS, DEFAULT_PERS
        wireWriteDataByte(0x8C, 0x11)

        // APDS9960_CONFIG2, DEFAULT_CONFIG2
        wireWriteDataByte(0x90, 0x01)

        // APDS9960_CONFIG3, DEFAULT_CONFIG3
        wireWriteDataByte(0x9F, 0)

        // DEFAULT_GPENTH
        setGestureEnterThresh(40)

        // DEFAULT_GEXTH
        setGestureExitThresh(30)

        // APDS9960_GCONF1, DEFAULT_GCONF1
        wireWriteDataByte(0xA2, 0x40)

        // DEFAULT_GGAIN
        setGestureGain(2)

        // DEFAULT_GLDRIVE
        setGestureLEDDrive(0)

        // DEFAULT_GWTIME
        setGestureWaitTime(1)

        // APDS9960_GOFFSET_U, DEFAULT_GOFFSET
        wireWriteDataByte(0xA4, 0)

        // APDS9960_GOFFSET_D, DEFAULT_GOFFSET
        wireWriteDataByte(0xA5, 0)

        // APDS9960_GOFFSET_L, DEFAULT_GOFFSET
        wireWriteDataByte(0xA7, 0)

        // APDS9960_GOFFSET_R, DEFAULT_GOFFSET
        wireWriteDataByte(0xA9, 0)

        // APDS9960_GPULSE, DEFAULT_GPULSE
        wireWriteDataByte(0xA6, 0xC9)

        // APDS9960_GCONF3, DEFAULT_GCONF3
        wireWriteDataByte(0xAA, 0)

        // DEFAULT_GIEN
        setGestureIntEnable(0)

    }


    //% blockId=YFGesture_getMode
    //% block="get mode"
    function getMode(): number {
        let enable_value: number;
        /* Read current ENABLE register */
        // APDS9960_ENABLE
        enable_value = wireReadDataByte(0x80)
        return enable_value;
    }


    //% blockId=YFGesture_setMode
    //% block="set mode %mode %enable"
    function setMode(mode: NumberFormat.UInt8BE, enable: NumberFormat.UInt8BE): boolean {
        let reg_val: NumberFormat.UInt8BE;

        /* Read current ENABLE register */
        reg_val = getMode();
        // ERROR value
        if (reg_val == 0xFF) {
            return false;
        }

        /* Change bit(s) in ENABLE register */
        enable = enable & 0x01;
        if (mode >= 0 && mode <= 6) {
            if (enable) {
                reg_val |= (1 << mode);
            } else {
                reg_val &= ~(1 << mode);
            }
        } else if (mode == 7) {       // ALL mode
            if (enable) {
                reg_val = 0x7F;
            } else {
                reg_val = 0x00;
            }
        }

        /* Write value back to ENABLE register */
        // APDS9960_ENABLE
        wireWriteDataByte(0x80, reg_val)

        return true;
    }


    //% blockId=YFGesture_enablePower
    //% block="enable power"
    function enablePower() {
        setMode(0, 1)
    }


    //% blockId=YFGesture_disablePower
    //% block="disable power"
    function disbalePower() {
        setMode(0, 0)
    }

    function enableGestureSensor(): void {
        /* Enable gesture mode
           Set ENABLE to 0 (power off)
           Set WTIME to 0xFF
           Set AUX to LED_BOOST_300
           Enable PON, WEN, PEN, GEN in ENABLE 
        */
        resetGestureParameters();
        wireWriteDataByte(0x83, 0xFF)
        //APDS9960_PPULSE, DEFAULT_GESTURE_PPULSE
        wireWriteDataByte(0x8E, 0x89)
        // LED_BOOST_300
        setLEDBoost(3)
        setGestureIntEnable(0)
        setGestureMode(1)
        enablePower()
        // WAIT
        setMode(3, 1)
        // PROXIMITY
        setMode(2, 1)
        // GESTURE
        setMode(6, 1)
    }

    function disableGestureSensor() {
        resetGestureParameters();
        setGestureIntEnable(0)
        setGestureMode(0)
        setMode(6, 0)
    }

    //% blockId=YFGesture_getLEDDRive
    //% block="get LED drive"
    function getLEDDrive() {
        let val: number;

        /* Read value from CONTROL register */
        // APDS9960_CONTROL
        val = wireReadDataByte(0x8F)

        /* Shift and mask out LED drive bits */
        val = (val >> 6) & 0b00000011;

        return val;
    }


    //% blockId=YFGesture_setLEDDRive
    //% block="set LED drive %drive"
    function setLEDDrive(drive: NumberFormat.UInt8BE): void {
        let val: NumberFormat.UInt8BE = 0;

        /* Read value from CONTROL register */
        // APDS9960_CONTROL
        val = wireReadDataByte(0x8F)

        /* Set bits in register to given value */
        drive &= 0b00000011;
        drive = drive << 6;
        val &= 0b00111111;
        val |= drive;

        /* Write register value back into CONTROL register */
        // APDS9960_CONTROL, val
        wireWriteDataByte(0x8F, val)
    }


    //% blockId=YFGesture_getGestureLEDDrive
    //% block="get gesture LED drive"
    function getGestureLEDDrive() {
        let val: number;

        /* Read value from GCONF2 register */
        // APDS9960_GCONF2
        val = wireReadDataByte(0xA3)

        /* Shift and mask out GLDRIVE bits */
        val = (val >> 3) & 0b00000011;

        return val;
    }


    //% blockId=YFGesture_setGestureLEDDrive
    //% block="set gesture LED drive %drive"
    function setGestureLEDDrive(drive: number) {
        let val: number;

        /* Read value from GCONF2 register */
        // APDS9960_GCONF2
        val = wireReadDataByte(0xA3)
        /* Set bits in register to given value */
        drive &= 0b00000011;
        drive = drive << 3;
        val &= 0b11100111;
        val |= drive;

        /* Write register value back into GCONF2 register */
        // APDS9960_GCONF2
        wireWriteDataByte(0xA3, val);
    }


    //% blockId=YFGesture_getGestureGain
    //% block="get gesture gain"
    function getGestureGain() {
        let val: number;

        /* Read value from GCONF2 register */
        // APDS9960_GCONF2
        val = wireReadDataByte(0xA3)

        /* Shift and mask out GGAIN bits */
        val = (val >> 5) & 0b00000011;

        return val;
    }


    //% blockId=YFGesture_setGestureGain
    //% block="set gesture gain %gain"
    function setGestureGain(gain: number) {
        let val: number;

        /* Read value from GCONF2 register */
        // APDS9960_GCONF2
        val = wireReadDataByte(0xA3)

        /* Set bits in register to given value */
        gain &= 0b00000011;
        gain = gain << 5;
        val &= 0b10011111;
        val |= gain;

        /* Write register value back into GCONF2 register */
        // APDS9960_GCONF2
        wireWriteDataByte(0xA3, val)
    }


    //% blockId=YFGesture_getGestureIntEnable
    //% block="get gesture int enable"
    function getGestureIntEnable() {
        let val = 0;

        /* Read value from GCONF4 register */
        // APDS9960_GCONF4
        val = wireReadDataByte(0xAB)

        /* Shift and mask out GIEN bit */
        val = (val >> 1) & 0b00000001;

        return val;
    }


    function setGestureIntEnable(enable: number): void {
        let val = 0;

        /* Read value from GCONF4 register */
        // APDS9960_GCONF4
        val = wireReadDataByte(0xAB)
        /* Set bits in register to given value */
        enable &= 0b00000001;
        enable = enable << 1;
        val &= 0b11111101;
        val |= enable;

        /* Write register value back into GCONF4 register */
        // APDS9960_GCONF4
        wireWriteDataByte(0xAB, val)
    }


    function isGestureAvailable() {
        let val = 0;

        /* Read value from GSTATUS register */
        // APDS9960_GSTATUS
        val = wireReadDataByte(0xAF)

        /* Shift and mask out GVALID bit */
        // APDS9960_GVALID
        val &= 0b00000001;

        /* Return true/false based on GVALID bit */
        if (val == 1) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * read gesture
     */
    //% group="手势控制"
    //% blockId="Gesture_readGesture" weight=102 blockGap=15
    //% block="读取手势"
    //% gesture.fieldEditor="gridpicker" gesture.fieldOptions.columns=4
    export function gesture() {
        let fifo_level = 0;
        let bytes_read = 0;
        let gstatus: number;
        let fifo_data: number[] = []
        let motion: number;
        let i: number;
        let mode: number = getMode() & 0b01000001

        /* Make sure that power and gesture is on and data is valid */
        if (!isGestureAvailable() || !(mode)) {
            return;
        }

        /* Keep looping as long as gesture data is valid */
        while (1) {
            /* Wait some time to collect next batch of FIFO data */
            basic.pause(FIFO_PAUSE_TIME);       // FIFO_PAUSE_TIME

            /* Get the contents of the STATUS register. Is data still valid? */
            // APDS9960_GSTATUS
            gstatus = wireReadDataByte(0xAF);

            /* If we have valid data, read in FIFO */
            if ((gstatus & 0b00000001) == 0b00000001) {

                /* Read the current FIFO level */
                // APDS9960_GFLVL
                fifo_level = wireReadDataByte(0xAE)

                /* If there's stuff in the FIFO, read it into our data block */
                if (fifo_level > 0) {
                    //APDS9960_GFIFO_U
                    fifo_data = wireReadDataBlock(0xFC, (fifo_level * 4));

                    bytes_read = fifo_data.length

                    /* If at least 1 set of data, sort the data into U/D/L/R */
                    if (fifo_data.length >= 4) {
                        for (i = 0; i < bytes_read; i += 4) {
                            gesture_data_u_data[gesture_data_index] = fifo_data[i + 0];
                            gesture_data_d_data[gesture_data_index] = fifo_data[i + 1];
                            gesture_data_l_data[gesture_data_index] = fifo_data[i + 2];
                            gesture_data_r_data[gesture_data_index] = fifo_data[i + 3];
                            gesture_data_index++;
                            gesture_data_total_gestures++;
                        }

                        /* Filter and process gesture data. Decode near/far state */
                        if (processGestureData()) {
                            if (decodeGesture()) {
                            }
                        }

                        /* Reset data */
                        gesture_data_index = 0;
                        gesture_data_total_gestures = 0;
                    }
                }
            } else {

                /* Determine best guessed gesture and clean up */
                basic.pause(FIFO_PAUSE_TIME);
                decodeGesture();
                motion = gesture_motion_;
                motion_global = gesture_motion_
                resetGestureParameters();

                if (motion == DIR.DIR_UP) {
                    control.raiseEvent(5, 5)
                } else if (motion == DIR.DIR_DOWN) {
                    control.raiseEvent(5, 6)
                } else if (motion == DIR.DIR_RIGHT) {
                    control.raiseEvent(5, 7)
                } else if (motion == DIR.DIR_LEFT) {
                    control.raiseEvent(5, 8)
                } else if (motion == DIR.DIR_NEAR) {
                    control.raiseEvent(5, 9)
                } else if (motion == DIR.DIR_FAR) {
                    control.raiseEvent(5, 10)
                }
                return;
            }
        }

    }

    /**
     * Gesture sensor detection waving the action: no, upper, lower left, right, near, far.
     * @param u type of gesture to detect. eg: GESTURE_TYPE.UP
     * @param handler code to run
     */
    //% group="手势控制"
    //% blockId="Gesture_onGesture" weight=103 blockGap=15
    //% block="检测手势 |%u"
    //% u.fieldEditor="gridpicker" u.fieldOptions.columns=3
    export function onGesture(u: GESTURE_TYPE, handler: () => void) {
        if (u == GESTURE_TYPE.UP) {
            control.onEvent(5, 5, function () {
                handler()
            })
        }
        if (u == GESTURE_TYPE.DOWN) {
            control.onEvent(5, 6, function () {
                handler()
            })
        }
        if (u == GESTURE_TYPE.LEFT) {
            control.onEvent(5, 8, function () {
                handler()
            })
        }
        if (u == GESTURE_TYPE.RIGHT) {
            control.onEvent(5, 7, function () {
                handler()
            })
        }
        if (u == GESTURE_TYPE.NEAR) {
            control.onEvent(5, 9, function () {
                handler()
            })
        }
        if (u == GESTURE_TYPE.FAR) {
            control.onEvent(5, 10, function () {
                handler()
            })
        }
    }

    /**
     * Read the value of the gesture, no gesture: 0; up: 1; right: 2; down: 3; left: 4; near: 5; far: 6
     */
    //% group="手势控制"
    //% blockId="Gesture_getGestureID" weight=104 blockGap=15
    //% block="获取手势值"
    export function getGestureID(): number {
        let dir_id: number = 0
        if (motion_global == DIR.DIR_UP) {
            dir_id = 1
        } else if (motion_global == DIR.DIR_RIGHT) {
            dir_id = 2
        } else if (motion_global == DIR.DIR_DOWN) {
            dir_id = 3
        } else if (motion_global == DIR.DIR_LEFT) {
            dir_id = 4
        } else if (motion_global == DIR.DIR_NEAR) {
            dir_id = 5
        } else if (motion_global == DIR.DIR_FAR) {
            dir_id = 6
        } else {
            dir_id = 0
        }
        return dir_id
    }

    function decodeGesture(): boolean {
        /* Return if near or far event is detected */
        if (gesture_state_ == STATE.NEAR_STATE) {
            gesture_motion_ = DIR.DIR_NEAR;
            return true;
        } else if (gesture_state_ == STATE.FAR_STATE) {
            gesture_motion_ = DIR.DIR_FAR;
            return true;
        }

        /* Determine swipe direction */
        if ((gesture_ud_count_ == -1) && (gesture_lr_count_ == 0)) {
            gesture_motion_ = DIR.DIR_UP;
        } else if ((gesture_ud_count_ == 1) && (gesture_lr_count_ == 0)) {
            gesture_motion_ = DIR.DIR_DOWN;
        } else if ((gesture_ud_count_ == 0) && (gesture_lr_count_ == 1)) {
            gesture_motion_ = DIR.DIR_RIGHT;
        } else if ((gesture_ud_count_ == 0) && (gesture_lr_count_ == -1)) {
            gesture_motion_ = DIR.DIR_LEFT;
        } else if ((gesture_ud_count_ == -1) && (gesture_lr_count_ == 1)) {
            if (Math.abs(gesture_ud_delta_) > Math.abs(gesture_lr_delta_)) {
                gesture_motion_ = DIR.DIR_UP;
            } else {
                gesture_motion_ = DIR.DIR_RIGHT;
            }
        } else if ((gesture_ud_count_ == 1) && (gesture_lr_count_ == -1)) {
            if (Math.abs(gesture_ud_delta_) > Math.abs(gesture_lr_delta_)) {
                gesture_motion_ = DIR.DIR_DOWN;
            } else {
                gesture_motion_ = DIR.DIR_LEFT;
            }
        } else if ((gesture_ud_count_ == -1) && (gesture_lr_count_ == -1)) {
            if (Math.abs(gesture_ud_delta_) > Math.abs(gesture_lr_delta_)) {
                gesture_motion_ = DIR.DIR_UP;
            } else {
                gesture_motion_ = DIR.DIR_LEFT;
            }
        } else if ((gesture_ud_count_ == 1) && (gesture_lr_count_ == 1)) {
            if (Math.abs(gesture_ud_delta_) > Math.abs(gesture_lr_delta_)) {
                gesture_motion_ = DIR.DIR_DOWN;
            } else {
                gesture_motion_ = DIR.DIR_RIGHT;
            }
        } else {
            return false;
        }
        return true;
    }

    function processGestureData(): boolean {
        let u_first = 0;
        let d_first = 0;
        let l_first = 0;
        let r_first = 0;
        let u_last = 0;
        let d_last = 0;
        let l_last = 0;
        let r_last = 0;
        let ud_ratio_first = 0;
        let lr_ratio_first = 0;
        let ud_ratio_last = 0;
        let lr_ratio_last = 0;
        let ud_delta = 0;
        let lr_delta = 0;
        let i = 0;

        /* If we have less than 4 total gestures, that's not enough */
        if (gesture_data_total_gestures <= 4) {
            return false;
        }

        /* Check to make sure our data isn't out of bounds */
        if ((gesture_data_total_gestures <= 32) &&
            (gesture_data_total_gestures > 0)) {

            /* Find the first value in U/D/L/R above the threshold */
            for (i = 0; i < gesture_data_total_gestures; i++) {
                // GESTURE_THRESHOLD_OUT
                if ((gesture_data_u_data[i] > 10) && (gesture_data_d_data[i] > 10) &&
                    (gesture_data_l_data[i] > 10) && (gesture_data_r_data[i] > 10)) {
                    u_first = gesture_data_u_data[i];
                    d_first = gesture_data_d_data[i];
                    l_first = gesture_data_l_data[i];
                    r_first = gesture_data_r_data[i];
                    break;
                }
            }

            /* If one of the _first values is 0, then there is no good data */
            if ((u_first == 0) || (d_first == 0) || (l_first == 0) || (r_first == 0)) {
                return false;
            }

            /* Find the last value in U/D/L/R above the threshold */
            for (i = gesture_data_total_gestures - 1; i >= 0; i--) {

                if ((gesture_data_u_data[i] > 10) && (gesture_data_d_data[i] > 10) &&
                    (gesture_data_l_data[i] > 10) && (gesture_data_r_data[i] > 10)) {
                    u_last = gesture_data_u_data[i];
                    d_last = gesture_data_d_data[i];
                    l_last = gesture_data_l_data[i];
                    r_last = gesture_data_r_data[i];
                    break;
                }
            }
        }

        /* Calculate the first vs. last ratio of up/down and left/right */
        ud_ratio_first = ((u_first - d_first) * 100) / (u_first + d_first);
        lr_ratio_first = ((l_first - r_first) * 100) / (l_first + r_first);
        ud_ratio_last = ((u_last - d_last) * 100) / (u_last + d_last);
        lr_ratio_last = ((l_last - r_last) * 100) / (l_last + r_last);

        /* Determine the difference between the first and last ratios */
        ud_delta = ud_ratio_last - ud_ratio_first;
        lr_delta = lr_ratio_last - lr_ratio_first;

        /* Accumulate the UD and LR delta values */
        gesture_ud_delta_ += ud_delta;
        gesture_lr_delta_ += lr_delta;

        /* Determine U/D gesture */
        // GESTURE_SENSITIVITY_1
        if (gesture_ud_delta_ >= 50) {
            gesture_ud_count_ = 1;
        } else if (gesture_ud_delta_ <= -50) {
            gesture_ud_count_ = -1;
        } else {
            gesture_ud_count_ = 0;
        }

        /* Determine L/R gesture */
        if (gesture_lr_delta_ >= 50) {
            gesture_lr_count_ = 1;
        } else if (gesture_lr_delta_ <= -50) {
            gesture_lr_count_ = -1;
        } else {
            gesture_lr_count_ = 0;
        }

        /* Determine Near/Far gesture */
        if ((gesture_ud_count_ == 0) && (gesture_lr_count_ == 0)) {
            // GESTURE_SENSITIVITY_2
            if ((Math.abs(ud_delta) < 20) &&
                (Math.abs(lr_delta) < 20)) {

                if ((ud_delta == 0) && (lr_delta == 0)) {
                    gesture_near_count_++;
                } else if ((ud_delta != 0) || (lr_delta != 0)) {
                    gesture_far_count_++;
                }

                if ((gesture_near_count_ >= 10) && (gesture_far_count_ >= 2)) {
                    if ((ud_delta == 0) && (lr_delta == 0)) {
                        gesture_state_ = STATE.NEAR_STATE;
                    } else if ((ud_delta != 0) && (lr_delta != 0)) {
                        gesture_state_ = STATE.FAR_STATE;
                    }
                    return true;
                }
            }
        } else {
            // GESTURE_SENSITIVITY_2
            if ((Math.abs(ud_delta) < 20) && (Math.abs(lr_delta) < 20)) {

                if ((ud_delta == 0) && (lr_delta == 0)) {
                    gesture_near_count_++;
                }

                if (gesture_near_count_ >= 10) {
                    gesture_ud_count_ = 0;
                    gesture_lr_count_ = 0;
                    gesture_ud_delta_ = 0;
                    gesture_lr_delta_ = 0;
                }
            }
        }
        return false;
    }

    /**
     * Gesture enable work mode.
     * @param u mode. eg: GESTURE_WORKMODE.GESTURE_MODE
     */
    //% group="手势控制"
    //% blockId=Gesture_enable_mode weight=105 blockGap=15
    //% block="初始化手势传感器"
    export function enable_mode(): void {      
        enableGestureSensor()

    }



    function setProxIntLowThresh(threshold: number) {
        // APDS9960_PILT
        wireWriteDataByte(0x89, threshold)
    }

    function setProxIntHighThresh(threshold: number) {
        // APDS9960_PIHT
        wireWriteDataByte(0x8B, threshold)
    }

    function setLightIntLowThreshold(threshold: number) {
        let val_low: number;
        let val_high: number;
        /* Break 16-bit threshold into 2 8-bit values */
        val_low = threshold & 0x00FF;
        val_high = (threshold & 0xFF00) >> 8;
        /* Write low byte */
        // APDS9960_AILTL
        if (!wireWriteDataByte(0x84, val_low)) {
            return false;
        }
        /* Write high byte */
        // APDS9960_AILTH
        if (!wireWriteDataByte(0x85, val_high)) {
            return false;
        }
        return true;
    }

    function setLightIntHighThreshold(threshold: number) {
        let val_low: number;
        let val_high: number;
        /* Break 16-bit threshold into 2 8-bit values */
        val_low = threshold & 0x00FF;
        val_high = (threshold & 0xFF00) >> 8;
        /* Write low byte */
        // APDS9960_AIHTL
        if (!wireWriteDataByte(0x86, val_low)) {
            return false;
        }
        /* Write high byte */
        // APDS9960_AIHTH
        if (!wireWriteDataByte(0x87, val_high)) {
            return false;
        }
        return true;
    }

    function setGestureEnterThresh(threshold: number): void {
        // APDS9960_GPENTH
        wireWriteDataByte(0xA0, threshold)
    }

    function setGestureExitThresh(threshold: number): void {
        // APDS9960_GEXTH
        wireWriteDataByte(0xA1, threshold)
    }

    function setGestureWaitTime(time: number) {
        let val: number;

        /* Read value from GCONF2 register */
        // APDS9960_GCONF2
        val = wireReadDataByte(0xA3)

        /* Set bits in register to given value */
        time &= 0b00000111;
        val &= 0b11111000;
        val |= time;

        /* Write register value back into GCONF2 register */
        // APDS9960_GCONF2
        wireWriteDataByte(0xA3, val)
    }

    function setLEDBoost(boost: number) {
        let val: number;

        /* Read value from CONFIG2 register */
        // APDS9960_CONFIG2
        val = wireReadDataByte(0x90)

        /* Set bits in register to given value */
        boost &= 0b00000011;
        boost = boost << 4;
        val &= 0b11001111;
        val |= boost;

        /* Write register value back into CONFIG2 register */
        // APDS9960_CONFIG2
        wireWriteDataByte(0x90, val)
    }

    function setGestureMode(mode: number) {
        let val: number;

        /* Read value from GCONF4 register */
        // APDS9960_GCONF4
        val = wireReadDataByte(0xAB)

        /* Set bits in register to given value */
        mode &= 0b00000001;
        val &= 0b11111110;
        val |= mode;

        /* Write register value back into GCONF4 register */
        // APDS9960_GCONF4
        wireWriteDataByte(0xAB, val);
    }

    function resetGestureParameters() {
        gesture_data_index = 0;
        gesture_data_total_gestures = 0;

        gesture_ud_delta_ = 0;
        gesture_lr_delta_ = 0;

        gesture_ud_count_ = 0;
        gesture_lr_count_ = 0;

        gesture_near_count_ = 0;
        gesture_far_count_ = 0;

        gesture_state_ = 0;
        gesture_motion_ = DIR.DIR_NONE;
    }


    //% blockId=YFGesture_setProximityGain
    //% block="set proximity gain %drive"
    function setProximityGain(drive: NumberFormat.UInt8BE): void {
        let val: number;
        /* Read value from CONTROL register */
        // APDS9960_CONTROL
        val = wireReadDataByte(0x8F)

        /* Set bits in register to given value */
        drive &= 0b00000011;
        drive = drive << 2;
        val &= 0b11110011;
        val |= drive;
        /* Write register value back into CONTROL register */
        // APDS9960_CONTROL
        wireWriteDataByte(0x8F, val)
    }



    //% blockId=YFGesture_setAmbientLightGain
    //% block="set ambient light gain %drive"
    function setAmbientLightGain(drive: number): void {
        let val: number;
        /* Read value from CONTROL register */
        // APDS9960_CONTROL
        val = wireReadDataByte(0x8F)
        /* Set bits in register to given value */
        drive &= 0b00000011;
        val &= 0b11111100;
        val |= drive;
        /* Write register value back into CONTROL register */
        // APDS9960_CONTROL
        wireWriteDataByte(0x8F, val)
    }


    function setAmbientLightIntEnable(enable: number): void {
        let val: number;
        /* Read value from ENABLE register */
        // APDS9960_ENABLE
        val = wireReadDataByte(0x80)
        /* Set bits in register to given value */
        enable &= 0b00000001;
        enable = enable << 4;
        val &= 0b11101111;
        val |= enable;
        /* Write register value back into ENABLE register */
        // APDS9960_ENABLE
        wireWriteDataByte(0x80, val)
    }

    function wireWriteByte(val: NumberFormat.UInt8BE): boolean {
        pins.i2cWriteNumber(APDS9960_I2C_ADDR, val, NumberFormat.UInt8BE)
        return true;
    }

    function wireWriteDataByte(reg: number, val: number): boolean {
        let buf = pins.createBuffer(2)
        buf[0] = reg;
        buf[1] = val;
        pins.i2cWriteBuffer(APDS9960_I2C_ADDR, buf)
        return true;
    }

    function wireReadDataByte(reg: number): number {
        pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE);
        let val: number = pins.i2cReadNumber(APDS9960_I2C_ADDR, NumberFormat.UInt8BE)
        return val
    }

    function wireReadDataBlock(reg: NumberFormat.UInt8BE, len: number): number[] {
        let buff: number[] = []
        pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE);
        for (let i = 0; i < len; i++) {
            buff[i] = pins.i2cReadNumber(APDS9960_I2C_ADDR, NumberFormat.UInt8BE)
        }
        return buff
    }

    begin();



    //DHT11--------------------------------------------------------------------------
    //% blockId=readdht11 block="DHT11温湿度传感器端口%dht11pin获取%dht11type"
    //% group="传感器" weight=60
    export function dht11value(dht11pin: DigitalPin, dht11type: DHT11Type): number {
        const DHT11_TIMEOUT = 100
        const buffer = pins.createBuffer(40)
        const data = [0, 0, 0, 0, 0]
        let startTime = control.micros()

        if (control.hardwareVersion().slice(0, 1) !== '1') { // V2
            // TODO: V2 bug
            pins.digitalReadPin(DigitalPin.P0);
            pins.digitalReadPin(DigitalPin.P1);
            pins.digitalReadPin(DigitalPin.P2);
            pins.digitalReadPin(DigitalPin.P3);
            pins.digitalReadPin(DigitalPin.P4);
            pins.digitalReadPin(DigitalPin.P10);

            // 1.start signal
            pins.digitalWritePin(dht11pin, 0)
            basic.pause(18)

            // 2.pull up and wait 40us
            pins.setPull(dht11pin, PinPullMode.PullUp)
            pins.digitalReadPin(dht11pin)
            control.waitMicros(40)

            // 3.read data
            startTime = control.micros()
            while (pins.digitalReadPin(dht11pin) === 0) {
                if (control.micros() - startTime > DHT11_TIMEOUT) break
            }
            startTime = control.micros()
            while (pins.digitalReadPin(dht11pin) === 1) {
                if (control.micros() - startTime > DHT11_TIMEOUT) break
            }

            for (let dataBits = 0; dataBits < 40; dataBits++) {
                startTime = control.micros()
                while (pins.digitalReadPin(dht11pin) === 1) {
                    if (control.micros() - startTime > DHT11_TIMEOUT) break
                }
                startTime = control.micros()
                while (pins.digitalReadPin(dht11pin) === 0) {
                    if (control.micros() - startTime > DHT11_TIMEOUT) break
                }
                control.waitMicros(28)
                if (pins.digitalReadPin(dht11pin) === 1) {
                    buffer[dataBits] = 1
                }
            }
        } else { // V1
            // 1.start signal
            pins.digitalWritePin(dht11pin, 0)
            basic.pause(18)

            // 2.pull up and wait 40us
            pins.setPull(dht11pin, PinPullMode.PullUp)
            pins.digitalReadPin(dht11pin)
            control.waitMicros(40)

            // 3.read data
            if (pins.digitalReadPin(dht11pin) === 0) {
                while (pins.digitalReadPin(dht11pin) === 0);
                while (pins.digitalReadPin(dht11pin) === 1);

                for (let dataBits = 0; dataBits < 40; dataBits++) {
                    while (pins.digitalReadPin(dht11pin) === 1);
                    while (pins.digitalReadPin(dht11pin) === 0);
                    control.waitMicros(28)
                    if (pins.digitalReadPin(dht11pin) === 1) {
                        buffer[dataBits] = 1
                    }
                }
            }
        }

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 8; j++) {
                if (buffer[8 * i + j] === 1) {
                    data[i] += 2 ** (7 - j)
                }
            }
        }

        if (((data[0] + data[1] + data[2] + data[3]) & 0xff) === data[4]) {
            dht11Humidity = data[0] + data[1] * 0.1
            dht11Temperature = data[2] + data[3] * 0.1
        }

        switch (dht11type) {
            case DHT11Type.DHT11_temperature_C:
                return dht11Temperature
            case DHT11Type.DHT11_temperature_F:
                return (dht11Temperature * 1.8) + 32
            case DHT11Type.DHT11_humidity:
                return dht11Humidity
        }
    }

    //双色灯----------------------------------------------------------------------

    //% blockId=Rbled block="双色灯红灯端口%port1状态%iodata1蓝/绿灯端口%port2状态%iodata2"
    //% weight=61
    //% group="执行器"
    export function Rbledset(port1:DigitalPin, iodata1: RBLED,port2:DigitalPin, iodata2: RBLED){
        pins.digitalWritePin(port1,iodata1)
        pins.digitalWritePin(port2,iodata2)
    }

    //马达----------------------------------------------------------------------
    //% blockId=moto block="%port 电机%iodata速度%speed"
    //% weight=62
    //% group="执行器"
    //% speed.max=1023
    //% speed.min=0
    export function Motorset(port: MOTORNUM,iodata:MOTORTYPE,speed:number){
        if (port == 1){
            if(iodata == 1){
                pins.analogWritePin(AnalogPin.P15,speed)
                pins.analogWritePin(AnalogPin.P16,0)
            }else if(iodata == 2){
                pins.analogWritePin(AnalogPin.P15,0)
                pins.analogWritePin(AnalogPin.P16,speed)
            }else{
                pins.analogWritePin(AnalogPin.P15,0)
                pins.analogWritePin(AnalogPin.P16,0)
            }
        }else if(port == 2){
            if(iodata == 1){
                pins.analogWritePin(AnalogPin.P13,speed)
                pins.analogWritePin(AnalogPin.P14,0)
            }else if(iodata == 2){
                pins.analogWritePin(AnalogPin.P13,0)
                pins.analogWritePin(AnalogPin.P14,speed)
            }else{
                pins.analogWritePin(AnalogPin.P13,0)
                pins.analogWritePin(AnalogPin.P14,0)
            }
        }else if(port == 3){
            if(iodata == 1){
                pins.analogWritePin(AnalogPin.P13,speed)
                pins.analogWritePin(AnalogPin.P14,0)
                pins.analogWritePin(AnalogPin.P15,speed)
                pins.analogWritePin(AnalogPin.P16,0)
            }else if(iodata == 2){
                pins.analogWritePin(AnalogPin.P13,0)
                pins.analogWritePin(AnalogPin.P14,speed)
                pins.analogWritePin(AnalogPin.P15,0)
                pins.analogWritePin(AnalogPin.P16,speed)
            }else{
                pins.analogWritePin(AnalogPin.P13,0)
                pins.analogWritePin(AnalogPin.P14,0)
                pins.analogWritePin(AnalogPin.P15,0)
                pins.analogWritePin(AnalogPin.P16,0)
            }
        }    
    }

    //射频读卡---------------------------------------------------------------
    //% blockId=INIT_RFID block="初始化ID射频卡 RX|%rx TX|%tx"
    //% weight=71
    //% group="射频读卡"
    export function initRFID(rx: SerialPin, tx: SerialPin):void {
        serial.redirect(rx as number,tx as number,BaudRate.BaudRate9600)
    }


    //% blockId=READ_ID_NUM block="ID射频卡读取卡号"
    //% weight=70
    //% group="射频读卡" 
    export function readidNum(): number {
        const readiddata = serial.readBuffer(6)
        if (readiddata.length > 5){
            if ((readiddata[0]^readiddata[1]^readiddata[2]^readiddata[3]^readiddata[4])==readiddata[5]){
                idnum = readiddata[1]*4294967296 + readiddata[2]*65536 + readiddata[3]*256 + readiddata[4]
            }
        }else{
            idnum = 0
        }
        return idnum       
    }

    //MPU6050陀螺仪--------------------------------------------------------------
    function i2cWrite(addr: number, reg: number, value: number): void {
        let buf = pins.createBuffer(2);
        buf[0] = reg;
        buf[1] = value;
        pins.i2cWriteBuffer(addr, buf);
    }

    function i2cRead(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
        return val;
    }



    /**
	 * 初始化MPU6050
	 * @param addr [0-1] choose address; eg: MPU6050.MPU6050_I2C_ADDRESS.ADDR_0x68
	*/
    //% blockId="MPU6050_initMPU6050"
    //% block="初始化MPU6050"
    //% weight=75
    //% group="陀螺仪"
    export function initMPU6050() {
        i2cWrite(MPU6050_I2C_ADDRESS.ADDR_0x68, REGISTER.PWR_MGMT, 0)
    }



    /**
	 *Read byte from MPU6050 register
	 * @param reg  register of MPU6050; eg: 0, 15, 23
	*/
    function readByte(reg: REGISTER): number {
        let val2 = i2cRead(MPU6050_I2C_ADDRESS.ADDR_0x68, reg);
        return val2;
    }

    /**
	 *Read data from MPU6050 register
	 * @param reg  register of MPU6050; eg: 0, 15, 23
	*/
    function readWord(reg: REGISTER): number {
        let valh = i2cRead(MPU6050_I2C_ADDRESS.ADDR_0x68, reg);
        let vall = i2cRead(MPU6050_I2C_ADDRESS.ADDR_0x68, reg + 1);
        let val3 = (valh << 8) + vall
        return val3
    }

    /**
	 *Read data from MPU6050 register
	 * @param reg  register of MPU6050; eg: 0, 15, 23
	*/
    function readWord2C(reg: REGISTER): number {
        let val4 = readWord(reg)
        if (val4 > 0x8000) {
            return -((65535 - val4) + 1)
        } else {
            return val4
        }
    }



    /**
	 * 倾斜角度
	*/
    //% blockId=MPU6050_get_angle
    //% block="获取设备方向 |%axis| 的倾斜角度"
    //% weight=74
    //% group="陀螺仪"
    export function getAngle(axis: AXIS): number {
        switch (axis) {
            case AXIS.X:
                return Math.acos(getAccel(axis)) * 57.29577
            case AXIS.Y:
                return Math.acos(getAccel(axis)) * 57.29577
            case AXIS.Z:
                return Math.acos(getAccel(axis)) * 57.29577
            default:
                return 0
        }
        return 0

    }


    /**
	 * 获取加速度 单位g
	*/
    //% blockId=MPU6050_get_accel
    //% block="获取设备方向 |%axis| 的加速度"
    //% weight=73
    //% group="陀螺仪"
    export function getAccel(axis: AXIS): number {
        switch (axis) {
            case AXIS.X:
                return (readWord2C(REGISTER.ACCEL_X) + X_ACCEL_OFFSET) / 16384.0
            case AXIS.Y:
                return (readWord2C(REGISTER.ACCEL_Y) + Y_ACCEL_OFFSET) / 16384.0
            case AXIS.Z:
                return (readWord2C(REGISTER.ACCEL_Z) + Z_ACCEL_OFFSET) / 16384.0
            default:
                return 0
        }
        return 0
    }




    /**
	 * 获取角速度
	*/
    //% blockId=MPU6050_get_gyro
    //% block="获取设备方向 |%axis| 的角速度"
    //% weight=72
    //% group="陀螺仪"
    export function getGyro(axis: AXIS): number {
        switch (axis) {
            case AXIS.X:
                return (readWord2C(REGISTER.GYRO_X) + X_GYRO_OFFSET)
            case AXIS.Y:
                return (readWord2C(REGISTER.GYRO_Y) + Y_GYRO_OFFSET)
            case AXIS.Z:
                return (readWord2C(REGISTER.GYRO_Z) + Z_GYRO_OFFSET)
            default:
                return 0
        }
        return 0
    }



} 
