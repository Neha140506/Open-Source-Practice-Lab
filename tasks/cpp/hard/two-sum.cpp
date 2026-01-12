/*
TASK: Two Sum Problem

Input:
nums = [2, 7, 11, 15]
target = 9

Output:
Indices: 0, 1
*/

#include <iostream>
using namespace std;

int main() {
    int nums[] = {2, 7, 11, 15};
    int target = 9;
    int n = sizeof(nums) / sizeof(nums[0]);
    int l = 0, r = n - 1;
    while (l < r) {
        int sum = nums[l] + nums[r];
        if (sum == target) {
            cout << "Indices: " << l << "," << r << endl;
            return 0;
        } else if (sum < target) {
            l++;
        } else {
            r--;
        }
    }
    cout << "No pair found" << endl;
    return 0;
}