var fibNums = new List<int>{1,1};

while (fibNums.Count < 20){
    var previous = fibNums[fibNums.Count-1];
    var previous2 = fibNums[fibNums.Count-2];
    fibNums.Add(previous + previous2);
}
foreach(var item in fibNums){
    Console.WriteLine(item);

}
