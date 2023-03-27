// This is to sort the table by any column
document$.subscribe(function () {
    var tables = document.querySelectorAll("article table")
    tables.forEach(function (table) {
        new Tablesort(table)
    })
})
