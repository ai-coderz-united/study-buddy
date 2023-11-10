export const getDateTime = () => {
  const dateFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: '2-digit' })
  const date = dateFormat.format(new Date())
  const timeFormat = new Intl.DateTimeFormat('en', { hour: 'numeric', minute: 'numeric', second: 'numeric' })
  const time = timeFormat.format(new Date())
  return `${date} ${time}`
}