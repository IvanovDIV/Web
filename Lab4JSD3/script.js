const svgWidth = 500;
const svgHeight = 500;

const svg = d3.select("#svg-container")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

const path = svg.append("path")
    .attr("d", "M 400 120 Q 250 600, 120 120")
    .attr("fill", "none")
    .attr("stroke", "none");

const createSmiley = () => {
    const group = svg.append("g")
        .attr("class", "smiley");

    //голова
    group.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 20)
        .attr("fill", "purple")
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    //левое ухо
    group.append("polygon")
        .attr("points", "-20,-20 -15,-15 -20,-10 -25,-15")
        .attr("fill", "purple")
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    // правое ухо
    group.append("polygon")
        .attr("points", "20,-20 25,-15 20,-10 15,-15")
        .attr("fill", "purple")
        .attr("stroke", "black")
        .attr("stroke-width", 2);

    //левый глаз
    group.append("circle")
        .attr("cx", -7)
        .attr("cy", -7)
        .attr("r", 3)
        .attr("fill", "black");

    // правый глаз
    group.append("rect")
        .attr("x", 5)
        .attr("y", -10)
        .attr("width", 6)
        .attr("height", 6)
        .attr("fill", "black");

    //рот
    group.append("path")
        .attr("d", "M -10 5 Q 0 15, 10 5")
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .attr("fill", "none");

    //нос
    group.append("polygon")
        .attr("points", "-3,3 3,3 0,-3")
        .attr("fill", "black");

    return group;
};

const clearSVG = () => {
    svg.selectAll(".smiley").remove();
};

const animate = (duration, scalePercent, rotate) => {
    const totalLength = path.node().getTotalLength();
    const scaleFactor = scalePercent / 100;

    const movingObject = createSmiley();

    movingObject.transition()
        .duration(duration * 1000)
        .attrTween("transform", function () {
            return function (t) {
                const point = path.node().getPointAtLength(t * totalLength);
                let transform = `translate(${point.x}, ${point.y})`;
                transform += ` scale(${1 + t * ( scaleFactor)})`;
                if (rotate) transform += ` rotate(${t * 720})`;
                return transform;
            };
        });
};

document.getElementById("start-animation").addEventListener("click", () => {
    const duration = parseFloat(document.getElementById("duration").value);
    const scalePercent = parseFloat(document.getElementById("scale").value);
    const rotate = document.getElementById("rotate").checked;

    clearSVG();
    animate(duration, scalePercent, rotate);
});

document.getElementById("clear-svg").addEventListener("click", clearSVG);

const initialSetup = () => {
    clearSVG(); 
    const initialObject = createSmiley();
    const startPoint = path.node().getPointAtLength(0);
    initialObject.attr("transform", `translate(${startPoint.x}, ${startPoint.y})`);
};

initialSetup();
