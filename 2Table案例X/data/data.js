const data = [
  {
      "CODE": "R01",
      "NAME": "企业基础属性信息",
      "SCORE": 123.21,
      "childrenList": [
          {
              "CODE": "R0101",
              "NAME": "企业规模",
              "SCORE": 227.92,
              "childrenList": [
                  {
                      "CODE": "R010101",
                      "NAME": "注册资本",
                      "SCORE": 878.02
                  },
                  {
                      "CODE": "R010102",
                      "NAME": "法人股东数",
                      "SCORE": 449.05
                  },
                  {
                      "CODE": "R010103",
                      "NAME": "对外投资企业数",
                      "SCORE": 595.78
                  },
                  {
                      "CODE": "R010104",
                      "NAME": "分支机构数",
                      "SCORE": 538.93
                  }
              ]
          },
          {
              "CODE": "R0102",
              "NAME": "企业年龄",
              "SCORE": 666.01,
              "childrenList": [
                  {
                      "CODE": "R010201",
                      "NAME": "经营年限",
                      "SCORE": 693.18
                  }
              ]
          },
          {
              "CODE": "R0103",
              "NAME": "企业背景",
              "SCORE": 541.57,
              "childrenList": [
                  {
                      "CODE": "R010301",
                      "NAME": "股东类型",
                      "SCORE": 929.26
                  },
                  {
                      "CODE": "R010302",
                      "NAME": "上市市场",
                      "SCORE": 447.53
                  },
                  {
                      "CODE": "R010303",
                      "NAME": "企业类型",
                      "SCORE": 870.88
                  },
                  {
                      "CODE": "R010304",
                      "NAME": "运营平台分级",
                      "SCORE": 802.27
                  },
                  {
                      "CODE": "R010305",
                      "NAME": "活跃用户数",
                      "SCORE": 63.57
                  }
              ]
          }
      ]
  },
  {
      "CODE": "R02",
      "NAME": "企业动态信息",
      "SCORE": 289.03,
      "childrenList": [
          {
              "CODE": "R0201",
              "NAME": "许可事项",
              "SCORE": 863.62,
              "childrenList": [
                  {
                      "CODE": "R020101",
                      "NAME": "许可证数量",
                      "SCORE": 815.24
                  },
                  {
                      "CODE": "R020102",
                      "NAME": "许可证过期或失效",
                      "SCORE": 993.2
                  },
                  {
                      "CODE": "R020103",
                      "NAME": "营业执照过期或失效",
                      "SCORE": 338.54
                  },
                  {
                      "CODE": "R020104",
                      "NAME": "平台内经营者公示营业执照比例",
                      "SCORE": 828.16
                  }
              ]
          },
          {
              "CODE": "R0202",
              "NAME": "登记备案事项",
              "SCORE": 415.61,
              "childrenList": [
                  {
                      "CODE": "R020201",
                      "NAME": "注册资本实缴比例",
                      "SCORE": 126.32
                  },
                  {
                      "CODE": "R020202",
                      "NAME": "法定代表人频繁变更",
                      "SCORE": 32.83
                  },
                  {
                      "CODE": "R020203",
                      "NAME": "企业名称频繁变更",
                      "SCORE": 661.24
                  },
                  {
                      "CODE": "R020204",
                      "NAME": "登记住所频繁变更",
                      "SCORE": 616.75
                  },
                  {
                      "CODE": "R020205",
                      "NAME": "经营范围频繁变更",
                      "SCORE": 554.68
                  },
                  {
                      "CODE": "R020206",
                      "NAME": "注册资本大幅增长或减少",
                      "SCORE": 407.45
                  }
              ]
          },
          {
              "CODE": "R0203",
              "NAME": "经营状况",
              "SCORE": 695.97,
              "childrenList": [
                  {
                      "CODE": "R020301",
                      "NAME": "营收规模",
                      "SCORE": 971.71
                  },
                  {
                      "CODE": "R020302",
                      "NAME": "营业收入同比变动",
                      "SCORE": 263.62
                  },
                  {
                      "CODE": "R020303",
                      "NAME": "近三年亏损次数",
                      "SCORE": 289.84
                  },
                  {
                      "CODE": "R020304",
                      "NAME": "最近一年亏损程度",
                      "SCORE": 657.18
                  },
                  {
                      "CODE": "R020305",
                      "NAME": "最近一年资产负债率",
                      "SCORE": 772.55
                  },
                  {
                      "CODE": "R020306",
                      "NAME": "企业退市",
                      "SCORE": 701.13
                  },
                  {
                      "CODE": "R020307",
                      "NAME": "企业破产重组",
                      "SCORE": 290.13
                  },
                  {
                      "CODE": "R020308",
                      "NAME": "企业破产清算",
                      "SCORE": 219.6
                  }
              ]
          },
          {
              "CODE": "R0204",
              "NAME": "纳税社保",
              "SCORE": 241.24,
              "childrenList": [
                  {
                      "CODE": "R020401",
                      "NAME": "社保缴纳人数",
                      "SCORE": 722.67
                  },
                  {
                      "CODE": "R020402",
                      "NAME": "年纳税额",
                      "SCORE": 472.22
                  },
                  {
                      "CODE": "R020403",
                      "NAME": "近一年员工变动率",
                      "SCORE": 477.84
                  }
              ]
          },
          {
              "CODE": "R0205",
              "NAME": "知识产权",
              "SCORE": 587.24,
              "childrenList": [
                  {
                      "CODE": "R020501",
                      "NAME": "注册商标数量",
                      "SCORE": 271.36
                  },
                  {
                      "CODE": "R020502",
                      "NAME": "授权专利数量",
                      "SCORE": 885.06
                  },
                  {
                      "CODE": "R020503",
                      "NAME": "软件著作权数量",
                      "SCORE": 300.18
                  }
              ]
          },
          {
              "CODE": "R0206",
              "NAME": "股权出质、冻结",
              "SCORE": 711.78,
              "childrenList": [
                  {
                      "CODE": "R020601",
                      "NAME": "近三年股权出质比例",
                      "SCORE": 599.37
                  },
                  {
                      "CODE": "R020602",
                      "NAME": "近三年股权冻结次数",
                      "SCORE": 163.05
                  }
              ]
          }
      ]
  },
  {
      "CODE": "R03",
      "NAME": "监管信息",
      "SCORE": 380.81,
      "childrenList": [
          {
              "CODE": "R0301",
              "NAME": "经营异常",
              "SCORE": 522.72,
              "childrenList": [
                  {
                      "CODE": "R030101",
                      "NAME": "当前是否列异",
                      "SCORE": 999.44
                  },
                  {
                      "CODE": "R030102",
                      "NAME": "列异原因",
                      "SCORE": 551.8
                  },
                  {
                      "CODE": "R030103",
                      "NAME": "近三年列异次数",
                      "SCORE": 747.02
                  }
              ]
          },
          {
              "CODE": "R0302",
              "NAME": "严重失信主体名单（黑名单）",
              "SCORE": 268.15,
              "childrenList": [
                  {
                      "CODE": "R030201",
                      "NAME": "当前是否列入黑名单",
                      "SCORE": 129.84
                  },
                  {
                      "CODE": "R030202",
                      "NAME": "列入黑名单原因",
                      "SCORE": 16.42
                  },
                  {
                      "CODE": "R030203",
                      "NAME": "是否有列入黑名单记录",
                      "SCORE": 510.26
                  },
                  {
                      "CODE": "R030204",
                      "NAME": "是否实施信用修复",
                      "SCORE": 703.27
                  }
              ]
          },
          {
              "CODE": "R0303",
              "NAME": "失信被执行人",
              "SCORE": 972.24,
              "childrenList": [
                  {
                      "CODE": "R030301",
                      "NAME": "当前是否列入失信被执行人",
                      "SCORE": 39.27
                  },
                  {
                      "CODE": "R030302",
                      "NAME": "近三年受到行政处罚次数"
                  },
                  {
                      "CODE": "R030303",
                      "NAME": "近三年被罚没金额"
                  },
                  {
                      "CODE": "R030304",
                      "NAME": "近三年所受行政处罚种类"
                  }
              ]
          },
          {
              "CODE": "R0304",
              "NAME": "行政处罚",
              "SCORE": 505.73,
              "childrenList": []
          },
          {
              "CODE": "R0305",
              "NAME": "双随机抽查",
              "SCORE": 147.64,
              "childrenList": [
                  {
                      "CODE": "R030501",
                      "NAME": "不配合检查情节严重",
                      "SCORE": 779.47
                  },
                  {
                      "CODE": "R030502",
                      "NAME": "发现问题已责令改正",
                      "SCORE": 821.42
                  },
                  {
                      "CODE": "R030503",
                      "NAME": "发现问题待后续处理",
                      "SCORE": 835.01
                  }
              ]
          },
          {
              "CODE": "R0306",
              "NAME": "诉讼信息",
              "SCORE": 680.32,
              "childrenList": [
                  {
                      "CODE": "R030601",
                      "NAME": "近三年诉讼数量",
                      "SCORE": 11.93
                  },
                  {
                      "CODE": "R030602",
                      "NAME": "近三年诉讼金额",
                      "SCORE": 930.94
                  }
              ]
          }
      ]
  },
  {
      "CODE": "R04",
      "NAME": "风险信息",
      "SCORE": 831.79,
      "childrenList": [
          {
              "CODE": "R0401",
              "NAME": "重点领域风险",
              "SCORE": 257.2,
              "childrenList": [
                  {
                      "CODE": "R040101",
                      "NAME": "反垄断风险",
                      "SCORE": 868.83
                  },
                  {
                      "CODE": "R040102",
                      "NAME": "不正当竞争/价格行为风险",
                      "SCORE": 647.51
                  },
                  {
                      "CODE": "R040103",
                      "NAME": "数据安全违规风险",
                      "SCORE": 322.96
                  },
                  {
                      "CODE": "R040104",
                      "NAME": "金融风险",
                      "SCORE": 105.58
                  },
                  {
                      "CODE": "R040105",
                      "NAME": "平台企业用工风险",
                      "SCORE": 90.59
                  }
              ]
          },
          {
              "CODE": "R0402",
              "NAME": "网络交易行为风险",
              "SCORE": 329.16,
              "childrenList": [
                  {
                      "CODE": "R040201",
                      "NAME": "捆绑销售",
                      "SCORE": 880.51
                  },
                  {
                      "CODE": "R040202",
                      "NAME": "合同违规风险",
                      "SCORE": 345.51
                  },
                  {
                      "CODE": "R040203",
                      "NAME": "直播行为风险",
                      "SCORE": 206.43
                  }
              ]
          },
          {
              "CODE": "R0403",
              "NAME": "违法广告行为风险",
              "SCORE": 595.5,
              "childrenList": [
                  {
                      "CODE": "R040301",
                      "NAME": "违规使用国旗国徽等行为",
                      "SCORE": 562.48
                  },
                  {
                      "CODE": "R040302",
                      "NAME": "违规使用国家机关名义等行为",
                      "SCORE": 692.83
                  },
                  {
                      "CODE": "R040303",
                      "NAME": "违规使用绝对化用语",
                      "SCORE": 750.95
                  },
                  {
                      "CODE": "R040304",
                      "NAME": "涉及违禁品内容",
                      "SCORE": 8.15
                  },
                  {
                      "CODE": "R040305",
                      "NAME": "涉及医疗功效内容",
                      "SCORE": 188.53
                  }
              ]
          },
          {
              "CODE": "R0404",
              "NAME": "关联企业违法失信",
              "SCORE": 394.17,
              "childrenList": [
                  {
                      "CODE": "R040401",
                      "NAME": "关联企业吊销比例",
                      "SCORE": 674.11
                  },
                  {
                      "CODE": "R040402",
                      "NAME": "关联企业黑名单比例",
                      "SCORE": 324.49
                  },
                  {
                      "CODE": "R040403",
                      "NAME": "关联企业列异比例",
                      "SCORE": 462.16
                  },
                  {
                      "CODE": "R040404",
                      "NAME": "关联企业行政处罚比例",
                      "SCORE": 71.73
                  },
                  {
                      "CODE": "R040405",
                      "NAME": "关联企业失信被执行人比例",
                      "SCORE": 498.43
                  }
              ]
          }
      ]
  },
  {
      "CODE": "R05",
      "NAME": "社会评价信息",
      "SCORE": 516.03,
      "childrenList": [
          {
              "CODE": "R0501",
              "NAME": "投诉举报",
              "SCORE": 587.81,
              "childrenList": [
                  {
                      "CODE": "R050101",
                      "NAME": "近一年12345投诉举报次数",
                      "SCORE": 641.75
                  },
                  {
                      "CODE": "R050102",
                      "NAME": "近三个月12345投诉举报次数增长率",
                      "SCORE": 903.79
                  }
              ]
          },
          {
              "CODE": "R0502",
              "NAME": "舆情评价",
              "SCORE": 332.87,
              "childrenList": [
                  {
                      "CODE": "R050201",
                      "NAME": "近一个月负面舆情条数",
                      "SCORE": 901.01
                  },
                  {
                      "CODE": "R050202",
                      "NAME": "近一个月负面舆情占比",
                      "SCORE": 165.7
                  }
              ]
          }
      ]
  }
]
export default data