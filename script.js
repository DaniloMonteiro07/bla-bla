function toggleDetails(element) {  
    const jobInfo = element.nextElementSibling; 
    
    if (jobInfo.style.display === "none" || jobInfo.style.display === "") {  
        jobInfo.style.display = "block"; 
            jobInfo.classList.add('show'); 
        }, 10); 
        jobInfo.classList.remove('show'); 
        setTimeout(() => {  
            jobInfo.style.display = "none"; 
        }, 500);
    }  
}  