<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        .container{
            display: block;
            margin: 40px auto;
            padding: 30px;
            background-color:rgb(3, 52, 68);
            width: 1000px;
            border-radius: 10px;
            color: white;
        }
        img{
            position: relative;
            left: 30%;
            width: 40%;
        }
        h1, h2{
            text-align: center;
        }
        
        p{
            font-family:'Times New Roman';
            font-size: 30px;
            line-height: 45px;
        }
        a{
            color: rgb(9, 136, 248);
            text-decoration: none;
        }
        a:hover{
          text-decoration: underline;
        }

        h1{
            border: 1px solid white;
            width: 50%;
            padding: 40px 5px;
            position: relative;
            left: 25%;
            border-radius: 9px;
        }
        button{
            display: block;
            margin: 0 auto;
            font-size: 50px;
            background-color: black;
            color: aliceblue;
            margin: 20px auto;
            padding: 10px 20px;
            border-radius: 10px;
            border-color: black;
        }
        button:hover{
            opacity: 0.7;
        }
    </style>
  </head>

  <body>
    <div class="container">
      <h1>I Love Skincare Products</h1>
      <h2>Especially African Black Soaps</h2>
      <hr />
      <img
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/045/325/original/Screen_Shot_2022-09-03_at_3.45.01_PM.png?1662216570" width="350"
      />
      <hr />
      <p>
        <b>African black soap</b> is a traditional soap that comes from West Africa.
        It’s made from natural ingredients and can benefit your health in many
        different ways.This soap isn’t limited to just cleansing the skin.
        African black soap has antibacterial properties which can help improve
        certain skin conditions, and might even slow down some signs of
        aging.African black soap is made without adding lye, which makes the
        texture soft and lends a more moisturizing quality. It’s also unscented,
        making it suitable for most skin types.To find authentic African black
        soap, look for a soap that’s brown or grey in color, and has an uneven
        surface. It should be slightly crumbly around the edges.
      </p>
      <a href="https://www.medicalnewstoday.com/articles/african-black-soap-benefits" target="blank">📖Read More on MEDICALNEWS</a><br><br>
          <button>HOW TO MAKE BLACK SOAP</button>
    </div>
  </body>
  <script>
      function blackSoap(){
        let button = prompt('What is your name');
        let email = prompt('What is your email address')
        let emoji = prompt('What is your favourite emoji');
        alert("Thanks " + button + " we will be in touch. Meanwhile, use African Black Soap for your skin");
      }
      let soap = document.querySelector("button");
      soap.addEventListener("click", blackSoap);


  </script>
</html>
