window.onload = function(){
  var index = 0,
  timer = null,
  tabbar = document.getElementById("tabbar"),
  tabbarItems = tabbar.children,
  length = tabbarItems.length,
  banner = document.getElementById("banner"),
  bannerItems = document.getElementsByClassName("banner-item");

  function addHandler(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, true);
    }
    else if (element.attachEvent) {
      element.attachEvent('on' + type, handler);
    }
    else {
      element['on' + type] = handler;
    }
  }

  //图片自动轮播
  function startAutoPlay(){
    timer = setInterval(function(){
    index++;
    if(index >= length){
      index = 0;
    }
    changeItem();

    }, 1000);
  }

  //清除定时器，停止自动播放
  function endAutoPlay(){
    if(timer){
    clearInterval(timer);
    }
  }

  function changeItem(){
    for(var i = 0; i < tabbarItems.length; i++){
    tabbarItems[i].className = "tabbar-item";
    bannerItems[i].style.display = "none";
    }

    tabbarItems[index].className = "tabbar-item active";
    bannerItems[index].style.display = "block";
  }


  function slideItem(){
    startAutoPlay();

    addHandler(banner, "mouseover", endAutoPlay);
    addHandler(banner, "mouseout", startAutoPlay);
    addHandler(tabbar, "mouseover", endAutoPlay);
    addHandler(tabbar, "mouseout", startAutoPlay);

    //点击导航切换banner图
    for(var i = 0; i < tabbarItems.length; i++){
    tabbarItems[i].setAttribute("data-index",i);
    
    addHandler(tabbarItems[i], "click", function(){  
    index = this.getAttribute("data-index");     
    changeItem();
    });
    
    }
  }
  slideItem();
  //addHandler(window,"load",slideItem);
}
