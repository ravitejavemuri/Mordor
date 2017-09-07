function addgraph() { //additive graph//************************//************************//************************

    $.getJSON("sample.json", function(json) {
        input = JSON.stringify(json);
    });

    obj = JSON.parse(input);

    i = 0;
    labels = [];
    val = [];

    for (i = 0; i <= 5; i++)
        labels[i] = obj.data.graph.datapoints[i].Year;

    for (i = 0; i <= 5; i++)
        val[i] = obj.data.graph.datapoints[i].Revenue;




    //get the pie chart canvas

    var ctx1 = $("#pie-chartcanvas-1");
    //var ctx2 = $("#pie-chartcanvas-2");

    //pie chart data
    var data1 = {
        labels: [labels[0], labels[1], labels[2], labels[3], labels[4], labels[5]],
        datasets: [{
            label: "TeamA Score",
            data: [val[0], val[1], val[2], val[3], val[4], val[5]],
            backgroundColor: [
                "#DEB887",
                "#A9A9A9",
                "#DC143C",
                "#F4A460",
                "#2E8B57",
                "#4171f4"
            ],
            borderColor: [
                "#CDA776",
                "#989898",
                "#CB252B",
                "#E39371",
                "#1D7A46",
                "#4286f4"
            ],
            borderWidth: [1, 1, 1, 1, 1, 1]
        }]
    };
    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: obj.data.graph.name,
            fontSize: 15,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: "pie",
        data: data1,
        options: options
    });



}

//************************//************************//************************
function rumgraph() { //ruminant graph

    $.getJSON("sample.json", function(json) {
        input = JSON.stringify(json);
    });

    obj = JSON.parse(input);

    i = 0;
    labels = [];
    val = [];

    for (i = 0; i <= 5; i++)
        labels[i] = val1.Ruminant.data.graph.datapoints[i].Year;

    for (i = 0; i <= 5; i++)
        val[i] = val1.Ruminant.data.graph.datapoints[i].Revenue;




    //get the pie chart canvas

    var ctx1 = $("#pie-chartcanvas-1");
    //var ctx2 = $("#pie-chartcanvas-2");

    //pie chart data
    var data1 = {
        labels: [labels[0], labels[1], labels[2], labels[3], labels[4], labels[5]],
        datasets: [{
            label: "TeamA Score",
            data: [val[0], val[1], val[2], val[3], val[4], val[5]],
            backgroundColor: [
                "#DEB887",
                "#A9A9A9",
                "#DC143C",
                "#F4A460",
                "#2E8B57",
                "#4171f4"
            ],
            borderColor: [
                "#CDA776",
                "#989898",
                "#CB252B",
                "#E39371",
                "#1D7A46",
                "#4286f4"
            ],
            borderWidth: [1, 1, 1, 1, 1, 1]
        }]
    };
    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: val1.Ruminant.data.graph.name,
            fontSize: 15,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: "pie",
        data: data1,
        options: options
    });



}

//************************ swine graph//************************//************************
function swingraph() { //

    $.getJSON("sample.json", function(json) {
        input = JSON.stringify(json);
    });

    obj = JSON.parse(input);

    i = 0;
    labels = [];
    val = [];

    for (i = 0; i <= 5; i++)
        labels[i] = val1.Swine.data.graph.datapoints[i].Year;

    for (i = 0; i <= 5; i++)
        val[i] = val1.Swine.data.graph.datapoints[i].Revenue;




    //get the pie chart canvas

    var ctx1 = $("#pie-chartcanvas-1");
    //var ctx2 = $("#pie-chartcanvas-2");

    //pie chart data
    var data1 = {
        labels: [labels[0], labels[1], labels[2], labels[3], labels[4], labels[5]],
        datasets: [{
            label: "TeamA Score",
            data: [val[0], val[1], val[2], val[3], val[4], val[5]],
            backgroundColor: [
                "#DEB887",
                "#A9A9A9",
                "#DC143C",
                "#F4A460",
                "#2E8B57",
                "#4171f4"
            ],
            borderColor: [
                "#CDA776",
                "#989898",
                "#CB252B",
                "#E39371",
                "#1D7A46",
                "#4286f4"
            ],
            borderWidth: [1, 1, 1, 1, 1, 1]
        }]
    };
    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: val1.Swine.data.graph.name,
            fontSize: 15,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: "pie",
        data: data1,
        options: options
    });



}

//**********************************poultry graph//************************//************************
function poulgraph() {

    $.getJSON("sample.json", function(json) {
        input = JSON.stringify(json);
    });

    obj = JSON.parse(input);

    i = 0;
    labels = [];
    val = [];

    for (i = 0; i <= 5; i++)
        labels[i] = val1.poultry.data.graph.datapoints[i].Year;

    for (i = 0; i <= 5; i++)
        val[i] = val1.poultry.data.graph.datapoints[i].Revenue;




    //get the pie chart canvas

    var ctx1 = $("#pie-chartcanvas-1");
    //var ctx2 = $("#pie-chartcanvas-2");

    //pie chart data
    var data1 = {
        labels: [labels[0], labels[1], labels[2], labels[3], labels[4], labels[5]],
        datasets: [{
            label: "TeamA Score",
            data: [val[0], val[1], val[2], val[3], val[4], val[5]],
            backgroundColor: [
                "#DEB887",
                "#A9A9A9",
                "#DC143C",
                "#F4A460",
                "#2E8B57",
                "#4171f4"
            ],
            borderColor: [
                "#CDA776",
                "#989898",
                "#CB252B",
                "#E39371",
                "#1D7A46",
                "#4286f4"
            ],
            borderWidth: [1, 1, 1, 1, 1, 1]
        }]
    };
    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: val1.poultry.data.graph.name,
            fontSize: 15,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: "pie",
        data: data1,
        options: options
    });



}

function fvitgraph() {

    $.getJSON("sample.json", function(json) {
        input = JSON.stringify(json);
    });

    obj = JSON.parse(input);

    i = 0;
    labels = [];
    val = [];

    for (i = 0; i <= 5; i++)
        labels[i] = fvitL[i];

    for (i = 0; i <= 5; i++)
        val[i] = fvitV[i];




    //get the pie chart canvas

    var ctx1 = $("#pie-chartcanvas-1");
    //var ctx2 = $("#pie-chartcanvas-2");

    //pie chart data
    var data1 = {
        labels: [labels[0], labels[1], labels[2], labels[3], labels[4], labels[5]],
        datasets: [{
            label: "TeamA Score",
            data: [val[0], val[1], val[2], val[3], val[4], val[5]],
            backgroundColor: [
                "#DEB887",
                "#A9A9A9",
                "#DC143C",
                "#F4A460",
                "#2E8B57",
                "#4171f4"
            ],
            borderColor: [
                "#CDA776",
                "#989898",
                "#CB252B",
                "#E39371",
                "#1D7A46",
                "#4286f4"
            ],
            borderWidth: [1, 1, 1, 1, 1, 1]
        }]
    };
    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: fvitT,
            fontSize: 15,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: "pie",
        data: data1,
        options: options
    });



}

function vitAgraph() {

    $.getJSON("sample.json", function(json) {
        input = JSON.stringify(json);
    });

    obj = JSON.parse(input);

    i = 0;
    labels = [];
    val = [];

    for (i = 0; i <= 5; i++)
        labels[i] = vitAL[i];

    for (i = 0; i <= 5; i++)
        val[i] = vitAV[i];




    //get the pie chart canvas

    var ctx1 = $("#pie-chartcanvas-1");
    //var ctx2 = $("#pie-chartcanvas-2");

    //pie chart data
    var data1 = {
        labels: [labels[0], labels[1], labels[2], labels[3], labels[4], labels[5]],
        datasets: [{
            label: "TeamA Score",
            data: [val[0], val[1], val[2], val[3], val[4], val[5]],
            backgroundColor: [
                "#DEB887",
                "#A9A9A9",
                "#DC143C",
                "#F4A460",
                "#2E8B57",
                "#4171f4"
            ],
            borderColor: [
                "#CDA776",
                "#989898",
                "#CB252B",
                "#E39371",
                "#1D7A46",
                "#4286f4"
            ],
            borderWidth: [1, 1, 1, 1, 1, 1]
        }]
    };
    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: vitAT,
            fontSize: 15,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: "pie",
        data: data1,
        options: options
    });



}

function vitCgraph() {

    $.getJSON("sample.json", function(json) {
        input = JSON.stringify(json);
    });

    obj = JSON.parse(input);

    i = 0;
    labels = [];
    val = [];

    for (i = 0; i <= 5; i++)
        labels[i] = vitCL[i];

    for (i = 0; i <= 5; i++)
        val[i] = vitCV[i];




    //get the pie chart canvas

    var ctx1 = $("#pie-chartcanvas-1");
    //var ctx2 = $("#pie-chartcanvas-2");

    //pie chart data
    var data1 = {
        labels: [labels[0], labels[1], labels[2], labels[3], labels[4], labels[5]],
        datasets: [{
            label: "TeamA Score",
            data: [val[0], val[1], val[2], val[3], val[4], val[5]],
            backgroundColor: [
                "#DEB887",
                "#A9A9A9",
                "#DC143C",
                "#F4A460",
                "#2E8B57",
                "#4171f4"
            ],
            borderColor: [
                "#CDA776",
                "#989898",
                "#CB252B",
                "#E39371",
                "#1D7A46",
                "#4286f4"
            ],
            borderWidth: [1, 1, 1, 1, 1, 1]
        }]
    };
    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: vitCT,
            fontSize: 15,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: "pie",
        data: data1,
        options: options
    });



}

function vitKgraph() {

    $.getJSON("sample.json", function(json) {
        input = JSON.stringify(json);
    });

    obj = JSON.parse(input);

    i = 0;
    labels = [];
    val = [];

    for (i = 0; i <= 5; i++)
        labels[i] = vitKL[i];

    for (i = 0; i <= 5; i++)
        val[i] = vitKV[i];




    //get the pie chart canvas

    var ctx1 = $("#pie-chartcanvas-1");
    //var ctx2 = $("#pie-chartcanvas-2");

    //pie chart data
    var data1 = {
        labels: [labels[0], labels[1], labels[2], labels[3], labels[4], labels[5]],
        datasets: [{
            label: "TeamA Score",
            data: [val[0], val[1], val[2], val[3], val[4], val[5]],
            backgroundColor: [
                "#DEB887",
                "#A9A9A9",
                "#DC143C",
                "#F4A460",
                "#2E8B57",
                "#4171f4"
            ],
            borderColor: [
                "#CDA776",
                "#989898",
                "#CB252B",
                "#E39371",
                "#1D7A46",
                "#4286f4"
            ],
            borderWidth: [1, 1, 1, 1, 1, 1]
        }]
    };
    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: vitKT,
            fontSize: 15,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: "pie",
        data: data1,
        options: options
    });

}

function Mingraph() {

    $.getJSON("sample.json", function(json) {
        input = JSON.stringify(json);
    });

    obj = JSON.parse(input);

    i = 0;
    labels = [];
    val = [];

    for (i = 0; i <= 5; i++)
        labels[i] = FminL[i];

    for (i = 0; i <= 5; i++)
        val[i] = FminV[i];




    //get the pie chart canvas

    var ctx1 = $("#pie-chartcanvas-1");
    //var ctx2 = $("#pie-chartcanvas-2");

    //pie chart data
    var data1 = {
        labels: [labels[0], labels[1], labels[2], labels[3], labels[4], labels[5]],
        datasets: [{
            label: "TeamA Score",
            data: [val[0], val[1], val[2], val[3], val[4], val[5]],
            backgroundColor: [
                "#DEB887",
                "#A9A9A9",
                "#DC143C",
                "#F4A460",
                "#2E8B57",
                "#4171f4"
            ],
            borderColor: [
                "#CDA776",
                "#989898",
                "#CB252B",
                "#E39371",
                "#1D7A46",
                "#4286f4"
            ],
            borderWidth: [1, 1, 1, 1, 1, 1]
        }]
    };
    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: FminT,
            fontSize: 15,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: "pie",
        data: data1,
        options: options
    });



}

function Aminograph() {

    $.getJSON("sample.json", function(json) {
        input = JSON.stringify(json);
    });

    obj = JSON.parse(input);

    i = 0;
    labels = [];
    val = [];

    for (i = 0; i <= 5; i++)
        labels[i] = FamL[i];

    for (i = 0; i <= 5; i++)
        val[i] = FamV[i];




    //get the pie chart canvas

    var ctx1 = $("#pie-chartcanvas-1");
    //var ctx2 = $("#pie-chartcanvas-2");

    //pie chart data
    var data1 = {
        labels: [labels[0], labels[1], labels[2], labels[3], labels[4], labels[5]],
        datasets: [{
            label: "TeamA Score",
            data: [val[0], val[1], val[2], val[3], val[4], val[5]],
            backgroundColor: [
                "#DEB887",
                "#A9A9A9",
                "#DC143C",
                "#F4A460",
                "#2E8B57",
                "#4171f4"
            ],
            borderColor: [
                "#CDA776",
                "#989898",
                "#CB252B",
                "#E39371",
                "#1D7A46",
                "#4286f4"
            ],
            borderWidth: [1, 1, 1, 1, 1, 1]
        }]
    };
    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: FamT,
            fontSize: 15,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: "pie",
        data: data1,
        options: options
    });



}