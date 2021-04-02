(()=>{"use strict";class e{constructor(e){this.name=e,this.id=Math.random().toString().split(".").join(""),this.tasks=[]}render(){const e=document.createElement("div");e.setAttribute("class","projects"),e.setAttribute("id",this.id);const t=document.createElement("p");t.textContent=this.name;const c=document.createElement("i");c.setAttribute("class","fas fa-trash"),c.addEventListener("click",(()=>{this.delete()})),e.appendChild(t),e.appendChild(c),document.querySelector("#projectArea").appendChild(e),e.addEventListener("click",(()=>{n=this,n.active=!1,this.renderTasks(),document.querySelectorAll(".projects").forEach((e=>e.classList.value="projects")),e.classList.value.includes("active")||e.classList.add("active")}))}delete(){t=t.filter((e=>e.id!==this.id)),e.renderProject()}renderTasks(){document.querySelector("#taskArea").innerHTML="",this.tasks.forEach((e=>e.render()))}static renderProject(){document.querySelector("#projectArea").textContent="",t.forEach((e=>e.render()))}static setCurrentProject(e){n=e}}let t=[new e("Test Project")],n=t[0];function c(e){const t=document.createElement("section");return t.setAttribute("id",e),t}class s{constructor(e,t,n){this.name=e,this.date=t,this.priority=n,this.id=Math.random().toString().split(".").join("")}render(){const e=document.createElement("section");e.setAttribute("class","taskToDo"),e.setAttribute("id",this.id);const t=document.createElement("section");t.setAttribute("class","taskName"),e.appendChild(t);const n=document.createElement("input");n.type="checkbox",t.appendChild(n);const c=document.createElement("h3");c.textContent=this.name,t.appendChild(c);const s=document.createElement("section");s.setAttribute("class","taskDetails"),e.appendChild(s);const r=document.createElement("h4");r.textContent=this.date,s.appendChild(r);const a=document.createElement("p");a.textContent=this.priority,s.appendChild(a);const i=document.createElement("i");i.setAttribute("class","fas fa-backspace"),s.appendChild(i),i.addEventListener("click",(()=>{this.delete()})),document.querySelector("#taskArea").appendChild(e)}delete(){n.tasks=n.tasks.filter((e=>e.id!==this.id)),n.renderTasks()}edit(){}}!function(){const e=document.querySelector("#content"),t=function(e){const t=document.createElement("header");return t.setAttribute("id","header"),t}();e.appendChild(t);const n=function(e,t){const n=document.createElement("div");n.setAttribute("id","headerElement");const c=document.createElement("i");c.setAttribute("class","fa fa-home"),n.appendChild(c);const s=document.createElement("h1");return s.textContent="ToDo List",n.appendChild(s),n}();t.appendChild(n);const s=c("contentArea");e.appendChild(s);const r=c("sideBar");s.appendChild(r);const a=function(e,t,n){const c=document.createElement("section");c.setAttribute("id","submitForm");const s=document.createElement("input");s.setAttribute("id","inputProject");const r=document.createElement("button");return r.setAttribute("id","submit"),r.textContent=">",c.appendChild(s),c.appendChild(r),c}();r.appendChild(a);const i=c("projectArea");i.setAttribute("class","card"),r.appendChild(i);const d=c("tasks");s.appendChild(d);const o=function(e,t,n){const c=document.createElement("section");c.setAttribute("id","task-section");const s=document.createElement("section");s.setAttribute("id","task-container"),c.appendChild(s);const r=document.createElement("input");r.setAttribute("id","nameTask"),r.type="text",s.appendChild(r);const a=document.createElement("input");a.setAttribute("id","dateTask"),a.type="date",s.appendChild(a);const i=document.createElement("select");i.setAttribute("id","priorityTask"),s.appendChild(i);const d=document.createElement("option");d.value="low",d.textContent="Low";const o=document.createElement("option");o.value="high",o.textContent="High",i.appendChild(d),i.appendChild(o);const l=document.createElement("button");return l.setAttribute("id","submitTasks"),l.textContent="Add",s.appendChild(l),c}();d.appendChild(o);const l=c("taskArea");d.appendChild(l)}(),document.querySelector("#submit").addEventListener("click",(n=>{n.preventDefault();const c=document.querySelector("#inputProject");if(""===c.value)return void alert("The Project must have a name");const s=new e(c.value);t.push(s),c.value="",e.renderProject(),e.setCurrentProject(s);let r=document.querySelectorAll(".projects");r[r.length-1].classList.add("active")})),document.querySelector("#submitTasks").addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector("#nameTask");if(""===t.value)return void alert("The Project must have a name");const c=document.querySelector("#dateTask");if(""===c.value)return void alert("The Project must have a name");const r=document.querySelector("#priorityTask"),a=new s(t.value,c.value,r.value);t.value="",c.value="",n.tasks.push(a),a.render()})),e.renderProject()})();