//let currentpage=1;
let box=document.querySelector(".pagination")
let currentpage=1;
let fetchData=()=>{
    fetch('https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json')
    .then((response)=>{
        return response.json();
    })
    .then((id)=>{
        let first=document.createElement('a')
        first.href=`#`
        first.textContent=`first`
        first.addEventListener('click',(e)=>{
            currentpage=1;
            id.forEach(page=>{
                if(Number(page.id)==currentpage){
                    let b=document.querySelector(".content")
                    b.textContent=`id: ${currentpage+'name'+page.name+'\n'+'email: '+page.email}` 
                }
            })  
        })
        box.append(first)
       let previous=document.createElement('a') 
       previous.href=`#`
       previous.textContent=`previous`
        previous.addEventListener('click',(e)=>{
            e.preventDefault();
            currentpage--;
            console.log(currentpage)
            id.forEach(page=>{
                if(Number(page.id)==currentpage){
                    let b=document.querySelector(".content")
                    b.textContent=`id: ${currentpage   +'name'+   page.name+'\n'+'   email: '+page.email}` 
                }
            })
        })
       box.append(previous)
     
        id.forEach(page=>{
           
            let link=document.createElement('a')
            link.href=`#${page.id}`
            link.textContent=`${page.id}`
            link.addEventListener('click',e=>{
                e.preventDefault();
                currentpage=Number(page.id)
                console.log(currentpage)
                let b=document.querySelector(".content")
                b.textContent=`id: ${currentpage+'name'+page.name+'\n'+'email: '+page.email}`
            })
            box.append(link)
        })
      let next=document.createElement('a')  
      next.href=`#`;
      next.textContent=`next`;
      next.addEventListener('click',(e)=>{
        e.preventDefault();
        currentpage++;
        console.log(currentpage)
        id.forEach(page=>{
            if(Number(page.id)==currentpage){
                let b=document.querySelector(".content")
                b.textContent=`id: ${currentpage+'name'+page.name+'\n'+'email: '+page.email}` 
            }
        })
      })

      box.appendChild(next)
            
    })
}
fetchData();