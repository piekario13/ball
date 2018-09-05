var płótno = document.getElementById("plotno");
var kontekst = płótno.getContext("2d");

var Piłka = function () {
    this.x = 100;
    this.y = 100;
    this.xSzybkość = -2;
    this.ySzybkość = 3;
};

var okrąg = function (x, y, promień, wypełnijOkrąg) {
    kontekst.beginPath();
    kontekst.arc(x, y, promień, 0, Math.PI * 2, false);
    if (wypełnijOkrąg) {
        kontekst.fill();
    } else {
        kontekst.stroke();
    }
};

Piłka.prototype.rysuj = function () {
    okrąg(this.x, this.y, 10,true);
};

Piłka.prototype.przesuwaj = function () {
    this.x += this.xSzybkość;
    this.y += this.ySzybkość;
};

Piłka.prototype.sprawdzajKolizje = function () {
    if (this.x < 10 || this.x > 190) {
        this.xSzybkość = -this.xSzybkość;
    }
    if (this.y < 10 || this.y > 190) {
        this.ySzybkość = -this.ySzybkość;
    }
};

var piłka = new Piłka();

setInterval(function () {
    kontekst.clearRect(0, 0, 200, 200);

    piłka.rysuj();
    piłka.przesuwaj();
    piłka.sprawdzajKolizje();

    kontekst.strokeRect(0, 0, 200, 200);
}, 30);