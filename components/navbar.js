/** @format */

function navbar() {
  return `  <div id="navbar">
    <div id="hamburger">
    <img style="height: 100%;" src="/youtube_app/icons/hamburger.png" alt="">
   </div>
    <div id="logodiv">
        <img  style="height: 20px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="">
    </div >
   <div id="searchdiv" ><input id="searchbox" type="text" placeholder=" Search">
   <div id="searchicon"><img class="navimg"  src="/youtube_app/icons/search.png" alt=""></div>
</div>
<div><img  style="height: 20px; padding-bottom: 5px;"  class="navimg" src="/youtube_app/icons/mic.png" alt=""></div>
<div id="navcreate">
    <div><img class="create"  src="/youtube_app/icons/video.png" alt=""></div>
          <div><img class="create"  src="/youtube_app/icons/grid.png" alt=""></div>
          <div><img class="create"  src="/youtube_app/icons/bell.png" alt=""></div>
    <div><img class="create" style="border-radius:50%;
        height:30px" src="https://lh3.googleusercontent.com/ogw/ADea4I7ZJ-6fE9y3GMaKbRkuqzZLugiwtM8BA9qHmrsWHA=s32-c-mo" alt=""></div>
</div>
</div>`;
}

export default navbar;
