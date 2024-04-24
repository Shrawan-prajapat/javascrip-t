//Write a Program to find the sum of a first and the last digit of a number.
#include<stdio.h>


main(){
	int a,b,first=0,last=0,result=0;

	printf("Enter any value of number: ");
	scanf("%d",&a);
  		b=a;
  		last=a%10;
  	while(b>0)
  	{
  	first=b%10;
  	b=b/10;
  	}
  result=first+last;
  printf("Sum of %d and %d is %d\n",first,last,result);


}
