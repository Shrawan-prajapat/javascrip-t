//Write a Program to print all alphabets from a to z by skipping 3 alphabets using do while loop.
#include<stdio.h>

main()
{
	char s='a';
	
	do{
		printf("%c,\t",s);
		s+=4;
	}while(s<='z');
}
