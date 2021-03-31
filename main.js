(()=>{"use strict";class t{constructor(t){this.name=t,this.id=Math.random().toString().split(".").join(""),this.tasks=[]}render(){const t=document.createElement("div");t.setAttribute("class","projects"),t.setAttribute("id",this.id);const e=document.createElement("p");e.textContent=this.name;const c=document.createElement("i");c.setAttribute("class","fas fa-trash"),c.addEventListener("click",(()=>{this.delete()})),t.appendChild(e),t.appendChild(c),document.querySelector("#projectArea").appendChild(t),t.addEventListener("click",(()=>{n=this,n.active=!1,document.querySelectorAll(".projects").forEach((t=>t.classList.value="projects")),t.classList.value.includes("active")||t.classList.add("active")}))}delete(){e=e.filter((t=>t.id!==this.id)),t.renderProject()}renderTasks(){document.querySelector("#taskArea").innerHTML="",this.tasks.forEach((t=>t.render()))}static renderProject(){document.querySelector("#projectArea").textContent="",e.forEach((t=>t.render()))}static setCurrentFolder(t){n=t}}let e=[new t("Test")],n=e[0];function c(t){const e=document.createElement("section");return e.setAttribute("id",t),e}!function(){const t=document.querySelector("#content"),e=function(t){const e=document.createElement("header");return e.setAttribute("id","header"),e}();t.appendChild(e);const n=function(t,e){const n=document.createElement("div");n.setAttribute("id","headerElement");const c=document.createElement("i");c.setAttribute("class","fa fa-home"),n.appendChild(c);const s=document.createElement("h1");return s.textContent="ToDo List",n.appendChild(s),n}();e.appendChild(n);const s=c("contentArea");t.appendChild(s);const i=c("sideBar");s.appendChild(i);const r=function(t,e,n){const c=document.createElement("section");c.setAttribute("id","submitForm");const s=document.createElement("input");s.setAttribute("id","inputProject");const i=document.createElement("button");return i.setAttribute("id","submit"),i.textContent=">",c.appendChild(s),c.appendChild(i),c}();i.appendChild(r);const d=c("projectArea");d.setAttribute("class","card"),i.appendChild(d);const o=c("tasks");s.appendChild(o);const a=function(t,e,n){const c=document.createElement("section");c.setAttribute("id","task-section");const s=document.createElement("section");s.setAttribute("id","task-container"),c.appendChild(s);const i=document.createElement("input");i.setAttribute("id","nameTask"),i.type="text",s.appendChild(i);const r=document.createElement("input");r.setAttribute("id","dateTask"),r.type="date",s.appendChild(r);const d=document.createElement("select");d.setAttribute("id","priorityTask"),s.appendChild(d);const o=document.createElement("option");o.value="low",o.textContent="Low";const a=document.createElement("option");a.value="high",a.textContent="High",d.appendChild(o),d.appendChild(a);const u=document.createElement("button");return u.setAttribute("id","submitTasks"),u.textContent="Add",s.appendChild(u),c}();o.appendChild(a);const u=c("taskArea");o.appendChild(u)}(),document.querySelector("#submit").addEventListener("click",(n=>{n.preventDefault();const c=document.querySelector("#inputProject");if(""===c.value)return void alert("The Project must have a name");const s=new t(c.value);e.push(s),c.value="",t.renderProject()}))})();