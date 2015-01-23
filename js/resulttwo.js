function fetcher() {
    var qs = location.search.substring(1);
    var qw = qs.toString();
    var a1=qw.substring(1,2);
    var a2=qw.substring(3,4);
    var a3=qw.substring(5,qw.indexOf("+"));
    var a4 = qw.substring(qw.indexOf("+") + 1, qw.indexOf("_"));
    var a5 = qw.substring(qw.indexOf("_")+1);
    if (a1 == "1") {
        a1 = "You tend to fall for a lot of people,though those are only infatuations.For you,physical appearance and fame holds a top priority.";
    }
    else if (a1 == "2") {
        a1 = "You quite possessive which may also make you irritatingly dominating sometimes.You just cant tolerate betrayal.";
    }
    else if (a1 == "3") {
        a1 = "You have a fascination for money and all the luxuries that it can bring to your feet.You are easily corrupted by power.";
    }
    else if (a1 == "4") {
        a1 = "You tend to fall for a lot of people,though those are only infatuations.For you,physical appearance and fame holds a top priority.";
    }
    if (a2 == "5") {
        a2 = "You really know how to keep your partner happy and comfortable,although you dont receive the appreciation you deserve from them.";
    }
    else if (a2 == "6") {
        a2 = "You really know how to keep your partner happy and comfortable,although you dont receive the appreciation you deserve from them.";
    }
    else if (a2 == "7") {
        a2 = "You really know how to keep your partner happy and comfortable,although you dont receive the appreciation you deserve from them.";
    }
    else if (a2 == "8") {
        a2 = "You really know how to keep your partner happy and comfortable,although you dont receive the appreciation you deserve from them.";
    }
    if (a3 == "9") {a3 = "You can actually say it even while not saying it; that is, by making up stories, you will put your point across without any doubt.";
    }
    else if (a3 == "10") {
        a3 = "Your special characteristic is your love for beautiful things in life, and also a particular day-dreaming and inconsistent trait.";
    }
    else if (a3 == "11") {
        a3 = "You can actually say it even while not saying it; that is, by making up stories, you will put your point across without any doubt.";
    }
    else if (a3 == "12") {
        a3 = "You can actually say it even while not saying it; that is, by making up stories, you will put your point across without any doubt.";
    }
    if (a4 == "13") {
        a4 = "You are so much in love with love itself that you hardly watch who you are falling in love with.You fall for people quite easily.";
    }
    else if (a4 == "14") {
        a4 = "You are so much in love with love itself that you hardly watch who you are falling in love with.You fall for people quite easily.";
    }
    else if (a4 == "15") {
        a4 = "You are a very sweet talker and quite friendly,unfortunately for you,your natural tendencies are seen as cheating by the society.";
    }
    else if (a4 == "16") {
        a4 = "You are a very sweet talker and quite friendly,unfortunately for you,your natural tendencies are seen as cheating by the society.";
    }
    if (a5 == "17") {
        a5 = "You want the most of everything, and it is hard for all of them to come from one person.You fall for a lot of people due to this.";
    }
    else if (a5 == "18") {
        a5 = "You are really insecure with your looks and conversation skills.You like to stay in your shell and want people to approach you.";
    }
    else if (a5 == "19") {
        a5 = "You want the most of everything, and it is hard for all of them to come from one person.You fall for a lot of people due to this.";
    }
    else if (a5 == "20") {
        a5 = "You enjoy yourself for as long as the initial spark lasts, and after that start to feel unfulfilled and restless with your choice.";
    }
    document.getElementById("Text1").value = a1;
    document.getElementById("Text2").value = a2;
    document.getElementById("Text3").value = a3;
    document.getElementById("Text4").value = a4;
    document.getElementById("Text5").value = a5;
}