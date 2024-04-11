import data from './data'

const resData = []
const n = 1
const fn = (data, obj, n) => {
  for(let i = 0; i< data.length; i++) {
    if (data[i].childrenList) {
      fn(data[i].childrenList, {...obj,[`${n}NAME`]: data[i]['NAME'],[`${n}SCORE`]: data[i]['SCORE']}, n + 1)
    } else {
      resData.push({...obj, [`${n}NAME`]: data[i]['NAME'],[`${n}SCORE`]: data[i]['SCORE']})
    }
  }
}

fn(data, {}, n)
let tag = {}
const columns = []
for(let i = 0; i< resData.length; i++) {
  for (let key in resData[i]) {
    if (tag[resData[i][key]]) {
      tag[resData[i][key]]++
    } else {
      tag[resData[i][key]] = 1
    }
  }
}
console.log(tag)

for (let key in resData[0]) {
  let num = key.slice(0,1)
  const des = key.slice(1) === 'NAME' ? '级指标' : '级指标得分'
  columns.push({
    title:`${num}${des}`,
    dataIndex: key,
    onCell: (_, index) => {
      let row = 0
      if (index === 0 || resData[index][key] !== resData[index-1][key]) {
        row = tag[resData[index][`${num}NAME`]]
      }
      return { rowSpan: row }
    }
  })
}



// const columns = [
//   {
//     title:'1级指标',
//     dataIndex: '1NAME',
//     onCell: (_, index) => {
//       let row = 0
//       if (index === 0 || resData[index]['1NAME'] !== resData[index-1]['1NAME']) {
//         row = tag[resData[index]['1NAME']]
//       }
//       console.log(row)
//       return { rowSpan: row }
//     }
//   },
//   {
//     title:'1级指标得分',
//     dataIndex: '!SCORE',
//     onCell: (_, index) => {
//       let row = 0
//       if (index === 0 || resData[index]['1SCORE'] !== resData[index-1]['1SCORE']) {
//         row = tag[resData[index]['1NAME']]
//       }
//       console.log(row)
//       return { rowSpan: row }
//     }
//   },
//   {
//     title:'2级指标',
//     dataIndex: '2NAME',
//     onCell: (_, index) => {
//       let row = 0
//       if (index === 0 || resData[index]['2NAME'] !== resData[index-1]['2NAME']) {
//         row = tag[resData[index]['2NAME']]
//       }
//       console.log(row)
//       return { rowSpan: row }
//     }
//   },
//   {
//     title:'2级指标得分',
//     dataIndex: '2SCORE',
//     onCell: (_, index) => {
//       let row = 0
//       if (index === 0 || resData[index]['2NAME'] !== resData[index-1]['2NAME']) {
//         row = tag[resData[index]['2NAME']]
//       }
//       console.log(row)
//       return { rowSpan: row }
//     }
//   },
//   {
//     title:'3级指标',
//     dataIndex: '3NAME',
//     onCell: (_, index) => {
//       return {rowSpan: 1}
//     }
//   },
//   {
//     title:'3级指标得分',
//     dataIndex: '3SCORE',
//     onCell: (_, index) => {
//       return { rowSpan: 1 }
//     }
//   }
// ]

const dataObj = {
  resData,
  columns
}

export default dataObj
