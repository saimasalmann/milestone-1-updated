
// ******* Hide reference section **********

let ref_section=document.getElementById('ref') ;
let ref_btn=document.getElementById('ref_btn') ;

ref_btn?.addEventListener('click',()=>{
if(ref_section!.style.display==='none'){
    ref_section!.style.display='block';
    ref_btn!.textContent='Hide Reference';
    
}
else{
    ref_section!.style.display='none';
    ref_btn!.textContent='Show Reference';
 
}
});
// ******* Hide education section **********

let edu_section=document.getElementById('edu_section')
let edu_btn=document.getElementById('edu_btn') ;

edu_btn?.addEventListener('click',()=>{
if(edu_section!.style.display==='none'){
    edu_section!.style.display='block';
    edu_btn!.textContent='Hide Education';
    
}
else{
    edu_section!.style.display='none';
    edu_btn!.textContent='Show Education';
 
}
});


// ******* Hide skills section **********

let skill_section=document.getElementById('skill_section')
let skill_btn=document.getElementById('skill_btn') ;

skill_btn?.addEventListener('click',()=>{
if(skill_section!.style.display==='none'){
    skill_section!.style.display='block';
    skill_btn!.textContent='Hide skills';
    
}
else{
    skill_section!.style.display='none';
    skill_btn!.textContent='Show skills';
 
}
});

// ******* Hide Experience section **********

let exp_section=document.getElementById('exp_section')
let exp_btn=document.getElementById('exp_btn') ;

exp_btn?.addEventListener('click',()=>{
if(exp_section!.style.display==='none'){
    exp_section!.style.display='block';
    exp_btn!.textContent='Hide Experience';
    
}
else{
    exp_section!.style.display='none';
    exp_btn!.textContent='Show Experience';
 
}
});