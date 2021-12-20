import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(arreglo: any[], texto: string = ''): any[] {
    if( texto === ''){
      return arreglo;
    }
    if ( !arreglo ){
      return arreglo;
    }
    texto = texto.toLocaleLowerCase();
    return arreglo.filter((item)=>item.title.toLowerCase().includes(texto) );

  }

}
