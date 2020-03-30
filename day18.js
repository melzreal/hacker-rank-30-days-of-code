function Solution() {
    this.stack = [];
    this.queue = [];
    //Write your code here

    this.pushCharacter = (x) => {
        this.stack.push(x);
    };

    this.enqueueCharacter = (x) => {
        this.queue.push(x);
    };

    this.popCharacter = () => {
        return this.stack.pop();

    };

    this.dequeueCharacter = () => {
        return this.queue.shift();
    };
}

function main() {
    // read the string s
    var s = readLine();
    var len = s.length;
    // create the Solution class object p
    var obj = new Solution();
    //push/enqueue all the characters of string s to stack
    for (var i = 0; i < len; i++) {
        obj.pushCharacter(s.charAt(i));
        obj.enqueueCharacter(s.charAt(i));
    }

    var isPalindrome = true;
    /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

    for (var i = 0; i < len / 2; i++) {
        if (obj.popCharacter() != obj.dequeueCharacter()) {
            isPalindrome = false;
            break;
        }
    }
    //finally print whether string s is palindrome or not

    if (isPalindrome)
        console.log("The word, " + s + ", is a palindrome.");
    else
        console.log("The word, " + s + ", is not a palindrome.");
}