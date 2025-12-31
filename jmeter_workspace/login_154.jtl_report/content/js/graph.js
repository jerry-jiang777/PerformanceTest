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
        data: {"result": {"minY": 138.0, "minX": 0.0, "maxY": 1205.0, "series": [{"data": [[0.0, 138.0], [0.1, 138.0], [0.2, 138.0], [0.3, 138.0], [0.4, 138.0], [0.5, 138.0], [0.6, 138.0], [0.7, 139.0], [0.8, 139.0], [0.9, 139.0], [1.0, 139.0], [1.1, 139.0], [1.2, 139.0], [1.3, 139.0], [1.4, 139.0], [1.5, 139.0], [1.6, 139.0], [1.7, 139.0], [1.8, 139.0], [1.9, 139.0], [2.0, 141.0], [2.1, 141.0], [2.2, 141.0], [2.3, 141.0], [2.4, 141.0], [2.5, 141.0], [2.6, 142.0], [2.7, 142.0], [2.8, 142.0], [2.9, 142.0], [3.0, 142.0], [3.1, 142.0], [3.2, 142.0], [3.3, 142.0], [3.4, 142.0], [3.5, 142.0], [3.6, 142.0], [3.7, 142.0], [3.8, 142.0], [3.9, 142.0], [4.0, 142.0], [4.1, 142.0], [4.2, 142.0], [4.3, 142.0], [4.4, 142.0], [4.5, 142.0], [4.6, 142.0], [4.7, 142.0], [4.8, 142.0], [4.9, 142.0], [5.0, 142.0], [5.1, 142.0], [5.2, 143.0], [5.3, 143.0], [5.4, 143.0], [5.5, 143.0], [5.6, 143.0], [5.7, 143.0], [5.8, 143.0], [5.9, 143.0], [6.0, 143.0], [6.1, 143.0], [6.2, 143.0], [6.3, 143.0], [6.4, 143.0], [6.5, 146.0], [6.6, 146.0], [6.7, 146.0], [6.8, 146.0], [6.9, 146.0], [7.0, 146.0], [7.1, 146.0], [7.2, 147.0], [7.3, 147.0], [7.4, 147.0], [7.5, 147.0], [7.6, 147.0], [7.7, 147.0], [7.8, 148.0], [7.9, 148.0], [8.0, 148.0], [8.1, 148.0], [8.2, 148.0], [8.3, 148.0], [8.4, 148.0], [8.5, 148.0], [8.6, 148.0], [8.7, 148.0], [8.8, 148.0], [8.9, 148.0], [9.0, 148.0], [9.1, 148.0], [9.2, 148.0], [9.3, 148.0], [9.4, 148.0], [9.5, 148.0], [9.6, 148.0], [9.7, 148.0], [9.8, 149.0], [9.9, 149.0], [10.0, 149.0], [10.1, 149.0], [10.2, 149.0], [10.3, 149.0], [10.4, 150.0], [10.5, 150.0], [10.6, 150.0], [10.7, 150.0], [10.8, 150.0], [10.9, 150.0], [11.0, 150.0], [11.1, 152.0], [11.2, 152.0], [11.3, 152.0], [11.4, 152.0], [11.5, 152.0], [11.6, 152.0], [11.7, 153.0], [11.8, 153.0], [11.9, 153.0], [12.0, 153.0], [12.1, 153.0], [12.2, 153.0], [12.3, 153.0], [12.4, 153.0], [12.5, 153.0], [12.6, 153.0], [12.7, 153.0], [12.8, 153.0], [12.9, 153.0], [13.0, 153.0], [13.1, 153.0], [13.2, 153.0], [13.3, 153.0], [13.4, 153.0], [13.5, 153.0], [13.6, 153.0], [13.7, 153.0], [13.8, 153.0], [13.9, 153.0], [14.0, 153.0], [14.1, 153.0], [14.2, 153.0], [14.3, 153.0], [14.4, 153.0], [14.5, 153.0], [14.6, 153.0], [14.7, 153.0], [14.8, 153.0], [14.9, 153.0], [15.0, 153.0], [15.1, 153.0], [15.2, 153.0], [15.3, 153.0], [15.4, 153.0], [15.5, 153.0], [15.6, 154.0], [15.7, 154.0], [15.8, 154.0], [15.9, 154.0], [16.0, 154.0], [16.1, 154.0], [16.2, 154.0], [16.3, 154.0], [16.4, 154.0], [16.5, 154.0], [16.6, 154.0], [16.7, 154.0], [16.8, 154.0], [16.9, 155.0], [17.0, 155.0], [17.1, 155.0], [17.2, 155.0], [17.3, 155.0], [17.4, 155.0], [17.5, 155.0], [17.6, 155.0], [17.7, 155.0], [17.8, 155.0], [17.9, 155.0], [18.0, 155.0], [18.1, 155.0], [18.2, 157.0], [18.3, 157.0], [18.4, 157.0], [18.5, 157.0], [18.6, 157.0], [18.7, 157.0], [18.8, 157.0], [18.9, 158.0], [19.0, 158.0], [19.1, 158.0], [19.2, 158.0], [19.3, 158.0], [19.4, 158.0], [19.5, 158.0], [19.6, 158.0], [19.7, 158.0], [19.8, 158.0], [19.9, 158.0], [20.0, 158.0], [20.1, 158.0], [20.2, 158.0], [20.3, 158.0], [20.4, 158.0], [20.5, 158.0], [20.6, 158.0], [20.7, 158.0], [20.8, 159.0], [20.9, 159.0], [21.0, 159.0], [21.1, 159.0], [21.2, 159.0], [21.3, 159.0], [21.4, 159.0], [21.5, 159.0], [21.6, 159.0], [21.7, 159.0], [21.8, 159.0], [21.9, 159.0], [22.0, 159.0], [22.1, 159.0], [22.2, 159.0], [22.3, 159.0], [22.4, 159.0], [22.5, 159.0], [22.6, 159.0], [22.7, 159.0], [22.8, 159.0], [22.9, 159.0], [23.0, 159.0], [23.1, 159.0], [23.2, 159.0], [23.3, 159.0], [23.4, 160.0], [23.5, 160.0], [23.6, 160.0], [23.7, 160.0], [23.8, 160.0], [23.9, 160.0], [24.0, 160.0], [24.1, 160.0], [24.2, 160.0], [24.3, 160.0], [24.4, 160.0], [24.5, 160.0], [24.6, 160.0], [24.7, 160.0], [24.8, 160.0], [24.9, 160.0], [25.0, 160.0], [25.1, 160.0], [25.2, 160.0], [25.3, 160.0], [25.4, 160.0], [25.5, 160.0], [25.6, 160.0], [25.7, 160.0], [25.8, 160.0], [25.9, 160.0], [26.0, 161.0], [26.1, 161.0], [26.2, 161.0], [26.3, 161.0], [26.4, 161.0], [26.5, 161.0], [26.6, 161.0], [26.7, 163.0], [26.8, 163.0], [26.9, 163.0], [27.0, 163.0], [27.1, 163.0], [27.2, 163.0], [27.3, 163.0], [27.4, 163.0], [27.5, 163.0], [27.6, 163.0], [27.7, 163.0], [27.8, 163.0], [27.9, 163.0], [28.0, 164.0], [28.1, 164.0], [28.2, 164.0], [28.3, 164.0], [28.4, 164.0], [28.5, 164.0], [28.6, 164.0], [28.7, 164.0], [28.8, 164.0], [28.9, 164.0], [29.0, 164.0], [29.1, 164.0], [29.2, 164.0], [29.3, 164.0], [29.4, 164.0], [29.5, 164.0], [29.6, 164.0], [29.7, 164.0], [29.8, 164.0], [29.9, 167.0], [30.0, 167.0], [30.1, 167.0], [30.2, 167.0], [30.3, 167.0], [30.4, 167.0], [30.5, 167.0], [30.6, 168.0], [30.7, 168.0], [30.8, 168.0], [30.9, 168.0], [31.0, 168.0], [31.1, 168.0], [31.2, 169.0], [31.3, 169.0], [31.4, 169.0], [31.5, 169.0], [31.6, 169.0], [31.7, 169.0], [31.8, 169.0], [31.9, 169.0], [32.0, 169.0], [32.1, 169.0], [32.2, 169.0], [32.3, 169.0], [32.4, 169.0], [32.5, 171.0], [32.6, 171.0], [32.7, 171.0], [32.8, 171.0], [32.9, 171.0], [33.0, 171.0], [33.1, 171.0], [33.2, 171.0], [33.3, 171.0], [33.4, 171.0], [33.5, 171.0], [33.6, 171.0], [33.7, 171.0], [33.8, 171.0], [33.9, 171.0], [34.0, 171.0], [34.1, 171.0], [34.2, 171.0], [34.3, 171.0], [34.4, 171.0], [34.5, 171.0], [34.6, 171.0], [34.7, 171.0], [34.8, 171.0], [34.9, 171.0], [35.0, 171.0], [35.1, 172.0], [35.2, 172.0], [35.3, 172.0], [35.4, 172.0], [35.5, 172.0], [35.6, 172.0], [35.7, 172.0], [35.8, 173.0], [35.9, 173.0], [36.0, 173.0], [36.1, 173.0], [36.2, 173.0], [36.3, 173.0], [36.4, 174.0], [36.5, 174.0], [36.6, 174.0], [36.7, 174.0], [36.8, 174.0], [36.9, 174.0], [37.0, 174.0], [37.1, 174.0], [37.2, 174.0], [37.3, 174.0], [37.4, 174.0], [37.5, 174.0], [37.6, 174.0], [37.7, 176.0], [37.8, 176.0], [37.9, 176.0], [38.0, 176.0], [38.1, 176.0], [38.2, 176.0], [38.3, 176.0], [38.4, 176.0], [38.5, 176.0], [38.6, 176.0], [38.7, 176.0], [38.8, 176.0], [38.9, 176.0], [39.0, 177.0], [39.1, 177.0], [39.2, 177.0], [39.3, 177.0], [39.4, 177.0], [39.5, 177.0], [39.6, 177.0], [39.7, 177.0], [39.8, 177.0], [39.9, 177.0], [40.0, 177.0], [40.1, 177.0], [40.2, 177.0], [40.3, 178.0], [40.4, 178.0], [40.5, 178.0], [40.6, 178.0], [40.7, 178.0], [40.8, 178.0], [40.9, 178.0], [41.0, 179.0], [41.1, 179.0], [41.2, 179.0], [41.3, 179.0], [41.4, 179.0], [41.5, 179.0], [41.6, 179.0], [41.7, 179.0], [41.8, 179.0], [41.9, 179.0], [42.0, 179.0], [42.1, 179.0], [42.2, 179.0], [42.3, 180.0], [42.4, 180.0], [42.5, 180.0], [42.6, 180.0], [42.7, 180.0], [42.8, 180.0], [42.9, 180.0], [43.0, 180.0], [43.1, 180.0], [43.2, 180.0], [43.3, 180.0], [43.4, 180.0], [43.5, 180.0], [43.6, 182.0], [43.7, 182.0], [43.8, 182.0], [43.9, 182.0], [44.0, 182.0], [44.1, 182.0], [44.2, 182.0], [44.3, 182.0], [44.4, 182.0], [44.5, 182.0], [44.6, 182.0], [44.7, 182.0], [44.8, 182.0], [44.9, 183.0], [45.0, 183.0], [45.1, 183.0], [45.2, 183.0], [45.3, 183.0], [45.4, 183.0], [45.5, 183.0], [45.6, 183.0], [45.7, 183.0], [45.8, 183.0], [45.9, 183.0], [46.0, 183.0], [46.1, 183.0], [46.2, 183.0], [46.3, 183.0], [46.4, 183.0], [46.5, 183.0], [46.6, 183.0], [46.7, 183.0], [46.8, 183.0], [46.9, 183.0], [47.0, 183.0], [47.1, 183.0], [47.2, 183.0], [47.3, 183.0], [47.4, 183.0], [47.5, 184.0], [47.6, 184.0], [47.7, 184.0], [47.8, 184.0], [47.9, 184.0], [48.0, 184.0], [48.1, 186.0], [48.2, 186.0], [48.3, 186.0], [48.4, 186.0], [48.5, 186.0], [48.6, 186.0], [48.7, 186.0], [48.8, 187.0], [48.9, 187.0], [49.0, 187.0], [49.1, 187.0], [49.2, 187.0], [49.3, 187.0], [49.4, 187.0], [49.5, 187.0], [49.6, 187.0], [49.7, 187.0], [49.8, 187.0], [49.9, 187.0], [50.0, 188.0], [50.1, 188.0], [50.2, 188.0], [50.3, 188.0], [50.4, 188.0], [50.5, 188.0], [50.6, 188.0], [50.7, 189.0], [50.8, 189.0], [50.9, 189.0], [51.0, 189.0], [51.1, 189.0], [51.2, 189.0], [51.3, 189.0], [51.4, 189.0], [51.5, 189.0], [51.6, 189.0], [51.7, 189.0], [51.8, 189.0], [51.9, 189.0], [52.0, 190.0], [52.1, 190.0], [52.2, 190.0], [52.3, 190.0], [52.4, 190.0], [52.5, 190.0], [52.6, 190.0], [52.7, 190.0], [52.8, 190.0], [52.9, 190.0], [53.0, 190.0], [53.1, 190.0], [53.2, 190.0], [53.3, 190.0], [53.4, 190.0], [53.5, 190.0], [53.6, 190.0], [53.7, 190.0], [53.8, 190.0], [53.9, 190.0], [54.0, 190.0], [54.1, 190.0], [54.2, 190.0], [54.3, 190.0], [54.4, 190.0], [54.5, 190.0], [54.6, 190.0], [54.7, 190.0], [54.8, 190.0], [54.9, 190.0], [55.0, 190.0], [55.1, 190.0], [55.2, 192.0], [55.3, 192.0], [55.4, 192.0], [55.5, 192.0], [55.6, 192.0], [55.7, 192.0], [55.8, 192.0], [55.9, 192.0], [56.0, 192.0], [56.1, 192.0], [56.2, 192.0], [56.3, 192.0], [56.4, 192.0], [56.5, 195.0], [56.6, 195.0], [56.7, 195.0], [56.8, 195.0], [56.9, 195.0], [57.0, 195.0], [57.1, 195.0], [57.2, 195.0], [57.3, 195.0], [57.4, 195.0], [57.5, 195.0], [57.6, 195.0], [57.7, 195.0], [57.8, 196.0], [57.9, 196.0], [58.0, 196.0], [58.1, 196.0], [58.2, 196.0], [58.3, 196.0], [58.4, 196.0], [58.5, 196.0], [58.6, 196.0], [58.7, 196.0], [58.8, 196.0], [58.9, 196.0], [59.0, 196.0], [59.1, 197.0], [59.2, 197.0], [59.3, 197.0], [59.4, 197.0], [59.5, 197.0], [59.6, 197.0], [59.7, 197.0], [59.8, 198.0], [59.9, 198.0], [60.0, 198.0], [60.1, 198.0], [60.2, 198.0], [60.3, 198.0], [60.4, 200.0], [60.5, 200.0], [60.6, 200.0], [60.7, 200.0], [60.8, 200.0], [60.9, 200.0], [61.0, 200.0], [61.1, 201.0], [61.2, 201.0], [61.3, 201.0], [61.4, 201.0], [61.5, 201.0], [61.6, 201.0], [61.7, 201.0], [61.8, 201.0], [61.9, 201.0], [62.0, 201.0], [62.1, 201.0], [62.2, 201.0], [62.3, 201.0], [62.4, 202.0], [62.5, 202.0], [62.6, 202.0], [62.7, 202.0], [62.8, 202.0], [62.9, 202.0], [63.0, 202.0], [63.1, 202.0], [63.2, 202.0], [63.3, 202.0], [63.4, 202.0], [63.5, 202.0], [63.6, 202.0], [63.7, 203.0], [63.8, 203.0], [63.9, 203.0], [64.0, 203.0], [64.1, 203.0], [64.2, 203.0], [64.3, 203.0], [64.4, 203.0], [64.5, 203.0], [64.6, 203.0], [64.7, 203.0], [64.8, 203.0], [64.9, 203.0], [65.0, 203.0], [65.1, 203.0], [65.2, 203.0], [65.3, 203.0], [65.4, 203.0], [65.5, 203.0], [65.6, 203.0], [65.7, 203.0], [65.8, 203.0], [65.9, 203.0], [66.0, 203.0], [66.1, 203.0], [66.2, 203.0], [66.3, 203.0], [66.4, 203.0], [66.5, 203.0], [66.6, 203.0], [66.7, 203.0], [66.8, 203.0], [66.9, 203.0], [67.0, 203.0], [67.1, 203.0], [67.2, 203.0], [67.3, 203.0], [67.4, 203.0], [67.5, 203.0], [67.6, 203.0], [67.7, 203.0], [67.8, 203.0], [67.9, 203.0], [68.0, 203.0], [68.1, 203.0], [68.2, 203.0], [68.3, 203.0], [68.4, 203.0], [68.5, 203.0], [68.6, 203.0], [68.7, 203.0], [68.8, 203.0], [68.9, 203.0], [69.0, 203.0], [69.1, 203.0], [69.2, 203.0], [69.3, 203.0], [69.4, 203.0], [69.5, 203.0], [69.6, 203.0], [69.7, 203.0], [69.8, 203.0], [69.9, 203.0], [70.0, 203.0], [70.1, 203.0], [70.2, 203.0], [70.3, 203.0], [70.4, 203.0], [70.5, 203.0], [70.6, 203.0], [70.7, 203.0], [70.8, 203.0], [70.9, 203.0], [71.0, 203.0], [71.1, 203.0], [71.2, 203.0], [71.3, 203.0], [71.4, 203.0], [71.5, 203.0], [71.6, 203.0], [71.7, 203.0], [71.8, 203.0], [71.9, 203.0], [72.0, 203.0], [72.1, 203.0], [72.2, 203.0], [72.3, 203.0], [72.4, 203.0], [72.5, 203.0], [72.6, 203.0], [72.7, 203.0], [72.8, 203.0], [72.9, 203.0], [73.0, 203.0], [73.1, 203.0], [73.2, 203.0], [73.3, 203.0], [73.4, 203.0], [73.5, 203.0], [73.6, 203.0], [73.7, 203.0], [73.8, 203.0], [73.9, 203.0], [74.0, 203.0], [74.1, 206.0], [74.2, 206.0], [74.3, 206.0], [74.4, 206.0], [74.5, 206.0], [74.6, 206.0], [74.7, 207.0], [74.8, 207.0], [74.9, 207.0], [75.0, 207.0], [75.1, 207.0], [75.2, 207.0], [75.3, 207.0], [75.4, 207.0], [75.5, 207.0], [75.6, 207.0], [75.7, 207.0], [75.8, 207.0], [75.9, 207.0], [76.0, 209.0], [76.1, 209.0], [76.2, 209.0], [76.3, 209.0], [76.4, 209.0], [76.5, 209.0], [76.6, 209.0], [76.7, 209.0], [76.8, 209.0], [76.9, 209.0], [77.0, 209.0], [77.1, 209.0], [77.2, 209.0], [77.3, 209.0], [77.4, 209.0], [77.5, 209.0], [77.6, 209.0], [77.7, 209.0], [77.8, 209.0], [77.9, 209.0], [78.0, 212.0], [78.1, 212.0], [78.2, 212.0], [78.3, 212.0], [78.4, 212.0], [78.5, 212.0], [78.6, 213.0], [78.7, 213.0], [78.8, 213.0], [78.9, 213.0], [79.0, 213.0], [79.1, 213.0], [79.2, 213.0], [79.3, 214.0], [79.4, 214.0], [79.5, 214.0], [79.6, 214.0], [79.7, 214.0], [79.8, 214.0], [79.9, 216.0], [80.0, 216.0], [80.1, 216.0], [80.2, 216.0], [80.3, 216.0], [80.4, 216.0], [80.5, 216.0], [80.6, 219.0], [80.7, 219.0], [80.8, 219.0], [80.9, 219.0], [81.0, 219.0], [81.1, 219.0], [81.2, 219.0], [81.3, 219.0], [81.4, 219.0], [81.5, 219.0], [81.6, 219.0], [81.7, 219.0], [81.8, 219.0], [81.9, 220.0], [82.0, 220.0], [82.1, 220.0], [82.2, 220.0], [82.3, 220.0], [82.4, 220.0], [82.5, 222.0], [82.6, 222.0], [82.7, 222.0], [82.8, 222.0], [82.9, 222.0], [83.0, 222.0], [83.1, 222.0], [83.2, 225.0], [83.3, 225.0], [83.4, 225.0], [83.5, 225.0], [83.6, 225.0], [83.7, 225.0], [83.8, 228.0], [83.9, 228.0], [84.0, 228.0], [84.1, 228.0], [84.2, 228.0], [84.3, 228.0], [84.4, 228.0], [84.5, 232.0], [84.6, 232.0], [84.7, 232.0], [84.8, 232.0], [84.9, 232.0], [85.0, 232.0], [85.1, 234.0], [85.2, 234.0], [85.3, 234.0], [85.4, 234.0], [85.5, 234.0], [85.6, 234.0], [85.7, 234.0], [85.8, 236.0], [85.9, 236.0], [86.0, 236.0], [86.1, 236.0], [86.2, 236.0], [86.3, 236.0], [86.4, 238.0], [86.5, 238.0], [86.6, 238.0], [86.7, 238.0], [86.8, 238.0], [86.9, 238.0], [87.0, 238.0], [87.1, 241.0], [87.2, 241.0], [87.3, 241.0], [87.4, 241.0], [87.5, 241.0], [87.6, 241.0], [87.7, 244.0], [87.8, 244.0], [87.9, 244.0], [88.0, 244.0], [88.1, 244.0], [88.2, 244.0], [88.3, 244.0], [88.4, 245.0], [88.5, 245.0], [88.6, 245.0], [88.7, 245.0], [88.8, 245.0], [88.9, 245.0], [89.0, 246.0], [89.1, 246.0], [89.2, 246.0], [89.3, 246.0], [89.4, 246.0], [89.5, 246.0], [89.6, 246.0], [89.7, 249.0], [89.8, 249.0], [89.9, 249.0], [90.0, 249.0], [90.1, 249.0], [90.2, 249.0], [90.3, 256.0], [90.4, 256.0], [90.5, 256.0], [90.6, 256.0], [90.7, 256.0], [90.8, 256.0], [90.9, 256.0], [91.0, 276.0], [91.1, 276.0], [91.2, 276.0], [91.3, 276.0], [91.4, 276.0], [91.5, 276.0], [91.6, 316.0], [91.7, 316.0], [91.8, 316.0], [91.9, 316.0], [92.0, 316.0], [92.1, 316.0], [92.2, 316.0], [92.3, 356.0], [92.4, 356.0], [92.5, 356.0], [92.6, 356.0], [92.7, 356.0], [92.8, 356.0], [92.9, 368.0], [93.0, 368.0], [93.1, 368.0], [93.2, 368.0], [93.3, 368.0], [93.4, 368.0], [93.5, 368.0], [93.6, 377.0], [93.7, 377.0], [93.8, 377.0], [93.9, 377.0], [94.0, 377.0], [94.1, 377.0], [94.2, 377.0], [94.3, 377.0], [94.4, 377.0], [94.5, 377.0], [94.6, 377.0], [94.7, 377.0], [94.8, 377.0], [94.9, 454.0], [95.0, 454.0], [95.1, 454.0], [95.2, 454.0], [95.3, 454.0], [95.4, 454.0], [95.5, 466.0], [95.6, 466.0], [95.7, 466.0], [95.8, 466.0], [95.9, 466.0], [96.0, 466.0], [96.1, 466.0], [96.2, 473.0], [96.3, 473.0], [96.4, 473.0], [96.5, 473.0], [96.6, 473.0], [96.7, 473.0], [96.8, 474.0], [96.9, 474.0], [97.0, 474.0], [97.1, 474.0], [97.2, 474.0], [97.3, 474.0], [97.4, 474.0], [97.5, 478.0], [97.6, 478.0], [97.7, 478.0], [97.8, 478.0], [97.9, 478.0], [98.0, 478.0], [98.1, 479.0], [98.2, 479.0], [98.3, 479.0], [98.4, 479.0], [98.5, 479.0], [98.6, 479.0], [98.7, 479.0], [98.8, 1192.0], [98.9, 1192.0], [99.0, 1192.0], [99.1, 1192.0], [99.2, 1192.0], [99.3, 1192.0], [99.4, 1205.0], [99.5, 1205.0], [99.6, 1205.0], [99.7, 1205.0], [99.8, 1205.0], [99.9, 1205.0], [100.0, 1205.0]], "isOverall": false, "label": "HTTP请求", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 93.0, "series": [{"data": [[1100.0, 1.0], [300.0, 5.0], [1200.0, 1.0], [200.0, 48.0], [100.0, 93.0], [400.0, 6.0]], "isOverall": false, "label": "HTTP请求", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 152.0, "series": [{"data": [[0.0, 152.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 35.40909090909088, "minX": 1.76707674E12, "maxY": 35.40909090909088, "series": [{"data": [[1.76707674E12, 35.40909090909088]], "isOverall": false, "label": "线程组", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76707674E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 139.0, "minX": 2.0, "maxY": 1198.5, "series": [{"data": [[33.0, 183.3913043478261], [32.0, 211.0], [2.0, 1198.5], [37.0, 199.25], [38.0, 318.7142857142857], [47.0, 226.75], [46.0, 276.0], [48.0, 163.0], [51.0, 201.56666666666666], [54.0, 227.6], [9.0, 190.0], [10.0, 206.2857142857143], [11.0, 473.0], [12.0, 152.0], [13.0, 154.0], [14.0, 143.0], [15.0, 479.0], [16.0, 139.0], [20.0, 156.25], [23.0, 139.0], [24.0, 158.0], [25.0, 144.0], [26.0, 158.66666666666666], [27.0, 156.0], [28.0, 188.84615384615384], [29.0, 169.27272727272728], [30.0, 160.0], [31.0, 161.0]], "isOverall": false, "label": "HTTP请求", "isController": false}, {"data": [[35.40909090909088, 214.22727272727272]], "isOverall": false, "label": "HTTP请求-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 54.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 469.7, "minX": 1.76707674E12, "maxY": 646.8, "series": [{"data": [[1.76707674E12, 469.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76707674E12, 646.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76707674E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 214.22727272727272, "minX": 1.76707674E12, "maxY": 214.22727272727272, "series": [{"data": [[1.76707674E12, 214.22727272727272]], "isOverall": false, "label": "HTTP请求", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76707674E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 207.7012987012986, "minX": 1.76707674E12, "maxY": 207.7012987012986, "series": [{"data": [[1.76707674E12, 207.7012987012986]], "isOverall": false, "label": "HTTP请求", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76707674E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 104.95454545454538, "minX": 1.76707674E12, "maxY": 104.95454545454538, "series": [{"data": [[1.76707674E12, 104.95454545454538]], "isOverall": false, "label": "HTTP请求", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76707674E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 138.0, "minX": 1.76707674E12, "maxY": 1205.0, "series": [{"data": [[1.76707674E12, 1205.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76707674E12, 252.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76707674E12, 1197.85]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76707674E12, 457.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.76707674E12, 138.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76707674E12, 187.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76707674E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 187.0, "minX": 2.0, "maxY": 1198.5, "series": [{"data": [[2.0, 1198.5], [152.0, 187.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 152.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 183.0, "minX": 2.0, "maxY": 1198.0, "series": [{"data": [[2.0, 1198.0], [152.0, 183.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 152.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.566666666666667, "minX": 1.76707674E12, "maxY": 2.566666666666667, "series": [{"data": [[1.76707674E12, 2.566666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76707674E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.566666666666667, "minX": 1.76707674E12, "maxY": 2.566666666666667, "series": [{"data": [[1.76707674E12, 2.566666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76707674E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.566666666666667, "minX": 1.76707674E12, "maxY": 2.566666666666667, "series": [{"data": [[1.76707674E12, 2.566666666666667]], "isOverall": false, "label": "HTTP请求-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76707674E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.566666666666667, "minX": 1.76707674E12, "maxY": 2.566666666666667, "series": [{"data": [[1.76707674E12, 2.566666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76707674E12, "title": "Total Transactions Per Second"}},
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

