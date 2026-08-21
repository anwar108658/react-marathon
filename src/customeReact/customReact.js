const parent = document.getElementById('root')

const reactElement  = {
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"google"
}


function customRender(reactElement,container) {
    /*
    const domEl = document.createElement(reactElement.type)
    domEl.innerHTML = reactElement.children
    domEl.setAttribute('href',reactElement.props.href)
    domEl.setAttribute('target',reactElement.props.target)

    container.appendChild(domEl)
    */
   const domEl2 = document.createElement(reactElement.type)
   domEl2.innerHTML = reactElement.children
   for (const key in reactElement?.props) {
    if (key === "children" ) continue;
    domEl2.setAttribute(key,reactElement.props[key])
   }
   container.appendChild(domEl2)
}

customRender(reactElement,parent)