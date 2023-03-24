"use strict";(self.webpackChunkdocument_management=self.webpackChunkdocument_management||[]).push([[437],{6943:(U,C,i)=>{i.d(C,{H:()=>h});var d=i(5e3),g=i(520);let h=(()=>{class e{constructor(t){this.httpClient=t}getAllCategories(){return this.httpClient.get("Category")}delete(t){return this.httpClient.delete(`Category/${t}`)}update(t){return this.httpClient.put(`Category/${t.id}`,t)}add(t){return this.httpClient.post("Category",t)}getSubCategories(t){return this.httpClient.get(`Category/${t}/subcategories`)}getAllCategoriesForDropDown(){return this.httpClient.get("Category/dropdown")}}return e.\u0275fac=function(t){return new(t||e)(d.LFG(g.eN))},e.\u0275prov=d.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},775:(U,C,i)=>{i.d(C,{L:()=>b});var d=i(3075),g=i(2349),h=i(2676),e=i(5e3),D=i(520);let t=(()=>{class r{constructor(o){this.httpClient=o}getDocumentComment(o){return this.httpClient.get(`documentComment/${o}`)}deleteDocumentComment(o){return this.httpClient.delete(`documentComment/${o}`)}saveDocumentComment(o){return this.httpClient.post("documentComment/",o)}}return r.\u0275fac=function(o){return new(o||r)(e.LFG(D.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var u=i(5485),y=i(6107),f=i(9808),A=i(5245),O=i(2925);function Z(r,_){if(1&r){const o=e.EpF();e.TgZ(0,"div",18)(1,"h4",19),e._uU(2),e.TgZ(3,"span",20),e.NdJ("click",function(){const E=e.CHM(o).$implicit,s=e.oxw();return e.KtG(s.onDelete(E.id))}),e._UZ(4,"i",21),e.qZA()(),e.TgZ(5,"div",22)(6,"small",23),e._uU(7),e.ALo(8,"date"),e.qZA(),e.TgZ(9,"small",24),e._uU(10),e.qZA()()()}if(2&r){const o=_.$implicit;e.xp6(2),e.hij(" ",o.comment," "),e.xp6(5),e.hij(" ",e.lcZ(8,3,o.createdDate)," "),e.xp6(3),e.hij("",null==o?null:o.createdBy," ")}}function T(r,_){1&r&&(e.TgZ(0,"div",26),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"COMMENT_IS_REQUIRED")," "))}function x(r,_){if(1&r&&(e.TgZ(0,"div"),e.YNc(1,T,3,3,"div",25),e.qZA()),2&r){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",null==o.commentForm.get("comment").errors?null:o.commentForm.get("comment").errors.required)}}let b=(()=>{class r extends h.H{constructor(o,c,v,E,s,p){super(),this.fb=o,this.data=c,this.documentCommentService=v,this.dialogRef=E,this.commonDialogService=s,this.translationService=p,this.documentComments=[]}ngOnInit(){this.createForm(),this.getDocumentComment()}closeDialog(){this.dialogRef.close()}createForm(){this.commentForm=this.fb.group({comment:["",[d.kI.required]]})}getDocumentComment(){this.sub$.sink=this.documentCommentService.getDocumentComment(this.data.id).subscribe(o=>{this.documentComments=o})}patchComment(o){this.commentForm.patchValue({comment:o})}addComment(){if(this.commentForm.invalid)return void this.commentForm.markAllAsTouched();const o={documentId:this.data.id,comment:this.commentForm.get("comment").value};this.sub$.sink=this.documentCommentService.saveDocumentComment(o).subscribe(c=>{this.patchComment(""),this.commentForm.markAsUntouched(),this.getDocumentComment()})}onDelete(o){this.sub$.sink=this.commonDialogService.deleteConformationDialog(`${this.translationService.getValue("ARE_YOU_SURE_YOU_WANT_TO_DELETE")}?`).subscribe(c=>{c&&(this.sub$.sink=this.documentCommentService.deleteDocumentComment(o).subscribe(()=>{this.getDocumentComment()}))})}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(d.QS),e.Y36(g.WI),e.Y36(t),e.Y36(g.so),e.Y36(u.V),e.Y36(y.D))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-document-comment"]],features:[e.qOj],decls:32,vars:10,consts:[[1,"dialog-header"],[1,"folder-dialog-info"],[1,"section-title"],[1,"close-icon","m-2","text-danger",3,"click"],[1,"material-icons","cursor-pointer"],[1,"row"],[1,"col-sm-12"],[1,"card-header"],[1,"card-body"],[1,"list-group"],["class","list-group-item list-group-item-action","aria-current","true",4,"ngFor","ngForOf"],[1,"mt-3",3,"formGroup"],[1,"form-group"],["formControlName","comment","rows","3",1,"form-control"],[4,"ngIf"],[1,"col-md-12","mt-1"],["type","submit",1,"btn","btn-success",3,"click"],[1,"fas","fa-paper-plane"],["aria-current","true",1,"list-group-item","list-group-item-action"],[1,"mb-1"],["role","button",1,"badge",3,"click"],[1,"large","las","la-trash","text-danger"],[1,"w-100"],[1,"mr-2"],[1,"text-primary"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(o,c){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2")(4,"mat-icon"),e._uU(5,"folder"),e.qZA(),e._uU(6),e.ALo(7,"translate"),e.qZA()()(),e.TgZ(8,"div",3),e.NdJ("click",function(){return c.closeDialog()}),e.TgZ(9,"span",4),e._uU(10," close "),e.qZA()()(),e._UZ(11,"br"),e.TgZ(12,"div",5)(13,"div",6)(14,"div"),e._UZ(15,"div",7),e.TgZ(16,"div",8)(17,"div",5)(18,"div",6)(19,"div",9),e.YNc(20,Z,11,5,"div",10),e.qZA()()(),e.TgZ(21,"div",5)(22,"div",6)(23,"form",11)(24,"div",12),e._UZ(25,"textarea",13),e.YNc(26,x,2,1,"div",14),e.qZA(),e.TgZ(27,"div",15)(28,"button",16),e.NdJ("click",function(){return c.addComment()}),e._UZ(29,"i",17),e._uU(30),e.ALo(31,"translate"),e.qZA()()()()()()()()()),2&o&&(e.xp6(6),e.AsE(" ",c.data.name,"'s ",e.lcZ(7,6,"COMMENT")," "),e.xp6(14),e.Q6J("ngForOf",c.documentComments),e.xp6(3),e.Q6J("formGroup",c.commentForm),e.xp6(3),e.Q6J("ngIf",c.commentForm.get("comment").touched&&c.commentForm.get("comment").errors),e.xp6(4),e.hij(" ",e.lcZ(31,8,"ADD_COMMENT")," "))},dependencies:[f.sg,f.O5,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,A.Hw,f.uU,O.X$]}),r})()},493:(U,C,i)=>{i.d(C,{F:()=>E});var d=i(520),g=i(2349),h=i(7954),e=i(6927),D=i(2676),t=i(5e3),u=i(1218),y=i(2457),f=i(914),A=i(690),O=i(6107),Z=i(5485),T=i(9808),x=i(5245),b=i(2925);function r(s,p){1&s&&(t.TgZ(0,"span",12),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&s&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"CURRENT_VERSION")))}function _(s,p){if(1&s){const n=t.EpF();t.TgZ(0,"span",16),t.NdJ("click",function(){t.CHM(n);const m=t.oxw(2).$implicit,a=t.oxw();return t.KtG(a.downloadDocument(m))}),t.TgZ(1,"mat-icon"),t._uU(2," download"),t.qZA()()}}function o(s,p){if(1&s){const n=t.EpF();t.TgZ(0,"span",17),t.NdJ("click",function(){t.CHM(n);const m=t.oxw(2).$implicit,a=t.oxw();return t.KtG(a.restoreDocumentVersion(m))}),t.TgZ(1,"mat-icon"),t._uU(2," restore"),t.qZA()()}}function c(s,p){if(1&s){const n=t.EpF();t.TgZ(0,"div")(1,"span",13),t.NdJ("click",function(){t.CHM(n);const m=t.oxw().$implicit,a=t.oxw();return t.KtG(a.onDocumentView(m))}),t.TgZ(2,"mat-icon"),t._uU(3," visibility"),t.qZA()(),t.YNc(4,_,3,0,"span",14),t.YNc(5,o,3,0,"span",15),t.qZA()}if(2&s){const n=t.oxw(2);t.xp6(4),t.Q6J("ngIf",!n.data.isAssignUser),t.xp6(1),t.Q6J("ngIf",!n.data.isAssignUser)}}function v(s,p){if(1&s&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"td"),t.YNc(8,r,3,3,"span",10),t.YNc(9,c,6,2,"div",11),t.qZA()()),2&s){const n=p.$implicit;t.xp6(2),t.Oqu(t.xi3(3,5,n.modifiedDate,"dd/MM/yyyy hh:mm a")),t.xp6(3),t.AsE(" ",t.lcZ(6,8,"ADDED_BY "),"",n.createdByUser," "),t.xp6(3),t.Q6J("ngIf",n.isCurrentVersion),t.xp6(1),t.Q6J("ngIf",!n.isCurrentVersion)}}let E=(()=>{class s extends D.H{constructor(n,l,m,a,M,I,R,S){super(),this.data=n,this.overlay=l,this.dialogRef=m,this.toastrService=a,this.documentService=M,this.commonService=I,this.translationService=R,this.commandDialogService=S,this.documentVersions=[]}ngOnInit(){}closeDialog(){this.dialogRef.close()}onDocumentView(n){const m=n.url.split(".")[1];this.overlay.open(e.Y,{position:"center",origin:"global",panelClass:["file-preview-overlay-container","white-background"],data:{documentId:n.id,name:this.data.name,extension:m,isRestricted:n.isAllowDownload,isVersion:!0,id:this.data.id,isFromPreview:!1}})}restoreDocumentVersion(n){this.sub$.sink=this.commandDialogService.deleteConformationDialog("Are you sure you want to restore this to current version").subscribe(l=>{l&&(this.sub$.sink=this.documentService.restoreDocumentVersion(this.data.id,n.id).subscribe(()=>{this.toastrService.success(this.translationService.getValue("VERSION_RESTORED_SUCCESSFULLY.")),this.dialogRef.close()}))})}downloadDocument(n){var l={id:n.id,isVersion:!0,name:"",extension:"",url:""};this.sub$.sink=this.commonService.downloadDocument(l.id,!0).subscribe(m=>{m.type===d.dt.Response&&(this.addDocumentTrail(this.data.id,h.g.Download.toString()),this.downloadFile(m,l))},m=>{this.toastrService.error(this.translationService.getValue("ERROR_WHILE_DOWNLOADING_DOCUMENT"))})}addDocumentTrail(n,l){this.sub$.sink=this.commonService.addDocumentAuditTrail({documentId:n,operationName:l}).subscribe(a=>{})}downloadFile(n,l){const m=new Blob([n.body],{type:n.body.type}),a=document.createElement("a");a.setAttribute("style","display:none;"),document.body.appendChild(a),a.download=this.data.name,a.href=URL.createObjectURL(m),a.target="_blank",a.click(),document.body.removeChild(a)}}return s.\u0275fac=function(n){return new(n||s)(t.Y36(g.WI),t.Y36(u.T),t.Y36(g.so),t.Y36(y._W),t.Y36(f.Z),t.Y36(A.v),t.Y36(O.D),t.Y36(Z.V))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-document-version-history"]],features:[t.qOj],decls:16,vars:5,consts:[[1,"dialog-header"],[1,"folder-dialog-info"],[1,"section-title"],[1,"close-icon","m-2","text-danger",3,"click"],[1,"material-icons","cursor-pointer"],[1,"d-content"],[1,"box","box-primary"],[1,"box-body"],[1,"table"],[4,"ngFor","ngForOf"],["class","badge badge-success","style","margin-bottom: 10px",4,"ngIf"],[4,"ngIf"],[1,"badge","badge-success",2,"margin-bottom","10px"],["matTooltip","view","role","button",1,"material-icons-outlined","mr-2","text-primary",3,"click"],["role","button","class","mr-2 text-primary","matTooltip","Download",3,"click",4,"ngIf"],["role","button","matTooltip","Restore to Current Version","class","material-icons-outlined text-primary",3,"click",4,"ngIf"],["role","button","matTooltip","Download",1,"mr-2","text-primary",3,"click"],["role","button","matTooltip","Restore to Current Version",1,"material-icons-outlined","text-primary",3,"click"]],template:function(n,l){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),t._uU(4),t.ALo(5,"translate"),t.qZA()()(),t.TgZ(6,"div",3),t.NdJ("click",function(){return l.closeDialog()}),t.TgZ(7,"span",4),t._uU(8," close "),t.qZA()()(),t._UZ(9,"br"),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"table",8)(14,"tbody"),t.YNc(15,v,10,10,"tr",9),t.qZA()()()()()),2&n&&(t.xp6(4),t.AsE(" ",l.data.name,"... ",t.lcZ(5,3,"VERSION_HISOTRY")," "),t.xp6(11),t.Q6J("ngForOf",l.data.documentVersions))},dependencies:[T.sg,T.O5,x.Hw,T.uU,b.X$],styles:[".table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:none}"]}),s})()}}]);