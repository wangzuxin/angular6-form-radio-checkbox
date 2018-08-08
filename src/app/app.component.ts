import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hobbies: string[] = ['看电视', '玩游戏', '做饭', '睡觉'];
  myInfo = {
    name: 'wangzuxin',
    sex: '男',
    hobbies: []
  };
  selectItem(ind, checked, value) {
    console.log(ind, checked, value);
    // 获得用户的答案
    const index: number = this.myInfo.hobbies.indexOf(value);
    if (checked) {
      if (index < 0) {
        this.myInfo.hobbies.push(value);
      }
    } else {
      if (index > -1) {
        this.myInfo.hobbies = this.myInfo.hobbies.filter((ele, key) => {
          return ele !== value;
        });
      }
    }
  }
}
