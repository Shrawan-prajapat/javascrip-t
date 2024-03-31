#include<stdio.h>

main(){
	int i,size;
	int array[size];
	
	printf("Enter the size of array: ");
	scanf("%d",&size);
	
	for(i=0;i<size;i++){
		printf("a[%d]: ",i);
		scanf("%d",&array[i]);
		
	}
	printf("\nThe squares are: ");
	for(i=0;i<size;i++){
		printf("\n%d",array[i]*array[i]);
	}
}

