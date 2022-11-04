(function(){

    function library(){
        let library = {
            start: slideShow,
            imageCollection: [],
            slideTime: 4000,
        }

        function slideShow(selector){
            const imageContainer = document.querySelector(selector);

            let child = imageContainer.children;

            let imageCollection = [];
            for(let i = 0; i < child.length; i++){
                imageCollection[i] = child[i];
            }
            library.imageCollection = imageCollection;
            imageContainer.style.backGroundImage = `url(${imageCollection[0].src})`;

            let next = 0;

            setInterval(() => {
                if(next >= imageCollection.length){
                    next = 0;
                    imageCollection.map(images => {
                        images.classList.remove("active");
                    })
                } else {
                    next = next;
                    imageCollection[next].classList.add("active");
                    next++;
                    console.log(next);
                }
            }, library.slideTime);
        }        
        return library;
    }

    GlobalLibrary = library();

})();

export default GlobalLibrary;
module.exports = GlobalLibrary;
