export enum AttributeCard{
    'image'='image',
    'text'='text'
}

export default class Card extends HTMLElement{
    image?:string;
    text?:string;

    static get observedAttributes(){
        const attrs: Record<AttributeCard,null>={
            image:null,
            text:null,
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propname: AttributeCard, oldValue: string | undefined, newValue: string | undefined) {
        switch (propname) {
          default:
            this[propname] = newValue;
            break;
}
    }
constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

connectedCallback() {
this.render();
}

render() {
    if (this.shadowRoot){ this.shadowRoot.innerHTML=`<section>
    <image
     src='${this.image}'>
    <p>${this.text}</p>
    </image>
    <button class='show'>Show Fact</button>
    <button class='favorite'>Add To Favorites</button>
    </section>
`
//buttonclassfavorite.addeventlistener("click", =>(localStorage.setItem()))
}
//const something = this.ownerDocument.createElement('div');
//this.shadowRoot?.appendChild(something);
}
}

customElements.define('my-card', Card)    