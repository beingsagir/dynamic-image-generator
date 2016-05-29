/* This will generate a dynamic image from your given text and optional
 * FontSize /& ImageHeight /* ImageWidth etc
 *
 * Written By : Sagiruddin Mondal
 * Github Location : https://github.com/beingsagir/dynamic-image-generator
 * Licence : ( MIT Licence ) https://github.com/beingsagir/dynamic-image-generator/blob/master/LICENSE
 */

function digGetAwesomeImage(text, imageHeight, imageWidth){

    var canvas = document.createElement("canvas");
    var textW = text;
    var newBackgroundColor = getRandomColor();
    var textColor = invertColor(newBackgroundColor); // receivingTextColor;
    canvas.height= imageHeight || 900;
    canvas.width=  imageWidth || 900;
    var fontSize = (imageWidth/5);


  context=canvas.getContext("2d");

    context.fillStyle = newBackgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

        var x = canvas.width/2;
        var y = canvas.height/2 + fontSize/3 ;
        context.font = fontSize +'px Calibri';
        context.textAlign = 'center';
        context.fillStyle = invertColor(newBackgroundColor);
        context.fillText(textW, x, y);
        context.textAlign='center';

  var fullImageData = canvas.toDataURL("image/png");
  return fullImageData;

};

function invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1);           // remove #
    color = parseInt(color, 16);          // convert to integer
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = color.toString(16);           // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color;                  // prepend #
    console.log(color);
    return color;

}


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function rand(min, max) {
    return min + Math.random() * (max - min);
}

function get_random_color() {
    var h = rand(1, 360);
    var s = rand(0, 100);
    var l = rand(0, 100);
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

function getColorCompliment(colorToCompliment) {
    var complement = 0xffffff ^ colorToCompliment;
    return complement;
}