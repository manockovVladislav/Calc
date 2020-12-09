function solution_sqrt() {
    var a = Number(document.getElementById("num1").value); //для поля ввода a
    var b = Number(document.getElementById("num2").value); //для поля ввода b
    var c = Number(document.getElementById("num3").value); //для поля ввода c
    var diz = eval(Math.pow(b, 2) - 4 * a * c); //расчёт дискримина́нта
    var e = eval((-b + Math.sqrt(diz)) / (2 * a)); // расчёт если дискр. > 0 для х1
    var e1 = eval((-b - Math.sqrt(diz)) / (2 * a)); //расчёт если дискр. > 0 для х2
    var e2 = eval(-c / b); //расчёт если a=0, b и c !=0
    var e3 = eval((-b / 2) * a); //расчёт если дискр.=0
    var x1 = Number(document.getElementById("x1")); //для поля вывода х1
    var x2 = Number(document.getElementById("x2")); //для поля вывода х2
    if (a == 0 && b == 0 && c == 0) {
      alert("x1 не может быть равно 0!!!");
    } else if (a == 0 && b == 0 && c != 0) {
      alert("x1 не может быть равно 0!!!");
    } else if (a == 0 && b != 0 && c != 0) {
      alert("x1 не может быть равно 0!!!");
    } else if (a != 0 && diz > 0) {
      x1 = eval(e);
      x2 = eval(e1);
      visabil();
    } else if (a != 0 && diz == 0) {
      x1 = eval(e3);
      x2 = " ";
      visabil();
    } else {
      x1 = "Решения нет";
      x2 = "Решения нет";
      visabil();
    }
    document.getElementById("x1").value = x1;
    document.getElementById("x2").value = x2;
  }
  
  function visabil() {
    document.getElementById("f-ansver").style.display = "block";
  }
  
  function hid() {
    document.getElementById("f-ansver").style.display = "none";
  }
  