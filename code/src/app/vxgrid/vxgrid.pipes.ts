import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'vxNumberFixedLen' })
export class VxNumberFixedLenPipe implements PipeTransform {
    transform(n: string, len: number) {
        var num = parseInt(n, 10);        
        if (isNaN(num) || isNaN(len)) {
            return '00';
        }
        var _output:string = '' + num;
        while (_output.length < len) {
            _output = '0' + num;
        }
        return _output;
    }
}