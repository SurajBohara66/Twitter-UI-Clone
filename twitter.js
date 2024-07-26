var follow = 2;
var pay = 1;
const sub = document.querySelector('.celeb')
sub.addEventListener("click" , () =>{
   if (follow ==2) {
    sub.style.backgroundColor = '#464646';
    sub.innerHTML = "Following"
    follow = 3
   }
   else if (follow == 3) {
    sub.style.backgroundColor = 'white';
    sub.innerHTML = "Follow"
    follow = 2
   }
})
const sub2 = document.querySelector('.c2')
sub2.addEventListener("click" , () =>{
    if (follow ==2) {
        sub2.style.backgroundColor = '#464646';
        sub2.innerHTML = "Following"
        follow = 3
       }
       else if (follow == 3) {
        sub2.style.backgroundColor = 'white';
        sub2.innerHTML = "Follow"
        follow = 2
       }
})
const sub3 = document.querySelector('.c3')
sub3.addEventListener("click" , () =>{
    if (follow ==2) {
        sub3.style.backgroundColor = '#464646';
        sub3.innerHTML = "Following"
        follow = 3
       }
       else if (follow == 3) {
        sub3.style.backgroundColor = 'white';
        sub3.innerHTML = "Follow"
        follow = 2
       }
})
const paid = document.querySelector('.subs')
paid.addEventListener("click" , () =>{
   if (pay ==1) {
    paid.style.backgroundColor = '#464646';
    paid.innerHTML = "Subscribed"
    pay = 2
   }
   else if (pay ==2) {
    paid.style.backgroundColor = '#079191';
    paid.innerHTML = "Subscribe"
    pay = 1
   }
})
let view = 0;
const opinion = document.querySelector('.opinion');
const post = document.querySelector('.post');
opinion.addEventListener("click" , () =>{
    if (view == 0) {
        post.style.backgroundColor ='#079191';
    post.style.color ='white';
    view =1
    }
    else if (view == 1) {
        post.style.backgroundColor ='#0c92927a;';
        post.style.color ='#ffffff91';
        view = 0
    }
})

