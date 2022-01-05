export {slider};

async function slider(){
    const $ = (el) => document.getElementById(el);
    const $projectViewer = $('projectViewer');
    const $slideButton = $('slideButton');
        const fetching = await fetch('projects.json'),
        json = await fetching.json(),
        projects = json['projects'];

        let counter=0;

        const setProject = (actualPos) =>{
            if(actualPos>projects.length){
                actualPos=0;
                counter=actualPos;
            }
            else if(actualPos<0){
                actualPos = projects.length-1;
                counter = actualPos;
            };
            const title = $projectViewer.querySelector('.title');
            const description = $projectViewer.querySelector('.description');
            const img = $projectViewer.querySelector('.img');
            const codeEnlc = $projectViewer.querySelector('.code-enlc');
            const pageEnlc = $projectViewer.querySelector('.page-enlc');
            const points =Array.from( $('points').children);
            points.forEach(point=>{
                if(points.indexOf(point)===actualPos) point.classList.add('point-active');
                else point.classList.remove('point-active');
            })
            title.textContent = projects[actualPos]['title'];
            description.textContent = projects[actualPos]['description'];
            img.src = projects[actualPos]['img'];
            codeEnlc.href = projects[actualPos]['code-enlc'];
            pageEnlc.href = projects[actualPos]['page-enlc'];
        }
        setProject(counter)
        $slideButton.addEventListener('click',(e)=>{
            if(e.target.classList.contains('front')){
                counter++;
                setProject(counter)
            }
            else if(e.target.classList.contains('back')){
                counter--;
                setProject(counter)
            };
        })
        setInterval(()=>{
            counter++;
            setProject(counter)
        },5000)
        
   
}