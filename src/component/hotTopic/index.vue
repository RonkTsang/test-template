<template>
  <div>
    <scroller v-if="list.length" class="wrapper">
      <topic-card
        v-for="data in list"
        :key="data.id"
        :cardData="data"
      ></topic-card>
    </scroller>
    <div
      v-if="!list.length"
      class="cover">
      <text
        style="
          font-size: 15dp;
          color: #3c3f41">
        {{ loading }}
      </text>
    </div>
  </div>
</template>

<script>
  var testItem = [{"id":1004695,"img_url":"http://qqpublic.qpic.cn/qq_public_cover/0/0647FFCB4EE8AEDAC77123D802AA7C92/0","content":"比尔盖茨2018年推荐书籍","desc":"看看首富又给我们推荐了什么书，这真是比你强的人还比你努力啊","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1004695&viewtype=1&sorttype=2&hasbanner=0&article_type=0"}];
  import topicCard from './topicCard.vue'
  var serverData = {
    "ret":0,
    "data":{
        "list":[{"id":1004695,"img_url":"http://qqpublic.qpic.cn/qq_public_cover/0/0647FFCB4EE8AEDAC77123D802AA7C92/0","content":"这是缓存数据","desc":"看看首富又给我们推荐了什么书，这真是比你强的人还比你努力啊","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1004695&viewtype=1&sorttype=2&hasbanner=0&article_type=0"},{"id":1004753,"img_url":"http://qqpublic.qpic.cn/qq_public/0/0-2781212616-620EA4B6BDD73BE6F1CC94FBB997E378/0","content":"西安融创一楼盘被曝出关系户名单","desc":"西安融创一楼盘昨日取得预售证，通知交资料今日摇号。24日当晚大家都在排队交资料，内部却流出关系户名单截图，大部分房源已经内定。对此相关部门给出回应……","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1004753&viewtype=1&sorttype=2&hasbanner=0&article_type=0"},{"id":1004750,"img_url":"http://qqpublic.qpic.cn/qq_public/0/0-2253209112-F55694E6687994D665C586040979C701/0","content":"特朗普宣布取消“特金会”","desc":"美国总统特朗普24日说，因近期朝鲜表示出的“公开敌意”，他决定取消原定于6月中旬与朝鲜最高领导人金正恩在新加坡的会晤。","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1004750&viewtype=3&sorttype=2&hasbanner=0&article_type=0"},{"id":1003181,"img_url":"http://qqpublic.qpic.cn/qq_public/0/0-2171026551-076EEF50319F90A93F4CC666BCD2F4A3/0","content":"创造101，漂亮小姐姐了解一下","desc":"101女孩重组队伍，进行专业方向考核。黄子韬竟激动离场？快来pick你喜欢的女孩，助她出道吧~","is_recommend":1,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1003181&viewtype=3&sorttype=2&hasbanner=1&article_type=0"},{"id":1004749,"img_url":"http://qqpublic.qpic.cn/qq_public_cover/0/0FCF75742D131089D6FFA6C2DB138130/0","content":"西班牙到底适不适合我们去旅行","desc":"地处欧洲与非洲交界处的西班牙，向来以热情奔放著称，独特的民族文化和优质的旅游资源吸引了大量的游客，但是当地华人的生活处境并不乐观，偶尔发生一些针对华人的恶性事件，那么去西班牙游玩究竟是怎样的体验呢？一起来了解下吧！","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1004749&viewtype=1&sorttype=2&hasbanner=0&article_type=0"},{"id":1004679,"img_url":"http://qqpublic.qpic.cn/qq_public/0/0-2783607520-366082CC5D239CD046934C65B0FACA83/0","content":"情感教主Ayawawa被封号","desc":"5月22日，新浪微博管理员发布公告，自媒体账号Ayawawa发表有关慰安妇的严重不当言论，引发社会舆论集中批评，造成严重社会不良影响，对该账号禁言禁被关注6个月。","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1004679&viewtype=3&sorttype=2&hasbanner=0&article_type=0"},{"id":1004715,"img_url":"http://qqpublic.qpic.cn/qq_public/0/0-2902926685-D4BABB4B031890B762AFD83BBEEF49F7/0","content":"女车主闹市遭绑架，遇追尾获救","desc":"警方通报称，关于网上流传“5月21日一环路高升桥附近发生绑架”一案，成都市公安局青羊区分局于5月22日20时30分，在绵阳市将5月21日流窜至成都，在一环路西二段某地下停车场实施捆绑抢劫作案的犯罪嫌疑人陈某(男，30岁，绵阳市人)抓获。","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1004715&viewtype=3&sorttype=2&hasbanner=0&article_type=0"},{"id":1001961,"img_url":"http://qqpublic.qpic.cn/qq_public/0/0-2758544294-7C92F7B3EA515C36DD150C79994E3872/0","content":"关于炉石传说的资讯","desc":"","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1001961&view=pgc&article_type=0"},{"id":1001957,"img_url":"http://qqpublic.qpic.cn/qq_public_cover/0/F30EF31F1CD6CF80B5314C14F337B13E/0","content":"安利你一款手游","desc":"","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1001957&view=pgc&article_type=0"},{"id":1001969,"img_url":"http://qqpublic.qpic.cn/qq_public/0/0-2254930858-2DB779A8BE0A16B418026CD330982C99/0","content":"航母相关资讯","desc":"","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1001969&view=pgc&article_type=0"},{"id":1001393,"img_url":"http://qqpublic.qpic.cn/qq_public/0/0-2860314234-6C5D684BB091B52C1AD593A661CCE5B4/0","content":"NASA新闻","desc":"","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1001393&view=pgc&article_type=0"},{"id":1001553,"img_url":"http://qqpublic.qpic.cn/qq_public/0/0-2547960835-6AE6A28DC14DFEFC491ADC9DDE79E4E5/0","content":"搏击资讯","desc":"","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1001553&viewtype=1&sorttype=2&hasbanner=0&article_type=0"},{"id":1001946,"img_url":"http://qqpublic.qpic.cn/qq_public/0/0-2932803957-7525EF09A2B33ACA2DE122E4843D6046/0","content":"外星物种探索","desc":"","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1001946&view=pgc&article_type=0"},{"id":1001313,"img_url":"http://qqpublic.qpic.cn/qq_public_cover/0/AE821CA7917475CA800076D3FBA48372/0","content":"NBA球星的赛季记录","desc":"","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1001313&view=pgc&article_type=0"}]}};

  // const http = viola.requireAPI('http')
  
  export default {
    data () {
      return {
        url: 'http://localhost/mock/hotTopic.json',
        loading: '加载中～',
        list: []
      }
    },
    created () {
      this.request()
    },
    methods: {
      request () {
        setTimeout(() => {
          this.updateData(serverData.data.list)
        }, 1000)
        // http.requestGet(this.url, {}, (res) => {
        //   if (res.success) {
        //     // console.log()
        //     this.updateData(res.data.data.list)
        //   } else {
        //     this.loading = '☹️  ' + res.errorText
        //   }
        // })
      },
      refreshData (data) {
        this.list = data
      },
      updateData (data) {
        this.list = this.list.concat(data)
      }
    },
    components: {
      [topicCard.name]: topicCard
    }  
  }
</script>

<style scoped>
  .wrapper {
    width:750;
    background-color:#FFFFFF
  }

  .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: white;
    justify-content: center;
    align-items: center;
  }
</style>
