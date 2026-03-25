var t;t=function(t){document.querySelector(".tasks__list").insertAdjacentHTML("beforeend",`
    <div class="tasks__item">
      <div>
        <input type="checkbox" class="tasks__checkbox">
        <span class="tasks__text">${t}</span>
      </div>
      <div class="tasks__width">
        <button class="tasks__edit-btn">rename</button>
        <button class="tasks__delete-btn">delete</button>
      </div>
    </div>
  `)},document.querySelector(".tasks__add-btn").addEventListener("click",()=>{let e=document.querySelector(".tasks__input").value;""===e.trim()?alert("Name text"):t(e)});
//# sourceMappingURL=Todolist-parsel.3cfac61c.js.map
