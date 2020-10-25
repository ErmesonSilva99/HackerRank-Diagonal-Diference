# HackerRank-Diagonal-Diference
Dada uma matriz quadrada, calcule a diferença absoluta entre as somas de suas diagonais.

Por exemplo, a matriz quadrada  é mostrado abaixo:

1 2 3    
4 5 6   
9 8 9
A diagonal da esquerda para a direita = . Da direita para a esquerda diagonal =. A diferença absoluta deles é.

## Descrição da função

Complete a  função no editor abaixo.

diagonalDifference leva o seguinte parâmetro:

int arr [n] [m] : uma matriz de inteiros
## Retorna

int : a diferença diagonal absoluta
## Formato de entrada

A primeira linha contém um único inteiro, , o número de linhas e colunas na matriz quadrada .
Cada um dos próximos linhas descreve uma linha, , e consiste em  inteiros separados por espaço .

## Restrições

## Formato de saída

Retorne a diferença absoluta entre as somas das duas diagonais da matriz como um único inteiro.

## Amostra de entrada

3  
11 2 4  
4 5 6  
10 8 -12  
## Saída de amostra

15
## Explicação

A diagonal primária é:

11  
5  
-12

Soma na diagonal primária: 11 + 5 - 12 = 4

A diagonal secundária é:

4  
5  
10  
Soma na diagonal secundária: 4 + 5 + 10 = 19
Diferença: | 4 - 19 | = 15

**Nota**: | x | é o valor absoluto de x
