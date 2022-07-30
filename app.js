class StarRating {
   constructor (starNum = 0, className = '', styles= {margin: "5px"}) {
      this.starNum = starNum;
      this.className = className;
      this.styles = styles;

      this.ele = document.querySelector(className);
  
      if (!this.ele) {
        throw Error("not valid");
      }
      if (this.ele && this.starNum > 0) {
        this.init();
      }

   }

   init() {
      const frag = document.createDocumentFragment();
      const ul = document.createElement("ul");
      ul.style.display = "flex";
      ul.style.listStyleType = "none";


      for (let i = 0; i < this.starNum; i++) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.innerHTML = "&#9733";
        a.style.fontSize = '50px';
        
        li.appendChild(a);
        li.style.margin = this.styles.margin;
        a.style.cursor = 'pointer';
        frag.appendChild(li);
        a.addEventListener("click", () => {
          this.changeColor(i, ul);
        })
      }

      ul.appendChild(frag);
      this.ele.appendChild(ul);
 
   }

   changeColor(current, ul) {
    const array = ul.querySelectorAll('li');

    for (let i = 0; i < this.starNum; i++) {
        const a = array[i].children[0];
        if (i <= current) {
           a.style.color = "#ccac00";
        } else {
            a.style.color = '';
        }
    }

   }

}

new StarRating(5, ".starRating");