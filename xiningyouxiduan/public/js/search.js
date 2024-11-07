function check(data) {
	var checkradio = document.getElementsByName("tool");
	var choose = 0; //choose为radio中选中的值
	for (var i = 0; i < checkradio.length; i++) {
		if (checkradio[i].checked) {
			choose = checkradio[i].value;
			alert("搭建中，马上就来！")
		}
	}
}

window.onload = function () {
	var data = {
		"specialty": [
			/* 游戏列表&链接 */
			{
				"specialtyName": "维京战争",
				"href": "../yxmb/1/index.html"
			}, {
				"specialtyName": "一个都不能死",
				"href": "../yxmb/2/index.html"
			}, {
				"specialtyName": "捕鱼达人",
				"href": "../yxmb/3/index.html"
			}, {
				"specialtyName": "植物大战僵尸",
				"href": "../yxmb/4/index.html"
			}, {
				"specialtyName": "3D魔方",
				"href": "../yxmb/5/index.html"
			}, {
				"specialtyName": "青蛙吃苍蝇",
				"href": "../yxmb/6/index.html"
			}, {
				"specialtyName": "蜘蛛纸牌",
				"href": "../yxmb/7/index.html"
			}, {
				"specialtyName": "贪吃蛇",
				"href": "../yxmb/8/index.html"
			}, {
				"specialtyName": "水果消除",
				"href": "../yxmb/9/index.html"
			}, {
				"specialtyName": "2048中文版",
				"href": "../yxmb/10/index.html"
			}, {
				"specialtyName": "大鱼吃小鱼",
				"href": "../yxmb/11/index.html"
			}, {
				"specialtyName": "飞机大战",
				"href": "../yxmb/12/index.html"
			}, {
				"specialtyName": "跑酷小游戏",
				"href": "../yxmb/13/index.html"
			}, {
				"specialtyName": "贪吃蛇2.0",
				"href": "../yxmb/14/index.html"
			}, {
				"specialtyName": "射击鸭子",
				"href": "../yxmb/15/index.html"
			}, {
				"specialtyName": "激流勇进",
				"href": "../yxmb/16/index.html"
			}, {
				"specialtyName": "天天消消乐",
				"href": "../yxmb/17/index.html"
			}, {
				"specialtyName": "别踩白块",
				"href": "../yxmb/18/index.html"
			}, {
				"specialtyName": "线条生存",
				"href": "../yxmb/19/index.html"
			}, {
				"specialtyName": "打砖块射击",
				"href": "../yxmb/20/index.html"
			}, {
				"specialtyName": "保卫星球射击",
				"href": "../yxmb/21/index.html"
			}, {
				"specialtyName": "吃豆人",
				"href": "../yxmb/22/index.html"
			}, {
				"specialtyName": "开心消消乐",
				"href": "../yxmb/23/index.html"
			}, {
				"specialtyName": "俄罗斯方块",
				"href": "../yxmb/24/index.html"
			}, {
				"specialtyName": "2048方块版",
				"href": "../yxmb/25/index.html"
			}, {
				"specialtyName": "看图猜词",
				"href": "../yxmb/26/index.html"
			}, {
				"specialtyName": "弹球打砖块",
				"href": "../yxmb/27/index.html"
			}, {
				"specialtyName": "小方块回家",
				"href": "../yxmb/28/index.html"
			}, {
				"specialtyName": "双人五子棋",
				"href": "../yxmb/29/index.html"
			}, {
				"specialtyName": "射箭小游戏",
				"href": "../yxmb/30/index.html"
			}, {
				"specialtyName": "飞机大战2.0",
				"href": "../yxmb/31/index.html"
			}, {
				"specialtyName": "简单闯关游戏",
				"href": "../yxmb/32/index.html"
			}, {
				"specialtyName": "重力球滚动",
				"href": "../yxmb/33/index.html"
			}, {
				"specialtyName": "头像迷阵消除",
				"href": "../yxmb/34/index.html"
			}, {
				"specialtyName": "变色弹球跳台阶",
				"href": "../yxmb/35/index.html"
			}, {
				"specialtyName": "最强眼力",
				"href": "../yxmb/36/index.html"
			}, {
				"specialtyName": "俄罗斯方块2.0",
				"href": "../yxmb/37/index.html"
			}, {
				"specialtyName": "双人五子棋2.0",
				"href": "../yxmb/38/index.html"
			}, {
				"specialtyName": "小人推箱子",
				"href": "../yxmb/39/index.html"
			}, {
				"specialtyName": "经典扫雷",
				"href": "../yxmb/40/index.html"
			}, {
				"specialtyName": "英雄宝石块消消乐",
				"href": "../yxmb/41/index.html"
			}, {
				"specialtyName": "赛车游戏",
				"href": "../yxmb/42/index.html"
			}, {
				"specialtyName": "大家来找茬",
				"href": "../yxmb/43/index.html"
			}, {
				"specialtyName": "经典扫雷2.0",
				"href": "../yxmb/44/index.html"
			}, {
				"specialtyName": "锅打灰太狼",
				"href": "../yxmb/45/index.html"
			}, {
				"specialtyName": "3D飞机躲避障",
				"href": "../yxmb/46/index.html"
			}, {
				"specialtyName": "兔子吃月饼",
				"href": "../yxmb/47/index.html"
			}, {
				"specialtyName": "接金币",
				"href": "../yxmb/48/index.html"
			}, {
				"specialtyName": "灌篮高手",
				"href": "../yxmb/49/index.html"
			}, {
				"specialtyName": "疯狂打企鹅",
				"href": "../yxmb/50/index.html"
			}, {
				"specialtyName": "吃月饼大赛",
				"href": "../yxmb/51/index.html"
			}, {
				"specialtyName": "坦克大战",
				"href": "../yxmb/52/index.html"
			}, {
				"specialtyName": "图像之谜拼图",
				"href": "../yxmb/53/index.html"
			}, {
				"specialtyName": "消除QQ表情",
				"href": "../yxmb/54/index.html"
			}, {
				"specialtyName": "飞机躲避",
				"href": "../yxmb/55/index.html"
			}, {
				"specialtyName": "3D熊出没",
				"href": "../yxmb/56/index.html"
			}, {
				"specialtyName": "3D拼图魔方",
				"href": "../yxmb/57/index.html"
			}, {
				"specialtyName": "3D拳王拳击",
				"href": "../yxmb/58/index.html"
			}, {
				"specialtyName": "围住神经猫",
				"href": "../yxmb/59/index.html"
			}, {
				"specialtyName": "2048军旗版",
				"href": "../yxmb/60/index.html"
			}, {
				"specialtyName": "打地鼠",
				"href": "../yxmb/61/index.html"
			}, {
				"specialtyName": "驴子跳跳",
				"href": "../yxmb/62/index.html"
			}, {
				"specialtyName": "压扁像素小鸟",
				"href": "../yxmb/63/index.html"
			}, {
				"specialtyName": "像素小鸟飞行",
				"href": "../yxmb/64/index.html"
			}, {
				"specialtyName": "中国象棋",
				"href": "../yxmb/65/index.html"
			}, {
				"specialtyName": "经典飞机大战",
				"href": "../yxmb/66/index.html"
			}, {
				"specialtyName": "简约打地鼠",
				"href": "../yxmb/67/index.html"
			}, {
				"specialtyName": "切积木",
				"href": "../yxmb/68/index.html"
			}, {
				"specialtyName": "见缝插口红",
				"href": "../yxmb/69/index.html"
			}, {
				"specialtyName": "记忆小游戏",
				"href": "../yxmb/70/index.html"
			}, {
				"specialtyName": "看图猜词2.0",
				"href": "../yxmb/71/index.html"
			}, {
				"specialtyName": "萝卜载兔子飞行",
				"href": "../yxmb/72/index.html"
			}, {
				"specialtyName": "16宫格翻牌匹配",
				"href": "../yxmb/73/index.html"
			}, {
				"specialtyName": "一笔连珠",
				"href": "../yxmb/74/index.html"
			}, {
				"specialtyName": "森林协奏曲",
				"href": "../yxmb/75/index.html"
			}, {
				"specialtyName": "斗地主",
				"href": "../yxmb/76/index.html"
			}, {
				"specialtyName": "飞机加减速",
				"href": "../yxmb/77/index.html"
			}, {
				"specialtyName": "响应式翻牌",
				"href": "../yxmb/78/index.html"
			}, {
				"specialtyName": "天降红包雨",
				"href": "../yxmb/79/index.html"
			}, {
				"specialtyName": "健康消消乐",
				"href": "../yxmb/80/index.html"
			},
		]
	}

	var input = document.getElementsByTagName("input")[0];
	var ul = document.getElementsByTagName("ul")[0];
	ul.style.display = "none";

	input.onkeyup = function () {
		remove();
		var arr_1 = [];
		var arr_2 = [];
		for (var index = 0; index < data.specialty.length; index++) {
			if (data.specialty[index].specialtyName.indexOf(this.value) > -1 && this.value.length > 0) {
				arr_1.push(data.specialty[index].specialtyName);
				arr_2.push(data.specialty[index].href);
			}
		}
		console.log(arr_1);
		console.log(arr_2);
		if (arr_1.length > 0) {
			remove();
			create(arr_1, arr_2);
		}
	}

	function create(arr_1, arr_2) {
		ul.style.display = "block";
		for (var index = 0; index < arr_1.length; index++) {
			var li = document.createElement("li");
			li.innerHTML = "<a href='" + arr_2[index] + "'>" + arr_1[index] + "</a>";
			ul.appendChild(li);
		}
	}

	function remove() {
		ul.style.display = "none";
		for (var index = ul.childNodes.length - 1; index >= 0; index--) {
			ul.removeChild(ul.childNodes[index]);
		}
	}
}
