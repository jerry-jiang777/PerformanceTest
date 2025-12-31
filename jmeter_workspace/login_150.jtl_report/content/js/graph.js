/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 136.0, "minX": 0.0, "maxY": 1372.0, "series": [{"data": [[0.0, 136.0], [0.1, 136.0], [0.2, 136.0], [0.3, 136.0], [0.4, 136.0], [0.5, 136.0], [0.6, 136.0], [0.7, 139.0], [0.8, 139.0], [0.9, 139.0], [1.0, 139.0], [1.1, 139.0], [1.2, 139.0], [1.3, 139.0], [1.4, 140.0], [1.5, 140.0], [1.6, 140.0], [1.7, 140.0], [1.8, 140.0], [1.9, 140.0], [2.0, 141.0], [2.1, 141.0], [2.2, 141.0], [2.3, 141.0], [2.4, 141.0], [2.5, 141.0], [2.6, 141.0], [2.7, 143.0], [2.8, 143.0], [2.9, 143.0], [3.0, 143.0], [3.1, 143.0], [3.2, 143.0], [3.3, 143.0], [3.4, 144.0], [3.5, 144.0], [3.6, 144.0], [3.7, 144.0], [3.8, 144.0], [3.9, 144.0], [4.0, 146.0], [4.1, 146.0], [4.2, 146.0], [4.3, 146.0], [4.4, 146.0], [4.5, 146.0], [4.6, 146.0], [4.7, 146.0], [4.8, 146.0], [4.9, 146.0], [5.0, 146.0], [5.1, 146.0], [5.2, 146.0], [5.3, 146.0], [5.4, 147.0], [5.5, 147.0], [5.6, 147.0], [5.7, 147.0], [5.8, 147.0], [5.9, 147.0], [6.0, 148.0], [6.1, 148.0], [6.2, 148.0], [6.3, 148.0], [6.4, 148.0], [6.5, 148.0], [6.6, 148.0], [6.7, 149.0], [6.8, 149.0], [6.9, 149.0], [7.0, 149.0], [7.1, 149.0], [7.2, 149.0], [7.3, 149.0], [7.4, 152.0], [7.5, 152.0], [7.6, 152.0], [7.7, 152.0], [7.8, 152.0], [7.9, 152.0], [8.0, 152.0], [8.1, 152.0], [8.2, 152.0], [8.3, 152.0], [8.4, 152.0], [8.5, 152.0], [8.6, 152.0], [8.7, 153.0], [8.8, 153.0], [8.9, 153.0], [9.0, 153.0], [9.1, 153.0], [9.2, 153.0], [9.3, 153.0], [9.4, 153.0], [9.5, 153.0], [9.6, 153.0], [9.7, 153.0], [9.8, 153.0], [9.9, 153.0], [10.0, 153.0], [10.1, 155.0], [10.2, 155.0], [10.3, 155.0], [10.4, 155.0], [10.5, 155.0], [10.6, 155.0], [10.7, 155.0], [10.8, 155.0], [10.9, 155.0], [11.0, 155.0], [11.1, 155.0], [11.2, 155.0], [11.3, 155.0], [11.4, 157.0], [11.5, 157.0], [11.6, 157.0], [11.7, 157.0], [11.8, 157.0], [11.9, 157.0], [12.0, 157.0], [12.1, 159.0], [12.2, 159.0], [12.3, 159.0], [12.4, 159.0], [12.5, 159.0], [12.6, 159.0], [12.7, 159.0], [12.8, 159.0], [12.9, 159.0], [13.0, 159.0], [13.1, 159.0], [13.2, 159.0], [13.3, 159.0], [13.4, 160.0], [13.5, 160.0], [13.6, 160.0], [13.7, 160.0], [13.8, 160.0], [13.9, 160.0], [14.0, 160.0], [14.1, 160.0], [14.2, 160.0], [14.3, 160.0], [14.4, 160.0], [14.5, 160.0], [14.6, 160.0], [14.7, 161.0], [14.8, 161.0], [14.9, 161.0], [15.0, 161.0], [15.1, 161.0], [15.2, 161.0], [15.3, 161.0], [15.4, 163.0], [15.5, 163.0], [15.6, 163.0], [15.7, 163.0], [15.8, 163.0], [15.9, 163.0], [16.0, 163.0], [16.1, 163.0], [16.2, 163.0], [16.3, 163.0], [16.4, 163.0], [16.5, 163.0], [16.6, 163.0], [16.7, 163.0], [16.8, 163.0], [16.9, 163.0], [17.0, 163.0], [17.1, 163.0], [17.2, 163.0], [17.3, 163.0], [17.4, 164.0], [17.5, 164.0], [17.6, 164.0], [17.7, 164.0], [17.8, 164.0], [17.9, 164.0], [18.0, 164.0], [18.1, 165.0], [18.2, 165.0], [18.3, 165.0], [18.4, 165.0], [18.5, 165.0], [18.6, 165.0], [18.7, 166.0], [18.8, 166.0], [18.9, 166.0], [19.0, 166.0], [19.1, 166.0], [19.2, 166.0], [19.3, 166.0], [19.4, 169.0], [19.5, 169.0], [19.6, 169.0], [19.7, 169.0], [19.8, 169.0], [19.9, 169.0], [20.0, 169.0], [20.1, 170.0], [20.2, 170.0], [20.3, 170.0], [20.4, 170.0], [20.5, 170.0], [20.6, 170.0], [20.7, 171.0], [20.8, 171.0], [20.9, 171.0], [21.0, 171.0], [21.1, 171.0], [21.2, 171.0], [21.3, 171.0], [21.4, 172.0], [21.5, 172.0], [21.6, 172.0], [21.7, 172.0], [21.8, 172.0], [21.9, 172.0], [22.0, 172.0], [22.1, 173.0], [22.2, 173.0], [22.3, 173.0], [22.4, 173.0], [22.5, 173.0], [22.6, 173.0], [22.7, 174.0], [22.8, 174.0], [22.9, 174.0], [23.0, 174.0], [23.1, 174.0], [23.2, 174.0], [23.3, 174.0], [23.4, 176.0], [23.5, 176.0], [23.6, 176.0], [23.7, 176.0], [23.8, 176.0], [23.9, 176.0], [24.0, 176.0], [24.1, 176.0], [24.2, 176.0], [24.3, 176.0], [24.4, 176.0], [24.5, 176.0], [24.6, 176.0], [24.7, 176.0], [24.8, 176.0], [24.9, 176.0], [25.0, 176.0], [25.1, 176.0], [25.2, 176.0], [25.3, 176.0], [25.4, 179.0], [25.5, 179.0], [25.6, 179.0], [25.7, 179.0], [25.8, 179.0], [25.9, 179.0], [26.0, 179.0], [26.1, 182.0], [26.2, 182.0], [26.3, 182.0], [26.4, 182.0], [26.5, 182.0], [26.6, 182.0], [26.7, 182.0], [26.8, 182.0], [26.9, 182.0], [27.0, 182.0], [27.1, 182.0], [27.2, 182.0], [27.3, 182.0], [27.4, 182.0], [27.5, 182.0], [27.6, 182.0], [27.7, 182.0], [27.8, 182.0], [27.9, 182.0], [28.0, 182.0], [28.1, 182.0], [28.2, 182.0], [28.3, 182.0], [28.4, 182.0], [28.5, 182.0], [28.6, 182.0], [28.7, 182.0], [28.8, 182.0], [28.9, 182.0], [29.0, 182.0], [29.1, 182.0], [29.2, 182.0], [29.3, 182.0], [29.4, 182.0], [29.5, 182.0], [29.6, 182.0], [29.7, 182.0], [29.8, 182.0], [29.9, 182.0], [30.0, 182.0], [30.1, 183.0], [30.2, 183.0], [30.3, 183.0], [30.4, 183.0], [30.5, 183.0], [30.6, 183.0], [30.7, 183.0], [30.8, 183.0], [30.9, 183.0], [31.0, 183.0], [31.1, 183.0], [31.2, 183.0], [31.3, 183.0], [31.4, 187.0], [31.5, 187.0], [31.6, 187.0], [31.7, 187.0], [31.8, 187.0], [31.9, 187.0], [32.0, 187.0], [32.1, 191.0], [32.2, 191.0], [32.3, 191.0], [32.4, 191.0], [32.5, 191.0], [32.6, 191.0], [32.7, 194.0], [32.8, 194.0], [32.9, 194.0], [33.0, 194.0], [33.1, 194.0], [33.2, 194.0], [33.3, 194.0], [33.4, 197.0], [33.5, 197.0], [33.6, 197.0], [33.7, 197.0], [33.8, 197.0], [33.9, 197.0], [34.0, 197.0], [34.1, 208.0], [34.2, 208.0], [34.3, 208.0], [34.4, 208.0], [34.5, 208.0], [34.6, 208.0], [34.7, 208.0], [34.8, 208.0], [34.9, 208.0], [35.0, 208.0], [35.1, 208.0], [35.2, 208.0], [35.3, 208.0], [35.4, 208.0], [35.5, 208.0], [35.6, 208.0], [35.7, 208.0], [35.8, 208.0], [35.9, 208.0], [36.0, 208.0], [36.1, 208.0], [36.2, 208.0], [36.3, 208.0], [36.4, 208.0], [36.5, 208.0], [36.6, 208.0], [36.7, 208.0], [36.8, 208.0], [36.9, 208.0], [37.0, 208.0], [37.1, 208.0], [37.2, 208.0], [37.3, 208.0], [37.4, 208.0], [37.5, 208.0], [37.6, 208.0], [37.7, 208.0], [37.8, 208.0], [37.9, 208.0], [38.0, 208.0], [38.1, 208.0], [38.2, 208.0], [38.3, 208.0], [38.4, 208.0], [38.5, 208.0], [38.6, 208.0], [38.7, 208.0], [38.8, 208.0], [38.9, 208.0], [39.0, 208.0], [39.1, 208.0], [39.2, 208.0], [39.3, 208.0], [39.4, 329.0], [39.5, 329.0], [39.6, 329.0], [39.7, 329.0], [39.8, 329.0], [39.9, 329.0], [40.0, 329.0], [40.1, 334.0], [40.2, 334.0], [40.3, 334.0], [40.4, 334.0], [40.5, 334.0], [40.6, 334.0], [40.7, 354.0], [40.8, 354.0], [40.9, 354.0], [41.0, 354.0], [41.1, 354.0], [41.2, 354.0], [41.3, 354.0], [41.4, 358.0], [41.5, 358.0], [41.6, 358.0], [41.7, 358.0], [41.8, 358.0], [41.9, 358.0], [42.0, 358.0], [42.1, 358.0], [42.2, 358.0], [42.3, 358.0], [42.4, 358.0], [42.5, 358.0], [42.6, 358.0], [42.7, 372.0], [42.8, 372.0], [42.9, 372.0], [43.0, 372.0], [43.1, 372.0], [43.2, 372.0], [43.3, 372.0], [43.4, 379.0], [43.5, 379.0], [43.6, 379.0], [43.7, 379.0], [43.8, 379.0], [43.9, 379.0], [44.0, 398.0], [44.1, 398.0], [44.2, 398.0], [44.3, 398.0], [44.4, 398.0], [44.5, 398.0], [44.6, 398.0], [44.7, 405.0], [44.8, 405.0], [44.9, 405.0], [45.0, 405.0], [45.1, 405.0], [45.2, 405.0], [45.3, 405.0], [45.4, 410.0], [45.5, 410.0], [45.6, 410.0], [45.7, 410.0], [45.8, 410.0], [45.9, 410.0], [46.0, 417.0], [46.1, 417.0], [46.2, 417.0], [46.3, 417.0], [46.4, 417.0], [46.5, 417.0], [46.6, 417.0], [46.7, 420.0], [46.8, 420.0], [46.9, 420.0], [47.0, 420.0], [47.1, 420.0], [47.2, 420.0], [47.3, 420.0], [47.4, 436.0], [47.5, 436.0], [47.6, 436.0], [47.7, 436.0], [47.8, 436.0], [47.9, 436.0], [48.0, 438.0], [48.1, 438.0], [48.2, 438.0], [48.3, 438.0], [48.4, 438.0], [48.5, 438.0], [48.6, 438.0], [48.7, 451.0], [48.8, 451.0], [48.9, 451.0], [49.0, 451.0], [49.1, 451.0], [49.2, 451.0], [49.3, 451.0], [49.4, 452.0], [49.5, 452.0], [49.6, 452.0], [49.7, 452.0], [49.8, 452.0], [49.9, 452.0], [50.0, 456.0], [50.1, 456.0], [50.2, 456.0], [50.3, 456.0], [50.4, 456.0], [50.5, 456.0], [50.6, 456.0], [50.7, 456.0], [50.8, 456.0], [50.9, 456.0], [51.0, 456.0], [51.1, 456.0], [51.2, 456.0], [51.3, 456.0], [51.4, 460.0], [51.5, 460.0], [51.6, 460.0], [51.7, 460.0], [51.8, 460.0], [51.9, 460.0], [52.0, 475.0], [52.1, 475.0], [52.2, 475.0], [52.3, 475.0], [52.4, 475.0], [52.5, 475.0], [52.6, 475.0], [52.7, 477.0], [52.8, 477.0], [52.9, 477.0], [53.0, 477.0], [53.1, 477.0], [53.2, 477.0], [53.3, 477.0], [53.4, 481.0], [53.5, 481.0], [53.6, 481.0], [53.7, 481.0], [53.8, 481.0], [53.9, 481.0], [54.0, 485.0], [54.1, 485.0], [54.2, 485.0], [54.3, 485.0], [54.4, 485.0], [54.5, 485.0], [54.6, 485.0], [54.7, 504.0], [54.8, 504.0], [54.9, 504.0], [55.0, 504.0], [55.1, 504.0], [55.2, 504.0], [55.3, 504.0], [55.4, 512.0], [55.5, 512.0], [55.6, 512.0], [55.7, 512.0], [55.8, 512.0], [55.9, 512.0], [56.0, 528.0], [56.1, 528.0], [56.2, 528.0], [56.3, 528.0], [56.4, 528.0], [56.5, 528.0], [56.6, 528.0], [56.7, 530.0], [56.8, 530.0], [56.9, 530.0], [57.0, 530.0], [57.1, 530.0], [57.2, 530.0], [57.3, 530.0], [57.4, 545.0], [57.5, 545.0], [57.6, 545.0], [57.7, 545.0], [57.8, 545.0], [57.9, 545.0], [58.0, 547.0], [58.1, 547.0], [58.2, 547.0], [58.3, 547.0], [58.4, 547.0], [58.5, 547.0], [58.6, 547.0], [58.7, 550.0], [58.8, 550.0], [58.9, 550.0], [59.0, 550.0], [59.1, 550.0], [59.2, 550.0], [59.3, 550.0], [59.4, 558.0], [59.5, 558.0], [59.6, 558.0], [59.7, 558.0], [59.8, 558.0], [59.9, 558.0], [60.0, 564.0], [60.1, 564.0], [60.2, 564.0], [60.3, 564.0], [60.4, 564.0], [60.5, 564.0], [60.6, 564.0], [60.7, 566.0], [60.8, 566.0], [60.9, 566.0], [61.0, 566.0], [61.1, 566.0], [61.2, 566.0], [61.3, 566.0], [61.4, 580.0], [61.5, 580.0], [61.6, 580.0], [61.7, 580.0], [61.8, 580.0], [61.9, 580.0], [62.0, 590.0], [62.1, 590.0], [62.2, 590.0], [62.3, 590.0], [62.4, 590.0], [62.5, 590.0], [62.6, 590.0], [62.7, 596.0], [62.8, 596.0], [62.9, 596.0], [63.0, 596.0], [63.1, 596.0], [63.2, 596.0], [63.3, 596.0], [63.4, 605.0], [63.5, 605.0], [63.6, 605.0], [63.7, 605.0], [63.8, 605.0], [63.9, 605.0], [64.0, 606.0], [64.1, 606.0], [64.2, 606.0], [64.3, 606.0], [64.4, 606.0], [64.5, 606.0], [64.6, 606.0], [64.7, 615.0], [64.8, 615.0], [64.9, 615.0], [65.0, 615.0], [65.1, 615.0], [65.2, 615.0], [65.3, 615.0], [65.4, 633.0], [65.5, 633.0], [65.6, 633.0], [65.7, 633.0], [65.8, 633.0], [65.9, 633.0], [66.0, 633.0], [66.1, 633.0], [66.2, 633.0], [66.3, 633.0], [66.4, 633.0], [66.5, 633.0], [66.6, 633.0], [66.7, 634.0], [66.8, 634.0], [66.9, 634.0], [67.0, 634.0], [67.1, 634.0], [67.2, 634.0], [67.3, 634.0], [67.4, 641.0], [67.5, 641.0], [67.6, 641.0], [67.7, 641.0], [67.8, 641.0], [67.9, 641.0], [68.0, 642.0], [68.1, 642.0], [68.2, 642.0], [68.3, 642.0], [68.4, 642.0], [68.5, 642.0], [68.6, 642.0], [68.7, 648.0], [68.8, 648.0], [68.9, 648.0], [69.0, 648.0], [69.1, 648.0], [69.2, 648.0], [69.3, 648.0], [69.4, 652.0], [69.5, 652.0], [69.6, 652.0], [69.7, 652.0], [69.8, 652.0], [69.9, 652.0], [70.0, 678.0], [70.1, 678.0], [70.2, 678.0], [70.3, 678.0], [70.4, 678.0], [70.5, 678.0], [70.6, 678.0], [70.7, 681.0], [70.8, 681.0], [70.9, 681.0], [71.0, 681.0], [71.1, 681.0], [71.2, 681.0], [71.3, 681.0], [71.4, 707.0], [71.5, 707.0], [71.6, 707.0], [71.7, 707.0], [71.8, 707.0], [71.9, 707.0], [72.0, 707.0], [72.1, 707.0], [72.2, 707.0], [72.3, 707.0], [72.4, 707.0], [72.5, 707.0], [72.6, 707.0], [72.7, 724.0], [72.8, 724.0], [72.9, 724.0], [73.0, 724.0], [73.1, 724.0], [73.2, 724.0], [73.3, 724.0], [73.4, 731.0], [73.5, 731.0], [73.6, 731.0], [73.7, 731.0], [73.8, 731.0], [73.9, 731.0], [74.0, 733.0], [74.1, 733.0], [74.2, 733.0], [74.3, 733.0], [74.4, 733.0], [74.5, 733.0], [74.6, 733.0], [74.7, 744.0], [74.8, 744.0], [74.9, 744.0], [75.0, 744.0], [75.1, 744.0], [75.2, 744.0], [75.3, 744.0], [75.4, 751.0], [75.5, 751.0], [75.6, 751.0], [75.7, 751.0], [75.8, 751.0], [75.9, 751.0], [76.0, 753.0], [76.1, 753.0], [76.2, 753.0], [76.3, 753.0], [76.4, 753.0], [76.5, 753.0], [76.6, 753.0], [76.7, 763.0], [76.8, 763.0], [76.9, 763.0], [77.0, 763.0], [77.1, 763.0], [77.2, 763.0], [77.3, 763.0], [77.4, 764.0], [77.5, 764.0], [77.6, 764.0], [77.7, 764.0], [77.8, 764.0], [77.9, 764.0], [78.0, 825.0], [78.1, 825.0], [78.2, 825.0], [78.3, 825.0], [78.4, 825.0], [78.5, 825.0], [78.6, 825.0], [78.7, 825.0], [78.8, 825.0], [78.9, 825.0], [79.0, 825.0], [79.1, 825.0], [79.2, 825.0], [79.3, 825.0], [79.4, 843.0], [79.5, 843.0], [79.6, 843.0], [79.7, 843.0], [79.8, 843.0], [79.9, 843.0], [80.0, 877.0], [80.1, 877.0], [80.2, 877.0], [80.3, 877.0], [80.4, 877.0], [80.5, 877.0], [80.6, 877.0], [80.7, 886.0], [80.8, 886.0], [80.9, 886.0], [81.0, 886.0], [81.1, 886.0], [81.2, 886.0], [81.3, 886.0], [81.4, 909.0], [81.5, 909.0], [81.6, 909.0], [81.7, 909.0], [81.8, 909.0], [81.9, 909.0], [82.0, 909.0], [82.1, 1095.0], [82.2, 1095.0], [82.3, 1095.0], [82.4, 1095.0], [82.5, 1095.0], [82.6, 1095.0], [82.7, 1121.0], [82.8, 1121.0], [82.9, 1121.0], [83.0, 1121.0], [83.1, 1121.0], [83.2, 1121.0], [83.3, 1121.0], [83.4, 1138.0], [83.5, 1138.0], [83.6, 1138.0], [83.7, 1138.0], [83.8, 1138.0], [83.9, 1138.0], [84.0, 1138.0], [84.1, 1143.0], [84.2, 1143.0], [84.3, 1143.0], [84.4, 1143.0], [84.5, 1143.0], [84.6, 1143.0], [84.7, 1145.0], [84.8, 1145.0], [84.9, 1145.0], [85.0, 1145.0], [85.1, 1145.0], [85.2, 1145.0], [85.3, 1145.0], [85.4, 1146.0], [85.5, 1146.0], [85.6, 1146.0], [85.7, 1146.0], [85.8, 1146.0], [85.9, 1146.0], [86.0, 1146.0], [86.1, 1148.0], [86.2, 1148.0], [86.3, 1148.0], [86.4, 1148.0], [86.5, 1148.0], [86.6, 1148.0], [86.7, 1148.0], [86.8, 1148.0], [86.9, 1148.0], [87.0, 1148.0], [87.1, 1148.0], [87.2, 1148.0], [87.3, 1148.0], [87.4, 1149.0], [87.5, 1149.0], [87.6, 1149.0], [87.7, 1149.0], [87.8, 1149.0], [87.9, 1149.0], [88.0, 1149.0], [88.1, 1149.0], [88.2, 1149.0], [88.3, 1149.0], [88.4, 1149.0], [88.5, 1149.0], [88.6, 1149.0], [88.7, 1151.0], [88.8, 1151.0], [88.9, 1151.0], [89.0, 1151.0], [89.1, 1151.0], [89.2, 1151.0], [89.3, 1151.0], [89.4, 1153.0], [89.5, 1153.0], [89.6, 1153.0], [89.7, 1153.0], [89.8, 1153.0], [89.9, 1153.0], [90.0, 1153.0], [90.1, 1154.0], [90.2, 1154.0], [90.3, 1154.0], [90.4, 1154.0], [90.5, 1154.0], [90.6, 1154.0], [90.7, 1154.0], [90.8, 1154.0], [90.9, 1154.0], [91.0, 1154.0], [91.1, 1154.0], [91.2, 1154.0], [91.3, 1154.0], [91.4, 1157.0], [91.5, 1157.0], [91.6, 1157.0], [91.7, 1157.0], [91.8, 1157.0], [91.9, 1157.0], [92.0, 1157.0], [92.1, 1158.0], [92.2, 1158.0], [92.3, 1158.0], [92.4, 1158.0], [92.5, 1158.0], [92.6, 1158.0], [92.7, 1158.0], [92.8, 1158.0], [92.9, 1158.0], [93.0, 1158.0], [93.1, 1158.0], [93.2, 1158.0], [93.3, 1158.0], [93.4, 1162.0], [93.5, 1162.0], [93.6, 1162.0], [93.7, 1162.0], [93.8, 1162.0], [93.9, 1162.0], [94.0, 1162.0], [94.1, 1164.0], [94.2, 1164.0], [94.3, 1164.0], [94.4, 1164.0], [94.5, 1164.0], [94.6, 1164.0], [94.7, 1164.0], [94.8, 1164.0], [94.9, 1164.0], [95.0, 1164.0], [95.1, 1164.0], [95.2, 1164.0], [95.3, 1164.0], [95.4, 1165.0], [95.5, 1165.0], [95.6, 1165.0], [95.7, 1165.0], [95.8, 1165.0], [95.9, 1165.0], [96.0, 1165.0], [96.1, 1167.0], [96.2, 1167.0], [96.3, 1167.0], [96.4, 1167.0], [96.5, 1167.0], [96.6, 1167.0], [96.7, 1168.0], [96.8, 1168.0], [96.9, 1168.0], [97.0, 1168.0], [97.1, 1168.0], [97.2, 1168.0], [97.3, 1168.0], [97.4, 1191.0], [97.5, 1191.0], [97.6, 1191.0], [97.7, 1191.0], [97.8, 1191.0], [97.9, 1191.0], [98.0, 1191.0], [98.1, 1256.0], [98.2, 1256.0], [98.3, 1256.0], [98.4, 1256.0], [98.5, 1256.0], [98.6, 1256.0], [98.7, 1272.0], [98.8, 1272.0], [98.9, 1272.0], [99.0, 1272.0], [99.1, 1272.0], [99.2, 1272.0], [99.3, 1272.0], [99.4, 1372.0], [99.5, 1372.0], [99.6, 1372.0], [99.7, 1372.0], [99.8, 1372.0], [99.9, 1372.0], [100.0, 1372.0]], "isOverall": false, "label": "HTTP请求", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 51.0, "series": [{"data": [[600.0, 12.0], [700.0, 10.0], [200.0, 8.0], [800.0, 5.0], [900.0, 1.0], [1000.0, 1.0], [1100.0, 23.0], [300.0, 8.0], [1200.0, 2.0], [1300.0, 1.0], [100.0, 51.0], [400.0, 15.0], [500.0, 13.0]], "isOverall": false, "label": "HTTP请求", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 68.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 82.0, "series": [{"data": [[0.0, 82.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 68.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 39.44000000000001, "minX": 1.7671611E12, "maxY": 39.44000000000001, "series": [{"data": [[1.7671611E12, 39.44000000000001]], "isOverall": false, "label": "线程组", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7671611E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 157.0, "minX": 1.0, "maxY": 1260.0, "series": [{"data": [[2.0, 1145.0], [3.0, 1154.0], [4.0, 1164.0], [5.0, 1165.0], [6.0, 1149.0], [7.0, 1167.0], [8.0, 1157.0], [9.0, 1168.0], [10.0, 1149.0], [11.0, 1162.0], [12.0, 1146.0], [13.0, 1138.0], [14.0, 1121.0], [15.0, 1143.0], [17.0, 1260.0], [18.0, 886.0], [19.0, 877.0], [20.0, 825.0], [21.0, 709.0], [22.0, 514.0], [23.0, 254.30000000000004], [24.0, 157.0], [25.0, 157.0], [27.0, 175.6], [28.0, 544.9], [30.0, 208.0], [33.0, 208.0], [35.0, 210.46153846153842], [34.0, 1041.8333333333333], [36.0, 825.0], [39.0, 366.5], [38.0, 420.3333333333333], [40.0, 218.2], [43.0, 1095.0], [42.0, 583.0], [45.0, 731.0], [44.0, 764.0], [49.0, 733.0], [48.0, 626.0], [50.0, 377.0], [51.0, 379.0], [53.0, 329.0], [52.0, 763.0], [56.0, 525.25], [58.0, 598.5], [60.0, 427.6666666666667], [61.0, 751.0], [63.0, 707.0], [62.0, 753.0], [66.0, 559.6666666666666], [67.0, 398.0], [65.0, 530.0], [64.0, 354.0], [71.0, 606.0], [70.0, 405.0], [69.0, 436.0], [68.0, 605.0], [73.0, 438.0], [74.0, 333.6666666666667], [75.0, 512.0], [72.0, 456.0], [77.0, 546.3333333333334], [78.0, 438.0], [83.0, 540.3333333333334], [80.0, 484.0], [1.0, 1158.0]], "isOverall": false, "label": "HTTP请求", "isController": false}, {"data": [[39.44000000000001, 523.9666666666667]], "isOverall": false, "label": "HTTP请求-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 83.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 457.5, "minX": 1.7671611E12, "maxY": 630.0, "series": [{"data": [[1.7671611E12, 457.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7671611E12, 630.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7671611E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 523.9666666666667, "minX": 1.7671611E12, "maxY": 523.9666666666667, "series": [{"data": [[1.7671611E12, 523.9666666666667]], "isOverall": false, "label": "HTTP请求", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7671611E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 415.44666666666666, "minX": 1.7671611E12, "maxY": 415.44666666666666, "series": [{"data": [[1.7671611E12, 415.44666666666666]], "isOverall": false, "label": "HTTP请求", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7671611E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 220.2266666666667, "minX": 1.7671611E12, "maxY": 220.2266666666667, "series": [{"data": [[1.7671611E12, 220.2266666666667]], "isOverall": false, "label": "HTTP请求", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7671611E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 136.0, "minX": 1.7671611E12, "maxY": 1372.0, "series": [{"data": [[1.7671611E12, 1372.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7671611E12, 1153.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7671611E12, 1321.000000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7671611E12, 1164.45]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7671611E12, 136.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7671611E12, 454.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7671611E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 169.0, "minX": 36.0, "maxY": 1149.0, "series": [{"data": [[36.0, 1149.0], [55.0, 169.0], [59.0, 528.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 59.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 167.0, "minX": 36.0, "maxY": 1147.0, "series": [{"data": [[36.0, 1147.0], [55.0, 167.0], [59.0, 329.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 59.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.5, "minX": 1.7671611E12, "maxY": 2.5, "series": [{"data": [[1.7671611E12, 2.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7671611E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.5, "minX": 1.7671611E12, "maxY": 2.5, "series": [{"data": [[1.7671611E12, 2.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7671611E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.5, "minX": 1.7671611E12, "maxY": 2.5, "series": [{"data": [[1.7671611E12, 2.5]], "isOverall": false, "label": "HTTP请求-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7671611E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.5, "minX": 1.7671611E12, "maxY": 2.5, "series": [{"data": [[1.7671611E12, 2.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7671611E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

