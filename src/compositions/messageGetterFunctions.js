const fillContent = ({contentPostTones, content}) => {
  const filledContentArray = []
  let contentPosition = 0
  contentPostTones
    .sort((a, b) => a.position > b.position ? 1 : -1)
    .forEach(post => {
      filledContentArray.push(
        content.substr(contentPosition, post.position - (contentPosition)),
        {text: content.substr(post.position, post.length), color: `hsl(${(post.tone + 1) * 64}, 70%, 70%)`}
      )
      contentPosition = post.position + post.length
    })

  filledContentArray.push(content.substr(contentPosition))
  return filledContentArray
    .filter(i => i)
    .reduce((accumulator, i) => {
      if (typeof i === 'object') {
        return `${accumulator}<span class="fill" style="background-color: ${i.color}">${i.text}</span>`
      }
      return `${accumulator}${i}`
    }, '')
}

const prepareDate = date => {
  const dateObj = new Date(date)
  return dateObj.toLocaleString(
    'ru-RU',
    {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    })
    .split(',').reverse().join(',')
}

export default {
  fillContent,
  prepareDate
}
