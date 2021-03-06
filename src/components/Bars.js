import React from 'react';
import ChartistGraph from 'react-chartist';

function Bar() {



    var resp ='{"labels":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],"series":[10,20,10,20,10,20,30,10,40,50,60,30,10,15,30,20,60,70,80,20,57,5,17,10,2,40,20,10]}';

    var JSONObject = JSON.parse(resp);
    console.log(JSONObject.labels);
    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
    console.log(JSONObject.series);
    //[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57, 5, 17, 0, 2, 0, 0, 0]
    
    var data = {"labels":JSONObject.labels, "series":[JSONObject.series]};
    
    // var data = {"labels":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],"series":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,0,2,0,0]]};
    
    
    // new Chartist.Line('#chart1', data);
    
    var type = 'Bar'

    return (
      <div>
        <ChartistGraph data={data} 
        // options={options} 
        type={type} />
      </div>
    )
  
}

export default Bar;