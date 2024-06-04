cars = [
    { 'Марка': 'Toyota', 'Название': 'Camry', 'Мощность двигателя': 203, 'Год выпуска': 2023, 'Тип кузова': 'Седан' },
    { 'Марка': 'Honda', 'Название': 'Accord', 'Мощность двигателя': 192, 'Год выпуска': 2023, 'Тип кузова': 'Седан' },
    { 'Марка': 'Nissan', 'Название': 'Altima', 'Мощность двигателя': 188, 'Год выпуска': 2023, 'Тип кузова': 'Седан' },
    { 'Марка': 'Mazda', 'Название': 'CX-5', 'Мощность двигателя': 187, 'Год выпуска': 2023, 'Тип кузова': 'Кроссовер' },
    { 'Марка': 'Subaru', 'Название': 'Outback', 'Мощность двигателя': 182, 'Год выпуска': 2023, 'Тип кузова': 'Универсал' },
    { 'Марка': 'Mitsubishi', 'Название': 'Outlander', 'Мощность двигателя': 181, 'Год выпуска': 2023, 'Тип кузова': 'Кроссовер' },
    { 'Марка': 'Lexus', 'Название': 'RX 350', 'Мощность двигателя': 295, 'Год выпуска': 2023, 'Тип кузова': 'Кроссовер' },
    { 'Марка': 'Infiniti', 'Название': 'Q50', 'Мощность двигателя': 300, 'Год выпуска': 2023, 'Тип кузова': 'Седан' },
    { 'Марка': 'Suzuki', 'Название': 'Swift', 'Мощность двигателя': 82, 'Год выпуска': 2023, 'Тип кузова': 'Хэтчбек' },
    { 'Марка': 'Daihatsu', 'Название': 'Terios', 'Мощность двигателя': 105, 'Год выпуска': 2023, 'Тип кузова': 'Кроссовер' },
    { 'Марка': 'Toyota', 'Название': 'Corolla', 'Мощность двигателя': 106, 'Год выпуска': 2010, 'Тип кузова': 'Седан' },
    { 'Марка': 'Honda', 'Название': 'Civic', 'Мощность двигателя': 158, 'Год выпуска': 2018, 'Тип кузова': 'Седан' },
    { 'Марка': 'Nissan', 'Название': 'Maxima', 'Мощность двигателя': 300, 'Год выпуска': 2015, 'Тип кузова': 'Седан' },
    { 'Марка': 'Mazda', 'Название': 'MX-5 Miata', 'Мощность двигателя': 181, 'Год выпуска': 2019, 'Тип кузова': 'Родстер' },
    { 'Марка': 'Subaru', 'Название': 'Impreza', 'Мощность двигателя': 152, 'Год выпуска': 2017, 'Тип кузова': 'Седан' },
    { 'Марка': 'Mitsubishi', 'Название': 'Lancer', 'Мощность двигателя': 148, 'Год выпуска': 2016, 'Тип кузова': 'Седан' },
    { 'Марка': 'Lexus', 'Название': 'ES 350', 'Мощность двигателя': 302, 'Год выпуска': 2019, 'Тип кузова': 'Седан' },
    { 'Марка': 'Infiniti', 'Название': 'QX60', 'Мощность двигателя': 295, 'Год выпуска': 2020, 'Тип кузова': 'Кроссовер' },
    { 'Марка': 'Suzuki', 'Название': 'Vitara', 'Мощность двигателя': 115, 'Год выпуска': 2018, 'Тип кузова': 'Кроссовер' },
    { 'Марка': 'Daihatsu', 'Название': 'Rocky', 'Мощность двигателя': 98, 'Год выпуска': 2021, 'Тип кузова': 'Кроссовер' },
    { 'Марка': 'Toyota', 'Название': 'Supra', 'Мощность двигателя': 335, 'Год выпуска': 1998, 'Тип кузова': 'Купе' },
    { 'Марка': 'Honda', 'Название': 'Prelude', 'Мощность двигателя': 200, 'Год выпуска': 1997, 'Тип кузова': 'Купе' },
    { 'Марка': 'Nissan', 'Название': '300ZX', 'Мощность двигателя': 300, 'Год выпуска': 1996, 'Тип кузова': 'Купе' },
    { 'Марка': 'Mazda', 'Название': 'RX-7', 'Мощность двигателя': 276, 'Год выпуска': 1995, 'Тип кузова': 'Купе' },
    { 'Марка': 'Subaru', 'Название': 'Legacy', 'Мощность двигателя': 175, 'Год выпуска': 2005, 'Тип кузова': 'Седан' },
    { 'Марка': 'Mitsubishi', 'Название': 'Eclipse', 'Мощность двигателя': 210, 'Год выпуска': 2003, 'Тип кузова': 'Купе' },
    { 'Марка': 'Lexus', 'Название': 'SC 430', 'Мощность двигателя': 288, 'Год выпуска': 2002, 'Тип кузова': 'Кабриолет' },
    { 'Марка': 'Infiniti', 'Название': 'G35', 'Мощность двигателя': 280, 'Год выпуска': 2004, 'Тип кузова': 'Купе' },
    { 'Марка': 'Suzuki', 'Название': 'Grand Vitara', 'Мощность двигателя': 185, 'Год выпуска': 2007, 'Тип кузова': 'Кроссовер' },
    { 'Марка': 'Daihatsu', 'Название': 'Charade', 'Мощность двигателя': 60, 'Год выпуска': 1990, 'Тип кузова': 'Хэтчбек' },
    { 'Марка': 'Toyota', 'Название': 'Celica', 'Мощность двигателя': 140, 'Год выпуска': 2000, 'Тип кузова': 'Купе' },
    { 'Марка': 'Honda', 'Название': 'S2000', 'Мощность двигателя': 240, 'Год выпуска': 2005, 'Тип кузова': 'Родстер' },
    { 'Марка': 'Nissan', 'Название': 'Skyline', 'Мощность двигателя': 280, 'Год выпуска': 1998, 'Тип кузова': 'Купе' },
    { 'Марка': 'Mazda', 'Название': '626', 'Мощность двигателя': 170, 'Год выпуска': 2002, 'Тип кузова': 'Седан' },
    { 'Марка': 'Subaru', 'Название': 'Forester', 'Мощность двигателя': 170, 'Год выпуска': 2009, 'Тип кузова': 'Кроссовер' },
    { 'Марка': 'Mitsubishi', 'Название': 'Galant', 'Мощность двигателя': 160, 'Год выпуска': 2000, 'Тип кузова': 'Седан' },
    { 'Марка': 'Lexus', 'Название': 'GS 300', 'Мощность двигателя': 225, 'Год выпуска': 1998, 'Тип кузова': 'Седан' },
    { 'Марка': 'Infiniti', 'Название': 'FX35', 'Мощность двигателя': 280, 'Год выпуска': 2008, 'Тип кузова': 'Кроссовер' },
    { 'Марка': 'Suzuki', 'Название': 'SX4', 'Мощность двигателя': 150, 'Год выпуска': 2012, 'Тип кузова': 'Хэтчбек' },
    { 'Марка': 'Daihatsu', 'Название': 'YRV', 'Мощность двигателя': 129, 'Год выпуска': 2002, 'Тип кузова': 'Хэтчбек' },
    { 'Марка': 'Toyota', 'Название': 'MR2', 'Мощность двигателя': 138, 'Год выпуска': 1989, 'Тип кузова': 'Родстер' },
    { 'Марка': 'Honda', 'Название': 'CR-V', 'Мощность двигателя': 190, 'Год выпуска': 2017, 'Тип кузова': 'Кроссовер' },
    { 'Марка': 'Nissan', 'Название': 'Juke', 'Мощность двигателя': 188, 'Год выпуска': 2011, 'Тип кузова': 'Кроссовер' },
    { 'Марка': 'Mazda', 'Название': '3', 'Мощность двигателя': 155, 'Год выпуска': 2014, 'Тип кузова': 'Седан' },
    { 'Марка': 'Subaru', 'Название': 'BRZ', 'Мощность двигателя': 200, 'Год выпуска': 2016, 'Тип кузова': 'Купе' },
    { 'Марка': 'Mitsubishi', 'Название': 'ASX', 'Мощность двигателя': 150, 'Год выпуска': 2015, 'Тип кузова': 'Кроссовер' },
    { 'Марка': 'Lexus', 'Название': 'LS 400', 'Мощность двигателя': 250, 'Год выпуска': 1995, 'Тип кузова': 'Седан' },
    { 'Марка': 'Infiniti', 'Название': 'Q70', 'Мощность двигателя': 330, 'Год выпуска': 2015, 'Тип кузова': 'Седан' },
    { 'Марка': 'Suzuki', 'Название': 'Jimny', 'Мощность двигателя': 102, 'Год выпуска': 2020, 'Тип кузова': 'Внедорожник' },
    { 'Марка': 'Daihatsu', 'Название': 'Sirion', 'Мощность двигателя': 86, 'Год выпуска': 2007, 'Тип кузова': 'Хэтчбек' },
    { 'Марка': 'Toyota', 'Название': 'Yaris', 'Мощность двигателя': 106, 'Год выпуска': 2018, 'Тип кузова': 'Хэтчбек' }
];


const marginX = 50;
const marginY = 50;
const height = 400;
const width = 800;

let svg = d3.select("svg").attr("height", height).attr("width", width);

let currentTable = cars;
let createTable = (data, idTable) => {
  let table = document.getElementById(idTable);
  let tr = document.createElement('tr');
  for (key in data[0]) {
      let th = document.createElement('th');
      th.innerHTML = key;
      tr.append(th);
  }
  table.append(tr);
  data.forEach((item) => {
      let row = document.createElement('tr');
      for (key in item) {
          let cell = document.createElement('td');
          cell.innerHTML = item[key];
          row.appendChild(cell);
      }
      table.appendChild(row);
  });
}
let correspond = {
  'Марка': 'brand',
  'Название': 'name',
  'Мощность двигателя': ["powerFrom", "powerTo"],
  'Год выпуска': ["yearFrom", "yearTo"],
  'Тип кузова': 'bodyType',
}

function resetTable() {
    createTable(cars, 'list');
    currentTable = cars.slice();
}

let dataFilter = (dataForm) => {
  let dictFilter = {};
  for (let j = 0; j < dataForm.elements.length; j++) {
      let item = dataForm.elements[j];
      let valInput = item.value;
      if (item.type == "text") {
          valInput = valInput.toLowerCase();
      } else if (item.type == "number") {
          if (valInput !== "") {
              valInput = parseFloat(valInput);
          } else {
              if (item.id.includes("From")) {
                  valInput = Number.NEGATIVE_INFINITY;
              } else if (item.id.includes("To")) {
                  valInput = Number.POSITIVE_INFINITY;
              }
          }
      }
      dictFilter[item.id] = valInput;
  }
  return dictFilter;
}

let removeAllRows = (idTable) => {
  let table = document.getElementById(idTable);
  if (table) {
      while (table.rows.length > 0) {
          table.deleteRow(-1);
      }
  }
}

let filterTable = (data, idTable, dataForm) => {
  let datafilter = dataFilter(dataForm);
  let tableFilter = data.filter(item => {
      let result = true;
      for (let key in item) {
          let val = item[key];
          if (isNaN(Number(val))) {
              val = item[key].toLowerCase()
              result &&= val.indexOf(datafilter[correspond[key]]) !== -1
          }
          if (!isNaN(Number(val))) {
              val = Number(val)
              result &&= (val >= datafilter[correspond[key][0]] && val <= datafilter[correspond[key][1]]) 
          }
      }
      return result;
  });
  removeAllRows(idTable);
  createTable(tableFilter, idTable);
  currentTable = tableFilter;
}

let clearFilter = (idTable, formData) => {
  let formElements = formData.elements;
  for (let i = 0; i < formElements.length; i++) {
      let element = formElements[i];
      if (element.type === 'text' || element.type === 'number') {
          element.value = '';
      }
  }
  removeAllRows(idTable);
  resetTable();
}

let selectedOptions = {}

let createOption = (str, val) => {
  let item = document.createElement('option');
  item.text = str;
  item.value = val;
  return item;
}

let setSortSelect = (head, sortSelect) => {
  sortSelect.append(createOption('Нет', 0));
  for (let i in head) {
      let option = createOption(head[i], Number(i) + 1)
      sortSelect.append(option);
      selectedOptions[option.value] = false
  }
}

let setSortSelects = (data, dataForm) => {
  let head = Object.keys(data);
  let allSelect = dataForm.getElementsByTagName('select');
  for (let j = 0; j < allSelect.length; j++) {
      setSortSelect(head, allSelect[j]);
      if (j != 0) {
          allSelect[j].disabled = true;
      }
  }
}

let changeNextSelect = (nextSelectId, curSelect) => {

  let nextSelect = document.getElementById(nextSelectId);
  nextSelect.disabled = false;
  selectedOptions[curSelect.oldValue] = false
  nextSelect.innerHTML = curSelect.innerHTML;
  if (curSelect.value != 0) {
      selectedOptions[curSelect.value] = true
      for (let key in selectedOptions) {
          if (selectedOptions[key]) {
              let options = nextSelect.options
              for (let index = 0; index < options.length; index++) {
                  if (options[index].value == key) {
                      nextSelect.remove(index)
                  }
              }
          }
      }
  } else {
      let allSelect = document.getElementById('sort').getElementsByTagName('select');
      let allSelectArray = Array.from(allSelect)
      for (let j = allSelectArray.indexOf(curSelect); j < allSelect.length; j++) {
          selectedOptions[allSelect[j].oldValue] = false
          allSelect[j].value = 0
          if (j != allSelectArray.indexOf(curSelect)) {
              allSelect[j].disabled = true
          }

      }
  }
  curSelect.oldValue = curSelect.value
}

let createSortArr = (data) => {
  let sortArr = [];
  let sortSelects = data.getElementsByTagName('select');
  for (let i = 0; i < sortSelects.length; i++) {
      let keySort = sortSelects[i].value;
      if (keySort == 0) {
          break;
      }
      let desc = document.getElementById(sortSelects[i].id + 'Desc').checked;
      sortArr.push({ column: keySort - 1, order: desc });
  }
  return sortArr;
};


let sortTable = (idTable, data) => {
    let sortArr = createSortArr(data);
    if (sortArr.length === 0) {
        return false;
    }
    let table = document.getElementById(idTable);
    let rowData = Array.from(table.rows);
    rowData.shift();
    rowData.sort((first, second) => {
        for (let i = 0; i < sortArr.length; i++) {
            let key = sortArr[i].column;
            let order = sortArr[i].order;
            let firstValue = parseFloat(first.cells[key].innerHTML);
            let secondValue = parseFloat(second.cells[key].innerHTML);
            if (isNaN(firstValue) || isNaN(secondValue)) {
                firstValue = first.cells[key].innerHTML;
                secondValue = second.cells[key].innerHTML;
            }
            if (order) {
                if (firstValue < secondValue) {
                    return 1;
                } else if (firstValue > secondValue) {
                    return -1;
                }
            } else {
                if (firstValue > secondValue) {
                    return 1;
                } else if (firstValue < secondValue) {
                    return -1;
                }
            }
        }
        return 0;
    });
    table.innerHTML = table.rows[0].innerHTML;
    rowData.forEach(item => {
        table.append(item);
    });
    currentTable = rowData.map(row => {
        let obj = {};
        for (let i = 0; i < row.cells.length; i++) {
            let cell = row.cells[i];
            let header = table.rows[0].cells[i].innerHTML;
            obj[header] = cell.innerHTML;
        }
        return obj;
    });
}

function resetSort(idTable) {
    let formData = document.getElementById('filter');
    filterTable(cars, idTable, formData); 
    for (let key in selectedOptions) {
        selectedOptions[key] = false;
    }
    let allSelect = document.getElementById('sort').getElementsByTagName('select');
    for (let j = 0; j < allSelect.length; j++) {
        if (j != 0) {
            allSelect[j].disabled = true;
        }
        allSelect[j].value = 0;
    }
    resetTable()
}

function createArrGraph(data, key) {
    const groupObj = d3.group(data, d => d[key]);
    let arrGraph = [];
    for (let entry of groupObj) {
        let values = entry[1].map(d => parseFloat(d['Мощность двигателя']));
        let minMax = d3.extent(values);
        arrGraph.push({ labelX: entry[0], values: minMax });
    }
    return arrGraph;
}

const createAxis = (data) => {
    let firstRange = d3.extent(data.map((d) => Number(d.values[0])));
    let secondRange = d3.extent(data.map((d) => Number(d.values[1])));
    let min = Math.min(firstRange[0], secondRange[0], 0); // Ensure minimum value is not less than 0
    let max = Math.max(firstRange[1], secondRange[1]);

    let scaleX = d3.scaleBand()
        .domain(data.map((d) => d.labelX))
        .range([0, width - 2 * marginX]);

    let scaleY = d3.scaleLinear()
        .domain([min, max * 1.1]) // Set the lower bound to 0
        .range([height - 2 * marginY, 0]);

    let axisX = d3.axisBottom(scaleX); 
    let axisY = d3.axisLeft(scaleY); 

    svg.append("g")
        .attr("transform", `translate(${marginX}, ${height - marginY})`)
        .call(axisX)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-45)");

    svg.append("g")
        .attr("transform", `translate(${marginX}, ${marginY})`)
        .call(axisY);

    return [scaleX, scaleY];
};

function createBarChart(arrGraph, scaleX, scaleY, index, color) {
    const barWidth = scaleX.bandwidth() / 3; // bar width

    svg.selectAll(".bar" + index)
        .data(arrGraph)
        .enter()
        .append("rect")
        .attr("class", "bar" + index)
        .attr("x", (d) => scaleX(d.labelX) + (index * barWidth))
        .attr("y", (d) => scaleY(d.values[index]))
        .attr("width", barWidth)
        .attr("height", (d) => height - 2 * marginY - scaleY(d.values[index]))
        .attr("transform", `translate(${marginX}, ${marginY})`)
        .style("fill", color);
}

function createPoints(arrGraph, scaleX, scaleY, index, color) {
    const r = 4;
    let ident = index == 0 ? -r / 2 : r / 2;

    svg.selectAll(".dot" + index)
        .data(arrGraph)
        .enter()
        .append("circle")
        .attr("class", "dot" + index)
        .attr("r", r)
        .attr("cx", (d) => scaleX(d.labelX) + scaleX.bandwidth() / 2)
        .attr("cy", (d) => scaleY(d.values[index]) + ident)
        .attr("transform", `translate(${marginX}, ${marginY})`)
        .style("fill", color);
}

function drawGraph(data) {
    const keyX = data.ox.value;
    const isMin = data.oy[1].checked;
    const isMax = data.oy[0].checked;
    const arrGraph = createArrGraph(currentTable, keyX);

    svg.selectAll('*').remove();

    const [scX, scY] = createAxis(arrGraph);

    if (isMin) {
        createPoints(arrGraph, scX, scY, 0, "blue");
    }
    if (isMax) {
        createPoints(arrGraph, scX, scY, 1, "red");
    }
}

function drawBarGraph(data) {
    const keyX = data.ox.value;
    const isMin = data.oy[1].checked;
    const isMax = data.oy[0].checked;
    const arrGraph = createArrGraph(currentTable, keyX);

    svg.selectAll('*').remove();

    const [scX, scY] = createAxis(arrGraph);

    if (isMin) {
        createBarChart(arrGraph, scX, scY, 0, "blue");
    }
    if (isMax) {
        createBarChart(arrGraph, scX, scY, 1, "red");
    }
}


document.addEventListener("DOMContentLoaded", function () {
    createTable(cars, 'list');
    let sortForm = document.getElementById('sort');
    setSortSelects(cars[0], sortForm);

    let findButton = document.getElementById('find');
    findButton.addEventListener('click', function () {
        let dataForm = document.getElementById('filter');
        filterTable(cars, 'list', dataForm);
    });

    let clearButton = document.getElementById('clearFilters');
    clearButton.addEventListener('click', function () {
        let formData = document.getElementById('filter');
        clearFilter('list', formData);
    });

    document.getElementById('fieldsFirst').onchange = () => {
        changeNextSelect('fieldsSecond', document.getElementById('fieldsFirst'));
        if (document.getElementById('fieldsFirst').value == 0) {
            resetSort('list');
            document.getElementById('fieldsFirstDesc').checked = false;
            document.getElementById('fieldsSecondDesc').checked = false;
            document.getElementById('fieldsThirdDesc').checked = false;
        }
    };

    document.getElementById('fieldsSecond').onchange = () => {
        changeNextSelect('fieldsThird', document.getElementById('fieldsSecond'));
        if (document.getElementById('fieldsSecond').value == 0) {
            sortTable('list', document.getElementById('sort'));
            document.getElementById('fieldsSecondDesc').checked = false;
            document.getElementById('fieldsThirdDesc').checked = false;
        }
    };

    document.getElementById('fieldsThird').onchange = () => {
        if (document.getElementById('fieldsThird').value == 0) {
            document.getElementById('fieldsThirdDesc').checked = false;
        }
    };

    function resetSort(idTable) {
        let formData = document.getElementById('filter');
        filterTable(cars, idTable, formData);
        for (let key in selectedOptions) {
            selectedOptions[key] = false;
        }
        let allSelect = document.getElementById('sort').getElementsByTagName('select');
        for (let j = 0; j < allSelect.length; j++) {
            if (j != 0) {
                allSelect[j].disabled = true;
            }
            allSelect[j].value = 0;
        }
    }

    function resetGraphSettings() {
        document.querySelector('input[name="ox"][value="Марка"]').checked = true;
        document.querySelectorAll('input[name="oy"]').forEach(input => input.checked = false);
    }

    let resetGraphButton = document.getElementById('resetGraphButton');
    resetGraphButton.addEventListener('click', function() {
        resetGraph();
        resetGraphSettings();
    });

    function resetGraph() {
        svg.selectAll('*').remove();
    }

    let sortButton = document.getElementById('sortbutton');
    sortButton.addEventListener('click', function () {
        let formData = document.getElementById('sort');
        sortTable('list', formData);
    });

    let resetButton = document.getElementById('resetsort');
    resetButton.addEventListener('click', function () {
        resetSort('list');
    });

    let barGraphButton = document.getElementById('barGraphButton');
    barGraphButton.addEventListener('click', function() {
        let formData = document.getElementById('graphForm');
        drawBarGraph(formData);
    });
});