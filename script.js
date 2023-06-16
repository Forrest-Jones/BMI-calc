function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters
  
    if (weight > 0 && height > 0) {
      var bmi = weight / (height * height);
      document.getElementById('result').textContent = 'BMI: ' + bmi.toFixed(2);
    } else {
      document.getElementById('result').textContent = 'Invalid weight or height';
    }
  }

  