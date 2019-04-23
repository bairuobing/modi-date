function format(dataTemplate) {
  let items = dataTemplate.split(' ');
  let _origin = null;
  if (items.length > 0) {
    _origin = items[0].split('-');
  } else {
    return
  }

  let origin = _origin.map((item) => {
    return Number(item)
  })

  const [year, month, day] = origin;
  return year + '年' + month + '月' + day + '日';
}

module.exports = format;