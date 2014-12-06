/*function ebat (){
  var S = 0;
  for (var i = 0; i < 10; i++) {
    S += C(i, 10)*(i/100);
  };
  console.log(S)
}

function C(n, m){
  return fact(n)/(fact(m)*fact(n-m));
}*/

function fact(x_)
{
  var fact=1;
  for(i=1; i<=x_; i++)
    {
      fact=fact*i;
    }
    return fact;
}

function summa(V_, A_)
{
  var summ = 0;
  for(k=0; k<=V_; k++)
  {
    var x=V_-k;
    summ = summ + (fact(V_)/(fact(k)*(fact(x)))*(Math.pow(A_/(1-A_), k)));
  }
  return summ;
}


function veroy(A_, N_, V_, i_)
{
  var ver=0;
  var y=N_-i_;

  ver = (fact(N_)/(fact(i_)*(fact(y)))*(Math.pow(A_/(1-A_),i_)))/summa(V_, A_);  
  
  return ver;
}

function chart(arr1, arr2, arr3) {
    $('#chart').highcharts({
        title: {
            text: 'P(i)',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: []
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'P(i)',
            data: arr1
        }, 
        {
            name: 'P(i)(V/2)',
            data: arr2
        }, 
        {
            name: 'P(i)(N*2)',
            data: arr3
        }]
    });
};

function output(V_, arr1_, arr2_, arr3_) {
  var myTable = "<table>";
  var myTable1 = 0;
  var myTable2 = 0;
  myTable += "<thead><tr><th>i</th><th>P(i)</th></tr></thead>";
  myTable += "<tbody>";
  myTable1 = myTable2 = myTable;

  colA = '"#7cb5ec"';
  colB = '"#b7d2ea"';

  for (i = 0; i < V_; i++) {
    if (i % 2 == 0) { 
      myTable += '<tr><td bgcolor=' + colA + ')>' + i + '</td><td bgcolor=' + colA + '>' + arr1_[i] + '</td></tr>' 
      myTable1 += '<tr><td bgcolor=' + colB + ')>' + i + '</td><td bgcolor=' + colB + '>' + arr2_[i] + '</td></tr>'
      myTable2 += '<tr><td bgcolor=' + colA + ')>' + i + '</td><td bgcolor=' + colA + '>' + arr3_[i] + '</td></tr>'}
    else{
      myTable += '<tr><td bgcolor=' + colB + ')>' + i + '</td><td bgcolor=' + colB + '>' + arr1_[i] + '</td></tr>' 
      myTable1 += '<tr><td bgcolor=' + colA + ')>' + i + '</td><td bgcolor=' + colA + '>' + arr2_[i] + '</td></tr>'
      myTable2 += '<tr><td bgcolor=' + colB + ')>' + i + '</td><td bgcolor=' + colB + '>' + arr2_[i] + '</td></tr>'}   
  }

  myTable += "</tbody></table>";
  myTable1 += "</tbody></table>";
  myTable2 += "</tbody></table>";

  $("#table").html(myTable);
  $("#table1").html(myTable1);
  $("#table2").html(myTable2);
} 




function start_Click()
{
  var A = $("#val_A").val()*1;
  var N = $("#val_N").val()*1;
  var V = $("#val_V").val()*1;

  console.log(A, N, V);

  var arr1 = [V];
  var arr2 = [V];
  var arr3 = [V];

  V1 = V/2;
  N1 = N*2;



  for(j=0; j<V; j++)
  {
    arr1[j] = veroy(A, N, V, j);
    arr1[j] = arr1[j].toFixed(20)*1;

    arr2[j] = veroy(A, N, V1, j);
    arr2[j] = arr2[j].toFixed(20)*1;

    arr3[j] = veroy(A, N1, V, j);
    arr3[j] = arr3[j].toFixed(20)*1;
  }

  $("#table_Btn").css("display", "block");
  jQuery.scrollTo(800, 700);

  chart(arr1, arr2, arr3);
  output(V, arr1, arr2, arr3);
}

function table_Click()
{
  $("#return_Btn").css("display", "block");
  $("#table_Box").css("display", "block");

  jQuery.scrollTo(1950, 700);
}

function return_Click()
{
  jQuery.scrollTo(0, 1000);
}

function info_Click()
{
  $("#info_Panel").toggle('slow');
  $("#main").toggle('slow');
  $(".info_Text").toggle('slow');
}

function page_LD()
{
  jQuery.scrollTo(0, 1);
}