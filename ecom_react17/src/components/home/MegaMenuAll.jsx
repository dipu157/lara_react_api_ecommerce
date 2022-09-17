import React, { Component } from 'react'

class MegaMenuAll extends Component {

    constructor(){
        super();
        this.MegaMenu = this.MegaMenu.bind(this);
      }
    
      componentDidMount(){
        this.MegaMenu();
      }
    
      MegaMenu(){
        var acc = document.getElementsByClassName("accordionAll");
        var accNum = acc.length;
        var i;
        for(i=0; i<accNum; i++){
          acc[i].addEventListener("click", function (){
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if(panel.style.maxHeight){
              panel.style.maxHeight = null;
            }else{
              panel.style.maxHeight = panel.scrollHeight+ "px"
            }
          })
        }
      }


  render() {
    return (
      <div className='accordionMenuDivAll mt-3'>
        <div className='accordionMenuDivInsideAll'>
            <button className='accordionAll'>
              <img className='accordionMenuIconAll' src='https://cdn-icons-png.flaticon.com/128/739/739249.png' />
              Men's Clothing
            </button>

            <div className='panelAll'>
              <ul>
                <li><a className='accordionItemAll' href='#'>Clothing1</a></li>
                <li><a className='accordionItemAll' href='#'>Clothing2</a></li>
              </ul>
            </div>

            </div>
        </div>
    )
  }
}

export default MegaMenuAll