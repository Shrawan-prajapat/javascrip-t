//Write a Program to count the total number of digits in a number.
#include <stdio.h>

 main() {
  
    int n, ans = 0;

   
    printf("Enter the number: ");
    scanf("%d", &n);

  	if(n==0){
  		printf("Total number of digits: 1");
	  }
    else{
    	while (n != 0) {
    
        n = n / 10;
        ans++;
    }

 
    printf("Total number of digits: %d\n", ans);

	}
   
}

