const express = require("express");
const app = express();
const port = 8081;
const path = require('path')
const bodyParser = require('body-parser')

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.all("/*", function (req, res, next) {
  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/calculate-area", (req, res) => {
  let body = req.body;
  const area = (body.base * body.height) / 2;
  let ret = {
    result: {
      resultCode: 200,
      resultMessage: 'Success',
      data: area
    },
  }
  res.setHeader('http_status_code', 200);
  res.json(ret);
});

app.post("/citizen", (req, res) => {
  try {
    let result = {
      success: true,
      error_code: '',
      error_msg: ''
    }
    let body = req.body;
    const numAll = body.citizenId;

    if (numAll && numAll.length === 13) {
      let numLast = Number(numAll[numAll.length - 1]);
      let num = numAll.slice(0, -1);
      let digits = num.split("").map(function(digit) {
        return parseInt(digit);
      });
    
      let numList = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
      let multiplied = digits.map(function(digit, index) {
        return digit * numList[index];
      });
      let sum = multiplied.reduce(function(acc, val) {
        return acc + val;
      }, 0);
      let mod = sum % 11;
      let stepFive = 11 - mod;
      if (stepFive.length > 1) stepFive = stepFive[stepFive.length - 1];
      if (stepFive === numLast) {
          result.success = true,
          result.error_code = '200',
          result.error_msg = ''

      } else {
        result.success = true,
        result.error_code = '001',
        result.error_msg = 'citizen_id not digit'
      }
      res.json(result);

    } else if (!numAll) {
      result.success = false,
      result.error_code = '001',
      result.error_msg = 'citizen_id require'
      res.json(result);
    } else {
        result.success = false,
        result.error_code = '001',
        result.error_msg = 'citizen_id invalid'
      res.json(result);
    }

  } catch (error) {
    console.log(error)
    result = {
      resultCode: 500,
      resultMessage: error,
    }
    res.json(result);
  }
  
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
