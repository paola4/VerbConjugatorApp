"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1189],{1189:(x,l,p)=>{p.d(l,{r:()=>d});var a=p(7582);const s=JSON.parse('[{"type":"verb","tip":"<p>Insert Verb Description</p>"},{"type":"tense","tip":"<p>Insert Tense Description</p>"},{"type":"subject","tip":"<p>Insert Subject Description</p>"},{"type":"object","tip":"<p>Insert Object Description</p>"}]');var t=p(4893),n=p(8058),b=p(9808);let d=(()=>{class i{constructor(o){this.modalController=o,this.tips=s,console.log("constructor")}ngOnInit(){console.log(this.conj_type),console.log("tips",this.tips),this.formatSelected()}formatSelected(){var o=document.querySelector(":root");let e="--ion-color-"+this.conj_type,g=getComputedStyle(o).getPropertyValue(e);o.style.setProperty("--holder",g)}getTip(){let o="";for(let e of this.tips)if(e.type==this.conj_type){o=e.tip;break}return o}closeModal(){return(0,a.mG)(this,void 0,void 0,function*(){yield this.modalController.dismiss()})}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(n.IN))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-verb-tooltip"]],inputs:{conj_type:"conj_type"},decls:11,vars:6,consts:[["charset","UTF-8"],[3,"color"],["text-center","",1,"ion-no-padding"],[1,"description",3,"innerHTML"],[1,"ion-no-border","ion-text-center"],[1,"cancel",3,"color","click"]],template:function(o,e){1&o&&(t._UZ(0,"meta",0),t.TgZ(1,"ion-header")(2,"ion-toolbar",1)(3,"ion-title",2),t._uU(4),t.ALo(5,"titlecase"),t.qZA()()(),t.TgZ(6,"ion-content"),t._UZ(7,"div",3),t.qZA(),t.TgZ(8,"ion-footer",4)(9,"ion-button",5),t.NdJ("click",function(){return e.closeModal()}),t._uU(10,"OK"),t.qZA()()),2&o&&(t.xp6(2),t.s9C("color",e.conj_type),t.xp6(2),t.hij("",t.lcZ(5,4,e.conj_type)," Tooltip"),t.xp6(3),t.Q6J("innerHTML",e.getTip(),t.oJD),t.xp6(2),t.s9C("color",e.conj_type))},directives:[n.Gu,n.sr,n.wd,n.W2,n.fr,n.YG],pipes:[b.rS],styles:["[_ngcontent-%COMP%]:root{--holder: #FFFFFF}ion-title[_ngcontent-%COMP%]{font-size:24px!important;padding:5% 0 2%;color:#fff!important;font-weight:700;text-shadow:0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black}ion-toolbar[_ngcontent-%COMP%]{background-color:var(--ion-color-verb);padding:5px 15px}ion-header[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 0 2px #000;padding:0!important}ion-label[_ngcontent-%COMP%]{font-weight:700;box-sizing:content-box!important;padding:3px 0}.ion-padding[_ngcontent-%COMP%]{color:#fff}.footer[_ngcontent-%COMP%]{box-shadow:0 0 2px #000;padding:0 5px!important}ion-footer[_ngcontent-%COMP%]{height:10%!important;padding:5px;border:0}ion-header[_ngcontent-%COMP%]{padding:2% 5%}ion-button[_ngcontent-%COMP%]{color:#fff!important;font-weight:700;text-shadow:0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black;width:45%;height:80%;right:0;font-size:20px;text-transform:none!important;background-color:#fff;background-color:var(--holder)}ion-content[_ngcontent-%COMP%]{padding:5%}.description[_ngcontent-%COMP%]{padding:5%;font-weight:700;font-size:14pt}"]}),i})()}}]);