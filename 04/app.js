const years = [1980, 1934, 2002, 2019]
const newYears = years.map(yearsToToday)

function yearsToToday(element) {
	return 2023 - element
}

console.log(newYears)
