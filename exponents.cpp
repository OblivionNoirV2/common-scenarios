#include <iostream>
#include <iomanip> //for precision setting

using namespace std;

void power(double baseNum, double powNum, bool showFull);

int main()
{
    power(20, 9, true); // fixed
    cout << ' ' << endl;
    power(20, 9, false); // scientific

    return 0;
}

void power(double baseNum, double powNum, bool showFull)
{
    double result = 1;
    for (int i = 0; i < powNum; i++)
    {
        result *= baseNum;
    }
    showFull ? cout << fixed << setprecision(0) : cout << scientific; // set the output stream accordingly

    cout << result;
}
