<template>
    <div class="container">
        <div class="start_container">
            <!-- <md-field class="field has-danger">
                <label>Coast</label>
                <md-input v-model="coast" class="mdButton"></md-input>
            </md-field> -->
            <div class="input-group mb-3 field">
                <div class="dropdown">
                    <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Category
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Food</a>
                        <a class="dropdown-item" href="#">Car And Gas</a>
                        <a class="dropdown-item" href="#">Bills</a>
                    </div>
                </div>
                </div>
                <div class="input_desc">
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Description</span>
                    </div>
                <input v-model="desc" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                </div>
                </div>

                <div class="input_coast">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Kr</span>
                     
                    <input type="text" class="form-control" v-model="coast">
                </div>  
                </div>  
            </div>


                <md-button class="md-raised" v-on:click="income()">+</md-button>
                <md-button class="md-raised"  v-on:click="expense()">-</md-button>
            <div>
                <!-- <p>{{result}}</p> -->
            </div>

            <div class="inAndEx">
                <div class="in">
                    <h3>Income</h3>
                    <div v-for="(income, index) in incomeArr" :key="index">
                   <span class="color_green">{{income.des}} </span> 
                    {{income.price}} kr
                    </div>
                </div>
                
                <div class="ex">
                    <h3>Expenses</h3>
                    <div v-for="(expense, index) in expenseArr" :key="index">
                   <span class="color_red">{{expense.des}} </span> 
                    {{expense.price}} kr
                    </div>
                </div>
            </div>

            <div class="results">
                <h3>Left in my wallet</h3>
                <h4 v-if="result > 0" class="color_green">{{result}}</h4>
                <h4 v-else class="color_red">{{result}}</h4>
            </div>
            <compSum/>
            
        </div>
    </div>
</template>

<script>
import compSum from "./summary";
export default {
  data() {
    return {
      coast: "",
      desc: "",
      incomeCash: 0,
      expenseCash: 0,
      result: "",
      incomeArr: [],
      expenseArr: []
    };
  },
  components: {
    compSum
  },
  methods: {
    income() {
      this.incomeCash += parseInt(this.coast);
      this.incomeCalculate(this.desc, parseInt(this.coast));
      this.calculate();
      this.coast = "";
      this.desc = "";
    },
    expense() {
      this.expenseCash -= parseInt(this.coast);
      this.expenseCalculate(this.desc, parseInt(this.coast));
      this.calculate();
      this.coast = "";
      this.desc = "";
    },
    calculate() {
      this.result = this.expenseCash + this.incomeCash;
    },
    incomeCalculate(desc, value) {
      this.incomeArr.push({ des: desc, price: value });
    },
    expenseCalculate(desc, value) {
      this.expenseArr.push({ des: desc, price: value });
    }
  }
};
</script>
