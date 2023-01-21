export function getDate(date) {
  const numberToMonth = (num) => {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[num - 1];
  }

  const numberToYear = (num) => {
    const currentYear = new Date().getFullYear();
    const century = currentYear.toString().substr(0, 2);
    return century + num;
  }

  const shortMonth = (month, year) => {
    if (month === 'September') {
      return `SEPT ${year}`
    } else {
      const abbreviation = month.slice(0, 3)
      return `${abbreviation.toUpperCase()} ${year}`
    }
  }

  const yearNum = date.slice(0, 2)
  const monthNum = date.slice(2, 4)
  const dayNum = date.slice(4, 6)

  const year = (numberToYear(yearNum))
  const month = (numberToMonth(monthNum))

  const abbreviation = (shortMonth(month, year))
  const fullDate = (`${month} ${dayNum}, ${year}`)

  return { abbreviation, fullDate }
}
