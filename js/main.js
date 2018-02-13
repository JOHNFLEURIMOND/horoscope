alert("What is your sign?");

document.getElementById("Horoscopebtn").onclick = horoscopeBtn;

function horoscopeBtn() {
  var firstVal = document.getElementById("firstVal").value
  var secondVal = document.getElementById("secondVal").value
  //var result="You will pass Resilient Coders"
  //Capricon
  if (firstVal == 1 && secondVal <= 19 || firstVal == 12 && secondVal >= 22) {
    document.getElementById("HoroscopeResult").innerHTML = ("You will pass Resilient Coders!")
    document.getElementById("zodiacSign").innerHTML = ("Capricon")
  }
  //aquarius
  else if (firstVal == 1 && secondVal <= 20 || firstVal == 2 && secondVal >= 18) {
    document.getElementById("HoroscopeResult").innerHTML = ("You will die tomorrow!")
    document.getElementById("zodiacSign").innerHTML = ("Aquarius")
  }
  //pisces
  else if (firstVal == 2 && secondVal <= 19 || firstVal == 3 && secondVal >= 20) {
    document.getElementById("HoroscopeResult").innerHTML = ("You will win a million dollars!")
    document.getElementById("zodiacSign").innerHTML = ("Pisces")
  }
  //aries
  else if (firstVal == 3 && secondVal <= 21 || firstVal == 4 && secondVal >= 19) {
    document.getElementById("HoroscopeResult").innerHTML = ("You will get stabbed in the back by your best friend, literally.")
    document.getElementById("zodiacSign").innerHTML = ("Aries")
  }
  //taurus
  else if (firstVal == 4 && secondVal <= 20 || firstVal == 5 && secondVal >= 20) {
    document.getElementById("HoroscopeResult").innerHTML = ("Truth serum overload! It's always good to be authentic, but today your blunt comments could crush someone's spirit. Questions like must be answered with delicacy and care. You could walk right into a trap with your truthful responses. Choose your battles and be as diplomatic as you can without telling a lie. You might offer a fresh perspective or helpful hint—but don't bash!")
    document.getElementById("zodiacSign").innerHTML = ("Taurus")
  }
  //gemini
  else if (firstVal == 5 && secondVal <= 21 || firstVal == 6 && secondVal >= 20) {
    document.getElementById("HoroscopeResult").innerHTML = "You're more sensitive than usual today, thanks to an opposition of the moon and brooding Neptune. A clash with a coworker could turn on the waterworks or cause you to lose your cool—not exactly the strategy meeting you had in mind. Still, you might need to hash out some underlying tension with a colleague. Don't wait until the entire department is gathered in the conference room. Handle the conversation privately or take it to HR if you don't feel confident smoothing out the drama on your own. Feeling overwhelmed? It's not too soon to use a little PTO if you need to regroup.";
    document.getElementById("zodiacSign").innerHTML = "Gemini";
  }
  //Cancer
  else if (firstVal == 6 && secondVal <= 21 || firstVal == 7 && secondVal >= 22) {
    document.getElementById("HoroscopeResult").innerHTML = ("Slip on the kid gloves, Cancer. Handle people with extreme care today, because an opposition between the moon and super-sensitive Neptune makes everyone more defensive than usual. Lead with your nurturing nature, not your snarky side. Although people's touchiness may provoke some eye rolls, remember that you've been in their shoes before. This is not the day to unleash the tough love, Cancer. Soften that shell and deliver your sage advice with a heaping helping of compassion.")
    document.getElementById("zodiacSign").innerHTML = ("Cancer")
  }
  //leo
  else if (firstVal == 7 && secondVal <= 23 || firstVal == 8 && secondVal >= 22) {
    document.getElementById("HoroscopeResult").innerHTML = ("Keep a firm grip on your wallet today, Leo. With blurry Neptune opposing the moon in your finance houses, put those must-haves on hold and sleep on it for a night. The shiny object of desire could lose its allure by dawn. You may be presented with  only to discover its many clauses after you've signed the sale papers. Avoid this trap assiduously and don't be swayed by a compelling pitch. If you're rushed or pressured to close a deal, consider it a red flag and investigate carefully. Why ARE they in such a hurry? Don't find out the hard way.")
    document.getElementById("zodiacSign").innerHTML = ("Leo")

  }
  //Virgo
  else if (firstVal == 8 && secondVal <= 23 || firstVal == 9 && secondVal >= 22) {
    document.getElementById("HoroscopeResult").innerHTML = ("Pep talk SOS! Today's opposition of the moon and self-effacing Neptune could bring a confidence dip. Stop that voice of doubt before it has a chance to start berating you. Have you allowed a naysayer's opinion to hold more weight than your own? That never produces anything positive. Sit down with one of your most supportive people, someone whose unflagging belief in you always shores you up. You might examine your critics' words to see if there was anything valid or helpful, but only if there's a productive purpose to this discussion.")
    document.getElementById("zodiacSign").innerHTML = ("Virgo")
  }
  //libra
  else if (firstVal == 9 && secondVal <= 23 || firstVal == 10 && secondVal >= 22) {
    document.getElementById("HoroscopeResult").innerHTML = ("You will find love")
    document.getElementById("zodiacSign").innerHTML = ("Libra")
  }
  //scorpio
  else if (firstVal == 10 && secondVal <= 23 || firstVal == 11 && secondVal >= 21) {
    document.getElementById("HoroscopeResult").innerHTML = ("Should you go along to get along? Not today, Scorpio, though you'll be tempted to keep quiet when you encounter a sea of strong opinions. Inject your razor-sharp insight into the conversation, even if it creates some ripples. Better to rock the boat than let everyone drift in the wrong direction. This mission needs your clear-eyed perspective. Lead by example if you can't take the helm. Eventually, they’ll come around!")
    document.getElementById("zodiacSign").innerHTML = ("Scorpio")
  }
  //sagittarius
  else if (firstVal == 11 && secondVal <= 22 || firstVal == 12 && secondVal >= 21) {
    document.getElementById("HoroscopeResult").innerHTML = ("Despite all the sayings about letting your heart lead, today this mandate could lead you astray. Boundary-blurring Neptune's opposition to the emo moon makes you prone to overreacting. Repeat after us: It's not personal. People's issues have everything to do with THEM and very little to do with you. Don't waste time playing amateur psychologist or analyzing someone's immature behavior. Just because you can explain it doesn't mean you should excuse it. Draw a firm line on what you'll put up with, and don't bend")
    document.getElementById("zodiacSign").innerHTML = ("Sagittarius")
  }
}