function rysujKwadrat(context, x, y, dlugoscBoku, kolor)
{
    if (kolor)
    {
        context.fillStyle = "black";
    } else
    {
        context.fillStyle = "white";
    }
    context.fillRect(x, y, dlugoscBoku, dlugoscBoku);
}

let wszystkieklatki = 6569;
let wysokosc = 28;
let szerokosc = 36;

function rysujKlatke()
{
    let klatka = 0;
    
    let interwal = setInterval(function()
    {
        console.log(klatka);
        for (let i = 0; i < wysokosc; i++)
        {
            for (let j = 0; j < szerokosc; j++)
            {
                rysujKwadrat(kontekst, j*20, i*20, 20, window.badApple[klatka][i][j]);
            }
        }
        
        klatka++;

        if (klatka >= wszystkieklatki)
        {
            clearInterval(interwal);
        }
    }, 50);
}

let kanwa = document.getElementById("kanwa");
kanwa.height = 500;
kanwa.width = 720;
let kontekst = kanwa.getContext('2d');

fetch('data.js')
    .then(response => response.json())
    .then(data => {
        window.badApple = data;

        rysujKlatke();

    })
    .catch(error => console.error('Błąd pobierania pliku:', error));
