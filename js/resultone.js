function fetcher() {
    var qs = location.search.substring(1);
    var qw = qs.toString();
    var a1=qw.substring(1,2);
    var a2=qw.substring(3,4);
    var a3=qw.substring(5,qw.indexOf("+"));
    var a4 = qw.substring(qw.indexOf("+") + 1, qw.indexOf("_"));
    var a5 = qw.substring(qw.indexOf("_")+1);
    if (a1 == "1") {
        a1 = "You have an innate feeling of insecurity,which prevents you from taking risks .You love communicating with others.";
    }
    else if (a1 == "2") {
        a1 = "You are quite smart and funny and this attracts people to you.You have special love for the spotlight. You desire to be admired.";
    }
    else if (a1 == "3") {
        a1 = "You have the strength of character to take command of any situation and your presence commands respect and attention.";
    }
    else if (a1 == "4") {
        a1 = "You tend to be quite boastful and dominating courting resentment from your peers.You are humorous and a little corrupted by power.";
    }
    if (a2 == "5") {
        a2 = "You have a fascination for money and all the luxuries that it can bring to your feet.You are easily corrupted by power.";
    }
    else if (a2 == "6") {
        a2 = "You prefer respect more than monetary achievements .you are quite incorruptible but you have a fascination for money and luxuries.";
    }
    else if (a2 == "7") {
        a2 = "You are strong the kind of person who takes problems by the headlocks.you are incorruptible but you have a fascination for money.";
    }
    else if (a2 == "8") {
        a2 = "You have a fascination for money and all the luxuries that it can bring to your feet. You are easily corrupted by power.";
    }
    if (a3 == "9") {a3 = "You are a brave and foresighted individual.But still, you have an uncivilized taint to your personality and somehow tend to get into arguments.";
    }
    else if (a3 == "10") {
        a3 = "You are quite lazy sometimes and you are someone who never gets his hands dirty in others business ,and you avoid taking risks.";
    }
    else if (a3 == "11") {
        a3 = "You would prefer a job where you are in contact with people, and even at that you are quite easygoing and dont want to sweat out.";
    }
    else if (a3 == "12") {
        a3 = "You really have very good looks.You have a love for the spotlight and the desire to be admired is very dominant in your character.";
    }
    if (a4 == "13") {
        a4 = "You are very attached to your family and have the ability of making people feel comfortable in your company.You are very humble.";
    }
    else if (a4 == "14") {
        a4 = "You are too soft hearted and willingly help anyone in distress.You are very touchy,and get emotional a lot more often than others.";
    }
    else if (a4 == "15") {
        a4 = "Your special characteristic is your love for beautiful things in life, and also a particular day-dreaming and inconsistent trait.";
    }
    else if (a4 == "16") {
        a4 = "Your special characteristic is your love for beautiful things in life, and also a particular day-dreaming and inconsistent trait.";
    }
    if (a5 == "17") {
        a5 = "You have a tremendous urge for physical pleasure.You are a charmer with good looks and crave for attention from the opposite sex.";
    }
    else if (a5 == "18") {
        a5 = "You have an impeccable honesty and this instills in you a feeling that you are not answerable to anyone.You are very social.";
    }
    else if (a5 == "19") {
        a5 = "You have a huge self-respect that works in a inward sense and makes you quite independent and straight-forward.You love adventure.";
    }
    else if (a5 == "20") {
        a5 = "You have good looks and crave for attention from the opposite sex.You have a fascination for luxuries and are quite lazy.";
    }
    document.getElementById("Text1").value = a1;
    document.getElementById("Text2").value = a2;
    document.getElementById("Text3").value = a3;
    document.getElementById("Text4").value = a4;
    document.getElementById("Text5").value = a5;
}