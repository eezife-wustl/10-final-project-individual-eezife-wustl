(this["webpackJsonpa-poets-tool"]=this["webpackJsonpa-poets-tool"]||[]).push([[0],{16:function(e,t,o){},18:function(e,t,o){},19:function(e,t,o){},20:function(e,t,o){"use strict";o.r(t);var n=o(2),a=o.n(n),i=o(9),s=o.n(i),r=o(3),c=o(4),l=o(7),m=o(6),h=o(5),d=(o.p,o(10)),u=(o(16),o(1)),p=function(e){Object(m.a)(o,e);var t=Object(h.a)(o);function o(e){return Object(r.a)(this,o),t.call(this,e)}return Object(c.a)(o,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"form-group",id:"myWordForm",children:[Object(u.jsxs)("p",{children:[" Poetry is hard. When I attempt to write, I'm often stuck wondering ",Object(u.jsx)("i",{children:"what"})," exactly to write about. So I made this little tool. Click the button, and you'll be given a list of words to draw inspiration from, along with a poetic form you can use. But feel free to write what you'd like - this is only a start. ~ xoxo Erika"]}),Object(u.jsx)("span",{children:" Select a Subject to Generate Words From: "}),Object(u.jsxs)("select",{className:"form-select form-select-lg","aria-label":"Default select example",id:"PoemTopic",onChange:this.props.onChange,children:[Object(u.jsx)("option",{defaultValue:"Pick For Me",children:"Pick For Me"}),Object(u.jsx)("option",{value:"Love",children:"Love"}),Object(u.jsx)("option",{value:"Nature",children:"Nature"}),Object(u.jsx)("option",{value:"Gratitude",children:"Gratitude"}),Object(u.jsx)("option",{value:"Humor",children:"Humor"}),Object(u.jsx)("option",{value:"Joy",children:"Joy"}),Object(u.jsx)("option",{value:"Passion",children:"Passion"}),Object(u.jsx)("option",{value:"Nostalgia",children:"Nostalgia"}),Object(u.jsx)("option",{value:"Optimism",children:"Optimism"}),Object(u.jsx)("option",{value:"Contentment",children:"Contentment"}),Object(u.jsx)("option",{value:"Boredom",children:"Boredom"}),Object(u.jsx)("option",{value:"Pessimism",children:"Pessimism"}),Object(u.jsx)("option",{value:"Frustration",children:"Frustration"})]}),Object(u.jsx)("button",{type:"button",className:"btn btn-dark btn-lg",onClick:this.props.onClick,children:"BE INSPIRED"})]})}}]),o}(n.Component),j=(o(18),function(e){Object(m.a)(o,e);var t=Object(h.a)(o);function o(e){return Object(r.a)(this,o),t.call(this,e)}return Object(c.a)(o,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"poemstuff",children:[Object(u.jsx)("p",{id:"myWords",children:" Write a poem using this form: "}),Object(u.jsxs)("span",{children:[" ",this.props.PoemStuff," "]})]})}}]),o}(n.Component)),b=(o(19),function(e){Object(m.a)(o,e);var t=Object(h.a)(o);function o(){return Object(r.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(u.jsxs)("header",{children:[Object(u.jsx)("nav",{className:"navbar navbar-expand-md navbar-light static-top-0 static-top-1 bg-light",id:"poetsToolBox",children:Object(u.jsx)("div",{className:"container justify-content-center",children:Object(u.jsx)("a",{className:"navbar-brand",href:"index.html",children:"A POET'S TOOL."})})}),Object(u.jsx)("nav",{className:"navbar navbar-expand-md static-top-0 static-top-2 bg-dark",children:Object(u.jsx)("div",{className:"container justify-content-center",children:Object(u.jsx)("a",{className:"nav-link",href:"#",children:"NEED MORE TOOLS?"})})})]})}}]),o}(n.Component)),f=b,O=function(e){Object(m.a)(o,e);var t=Object(h.a)(o);function o(e){var n;return Object(r.a)(this,o),(n=t.call(this,e)).state={poemForms:["Aubade: a dawn song that greets the morning while lamenting the end of the night, often concerning the parting of lovers.","Ballad: a plot-driven song with one or more characters and often constructed in quatrain stanzas.","Blank Verse: poetry that does not rhyme but follows a regular meter, most commonly iambic pentameter.","Free Verse: poetry not dictated by an established form or meter and often influenced by the rhythms of speech.","Lyric Poetry: a non-narrative poem, often with songlike qualities, that expresses the speaker\u2019s personal emotions and feelings.","Persona Poem: a poem also known as a dramatic monologue in which the poet assumes the voice of another person, fictional character, or identity.","Sestina: a complex, thirty-nine-line poem featuring the intricate repetition of end-words in six stanzas and an envoi.","Terza Rima: a form invented in fourteenth-century Italy that is composed of tercets woven into a complex rhyme scheme. ","Sonnet: a fourteen-line poem traditionally written in iambic pentameter, employing one of several rhyme schemes, and adhering to a tightly structured thematic organization. "],myPoemForm:"",myPoemWords:[],myPoemTopic:"Pick For Me",randomPoemTopic:["Love","Nature","Gratitude","Humor","Joy","Passion","Nostalgia","Optimism","Contentment","Boredom","Pessimism","Frustration"],randomPoemWords:[],unHide:{visibility:"hidden"}},n.handleChange=n.handleChange.bind(Object(l.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n.pickRandomWords=n.pickRandomWords.bind(Object(l.a)(n)),n}return Object(c.a)(o,[{key:"componentDidMount",value:function(){var e;this.setState({myPoemForm:this.state.poemForms[Math.floor(Math.random()*this.state.poemForms.length)]}),console.log(this.state.myPoemTopic),e=new Request("https://api.datamuse.com/words?topics="+this.state.randomPoemTopic[Math.floor(Math.random()*this.state.randomPoemTopic.length)]+"&max=1000");var t=this;fetch(e).then((function(e){return e.json()})).then((function(e){t.setState({myPoemWords:e})})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState({myPoemTopic:e.target.value})}},{key:"handleSubmit",value:function(e){var t;e.preventDefault(),this.setState({myPoemForm:this.state.poemForms[Math.floor(Math.random()*this.state.poemForms.length)]}),console.log(this.state.myPoemTopic),t="Pick For Me"===this.state.myPoemTopic?new Request("https://api.datamuse.com/words?topics="+this.state.randomPoemTopic[Math.floor(Math.random()*this.state.randomPoemTopic.length)]+"&max=1000"):new Request("https://api.datamuse.com/words?topics="+this.state.myPoemTopic+"&max=1000"),console.log(t);var o=this;fetch(t).then((function(e){return e.json()})).then((function(e){o.setState({myPoemWords:e}),o.setState({randomPoemWords:d.a.shuffle(e).slice(0,10)}),o.setState({unHide:{visibility:"visible"}})})).catch((function(e){console.log(e)}))}},{key:"pickRandomWords",value:function(e){for(var t=new Array(10),o=0;o<11;o++)t[o]=e[Math.floor(Math.random()*e.length)];return t}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(f,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(p,{onClick:this.handleSubmit,onChange:this.handleChange,PoemTopic:this.state.myPoemTopic})}),Object(u.jsxs)("div",{style:this.state.unHide,className:"row",children:[Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsx)(j,{PoemStuff:this.state.myPoemForm})}),Object(u.jsxs)("div",{className:"col-md-6",children:[Object(u.jsx)("p",{id:"myWords",children:" Drawing inspiration from these words: "}),this.state.randomPoemWords.map((function(e){return Object(u.jsxs)("p",{style:{fontSize:"1.4rem"},children:[e.word," "]},e.word)}))]})]})]})]})}}]),o}(n.Component),v=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,21)).then((function(t){var o=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;o(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),v()}},[[20,1,2]]]);
//# sourceMappingURL=main.872c7bd4.chunk.js.map