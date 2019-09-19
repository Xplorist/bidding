new Vue({
  el: '#app',
  data: function() {
    return {
      rate: {
        color: ['#0096FF', '#0096FF', '#0096FF'],
        list: [
          { name: '出貨時效', value: 3.2, num: '48' },
          { name: '出貨質量', value: 5.0, num: '53' },
          { name: '服務態度', value: 4.5, num: '57' }
        ]
      },
      comments: [{
          text: '与该公司合作的非常愉快，交货时间没有延期，制作的东西非常棒，希望下次有机会再次合作。',
          date: '2019-08-29 17:22:37',
          belong: 'FOXCONN 成都制一处'
        },
        {
          text: '很不错，多次合作，一如既往的好。',
          date: '2019-08-29 17:22:37',
          belong: 'FOXCONN 成都制一处'
        },
        {
          text: '不好说，习惯性好评。',
          date: '2019-08-29 17:22:37',
          belong: 'FOXCONN 成都制一处'
        },
        {
          text: '虽然出现了一点小状况，但是商家后面还是很耐心的给解决了，给商家服务态度点个赞。',
          date: '2019-08-29 17:22:37',
          belong: 'FOXCONN 成都制一处'
        },
        {
          text: '与该公司合作的非常愉快，交货时间没有延期，制作的东西非常棒，希望下次有机会再次合作。',
          date: '2019-08-29 17:22:37',
          belong: 'FOXCONN 成都制一处'
        },
        {
          text: '很不错，多次合作，一如既往的好。',
          date: '2019-08-29 17:22:37',
          belong: 'FOXCONN 成都制一处'
        },
        {
          text: '不好说，习惯性好评。',
          date: '2019-08-29 17:22:37',
          belong: 'FOXCONN 成都制一处'
        },
        {
          text: '虽然出现了一点小状况，但是商家后面还是很耐心的给解决了，给商家服务态度点个赞。',
          date: '2019-08-29 17:22:37',
          belong: 'FOXCONN 成都制一处'
        }
      ]
    }
  },
  methods: {

  }
})