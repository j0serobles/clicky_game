(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","occupation":"Fry Cook","location":"A Pineapple Under the Sea","isClicked":false},{"id":2,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","occupation":"Restaurant Owner","location":"A Giant Anchor","isClicked":false},{"id":3,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","occupation":"Cashier","location":"An Easter Island Head","isClicked":false},{"id":4,"name":"Dexter","image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","occupation":"Boy Genius","location":"A Secret Laboratory","isClicked":false},{"id":5,"name":"Courage","image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","occupation":"A Cowardly Dog","location":"Nowhere, Kansas","isClicked":false},{"id":6,"name":"Doug Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","occupation":"Student","location":"Bluffington","isClicked":false},{"id":7,"name":"Bugs Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","occupation":"Looney Toon","location":"A Rabbit Burrow","isClicked":false},{"id":8,"name":"Johnny Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","occupation":"Ladies Man","location":"Aron City","isClicked":false},{"id":9,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","occupation":"Adventurer","location":"California","isClicked":false},{"id":10,"name":"Rocko","image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","occupation":"Cashier","location":"O-Town, California","isClicked":false},{"id":11,"name":"Captain Planet","image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","occupation":"Superhero","location":"Earth","isClicked":false},{"id":12,"name":"Ickis","image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","occupation":"Ahhhh! A Real Monster!","location":"Under a City Dump","isClicked":false}]')},,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(2),c=t.n(o),s=(t(15),t(7)),r=t(3),l=t(4),m=t(8),u=t(5),g=t(9);t(16);var d=function(e){return i.a.createElement("div",{className:"col-sm-3"},i.a.createElement("div",{className:"card m-1 shadow"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{className:"img-fluid mx-auto d-block",alt:e.name,src:e.image,onClick:function(){return e.processClick(e.id)}}))))};t(17);var p=function(e){return i.a.createElement("span",{className:"navbar-text"},e.statusMsg)};var h=function(e){return i.a.createElement("span",{className:"navbar-text"},"Score: ",e.currentScore," | High Score: ",e.highScore)};t(18);var f=function(e){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},i.a.createElement("a",{className:"navbar-brand",href:"/"},i.a.createElement("i",{className:"fas fa-mouse"}),"  ",i.a.createElement("strong",null,"Clicky-Game")),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},i.a.createElement("div",{className:"row container-fluid mx-auto"},i.a.createElement("div",{className:"col text-center"},i.a.createElement(p,{statusMsg:e.statusMsg})),i.a.createElement("div",{className:"col text-right"},i.a.createElement(h,{currentScore:e.currentScore,highScore:e.highScore})))))};t(19);var v=function(e){return i.a.createElement("footer",{className:"bd-footer text-muted"},i.a.createElement("div",{className:"container mt-3"},i.a.createElement("p",null,"Built with ",i.a.createElement("a",{href:"https://reactjs.org/",target:"_blank"},i.a.createElement("i",{class:"fab fa-react"}),"   React JS")),i.a.createElement("p",null,"Access the ",i.a.createElement("a",{href:"https://github.com/j0serobles/clicky-game",target:"_blank"},"GitHub Repo"))))},k=t(6),b=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(i)))).state={currentScore:0,highScore:0,statusMsg:"Click an image to begin!",icons:k},t.shuffleIcons=function(){for(var e,a,n=t.state.icons,i=t.state.icons.length;i>0;)a=Math.floor(Math.random()*i),e=n[--i],n[i]=n[a],n[a]=e;t.setState({icons:n})},t.processClick=function(e){var a,n=null,i="",o=t.state.currentScore,c=t.state.highScore;t.state.icons.forEach((function(a,t){a.id===e&&(n=a)})),n&&n.isClicked?(i=" You Guessed Incorrectly! ",o=0,t.resetIcons()):n&&!n.isClicked&&(console.log("".concat(o," , ").concat(t.state.icons.length)),o+1===t.state.icons.length?(i=" Game Won!",c=o+1,o=0,t.resetIcons()):(i=" You guessed correctly! ",o++,n.isClicked=!0,o>c&&(c=o))),a=t.state.icons.map((function(e){return e.id===n.id?n:e})),t.setState({icons:a,statusMsg:i,currentScore:o,highScore:c}),t.shuffleIcons()},t.resetIcons=function(){var e=Object(s.a)(t.state.icons);e.forEach((function(e){e.isClicked=!1})),t.setState({icons:e})},t}return Object(g.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container"},i.a.createElement(f,{statusMsg:this.state.statusMsg,currentScore:this.state.currentScore,highScore:this.state.highScore}),i.a.createElement("div",{className:"row mt-3"},this.state.icons.map((function(a){return i.a.createElement(d,{processClick:function(){return e.processClick(a.id)},id:a.id,key:a.id,name:a.name,image:a.image,occupation:a.occupation,location:a.location})}))),i.a.createElement(v,null))}}]),a}(i.a.Component);var C=function(){return i.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.60ccb4f2.chunk.js.map