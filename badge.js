function badge(json){

    /* TEST DATA */

    /* basic badge data
    const badge = JSON.parse('{ "width": 120, "height":56, "imgUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" ,"backgroundUrl": "https://i2.wp.com/hashmiphotos.com/wp-content/uploads/2015/05/sony-logo.jpg?ssl=1" ,"imgBackX":50, "imgBackY":40, "imgBackHeight":15, "imgBackWidth":15 ,"imgX":80, "imgY":5, "imgHeight":35, "imgWidth":35 ,"background": "#D0D3D4", "texts":[ {  "text": "Name: Test Person", "font":"20px Georgia", "posX": 10, "posY": 20 , "fillStyle":"#000000"}, {  "text": "Badge ID: 12204", "font":"30px Verdana", "posX": 10, "posY": 30 , "fillStyle":"#000000"} ] }');  
    const badgeBack = JSON.parse('{ "width": 120, "height":56, "backgroundUrl": "https://i2.wp.com/hashmiphotos.com/wp-content/uploads/2015/05/sony-logo.jpg?ssl=1" ,"imgBackX":50, "imgBackY":40, "imgBackHeight":15, "imgBackWidth":15 ,"imgX":80, "imgY":5, "imgHeight":35, "imgWidth":35 ,"background": "#D0D3D4", "texts":[ {  "text": "<h3>Badge Hintergrund mit HTML</h3>", "font":"20px Georgia", "posX": 10, "posY": 20 , "fillStyle":"#000000"} ] }');    
    */
    const CSS_CLASS = 'badge';

    function createBagdeHTML(json){
        let badgeElement = document.createElement('div');

        badgeElement.style.position = "relative";
        badgeElement.className = CSS_CLASS;

        let metrics = "mm"; // TODO: Dynamicly

        badgeElement.style.width = json.width + metrics;
        badgeElement.style.height = json.height + metrics;
        badgeElement.style.background = json.background;

        // append texts
        appendTexts(badgeElement, json.texts, metrics);

        /* load background img */ 
        if(json.backgroundUrl !== undefined){

            let backgroundImg = new Image();
            backgroundImg.setAttribute('crossOrigin', 'anonymous'); // works for me
            backgroundImg.style.position = "absolute";
            backgroundImg.src = json.backgroundUrl;

            backgroundImg.style.height = json.imgBackHeight + metrics;
            backgroundImg.style.width = badge.imgBackWidth + metrics;

            backgroundImg.style.left = json.imgBackX + metrics;
            backgroundImg.style.top = json.imgBackY + metrics;

            badgeElement.appendChild(backgroundImg);
        }
        /* load img */
        if(json.imgUrl !== undefined){

            let badgeImg = new Image();
            badgeImg.setAttribute('crossOrigin', 'anonymous'); // works for me
            badgeImg.style.position = "absolute";
            badgeImg.src = json.imgUrl;

            badgeImg.style.height = json.imgHeight + metrics;
            badgeImg.style.width = json.imgWidth + metrics;

        

            badgeImg.style.left = json.imgX + metrics;
            badgeImg.style.top = json.imgY + metrics;

            badgeElement.appendChild(badgeImg);
        }

        /* texts 
        let text = document.createElement('div');
        text.innerHTML = "<p> HALLo </p>"
        badgeElement.appendChild(text); */    
        document.body.appendChild(badgeElement);
    }

    function appendTexts(badgeElement, texts, metrics){
        
        texts.forEach((t) => {
            let textDiv = document.createElement('div');
            textDiv.style.zIndex = 10;
            textDiv.style.position = "absolute";
            textDiv.style.left = t.posX + metrics;
            textDiv.style.top = t.posY + metrics;

            let text = document.createElement('p');
            text.innerHTML = t.text;
            textDiv.appendChild(text);
            badgeElement.appendChild(textDiv);
        });
    }

    badge = JSON.parse(json);
    createBagdeHTML(badge);
}

function printPage(){
    window.print();
    //window.close();
}
