const table = [
  {
    no: 1,
    time: "11月21日18点",
    group: "A",
    title: "内加尔(Senegal) vs. 荷兰(Netherlands)",
    forecast: "荷兰(Netherlands)",
    result: 1,
  },
  {
    no: 2,
    time: "11月21日21点",
    group: "B",
    title: "英格兰(England) vs. 伊朗(Iran)",
    forecast: "英格兰(England)",
    result: 1,
  },
  {
    no: 3,
    time: "11月22日0点",
    group: "A",
    title: "卡塔尔(Qatar) vs. 厄瓜多尔(Ecuador)",
    forecast: "厄瓜多尔(Ecuador)",
    result: 1,
  },
  {
    no: 4,
    time: "11月22日3点",
    group: "B",
    title: "美国(United States) vs. 威尔士(Wales)",
    forecast: "平局(Draw)",
    result: 1,
  },
  {
    no: 5,
    time: "11月22日18点",
    group: "C",
    title: "阿根廷(Argentina) vs. 沙特阿拉伯(Saudi Arabia)",
    forecast: "阿根廷(Argentina) ",
    result: 2,
  },
  {
    no: 6,
    time: "11月22日21点",
    group: "D",
    title: "丹麦(Denmark) vs. 突尼斯(Tunisia)",
    forecast: "丹麦(Denmark)",
    result: 2,
  },
  {
    no: 7,
    time: "11月23日0点",
    group: "C",
    title: "墨西哥(Mexico) vs. 波兰(Poland):",
    forecast: "平局(Draw)",
    result: 1,
  },
  {
    no: 8,
    time: "11月23日3点",
    group: "D",
    title: "法国(France) vs. 澳大利亚(Australia)",
    forecast: "法国(France) ",
    result: 1,
  },
  {
    no: 9,
    time: "11月23日18点",
    group: "F",
    title: "摩洛哥(Morocco) vs. 克罗地亚(Croatia)",
    forecast: "克罗地亚(Croatia)",
    result: 2,
  },
  {
    no: 10,
    time: "11月23日21点",
    group: "E",
    title: "德国(Germany) vs. 日本(Japan)",
    forecast: "德国(Germany)",
    result: 2,
  },
  {
    no: 11,
    time: "11月24日0点",
    group: "E",
    title: "西班牙(Spain) vs. 哥斯达黎加(Costa Rica)",
    forecast: "西班牙(Spain)",
    result: 1,
  },
  {
    no: 12,
    time: "11月24日3点",
    group: "F",
    title: "比利时(Belgium) vs. 加拿大(Canada)",
    forecast: "比利时(Belgium)",
    result: 1,
  },
  {
    no: 13,
    time: "11月24日18点",
    group: "G",
    title: " 瑞士(Switzerland) vs. 喀麦隆(Cameroon)",
    forecast: "瑞士(Switzerland)",
    result: 1,
  },
  {
    no: 14,
    time: "11月24日21点",
    group: "H",
    title: "乌拉圭(Uruguay) vs. 韩国(South Korea)",
    forecast: "乌拉圭(Uruguay)",
    result: 2,
  },
  {
    no: 15,
    time: "11月25日0点",
    group: "H",
    title: "葡萄牙(Portugal) vs. 加纳(Ghana)",
    forecast: "葡萄牙(Portugal)",
    result: 1,
  },
  {
    no: 16,
    time: "11月25日3点",
    group: "G",
    title: "巴西(Brazil) vs. 塞尔维亚(Serbia)",
    forecast: "巴西(Brazil)",
    result: 1,
  },
  {
    no: 17,
    time: "11月25日18点",
    group: "B",
    title: "威尔士(Wales) vs. 伊朗(Iran)",
    forecast: "威尔士(Wales)",
    result: 2,
  },
  {
    no: 18,
    time: "11月25日21点",
    group: "A",
    title: "卡塔尔(Qatar) vs. 塞内加尔(Senegal)",
    forecast: "塞内加尔(Senegal)",
    result: 1,
  },
  {
    no: 19,
    time: "11月26日0点",
    group: "A",
    title: "荷兰(Netherlands) vs. 厄瓜多尔(Ecuador)",
    forecast: "荷兰(Netherlands)",
    result: 2,
  },
  {
    no: 20,
    time: "11月26日3点",
    group: "B",
    title: "英格兰(England) vs. 美国(United States)",
    forecast: "英格兰(England)",
    result: 2,
  },
  {
    no: 21,
    time: "11月26日18点",
    group: "D",
    title: "突尼斯(Tunisia) VS 澳大利亚(Australia)",
    forecast: "平局(Draw)",
    result: 2,
  },
  {
    no: 22,
    time: "11月26日21点",
    group: "C",
    title: "波兰(Poland) vs. 沙特阿拉伯(Saudi Arabia)",
    forecast: "波兰(Poland)",
    result: 1,
  },
  {
    no: 23,
    time: "11月27日0点",
    group: "D",
    title: "法国(France) VS 丹麦(Denmark) ",
    forecast: "平局(Draw)",
    result: 0,
  },
  {
    no: 24,
    time: "11月27日3点",
    group: "C",
    title: "阿根廷(Argentina) vs. 墨西哥(Mexico)",
    forecast: "阿根廷(Argentina)",
    result: 0,
  },
  {
    no: 25,
    time: "11月27日18点",
    group: "E",
    title: "日本(Japan) VS 哥斯达黎加(Costa Rica)",
    forecast: "平局(Draw)",
    result: 0,
  },
  {
    no: 26,
    time: "11月27日21点",
    group: "F",
    title: "比利时(Belgium) vs. 摩洛哥(Morocco)",
    forecast: "比利时(Belgium)",
    result: 0,
  },
  {
    no: 27,
    time: "11月28日0点",
    group: "F",
    title: "克罗地亚(Croatia) vs. 加拿大(Canada)",
    forecast: "克罗地亚(Croatia)",
    result: 0,
  },
  {
    no: 28,
    time: "11月28日3点",
    group: "E",
    title: "西班牙(Spain) VS 德国(Germany)",
    forecast: "平局(Draw)",
    result: 0,
  },
  {
    no: 29,
    time: "11月28日21点",
    group: "B",
    title: "韩国(South Korea) vs. 加纳(Ghana)",
    forecast: "韩国(South Korea)",
    result: 0,
  },
  {
    no: 30,
    time: "11月28日18点",
    group: "G",
    title: "喀麦隆(Cameroon) vs. 塞尔维亚(Serbia)",
    forecast: "塞尔维亚(Serbia)",
    result: 0,
  },
  {
    no: 31,
    time: "11月29日0点",
    group: "G",
    title: "巴西(Brazil) VS 瑞士(Switzerland)",
    forecast: "平局(Draw)",
    result: 0,
  },
  {
    no: 32,
    time: "11月29日3点",
    group: "H",
    title: "葡萄牙(Portugal) VS 乌拉圭(Uruguay)",
    forecast: "平局(Draw)",
    result: 0,
  },
  {
    no: 33,
    time: "11月29日23点",
    group: "A",
    title: "荷兰(Netherlands) vs. 卡塔尔(Qatar)",
    forecast: "荷兰(Netherlands)",
    result: 0,
  },
  {
    no: 34,
    time: "11月29日23点",
    group: "A",
    title: "厄瓜多尔(Ecuador) vs. 塞内加尔(Senegal)",
    forecast: "厄瓜多尔(Ecuador)",
    result: 0,
  },
  {
    no: 35,
    time: "11月30日3点",
    group: "B",
    title: "威尔士(Wales) vs. 英格兰(England)",
    forecast: "英格兰(England)",
    result: 0,
  },
  {
    no: 36,
    time: "11月30日3点",
    group: "B",
    title: "伊朗(Iran) vs. 美国(United States)",
    forecast: "美国(United States)",
    result: 0,
  },
  {
    no: 37,
    time: "11月30日23点",
    group: "D",
    title: "突尼斯(Tunisia) vs. 法国(France)",
    forecast: "法国(France)",
    result: 0,
  },
  {
    no: 38,
    time: "11月30日23点",
    group: "D",
    title: "澳大利亚(Australia) vs. 丹麦(Denmark)",
    forecast: "丹麦(Denmark)",
    result: 0,
  },
  {
    no: 39,
    time: "12月1日3点",
    group: "C",
    title: "沙特阿拉伯(Saudi Arabia) vs. 墨西哥(Mexico)",
    forecast: "墨西哥(Mexico)",
    result: 0,
  },
  {
    no: 40,
    time: "12月1日3点",
    group: "C",
    title: "波兰(Poland) vs. 阿根廷(Argentina)",
    forecast: "阿根廷(Argentina)",
    result: 0,
  },
  {
    no: 41,
    time: "12月1日23点",
    group: "F",
    title: "克罗地亚(Croatia) vs. 比利时(Belgium)",
    forecast: "比利时(Belgium)",
    result: 0,
  },
  {
    no: 42,
    time: "11月21日21点",
    group: "F",
    title: "加拿大(Canada) VS 摩洛哥(Morocco)",
    forecast: "平局(Draw)",
    result: 0,
  },
  {
    no: 43,
    time: "12月2日3点",
    group: "E",
    title: "日本(Japan) vs. 西班牙(Spain)",
    forecast: "西班牙(Spain)",
    result: 0,
  },
  {
    no: 44,
    time: "12月2日3点",
    group: "E",
    title: "哥斯达黎加(Costa Rica) vs. 德国(Germany)",
    forecast: "德国(Germany)",
    result: 0,
  },
  {
    no: 45,
    time: "12月2日23点",
    group: "H",
    title: "韩国(South Korea) vs. 葡萄牙(Portugal)",
    forecast: "葡萄牙(Portugal)",
    result: 0,
  },
  {
    no: 46,
    time: "12月2日23点",
    group: "H",
    title: "加纳(Ghana) vs. 乌拉圭(Uruguay)",
    forecast: "乌拉圭(Uruguay)",
    result: 0,
  },
  {
    no: 47,
    time: "12月3日3点",
    group: "G",
    title: "塞尔维亚(Serbia) vs. 瑞士(Switzerland)",
    forecast: "瑞士(Switzerland)",
    result: 0,
  },
  {
    no: 48,
    time: "12月3日3点",
    group: "G",
    title: "喀麦隆(Cameroon) vs. 巴西(Brazil)",
    forecast: "巴西(Brazil)",
    result: 0,
  },
];
export default table;
