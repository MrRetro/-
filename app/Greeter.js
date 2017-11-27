//import React, {Component} from 'react';
//import config from './config.json';
//import styles from './Greeter.css';//导入
//
//class Greeter extends Component{
//render() {
//  return (
//    <div className={styles.root}>//添加类名
//      {config.greetText}
//    </div>
//  );
//}
//}
//
//export default Greeter

import React, {Component} from 'react';
import config from './config.json';
import english from './english.json';
import styles from './Greeter.css';//导入

class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>//添加类名
        {this.getEnglish()}
      </div>
    );
  }
  getEnglish(){
  		var json=english;
  		var el,oldTxt,index,newArry=new Array();
			el='';
			for(var key in json){
				newArry.push('<span class="key">'+key+'</span> : '+'<span class="value">'+json[key]+'</span>');
			}
			newArry.map(function(value,index){
				el+='<p class="line"><span class="num">'+(index+1)+'</span>.'+value+'</p>'
			});
			return el;
  }
}

export default Greeter