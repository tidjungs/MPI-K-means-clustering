EXECS=kmeans
MPICC?=mpicc

all: ${EXECS}

kmeans: kmeans.c
	${MPICC} -o kmeans kmeans.c

run: kmeans
	mpirun -n 2 -H localhost:2 ./kmeans 1000 7 2

clean:
	rm -f ${EXECS}
