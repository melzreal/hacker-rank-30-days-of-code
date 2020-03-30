def hourGlassSum(arr) 
    
    highestTotal = -64

    # how do we make sure each iteration is only of 3 spaces within the array?
    # we simply loop in sets of 3
    # we then only want to return the highestTotal, so we will continuously override
    # highestTotal with hourGlass as long as hourGlass is larger.
    # for hourglass to be overriden, we always need to declare it within the loop scope


     0.upto 3 do | a |
        0.upto 3 do | b |
            hourGlass = 0
            hourGlass += arr[a][b] + arr[a][b+1] + arr[a][b+2]
            hourGlass += arr[a+1][b+1] 
            hourGlass += arr[a+2][b] + arr[a+2][b+1] + arr[a+2][b+2]

            if highestTotal < hourGlass 
                highestTotal = hourGlass 
            end
        end 
     end  

     return puts highestTotal



end 
