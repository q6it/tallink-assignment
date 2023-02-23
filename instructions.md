## Before development plan

1. Need to create a table of history from any 2 numbers and with next operations

    - sum
    - divide
    - reminder
    - Highest prime between those 2 numbers if any exists

2. Examples:
   sum:

    - 13451 + 48.4 = 13499.4
    - 0.02342 + -47123847 = -47123846.98

    divide: if b !== 0

    - 494 / 39.414 = 12.5336
    - 134.234 / 4933.43 = 0.02720
    - 234394 / 0 = Error !!!

    reminder: if b !== 0

    - 344 % 3 = 2
    - 4 % 234 = 4
    - 0 % 3234 =
    - 0 % 0 = NaN

    Highest prime:

    - 11, 23 = 23
    - 494 , 39.414 = 491

3. Break it down:

    1. crate a form with 2 number inputs and a submit button //done
    2. create a operations selector //done
    3. create a history table with columns: A, B, Operation, Result //done
    4. create a sum operation function //done
    5. create a divide operation function - if condition B !== 0 //done
    6. create a reminder operation function - if condition B !== 0 //done
    7. create a highest prime operation function
        - compare which number A or B are highest //done
        - create a checkForPrime function = if number > 1, number % [2, ...oddNumbers] !== 0
          ( alternative check - Number.isInteger(number) === false) //done
    8. handle floating numbers
    9. show error messages //done for divide and reminder

4. Solve/simplify and add complexity on the go

5. Refactor

Requirements:

1. build start readme
2. repo
3. tests
