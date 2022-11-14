import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTitle'
})
export class MyTitlePipe implements PipeTransform {

  transform(name: string,gender:string): string {
    if(gender.toUpperCase()== "MALE")
    return "Mr. "+name;
    else 
    return "Miss. "+name;    
  }

}
