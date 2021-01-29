1. What will happen at line 11 and why?
   - It will print 3, which is the length of prices because even though var is in the for loop, the var has no block scope
2. What will happen at line 12 and why?
   - It will print 150, the last value of discountedPrice value since even though the var is in the for loop, the var has no block scope
3. What will happen at line 13 and why?
   - It will print out the value of finalPrice, 150
4. What will the function return if we call discountPrices([100,200,300], .5)
   - 100, 200, and 300 are the value of prices
   - It will run for loop 
        -  discountPrice became 50 
        -  finalPrice is 50
        -  discounted append 50 into the array

        - with i=1
        - discountedPrice became 100
        - finalPrice is 100
        - discounted append 100 into the array

        - with i=2
        - discountedPrice became 150 
        - after rounding, the finalPrice is 150
        - discounted append 150 into the array 

        -> this function will return discounted array with value: [50, 100, 150]

5. What will happen at line 11 and why?
   - It will not print anything since i is defined as "let" and it is declared inside the scope for-loop
6. What will happen at line 12 and why?
   - It will not print anything since discountedPrice is defined as "let" and it is declared inside the for loop
7. What will happen at line 13 and why?
   - It will print 150 since finalPrice is declared inside the function
8.  What will the function return if we call discountPrices([100,200,300], .5)
   - 100, 200, and 300 are the value of prices
   - It will run for loop 
        -  discountPrice became 50 
        -  finalPrice is 50
        -  discounted append 50 into the array

        - with i=1
        - discountedPrice became 100
        - finalPrice is 100
        - discounted append 100 into the array

        - with i=2
        - discountedPrice became 150 
        - after rounding, the finalPrice is 150
        - discounted append 150 into the array 

        -> this function will return discounted array with value: [50, 100, 150]
9.  It will not print anything since i is defined as "let" and it is declared inside the for loop
10. It will not print anything since discountedPrice is declared as const, but in line 6, the discountedPrice is update -> throw error. 
11. It will not print the finalPrice since finalPrice is declared as const, but the finalPrice is update in line 7. It will throw error. 
12. It will not be able to return anything since the discounted array is declared as const, but there is an update (push new value in for-loop) in line 8. It will throw error                            
13. The notation:
        a. Accessing the value of the name property in the student object
        student.name
        b. Accessing the value of the Grad Year property in the student object
        student['Grade Year']
        c. Calling the function for the greeting property in the student object
        student.greeting()
        d. Accessing the name property of the object in the Favorite Teacher property in student
        student['Favorite Teacher'].name
        e. Access the first index in the array of the courseLoad property of the student object
        student.courseLoad[0]
14. Arithmetic 
    a. '3'+2
    => '3' is string, so after the plus sign, 2 value is treated as string. => '32'
    b. '3' - 2
    => Since the minus sign, so 3 is the integer, so 3-2 = 1
    c. 3+null
    => 3 is an integer, so after the plus sign =, null is treated as 0 => 3 + null = 3 + 0 = 3
    d. '3' +null
    => '3' is a string, so after the plus sign, null is treayed as sring -> '3'+ 'null' => '3null'
    e. true + 3
    => true = 1 => 1 + 3 = 4
    f. false + null
    => false = 0 and null = 0 => false + null = 0 + 0 = 0
    g. "3" + undefined
    => '3' is a string, so after the plus sign, undefined is treayed as sring -> '3'+ 'undefined' => '3undefined'
    h. "3" - undefined
    => Since there is a minus sign, so 3 is treated as an integer, 3 - undefine = NaN
15. COmparison 
    a. '2' > 1 
    -> TRUE since 2 is treated as an integer => 2 > 1
    b. '2' < '12'
    -> FALSE since comparing two strings, char '2' is larger than the first char '1' in '12'
    c. 2 == '2'
    -> TRUE since 2 is comparing with '2' , which is evals to 2.
    d. 2 === '2'
    -> FALSE since '2' and 2 are not strict equally in both value and type. They are different data type
    e. true == 2
    -> FALSE since true is treated as 1 => 1 != 2 
    f. true === Boolean (2)
    Boolean (2) will return true, so true === true => TRUE
16. Explain the different between the == and === operators
    - == is used for comparing two variables, but it will ignore the datatype of variable
    - === is used for comparing two variables, but it checks datatype and values.

17. It will print "How are you?" True is treated as 1, so 2 != 1 => return false. Hence, it will print "How are you?"

19. 