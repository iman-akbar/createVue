<template>
  <v-app>
    <v-container class="topContainer">
      <v-row>
        <v-col cols="auto">
          <p
            style="top: 94px;
left: 96px;
width: 187px;
height: 50px;text-align: left;
font: normal normal 600 40px/28px Source Sans Pro;
letter-spacing: 0px;
color: #707070C4;
opacity: 1;"
          >Dashboard</p>
            
        </v-col>
        <v-col offset-md="4">
          <date-range-picker
    v-model="dateRange"
    :date-format="dateFormat"
    style="min-width: 500px;"
  ></date-range-picker>
        </v-col>
      </v-row>
      <div></div>
    </v-container>

    <v-container
      style="top: 174px;
      left: 96px;
      width: 1152px;
      height: 48px;
      background: #37B04C 0% 0% no-repeat padding-box;
      border-radius: 2px;
      opacity: 1;"
    >
      <v-row>
        <v-col cols="9">
          <p
            class="mt-1"
            style="top: 186px;
                left: 112px;
                width: 200px;
                height: 25px;
                text-align: left;
                font: normal normal 600 20px/13px Source Sans Pro;
                letter-spacing: 0px;
                color: #FFFFFF;
                opacity: 1;"
          >MARKET INSIGHT</p>
        </v-col>
        <v-col cols="auto">
          <v-img class="lamp" src="../assets/Help.png" max-height="20" max-width="20"></v-img>
        </v-col>
        <v-col>
          <p
            class="mt-1"
            style="text-align: left;
text-decoration: underline;
font: normal normal 300 14px/13px Source Sans Pro;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
top: 189px;
left: 1097px;
height: 18px;"
          >Click Here fro Help</p>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <!-- <v-img class="mt-2 icon" src="../assets/Icon - More - Filled.svg" max-height="20" max-width="10"></v-img> -->
      <v-card
        col="12"
        style="margin-left: 6px; width: 400px;"
        class="cardDokter text-xs-center"
        elevation="4"
      >
        <v-responsive class="text-center">
          <v-row style="height: 60px">
            <v-col cols="4">
              <p>Sales Turnover</p>
            </v-col>
            <!-- <v-col offset-md="6">
                       <v-img class="mt-2 icon" src="../assets/Icon - More - Filled.svg" max-height="20" max-width="10"></v-img>
            </v-col>-->
            <v-col offset-md="6">
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn dark icon v-bind="attrs" v-on="on">
                    <v-icon style="color: #88879c">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
              </v-menu>
            </v-col>
          </v-row>
        </v-responsive>
        <v-card-text>
          <v-row>
            <v-col cols="auto">
              <h1>Rp 3,600,000</h1>
              <v-row>
                <v-col cols="1">
                  <v-img
                    class="mt-2 icon"
                    src="../assets/DownArrow.svg"
                    max-height="20"
                    max-width="10"
                  ></v-img>
                </v-col>
                <v-col cols="auto">
                  <p>
                    <span style="color: red">13%</span> last period in production sold
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col>
              <v-img
                src="../assets/Sales Turnover.svg"
                style="width:80px; height: 100px;"
                max-height="55"
                max-width="60"
              ></v-img>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-responsive class="text-center">
              <v-row>
                <v-col cols="7">
                  <p>AVERAGE PURCHASE VALUE</p>
                </v-col>
                <v-col offset-md="3">
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn dark icon v-bind="attrs" v-on="on">
                        <v-icon style="color: #88879c">mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                  </v-menu>
                </v-col>
              </v-row>
            </v-responsive>
            <v-card-text>
              <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
               <v-responsive class="text-center">
              <v-row>
              <v-col cols="6">
                <p class="mt-6 ml-4" style="top: 374px;
left: 698px;
width: 157px;
height: 25px;
text-align: left;
font: normal normal normal 20px/13px Source Sans Pro;
letter-spacing: 0px;
color: #4D4F5C;
opacity: 1;">Best Selling SKU</p>
              </v-col>
              <v-col offset-md="3">
                 <v-menu>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn class="mt-6 ml-4" dark icon v-bind="attrs" v-on="on">
                          <v-icon style="color: #88879c"
                            >mdi-dots-vertical</v-icon
                          >
                        </v-btn>
                      </template>
                    </v-menu>
              </v-col>
            </v-row>
            </v-responsive>
            <v-card-text>
              <v-row v-for="(item, i) in sell" :key="i">
                <v-col cols="3">
                   <img src="../assets/es.png" style="width:80px; height: 100px;">
                </v-col>
                <v-col>
                  <p>{{item.nama}}</p>
                  <v-row>
                    <v-col>
                      <p>Rp. {{item.harga}}</p>
                    </v-col>
                     <v-col>
                  <p>{{item.jual}}</p>
                </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
         <v-col>
          <v-card>
               <v-responsive class="text-center">
              <v-row>
              <v-col cols="6">
                <p class="mt-6 ml-4" style="top: 374px;
left: 989px;
width: 300px;
height: 25px;
text-align: left;
font: normal normal normal 20px/13px Source Sans Pro;
letter-spacing: 0px;
color: #4D4F5C;
opacity: 1;">TOP COMPETITOR SKU</p>
              </v-col>
              <v-col offset-md="3">
                 <v-menu>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn class="mt-6 ml-4" dark icon v-bind="attrs" v-on="on">
                          <v-icon style="color: #88879c"
                            >mdi-dots-vertical</v-icon
                          >
                        </v-btn>
                      </template>
                    </v-menu>
              </v-col>
            </v-row>
            </v-responsive>
            <v-card-text>
              <v-row v-for="(item, i) in compietitor" :key="i">
                <v-col cols="3">
                   <img src="../assets/Product  Competitor.png" style="width:80px; height: 100px;">
                </v-col>
                <v-col>
                  <p>{{item.nama}}</p>
                  <v-row>
                    <v-col>
                      <p>Rp. {{item.harga}}</p>
                    </v-col>
                     <v-col>
                  <p>{{item.jual}}</p>
                </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
    </v-container>
  </v-app>
</template>

<script>
import DateRangePicker from 'vue2-daterange-picker'

import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

export default {
  name: "Page",
  components: {
    
    DateRangePicker
  },
  data: () => ({
    dateRange: {
      startDate: '2019-12-26',
      endDate: '2019-12-28'
    },
    compietitor:[{
      nama: 'bukan es teh',
      harga: '6000',
      jual: 3
    },
    {
      nama: 'bukan es jeruk',
      harga: '20000',
      jual: 2
    },
    {
      nama: 'bukan es buah',
      harga: '60200',
      jual:6
    },
    {
      nama: 'bukan es batu',
      harga: '203000',
      jual: 7
    }],
    sell:[{
      nama: 'es teh',
      harga: '5000',
      jual: 5
    },
    {
      nama: 'es jeruk',
      harga: '10000',
      jual: 10
    },
    {
      nama: 'es buah',
      harga: '50200',
      jual: 200
    },
    {
      nama: 'es batu',
      harga: '103000',
      jual: 30
    }],
    series: [
      {
        name: "Website Blog",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
      },
      {
        name: "Social Media",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
      },
    ],
    chartOptions: {
      chart: {
        height: 350,
        type: "line",
      },
      stroke: {
        width: [0, 4],
      },

      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001",
      ],
      xaxis: {
        type: "datetime",
      },
      yaxis: [
        {
          title: {
            text: "Website Blog",
          },
        },
        {
          opposite: true,
          title: {
            text: "Social Media",
          },
        },
      ],
    },
  }),
};
</script>

<style>
.topContainer {
  margin-top: -80px;
}
.lamp {
  margin-right: -20px;
}
.icon {
  margin-right: -1000px;
}
</style>
