(window.webpackJsonp=window.webpackJsonp||[]).push([["104c"],{Juxd:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/store/createproduct",function(){var e=a("xn1F");return{page:e.default||e}}])},Mt1y:function(e,t,a){"use strict";var n=a("pVnL"),r=a.n(n),i=a("TSYQ"),l=a.n(i),c=(a("17x9"),a("q1tI")),o=a.n(c),s=a("ZeOK"),u=a("ICNK"),d=a("Y53p"),p=a("H+2d");function h(e){var t=e.children,a=e.className,n=e.clearing,i=e.content,c=e.fitted,f=e.hidden,g=e.horizontal,m=e.inverted,b=e.section,v=e.vertical,O=l()("ui",Object(s.a)(n,"clearing"),Object(s.a)(c,"fitted"),Object(s.a)(f,"hidden"),Object(s.a)(g,"horizontal"),Object(s.a)(m,"inverted"),Object(s.a)(b,"section"),Object(s.a)(v,"vertical"),"divider",a),j=Object(u.a)(h,e),y=Object(d.a)(h,e);return o.a.createElement(y,r()({},j,{className:O}),p.a.isNil(t)?i:t)}h.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"],h.propTypes={},t.a=h},xn1F:function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),r=a("sLSF"),i=a("MI3g"),l=a("a7VT"),c=a("AT/M"),o=a("Tit0"),s=a("vYYK"),u=a("q1tI"),d=a.n(u),p=a("CafY"),h=a("8cHP"),f=a("Mt1y"),g=a("aQu0"),m=a("vFsZ"),b=a("umxb"),v=a("pLir"),O=a("5XkN"),j=a("QetY"),y=a("D1pA"),E=a("Ktyj"),C=function(e){function t(e){var a;return Object(n.default)(this,t),a=Object(i.default)(this,Object(l.default)(t).call(this,e)),Object(s.a)(Object(c.default)(a),"handleOnChange",function(e){a.setState(Object(s.a)({},e.target.name,e.target.value))}),Object(s.a)(Object(c.default)(a),"selectInput",function(e,t){var n=t.value;a.setState({tag:n})}),Object(s.a)(Object(c.default)(a),"onTagUpdate",function(e){var t=[];e.forEach(function(e){var a=e.data(),n=a.key,r=a.text,i=a.value;t.push({key:n,text:r,value:i})}),a.setState({tags:t})}),Object(s.a)(Object(c.default)(a),"handleSelectFile",function(e){var t=e.target.files[0].name.split(".")[1];a.setState({file:e.target.files[0],url:URL.createObjectURL(e.target.files[0]),extension:t})}),Object(s.a)(Object(c.default)(a),"handleOnSubmit",function(e){e.preventDefault(),a.setState({loading:!0});var t="".concat(a.props.id,"/").concat(a.state.productname,".").concat(a.state.extension);E.a.storage().ref().child(t).put(a.state.file).then(function(){E.a.firestore().collection("stores").doc(a.props.id).get().then(function(e){var n=e.data().products;null==n?E.a.firestore().collection("stores").doc(a.props.id).set({products:[{productname:a.state.productname,price:a.state.price,tag:a.state.tag,quantity:a.state.quantity,url:t}],available:!0},{merge:!0}):(n.push({productname:a.state.productname,price:a.state.price,tag:a.state.tag,quantity:a.state.quantity,url:t}),E.a.firestore().collection("stores").doc(a.props.id).set({products:n},{merge:!0})),h.Router.pushRoute("/store")})})}),a.state={tags:[],tag:"",productname:"",quantity:"",extension:"",price:"",store:"",loading:!1,file:null,url:null,user:""},a.ref=E.a.firestore().collection("tags"),a.tags=null,a}return Object(o.default)(t,e),Object(r.default)(t,[{key:"componentDidMount",value:function(){this.tags=this.ref.onSnapshot(this.onTagUpdate)}},{key:"render",value:function(){return d.a.createElement(p.a,null,d.a.createElement(f.a,{horizontal:!0,style:{margin:"10px"}},d.a.createElement(g.a,{as:"h3"},"Create Product")),d.a.createElement("div",{style:{margin:"10px",borderStyle:"solid",borderColor:"#DCDCDC",borderWidth:"1px",padding:"10px"}},d.a.createElement(m.a,{style:{margin:"10px"},onSubmit:this.handleOnSubmit},d.a.createElement(m.a.Field,{required:!0,control:b.a,onChange:this.handleOnChange,label:"Product Name",value:this.state.productname,placeholder:"Product Name",name:"productname"}),d.a.createElement(m.a.Field,{required:!0,value:this.state.price,control:b.a,onChange:this.handleOnChange,label:"Price",placeholder:"Price",name:"price"}),d.a.createElement(m.a.Field,{label:"Tag",required:!0}),d.a.createElement(m.a.Field,null,d.a.createElement(v.a,{fluid:!0,search:!0,selection:!0,clearable:!0,name:"tag",placeholder:"Select Your Tag",options:this.state.tags,onChange:this.selectInput,value:this.state.tag})),d.a.createElement(m.a.Field,{required:!0,value:this.state.quantity,control:b.a,onChange:this.handleOnChange,label:"Quantity",placeholder:"Quantity",name:"quantity"}),d.a.createElement("input",{type:"file",id:"file",onChange:this.handleSelectFile}),d.a.createElement(O.a,{src:this.state.url}),d.a.createElement(j.a,{color:"blue",loading:this.state.loading},"Create Product ",d.a.createElement(y.a,{name:"add circle"})))))}}],[{key:"getInitialProps",value:function(e){return{id:e.query.id}}}]),t}(u.Component);t.default=C}},[["Juxd","5d41","9da1"]]]);