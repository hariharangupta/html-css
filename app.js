class MyHeader extends HTMLElement{
    connectedcallback (){
  
   this.innerHTML = `<header>
   <div class="logo">Gym</div>
   <nav>
     <ul>
       <li><a href="index.html">Home</a></li>
       <li><a href="about.html">AboutUs</a></li>
       <li><a href="pricetag.html">PricesList</a></li>
       <li><a href="contactus.html">Contact</a></li>
       <span
         ><a class="listitem" href="pricetag.html">Become a Member</a></span
       >
     </ul>
   </nav>
 </header>`
  
  
    }
}

customElements.define('my-header', MyHeader)