const dataTable = new simpleDatatables.DataTable("#datatable", {
    searchable: true,
    fixedHeight: true,
    data: {
        headings: ["Video title", "Published Date", "Views Count"],
    }
});

dataTable.insert(
    { data:
        [
            ['Top 10 VS code Shortcuts', "15-11-2012", "23415"], 
            ['Top 10 VS code Shortcuts', "15-11-2012", "23413"],
            ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
            ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
            ['Top 10 VS code Shortcuts', "15-11-2012", "23415"], 
            ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
            ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
            ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
            ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
            ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
            ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
      ]
    }
)