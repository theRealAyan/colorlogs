import {
	gray,
	blueBright,
	greenBright,
	redBright,
	yellowBright,
	bold,
	dim
} from 'colorette';

import * as dayjs from 'dayjs';

function getTime(): string {return dayjs().format('HH:mm:ss:SSS'); };

export function info(text:string):void {
	return console.log(`${gray(getTime())} ${bold(blueBright('INFO'))}    ${text}`);
};
export function success(text:string):void {
    return console.log(`${gray(getTime())} ${bold(greenBright('SUCCESS'))} ${text}`);
};
export function warn(text:string):void {
    return console.log(`${gray(getTime())} ${bold(yellowBright('WARNING'))} ${text}`);
};
export function error(text:string):void {
    return console.log(`${gray(getTime())} ${bold(redBright('ERROR'))}   ${text}`);
};
