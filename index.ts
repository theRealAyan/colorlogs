import {
	gray,
	blueBright,
	greenBright,
	redBright,
	yellowBright
} from 'colorette'

function getTime(): string {
  let date = new Date()

    let h: number = date.getHours()
    let m: number= date.getMinutes()
    let s:number = date.getSeconds()
    let ms: string = String(date.getMilliseconds())

    switch(ms.length){
    	case 1:
    		ms = '00' + ms;
    		break;
    	case 2:
    		ms = '0' + ms;
    		break;
    };

  return `${h}:${m}:${s}:${ms}`

}

export function info(text:string):void {
	return console.log(`${gray(getTime())} - ${blueBright('info') }    - ${text}`)
}
export function success(text:string):void {
    return console.log(`${gray(getTime())} - ${greenBright('success') } - ${text}`)
}
export function warn(text:string):void {
    return console.log(`${gray(getTime())} - ${yellowBright('warning') } - ${text}`)
}
export function error(text:string):void {
    return console.log(`${gray(getTime())} - ${redBright('error') }   - ${text}`)
}
