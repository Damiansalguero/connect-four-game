(function() {
    var totalSlots = $(".slot");
    var diagonalWins = [
        [
            totalSlots.eq(0),
            totalSlots.eq(7),
            totalSlots.eq(14),
            totalSlots.eq(21)
        ],
        [
            totalSlots.eq(1),
            totalSlots.eq(8),
            totalSlots.eq(15),
            totalSlots.eq(22)
        ],
        [
            totalSlots.eq(2),
            totalSlots.eq(9),
            totalSlots.eq(16),
            totalSlots.eq(23)
        ],
        [
            totalSlots.eq(6),
            totalSlots.eq(13),
            totalSlots.eq(20),
            totalSlots.eq(27)
        ],
        [
            totalSlots.eq(12),
            totalSlots.eq(19),
            totalSlots.eq(26),
            totalSlots.eq(33)
        ],
        [
            totalSlots.eq(18),
            totalSlots.eq(25),
            totalSlots.eq(32),
            totalSlots.eq(39)
        ],
        [
            totalSlots.eq(7),
            totalSlots.eq(14),
            totalSlots.eq(21),
            totalSlots.eq(28)
        ],
        [
            totalSlots.eq(8),
            totalSlots.eq(15),
            totalSlots.eq(22),
            totalSlots.eq(29)
        ],
        [
            totalSlots.eq(13),
            totalSlots.eq(20),
            totalSlots.eq(27),
            totalSlots.eq(34)
        ],
        [
            totalSlots.eq(19),
            totalSlots.eq(26),
            totalSlots.eq(33),
            totalSlots.eq(40)
        ],
        [
            totalSlots.eq(14),
            totalSlots.eq(21),
            totalSlots.eq(28),
            totalSlots.eq(35)
        ],
        [
            totalSlots.eq(20),
            totalSlots.eq(27),
            totalSlots.eq(34),
            totalSlots.eq(41)
        ],
        [
            totalSlots.eq(36),
            totalSlots.eq(31),
            totalSlots.eq(26),
            totalSlots.eq(21)
        ],
        [
            totalSlots.eq(30),
            totalSlots.eq(25),
            totalSlots.eq(20),
            totalSlots.eq(15)
        ],
        [
            totalSlots.eq(24),
            totalSlots.eq(19),
            totalSlots.eq(14),
            totalSlots.eq(9)
        ],
        [
            totalSlots.eq(18),
            totalSlots.eq(13),
            totalSlots.eq(8),
            totalSlots.eq(3)
        ],
        [
            totalSlots.eq(26),
            totalSlots.eq(21),
            totalSlots.eq(16),
            totalSlots.eq(11)
        ],
        [
            totalSlots.eq(37),
            totalSlots.eq(32),
            totalSlots.eq(27),
            totalSlots.eq(22)
        ],
        [
            totalSlots.eq(38),
            totalSlots.eq(33),
            totalSlots.eq(38),
            totalSlots.eq(23)
        ],
        [
            totalSlots.eq(31),
            totalSlots.eq(26),
            totalSlots.eq(21),
            totalSlots.eq(16)
        ],
        [
            totalSlots.eq(19),
            totalSlots.eq(14),
            totalSlots.eq(9),
            totalSlots.eq(4)
        ],
        [
            totalSlots.eq(25),
            totalSlots.eq(20),
            totalSlots.eq(15),
            totalSlots.eq(10)
        ],
        [
            totalSlots.eq(32),
            totalSlots.eq(27),
            totalSlots.eq(22),
            totalSlots.eq(17)
        ],
        [
            totalSlots.eq(20),
            totalSlots.eq(15),
            totalSlots.eq(10),
            totalSlots.eq(5)
        ]
    ];
    //Turn & Switch Player + putting the right "color" (WORKS)
    var currentPlayer = "player1";
    function switchPlayer() {
        if (currentPlayer == "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }
    }
    $(".column").on("click", function(e) {
        var slotsInColumn = $(e.currentTarget).find(".slot");
        // console.log("slot1", slotsInColumn);

        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInColumn.eq(i).hasClass("player1") &&
                !slotsInColumn.eq(i).hasClass("player2")
            ) {
                slotsInColumn.eq(i).addClass(currentPlayer);
                break;
            }
        }
        if (i == -1) {
            return;
        }

        //Check column and vertically and diagonally
        var slotsInRow = $(".row" + i);
        if (checkForVictory(slotsInColumn)) {
            winning();
            setTimeout(function() {
                $(document).on("click", function() {
                    location.reload();
                });
            }, 2000);
            return;
        } else if (checkForVictory(slotsInRow)) {
            winning();
            setTimeout(function() {
                $(document).on("click", function() {
                    location.reload();
                });
            }, 2000);
        } else if (diagonal(diagonalWins)) {
            winning();
            setTimeout(function() {
                $(document).on("click", function() {
                    location.reload();
                });
            }, 2000);
        }

        //Check if someone won general
        function checkForVictory(slots) {
            var count = 0;
            for (var i = 0; i < slots.length; i++) {
                if (slots.eq(i).hasClass(currentPlayer)) {
                    count++;
                    console.log(count);
                    if (count == 4) {
                        return true;
                    }
                } else {
                    count = 0;
                }
            }
        }

        //Setup win diagonally
        function diagonal(diagonalWins) {
            for (var i = 0; i < diagonalWins.length; i++) {
                for (var j = 0; j < diagonalWins[i].length; j++) {
                    if (!diagonalWins[i][j].hasClass(currentPlayer)) {
                        break;
                    }
                }
                if (j == 4) {
                    return true;
                }
            }
            return null;
        }

        switchPlayer();
    });

    //Winner Dance
    var win = $(".win");
    var dance = $(".dance");
    // var sound = $("#sound");
    function winning() {
        win.css({
            display: "block"
        });
        dance.css({
            display: "flex"
        });
    }
})();
