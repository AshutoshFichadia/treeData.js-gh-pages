'use strict';

function TreeData (data, select) {
    var main = document.querySelector(select);
    if(document.getElementById('dTree')!= null){
        console.log("Not Null");
        var remove = document.getElementById('dTree');
        remove.remove();
    }
    else{
        console.log("Null");
    }
    var treecanvas = document.createElement('div');
        treecanvas.classList.add('tree', 'divTree');
        treecanvas.id = 'dTree';

    var treeCode = buildTree(data, Object.keys(data)[0]);
    treecanvas.innerHTML = treeCode;
    main.appendChild(treecanvas);
}

function TreeData2 (data, select) {
    var main = document.querySelector(select);
    var treecanvas = document.createElement('div');
        treecanvas.className = 'tree';
        treecanvas.id = 'dTree';

    var treeCode = buildTree(data, Object.keys(data)[0]);
    treecanvas.innerHTML = treeCode;
    main.appendChild(treecanvas);
}

function buildTree (obj, node) {
    var pageName = String(obj[node].value);
    pageName = pageName.toLowerCase().replace(" ", "");

    var treeString = "<li><a href='" + pageName + ".html' target = '_blank'>" + obj[node].value + "</a>";
    var sons = [];
    for (var i in obj) {
        if (obj[i].parent == node)
          sons.push(i);
    }
    if (sons.length > 0) {
        treeString += "<ul>";
        for (var i in sons) {
          treeString += buildTree(obj, sons[i]);
        }
        treeString += "</ul>";
    }
    return treeString;
}
