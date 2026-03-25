
import creatItem from './js/creatTasck'
import btnRef from './js/btn'


btnRef(creatItem)

function change(){
    const checkRef = document.querySelector('.tasks__checkbox')
    checkRef.addEventListener('change',(e) => {
        console.log(e.target.checked);
        
    })
}









