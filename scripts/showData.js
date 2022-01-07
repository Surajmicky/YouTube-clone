// youtube videos details and for each div script
async function getData(url){

    try{

        let result= await fetch(url);

        let data = await result.json();

        return data;

    }

    catch(error){

        console.log(error)
    }
}


function appendData(data,location){

    data.forEach(element => {

        let { id:{videoId},snippet:{channelTitle,description,thumbnails:{high:{url}},title}} =element;

        let videobox= document.createElement('div');

        videobox.setAttribute('id','videobox');

        let thumbnail_div = document.createElement('div');

        let detail_div = document.createElement('div');

        thumbnail_div.setAttribute('id','thumbnail_div');

        detail_div.setAttribute('id','detail_div');

        let thumbnail= document.createElement('img');

        thumbnail.src=url;

        let name= document.createElement('p');

        name.innerText=title;

        thumbnail.setAttribute('id','thumbnail');

        name.setAttribute('id','name');

        thumbnail_div.append(thumbnail);

        let video_description = document.createElement('p');

        video_description.innerText=description;

        video_description.setAttribute('id','description')

        let channel_name = document.createElement('p');

        channel_name.innerText= channelTitle;

        channel_name.setAttribute('id','channel_name')

        detail_div.append(name,channel_name,video_description);

        videobox.append(thumbnail_div,detail_div)

        location.append(videobox);
         
    });
}
export {getData,appendData}




