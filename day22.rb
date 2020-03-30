 #get the max depth of the binary tree
 #you can represent the tree as an array that starts at 1 instead of 0
        #find the parent of any index by dividing that current index by 2
        #find the left child of a binary tree by multiplying the current index by 2
        #find the rightchild by multiplying by 2 and adding 1
        #ex [ 8, 7, 9, 5] here 8 is your 1st index, 7 2nd, 9th the 3rd
        #we'd find the parent of the 4th index (nr 5) by dividing 4/2 and getting the
        #second index, which is number 7 - so 7 is 5s parent node.

        #all we needed was to recurse through the nodelist. As long as a node is not null
        #we can check and accumulate the right nodes on each recursion, then the left nodes
        #and finally compare.


        def getHeight(root)
            left = 0
            right = 0
            if (root == nil )
              return -1
            else 
               left += 1 + getHeight(root.left)
               right += 1 + getHeight(root.right)
            end
            
            return right > left ? right : left
      
          end
      
      
      