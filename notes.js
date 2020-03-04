var allSlots = $(".slot");

var victories = [
    [allSlots.eq(0), allSlots.eq(7), allSlots.eq(14), allSlots.eq(21)],
    [0, 7, 14, 21],
    [1, 8, 15, 22],
    []
];

var mySlots = allSlots.eq(victories[0][0]);
mySlots = mySlots.add(allSlots.eq(victories[0][1]));

var mySlots = $(".column")
    .eq(1)
    .find(".slot")
    .eq(1);
mySlots = mySlots.add(
    $(".column")
        .eq(2)
        .find(".slot")
        .eq(2)
);
