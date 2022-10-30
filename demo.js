(function(){
    class myEl extends HTMLElement {
        connectedCallback()
        { 
              this.style=`
            color:green;
            `;
            this.innerHTML=`
            <div>
            <h1> Homemade element </h1>
            <input type="text" placeholder="homemade input" />
            <input type="button" value="homemade input" />
            </div>
            `
            ;
            this.onclick=function()
            {
                alert("Home made part is clicked")
            }

        }
        
        
        
    }
window.customElements.define('my-el',myEl);
})()