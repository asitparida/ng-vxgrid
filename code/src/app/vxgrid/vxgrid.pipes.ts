import { Pipe, PipeTransform } from '@angular/core';
import { MultiBoxFilterItem } from './vxgrid.config'

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

@Pipe({name: 'vxFilterArrayWithToken'})
export class VxFilterArrayWithToken implements PipeTransform{
    transform(items:Array<MultiBoxFilterItem>, token:string){
        if(typeof items === 'undefined')
            return [];
        else{
            var _result = items.filter(item => item.label.indexOf(token) !== -1 || item.name.indexOf(token) !== -1);
            return _result;
        }
    }
}