#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <set>
#include <algorithm>
using namespace std;


int main() 
{
    int q,a,b;
    set<int>s;
    cin>>q;
    while(q!=0)
    {
        cin>>a>>b;
        if(a==1)
            s.insert(b);
        if(a==2)
            s.erase(b);
        if(a==3)
        {
            set<int>::iterator i=s.find(b);
            if(i==s.end())
                cout<<"No"<<endl;
            else
                cout<<"Yes"<<endl;
        }  
        q--;
    }
    return 0;
}
