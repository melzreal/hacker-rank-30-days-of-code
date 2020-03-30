def levelOrder(root)
    #we use shift to pop out the first element of the queue iteratively
    #after pushing the node list into an array
    #we can check its properties and ensure we first print the left then the right
  queue = []
  queue.push(root) unless root.nil?

  while !queue.empty?
      bsNode = queue.shift
      print "#{bsNode.data} "
      
      if bsNode.left 
          queue.push(bsNode.left) 
      end 
      if bsNode.right 
          queue.push(bsNode.right) 
      end 
  end 
     
  end

  