import { Rate } from 'antd';
const App = props => {
//   const Head = () => {
//     return (
//       // <div id="head">
//       //   <div class="layout">
//       //     <div class="logo">
//       //     <img src="http://img.pipacoding.com/assets/pc/official/large/logo2.png" alt="这是一个logo">
//       //   </div>
//       //   <div class="children animated fadeInUp">
//       //     <img src="http://img.pipacoding.com/assets/pc/official/icon/key_1.png">
//       //     <img src="http://img.pipacoding.com/assets/pc/official/icon/key_2.png">
//       //     <img src="http://img.pipacoding.com/assets/pc/official/icon/key_3.png">
//       //     <img src="http://img.pipacoding.com/assets/pc/official/icon/key_4.png">
          
//       //   </div>
//       //   </div>
// 		  // </div>
//     );
//   };
//   return (<div>
//     { Head() }
//     {/* <div id="join">
// 			<div class="layout">
// 				<div class="top">
// 					<img src="image/0jichu_04.jpg">
// 				</div>
// 				<div class="middle">
// 					<p>扫码报名/免费试听</p>
// 					<img src="image/erweima_08.jpg">
// 				</div>
// 				<div class="bottom">
// 					<p ><img src="image/star_12.jpg">7次课帮孩子<b>入门编程</b></p>
// 					<p ><img src="image/star_12.jpg">7次课帮孩子<b>入门编程</b></p>
// 				</div>
// 			</div>
// 		</div>
// 		<div id="mathTime">
// 			<div class="line"></div>
// 			<div class="title">数字时代，让孩子多一种可能</div>
// 			<div class="bottom layout">
// 				<div class="game">
// 					<p class="h-title">孩子迷恋游戏怎么办？</p>
// 					<p class="fill">不如让孩子试试编程，让孩子体会创造和逻辑的乐趣；学习编程，孩子会觉得游戏没意思！</p>
// 				</div>
// 				<div class="logic">
// 					<p class="h-title">孩子做事没逻辑,没条理?</p>
// 					<p class="fill">学编程的孩子要写流程图，安排开发周期，还要测试修复Bug，自然培养出条理和自我规划能力！</p>
// 				</div>
// 				<div class="study">
// 					<p class="h-title">欧美国家的孩子都在学</p>
// 					<p class="fill">美国有900万孩子学编程，英国有200万，中国只有20万......</p>
// 				</div>
// 				<a href="#" class="btn">0元试听</a>
// 			</div>
// 		</div>
// 		<div id="biancheng">
// 			<div class="mengceng"></div>			
// 			<div class="line"></div>			
// 			<p class="title">编程让孩子成为数字时代的创造者</p>
// 			<div class="wrap">
// 				<ul>
// 					<li class="fl">
// 						<img src="http://vod.pipacoding.com/gif/ginger.gif">
// 						<div class="bottom">
// 							<p class="p-top">零基础入门班</p>
// 							<p class="p-bottom">用编程设计教师节动画卡片<br><span>Ginger | 8岁</span></p>
// 						</div>
// 					</li>
// 					<li class="fl">
// 						<img src="http://vod.pipacoding.com/gif/daodan.gif">
// 						<div class="bottom">
// 							<p class="p-top">零基础入门班</p>
// 							<p class="p-bottom">用编程设计教师节动画卡片<br><span>Zoe | 10岁</span></p>
// 						</div>
// 					</li>	
// 				</ul>
// 			</div>
// 			<a class="btn" href="#">0元试听</a>
// 		</div>		
// 		<div id="intro">
// 			<div class="line"></div>
// 			<p class="title">编程让孩子成为数字时代的创造者</p>
// 			<div class="wrap">
// 				<ul>
// 					<li>
// 						<div><img src="http://img.pipacoding.com/assets/pc/tu1.png"></div>
// 						<p class="name">常青藤名校课程</p>
// 						<p>麻省理工、宾大通识课针对7-12岁孩子改编</p>
// 					</li>
// 					<li>
// 						<div><img src="http://img.pipacoding.com/assets/pc/tu2.png"></div>
// 						<p class="name">成功开发者授课</p>
// 						<p>老师曾开发千万级APP<br>也有丰富教学经验</p>
// 					</li>
// 					<li>
// 						<div><img src="http://img.pipacoding.com/assets/pc/tu3.png"></div>
// 						<p class="name">孩子超喜欢</p>
// 						<p>阶梯挑战+项目制学习<br>让孩子全程动力满满</p>
// 					</li>
// 					<li>
// 						<div><img src="http://img.pipacoding.com/assets/pc/tu4.png"></div>
// 						<p class="name">上课事件灵活</p>
// 						<p>在家用电脑学习<br>免去路上奔波 </p>
// 					</li>
// 					<li>
// 						<div><img src="http://img.pipacoding.com/assets/pc/tu5.png"></div>
// 						<p class="name">实践中学习</p>
// 						<p>精品视频+编程实践 <br>学练结合效率高</p>
// 					</li>
// 					<li>
// 						<div><img src="http://img.pipacoding.com/assets/pc/tu6.png"></div>
// 						<p class="name">专业老师辅导</p>
// 						<p>在线答疑+1对1点评<br>学习效果有保障</p>
// 					</li>
// 				</ul>
// 			</div>
// 			<a href="#" class="btn">0元试听</a>
// 		</div>
// 		<div id="teacher">
// 			<div class="mengceng"></div>
// 			<div class="line"></div>
// 			<p class="title">老师是谁</p>
// 			<div class="wrap">
// 				<ul>
// 					<li>
// 						<p class="tea-name p1">王宇航<br>主讲老师</p>
// 						<div class="resume">
// 							<div class="image1">								
// 							</div>
// 							<p>中国科学技术大学计算机专业毕业，本科期间曾获得“ROBOCUP” 机器人世界杯世界冠军，曾在阿里巴巴（淘宝网母公司）担任工程师。红点直播联合创始人，同时在少儿编程与奥数方面具有丰富教学经验。善于深入浅出讲解技术，让孩子爱上科技。</p>
// 						</div>
// 					</li>
// 					<li>
// 						<p class="tea-name p2">曾鹏轩<br>主讲老师</p>
// 						<div class="resume">
// 							<div class="image2">								
// 							</div>
// 							<p>中国科学技术大学计算机专业毕业，本科期间曾获得“ROBOCUP” 机器人世界杯世界冠军，曾在阿里巴巴（淘宝网母公司）担任工程师。红点直播联合创始人，同时在少儿编程与奥数方面具有丰富教学经验。善于深入浅出讲解技术，让孩子爱上科技。</p>
// 						</div>
// 					</li>
// 					<li>
// 						<p class="tea-name p3">Yasmin Kafai<br>主讲老师</p>
// 						<div class="resume">
// 							<div class="image3">								
// 							</div>
// 							<p>中国科学技术大学计算机专业毕业，本科期间曾获得“ROBOCUP” 机器人世界杯世界冠军，曾在阿里巴巴（淘宝网母公司）担任工程师。红点直播联合创始人，同时在少儿编程与奥数方面具有丰富教学经验。善于深入浅出讲解技术，让孩子爱上科技。</p>
// 						</div>
// 					</li>
// 				</ul>
// 			</div>
// 			<a href="#" class="btn">0元试听</a>
// 		</div>		
// 		<div id="what">
// 			<div class="line"></div>
// 			<div class="title">核桃编程教什么</div>
// 			<p>
// 				课程来自<b>宾大&麻省理工</b>，为中国<b>7-12岁</b>孩子改编。教授图形化编程语言Scratch<br>
// 				让孩子<b>避开枯燥的语法</b>，快速接触编程的核心思想
// 			</p>
// 			<div class="image">
// 				<img src="http://img.pipacoding.com/assets/pc/WechatIMG41.png">
// 			</div>
// 			<div class="step layout">
// 				<a href="#" class="btn">0元试听</a>
// 				<ul>
// 					<li>L1</li>
// 					<li class="li1">制作小游戏，具备基本编程思想</li>
// 				</ul>
// 				<ul>
// 					<li>L2</li>
// 					<li>制作较复杂项目,编写程序给同学用</li>
// 				</ul>
// 				<ul>
// 					<li>L3</li>
// 					<li>使用Scratch编写程序,解决日常生活中的问题</li>
// 				</ul>
// 				<ul>
// 					<li>L4</li>
// 					<li>可以独立制作网页,不考虑年龄的话都可以去找份初级程序员的工作啦</li>
// 				</ul>
// 				<ul>
// 					<li>L5</li>
// 					<li>进行算法编程,参加信息奥赛,保送名校</li>
// 				</ul>
// 			</div>		
// 		</div>
// 		<div id="shouhuo">
// 			<div class="mengceng"></div>
// 			<div class="wrap layout">
// 				<div class="line"></div>
// 				<div class="title">一期课，孩子会有哪些收获</div>
// 				<div class="circle ">
// 					<ul>
// 						<li>循环</li>
// 						<li>逻辑判断</li>
// 						<li>坐标</li>
// 						<li>随机数</li>
// 						<li>类</li>
// 						<li>变量</li>
// 					</ul>
// 					<ul>
// 						<li>目标导向</li>
// 						<li>自我纠错</li>
// 						<li>迭代优化</li>
// 						<li>独立思考</li>						
// 					</ul>
// 					<ul>
// 						<li>爱钻研</li>
// 						<li>乐于展示分享</li>
// 						<li>做事有条理</li>
// 					</ul>										
// 				</div>
// 				<a href="#" class="btn">0元试听</a>
// 			</div>			
// 		</div>
// 		<div id="how">
// 			<div class="line"></div>
// 			<div class="title">怎么上课？</div>
// 			<div class="wrap">
// 				<ul>
// 					<li>
// 						<div class="icon"></div>
// 						<p>每周老师<br>在微信群里发课</p>
// 					</li>
// 					<li>
// 						<div class="icon"></div>
// 						<p>孩子们<br>跟着视频学习</p>
// 					</li>
// 					<li>
// 						<div class="icon"></div>
// 						<p>打开网站做作业<br>编写项目</p>
// 					</li>
// 					<li>
// 						<div class="icon"></div>
// 						<p>完成作业项目<br>老师点评</p>
// 					</li>
// 					<li>
// 						<div class="icon"></div>
// 						<p>有问题<br>老师在线答疑</p>
// 					</li>
// 				</ul>
// 			</div>

// 			<a href="#" class="btn">0元试听</a>
// 		</div>
		
// 		<!--学过的家长怎么说-->
// 		<div id="speak">
// 			<div class="mengceng"></div>
// 			<div class="line"></div>
// 			<div class="title">学过的家长怎么说？</div>
// 			<p>
// 				<span class="word">孩子学习更主动</span>
// 				<span class="word">数学成绩提升了</span>
// 				<span class="word">孩子对游戏不再感兴趣</span>
// 				<span class="word">做事更有条理有逻辑</span><br><br>
// 				<span class="word">孩子不断挑战自我主动创新 </span>
// 				<span class="word">宇航老师讲的好棒！ </span>
// 			</p>
// 			<div class="wrap">
// 				<div class="swiper">
// 					<div class="item1" id="1"><img src="http://img.pipacoding.com/assets/pc/snapshoot_1.jpg" class="img1"></div>
// 					<div class="item2" id="2"><img src="http://img.pipacoding.com/assets/pc/snapshoot_2.jpg" class="img1"></div>
// 					<div class="item3" id="3"><img src="http://img.pipacoding.com/assets/pc/snapshoot_3.jpg" class="img1"></div>
// 					<div class="icon-left">
// 						<img src="http://img.pipacoding.com/assets/pc/official/large/left.png">
// 					</div>
// 					<div class="icon-right">
// 						<img src="http://img.pipacoding.com/assets/pc/official/large/right.png">
// 					</div>
				
// 				</div>
				
// 			</div>
// 			<a href="#" class="btn">0元试听</a>
// 		</div>
// 		<!--常见问题区的设置-->
// 		<div id="question">
// 			<div class="line"></div>
// 			<div class="title">常见问题</div>
// 			<div class="wrap">
// 				<ul class="clearfix">
// 				<li>
// 					<p>-家长需要参与课程吗？</p>
// 					<p>大部分时间家长不用参与到课程中。前1-2次课程，家长需要配合做一些电脑上的操作和设置。孩子完成作业后，家长可以
// 						在公众号上收到老师的点评
// 					</p>
// 				</li>
// 				<li>
// 					<p>-家长需要参与课程吗？</p>
// 					<p>大部分时间家长不用参与到课程中。前1-2次课程，家长需要配合做一些电脑上的操作和设置。孩子完成作业后，家长可以
// 						在公众号上收到老师的点评
// 					</p>
// 				</li>
// 				<li>
// 					<p>-家长需要参与课程吗？</p>
// 					<p>大部分时间家长不用参与到课程中。前1-2次课程，家长需要配合做一些电脑上的操作和设置。孩子完成作业后，家长可以
// 						在公众号上收到老师的点评
// 					</p>
// 				</li>
// 				<li>
// 					<p>-家长需要参与课程吗？</p>
// 					<p>大部分时间家长不用参与到课程中。前1-2次课程，家长需要配合做一些电脑上的操作和设置。孩子完成作业后，家长可以
// 						在公众号上收到老师的点评
// 					</p>
// 				</li>
// 				<li>
// 					<p>-家长需要参与课程吗？</p>
// 					<p>大部分时间家长不用参与到课程中。前1-2次课程，家长需要配合做一些电脑上的操作和设置。孩子完成作业后，家长可以
// 						在公众号上收到老师的点评
// 					</p>
// 				</li>
// 				<li>
// 					<p>-家长需要参与课程吗？</p>
// 					<p>大部分时间家长不用参与到课程中。前1-2次课程，家长需要配合做一些电脑上的操作和设置。孩子完成作业后，家长可以
// 						在公众号上收到老师的点评
// 					</p>
// 				</li>
// 			</ul>
// 			</div>
// 			<a class="btn" href="#">0元试听</a>
// 		</div>
		
// 		<!--foot区的设置-->
// 		<div id="foot">
// 			<div class="mengceng"></div>
// 			<div class="layout">
// 				<div class="left">
// 					<img src="http://img.pipacoding.com/assets/pc/official/large/baidu_wechat.jpg" alt="二维码">
// 				</div>
// 				<div class="right">
// 					<img src="http://img.pipacoding.com/assets/pc/official/large/query.png">
// 					<p>扫码添加公众号<br><br>进群咨询老师</p>
// 				</div>
// 			</div>
// 			<div class="foot-botttom">
// 				Copyright&copy;2017-2018 北京聪明核桃教育科技有限公司 京ICP备17052426号-1
// 			</div>
// 		</div> */}
//     </div>);
}

export default App;