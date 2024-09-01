Notations to write an expression

1- infix:
a+b       a-b           a*b               a/b
                <operand> operator <operand>


2- prefix:
                <operator>operand <operand>
                    +ab              -pq       *pq    /pq

3-postfix:
                 operand operand <operator >
                    ab+ ab-   ab* ab /


      question:1  x-y*z to prefiz and postfix

      1- prefix                             2- postfix
      step1-parenthesixe the expr           step1- parenthesixe the expression  
      (x-(y*z))                             (x-(y*z))
      (x-[*yz])                             (x-[yz*])   
      -x*yz ans.                             xyz*- ans.


      question2-    p-q-r/a
      prefix: ((p-q)-(r/a))                 2- postfix
      ([-pq]- [/ra])                        ((p-q)-(r/a))
      --pq/ra ans.               