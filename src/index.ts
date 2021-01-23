import {
	gray,
	blueBright,
	greenBright,
	redBright,
	yellowBright,
	bold,
	dim
} from 'colorette';

function len(args: number) {
	let str: string = String(args);
	switch(str.length){
		case 0:
			str = '00' + str;
			break;
		case 1:
			str = '0' + str;
			break;
	};

	return str;
};

function getTime(): string {
  const date = new Date();

    let h: string = String(date.getHours());

	if(h.length < 1) h = '0' + h;
    
    const m: string = len(date.getMinutes());
    const s: string = len(date.getSeconds());
    const ms: string = len(date.getMilliseconds());

    

  return `${h}:${m}:${s}:${ms}`;

};

export function info(text:string):void {
	return console.log(`${gray(getTime())} ${bold(blueBright('INFO'))}    ${dim(text)}`);
};
export function success(text:string):void {
    return console.log(`${gray(getTime())} ${bold(greenBright('SUCCESS'))} ${dim(text)}`);
};
export function warn(text:string):void {
    return console.log(`${gray(getTime())} ${bold(yellowBright('WARNING'))} ${dim(text)}`);
};
export function error(text:string):void {
    return console.log(`${gray(getTime())} ${bold(redBright('ERROR'))}   ${dim(text)}`);
};
