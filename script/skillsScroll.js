const skills = document.getElementsByClassName('skills__item');
const scrollItem = document.getElementsByClassName('scroll__item');
const skillsName = document.getElementsByClassName('skills__name');
const paragraph = document.getElementById('paragraph');
const subtitle = document.getElementById('subtitle');

const skillsItem = {
   keyVisual: {
      subtitle: 'Key visual',
      paragraph: `Fingerstache green juice semiotics quinoa, truffaut letterpress wolf photo 
      booth ugh biodiesel mumblecore brunch. Meh austin vinyl banh mi, gluten-free chillwave scenester 
      kombucha street art. Before they sold out lumbersexual chillwave, cold-pressed mumblecore beard 
      pickled letterpress normcore crucifix.`,
   },

   uxui: {
      subtitle: 'UX/UI',
      paragraph: `Fingerstache green juice semiotics quinoa, truffaut letterpress wolf photo 
      booth ugh biodiesel mumblecore brunch. Meh austin vinyl banh mi, gluten-free chillwave scenester 
      kombucha street art. Before they sold out lumbersexual chillwave, cold-pressed mumblecore beard 
      pickled letterpress normcore crucifix.`,
   },

   brand: {
      subtitle: 'Brand',
      paragraph: `Fingerstache green juice semiotics quinoa, truffaut letterpress wolf photo 
      booth ugh biodiesel mumblecore brunch. Meh austin vinyl banh mi, gluten-free chillwave scenester 
      kombucha street art. Before they sold out lumbersexual chillwave, cold-pressed mumblecore beard 
      pickled letterpress normcore crucifix.`,
   },

   packageDesign: {
      subtitle: 'Package design',
      paragraph: `Fingerstache green juice semiotics quinoa, truffaut letterpress wolf photo 
      booth ugh biodiesel mumblecore brunch. Meh austin vinyl banh mi, gluten-free chillwave scenester 
      kombucha street art. Before they sold out lumbersexual chillwave, cold-pressed mumblecore beard 
      pickled letterpress normcore crucifix.`,
   },

};

// skills.addEventListener('scroll', function() {
//    console.log('hi!')
//   });

[...skillsName].forEach(function(item) {
   item.addEventListener('click', function(event) {
      
      [...skillsName].forEach(function(item) {
         item.classList.remove('skills__name-active');
      });

      this.classList.add('skills__name-active');
      
      const skill = this.getAttribute('id');
      if (skill == 'keyVisual') {
         subtitle.innerHTML = skillsItem.keyVisual.subtitle;
         paragraph.innerHTML = skillsItem.keyVisual.paragraph;
      } else  if (skill == 'uxui') {
         subtitle.innerHTML = skillsItem.uxui.subtitle;
         paragraph.innerHTML = skillsItem.uxui.paragraph;
      } else  if (skill == 'brand') {
         subtitle.innerHTML = skillsItem.brand.subtitle;
         paragraph.innerHTML = skillsItem.brand.paragraph;
      } else  if (skill == 'packageDesign') {
         subtitle.innerHTML = skillsItem.packageDesign.subtitle;
         paragraph.innerHTML = skillsItem.packageDesign.paragraph;
      }
   });
});

[...scrollItem].forEach(function(item) {
   item.addEventListener('click', function(event) {
      this.classList.add('scroll__item-active')
   });
});
