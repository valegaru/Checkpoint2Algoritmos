import styles from './index.css'
import "./components/export"
import { getDataImage } from "./services/getDataImage";
import { getDataText } from './services/getDataText';
import { AttributeCard } from './components/Card/card';

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        const datatext = await getDataText();
        console.log(datatext)
        const firstwords= datatext.split(" ",4)
        console.log(firstwords)

        const joinedwords = firstwords.join(" ")
        console.log(joinedwords);

        const dataimage = await getDataImage(joinedwords);
        console.log(dataimage)
        this.render(dataimage,datatext)
    }

    render(dataimage:any, datatext:any) {
        if (this.shadowRoot) this.shadowRoot.innerHTML=``

    const card= this.ownerDocument.createElement('my-card')
    card.setAttribute(AttributeCard.image,dataimage)
    card.setAttribute(AttributeCard.text,datatext)
    this.shadowRoot?.appendChild(card);
    

    const cssAbuelo = this.ownerDocument.createElement('style');
    cssAbuelo.innerHTML=styles
    this.shadowRoot?.appendChild(cssAbuelo);
    }
}

customElements.define('app-container', AppContainer)


//dataimage.forEach((e:any) => {