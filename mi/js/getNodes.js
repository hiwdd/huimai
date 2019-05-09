//兼容ie8通过className获取元素集合（ie8不兼容getElementsByClassName方法）
function getByClassName(className){
    var ele = document.getElementsByTagName("*");
    var eleArr = [];
    for (var i = 0; i < ele.length; i++) {
         if(ele[i].className ===  className){
             eleArr.push(ele[i]);
         }
    }
    return eleArr;
}

//节点关系属性
//children  所有元素节点  (IE8 以下会包含注释）
function getChildren(sup){
    var elements = [];
    var nodes = sup.childNodes;
    for (var i = 0; i < nodes.length; i++) {
         if(nodes[i].nodeType == 1){
             elements.push(nodes[i]);
         }
    }
    return elements;
}

//firstElementChild    第一个元素节点      IE8（X）
function getFirstChild(sup){
    var children = getChildren(sup);
    if(children.length > 0){
         return children[0];
    }
    return null;
}

//lastElementChild     最后一个元素节点      IE8（X）
function getLastChild(sup){
    var children = getChildren(sup);
    if(children.length > 0){
         return children[children.length-1];
    }
    return null;
}

//previousElementSibling    上一个兄弟元素节点      IE8（X）
function getPrevSibingEle(ele){
    if(ele.previousElementSibling){
         return ele.previousElementSibling;
    }else{
         var el = ele.previousSibling;
         while(el && el.nodeType != 1){
               el = el.previousSibling;
         }
         return el;
    }
}

//nextElementSibling    下一个兄弟元素节点      IE8（X）
function getNextSibingEle(ele){
     if(ele.nextElementSibling){
         return ele.nextElementSibling;
     }else{
         var el = ele.nextSibling;
         while(el && el.nodeType != 1){
             el = el.nextSibling;
         }
         return el;
     }
}

//节点操作方法remove()    IE8（X）
function removeEle(ele){
    if(ele.remove){
         ele.remove();
    }else{
         var par = ele.parentNode;
         par.removeChild(ele);
    }
    return;
}
