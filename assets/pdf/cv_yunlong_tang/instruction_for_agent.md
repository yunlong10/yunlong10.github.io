every time you update the file under assets/pdf/cv_yunlong_tang/, run the following commands to update the PDF:

cd assets/pdf/cv_yunlong_tang/
pdflatex cv.tex
biber cv
pdflatex cv.tex
pdflatex cv.tex
