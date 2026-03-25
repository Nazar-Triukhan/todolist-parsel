var t;function e(){let t=document.querySelectorAll(".tasks__item");document.querySelector(".tasks__count").textContent=t.length}t=function(t){document.querySelector(".tasks__list").insertAdjacentHTML("beforeend",`
    <div class="tasks__item" data-id="${((t=21)=>{let e="",s=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&s[t]];return e})(5)}">
      <div>
        <input type="checkbox" class="tasks__checkbox">
        <span class="tasks__text">${t}</span>
      </div>
      <div class="tasks__width">
        <button class="tasks__edit-btn">rename</button>
        <button class="tasks__delete-btn">delete</button>
      </div>
    </div>
  `),e()},document.querySelector(".tasks__add-btn").addEventListener("click",()=>{let e=document.querySelector(".tasks__input").value;""===e.trim()?alert("Name text"):t(e)}),document.querySelector(".tasks__list").addEventListener("click",t=>{let s=t.target.closest(".tasks__item");t.target.classList.contains("tasks__delete-btn")&&(s.remove(),e())}),document.querySelector(".tasks__list").addEventListener("click",t=>{let e=t.target.closest(".tasks__item");t.target.classList.contains("tasks__checkbox")&!0===t.target.checked&&e.classList.add("tasks__item-true"),t.target.classList.contains("tasks__checkbox")&!1===t.target.checked&&e.classList.remove("tasks__item-true")}),e(),document.querySelector(".tasks__list").addEventListener("click",t=>{t.target.closest(".tasks__edit-btn")&&alert("функція в розробці")});
//# sourceMappingURL=Todolist-parsel.a4dfbbff.js.map
