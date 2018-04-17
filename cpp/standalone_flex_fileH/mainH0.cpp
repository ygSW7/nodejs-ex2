#include <iostream>
#include <stdio.h>


using namespace std;


// Simulating a legacy C++ app that reads
// it's input from a user-specified file via command line
// arguments, and outputs to a similarly specified file.

void generate2(FILE *in, FILE *out) {
float count = 0;
float total = 0;
float inputno = 0;

while (fscanf (in, "%f,", &inputno) != EOF)
{
 total += inputno;
 count+=1;
}

float  average = total/count;

fprintf(out, "average = %f\n",average);

}

int main(int argc, char ** argvs) {
    FILE * in = fopen(argvs[1], "r");
    FILE * out = fopen(argvs[2], "w");
    generate2(in, out);
    fprintf(stdout, "Output saved in %s\n", argvs[2]);
    fclose(in);
    fclose(out);
}