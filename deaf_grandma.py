def deaf_grandma():
    goodbye_counter = 0
    while True:
        question = input("Don't be shy, ask grandma a question: ")
        if question == "GOODBYE":
            if goodbye_counter == 1:
                print ("LATER, SKATER!")
                quit()
            else: 
                goodbye_counter += 1
                print("LEAVING SO SOON?")
        elif question == "":
            print("WHAT?!")
        elif question == question.upper():
            print("NO, NOT SINCE 1946!")
        else:
            print("SPEAK UP, KID!")
        continue

deaf_grandma()
