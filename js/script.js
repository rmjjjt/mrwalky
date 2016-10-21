$(document).ready(function() {

    var canvas = $("#walkyArea")
    var newImage = new Image
    var ctx = canvas[0].getContext("2d")
    var startingPositionX = 0
    var startingPositionY = 0
    newImage.src = ""

    function drawGame() {
        newImage.src = "images/mega-man-right.png"
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, 800, 600)
        canvas.keypress(keyPresses())
        newImage.onload = function() {
        }

    }

    function drawMan(newImage, startingPositionX, startingPositionY)
    {
        ctx.drawImage(newImage, startingPositionX, startingPositionY, 40, 40)
    }

    drawGame()
    drawMan(newImage, 1, 1)
    keyPresses()

    function keyPresses() {
        $(this).keydown(function (e) {
            if (e.keyCode == 37 && (startingPositionX >= 0)) {
                startingPositionX = startingPositionX -= 5
                startingPositionY = startingPositionY
                newImage.src = "images/mega-man-left.png"
                drawMan(newImage, startingPositionX, startingPositionY)
            } else {
                startingPositionX = startingPositionX += 0
                startingPositionY = startingPositionY += 0
            }

            if (e.keyCode == 39 && (startingPositionX <= 760)) {
                startingPositionX = startingPositionX += 5
                startingPositionY = startingPositionY
                newImage.src = "images/mega-man-right.png"
                drawMan(newImage, startingPositionX, startingPositionY)
            } else {
                    startingPositionX = startingPositionX += 0
                    startingPositionY = startingPositionY += 0
                }

            if (e.keyCode == 40 && (startingPositionY <= 560)) {
                startingPositionY = startingPositionY += 5
                startingPositionX = startingPositionX
                newImage.src = "images/mega-man-right.png"
                drawMan(newImage, startingPositionX, startingPositionY)
            } else {
                startingPositionX = startingPositionX += 0
                startingPositionY = startingPositionY += 0
            }

            if (e.keyCode == 38 && (startingPositionY >= 0)) {
                startingPosition = startingPositionY -= 5
                startingPositionX = startingPositionX
                newImage.src = "images/mega-man-right.png"
                drawMan(newImage, startingPositionX, startingPositionY)
            } else {
                startingPositionX = startingPositionX += 0
                startingPositionY = startingPositionY += 0
            }


        })
    }





























})