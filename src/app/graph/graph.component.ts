import { OnInit, Component, Input } from "@angular/core";
import * as d3 from "d3";

interface Data {}

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.scss"]
})
export class GraphComponent implements OnInit {
  @Input("values") values: Array<string>;
  @Input("meta") metaData: object;
  updatedValues = [];
  items = [];
  width = 350;
  height = 350;
  margin = 100;
  radius;
  svg;
  color;
  pie;
  data_ready;

  constructor() {}

  ngOnInit() {
    this.draw(this.metaData);
    this.items = this.computeData(this.metaData);
  }

  computeData(metaData) {
    let total = metaData.subtitle;
    let updatedArray = [];
    this.updatedValues.map(object => {
      let calcAmount = (object.value * total) / 10;
      let newObject = { ...object, amount: calcAmount.toLocaleString() };
      updatedArray.push(newObject);
    });
    return updatedArray;
  }

  colorPallete() {
    const colorPallete = [
      d3.schemeDark2,
      d3.schemeSet2,
      d3.schemeSet1,
      d3.schemeSet3,
      d3.schemePaired,
      d3.schemePastel1,
      d3.schemePastel2,
      d3.schemeAccent
    ];
    return colorPallete[Math.floor(Math.random() * colorPallete.length)];
  }

  draw(metadata) {
      this.radius = Math.min(this.width, this.height) / 2 - this.margin;
      this.svg = d3
        .select("#chart")
        .append("svg")
        .attr("width", this.width)
        .attr("height", this.height)
        .append("g")
        .attr(
          "transform",
          "translate(" + this.width / 2 + "," + this.height / 2 + ")"
        );
      // Add dynamic color from color pallete
      this.color = d3
        .scaleOrdinal()
        .domain(Object.keys(this.values))
        .range(this.colorPallete());

      // Compute the position of each group on the pie:
      this.pie = d3.pie<any>().value(d => {
        return d.value;
      });
      this.data_ready = this.pie(d3.entries(this.values));

      // Labels for inner donut
      this.svg
        .append("text")
        .attr("dy", "-0.2em")
        .style("text-anchor", "middle")
        .style("font-size", "28px")
        .style("text-transform", "uppercase")
        .attr("class", "inner-circle")
        .attr("fill", "#36454f")
        .text(function(d) {
          return metadata.title;
        });
      this.svg
        .append("text")
        .attr("dy", "1.0em")
        .style("text-anchor", "middle")
        .style("font-size", "25px")
        .attr("class", "inner-circle")
        .attr("fill", "lightGray")
        .text(d => {
          return `$ ${metadata.subtitle.toLocaleString()}`;
        });
      this.svg
        .selectAll("nodes")
        .data(this.data_ready)
        .enter()
        .append("path")
        .attr(
          "d",
          d3
            .arc()
            .innerRadius(100)
            .outerRadius(this.radius)
        )
        .attr("fill", d => {
          let newObject = {
            ...d.data,
            color: this.color(d.data.key)
          };
          this.updatedValues.push(newObject);
          return this.color(d.data.key);
        })
        .attr("stroke", "gray")
        .style("stroke-width", "1px")
        .style("opacity", 0.7);
    }
  }
