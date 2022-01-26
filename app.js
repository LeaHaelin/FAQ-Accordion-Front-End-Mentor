const accordionItemsEl = document.getElementsByClassName("container__text__qna");


function activeAccordion() {
 for ( let item of accordionItemsEl) {
     let qnaQuestion = item.firstElementChild;
     qnaQuestion.addEventListener("click", function () {
         // add a class named "bold" in p element
         this.classList.toggle("bold");
         // second paragraph
         let qnaAnswer = this.nextElementSibling;
         // span tag
         let arrow = this.firstElementChild;
         if(qnaAnswer.style.maxHeight){
             qnaAnswer.style.maxHeight = null;
             arrow.style.transform="rotate(0deg)";
         } else {
             qnaAnswer.style.maxHeight = qnaAnswer.scrollHeight + "px";
             arrow.style.transform="rotate(180deg)";
         }
     })
 }
}


activeAccordion();