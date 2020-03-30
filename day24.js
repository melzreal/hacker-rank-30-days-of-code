process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function Node(data) {
    this.data = data;
    this.next = null;
}
function Solution() {

    //check head isn't null
    //while there is a next node, go through each node using node.next
    //make a block scope lookup that always searches for the node after
    //should the node after the current be the same as the previous
    //set the linked node to the one after it 
    this.removeDuplicates = function (head) {
        if (!head)
            return head;
        let node = head;

        while (node.next) {
            let lookup = node.next;

            if (node.data == lookup.data) {
                node.next = node.next.next;
            } else {
                node = node.next;
            }

        }
        return head;
    }


    this.insert = function (head, data) {
        var p = new Node(data);
        if (head == null) {
            head = p;
        }
        else if (head.next == null) {
            head.next = p;
        }
        else {
            var start = head;
            while (start.next != null) {
                start = start.next;
            }
            start.next = p;
        }
        return head;

    };

    this.display = function (head) {
        var start = head;
        while (start) {
            process.stdout.write(start.data + " ");
            start = start.next;
        }
    };
}
function main() {
    var T = parseInt(readLine());
    var head = null;
    var mylist = new Solution();
    for (i = 0; i < T; i++) {
        var data = parseInt(readLine());
        head = mylist.insert(head, data);
    }
    head = mylist.removeDuplicates(head);
    mylist.display(head);
}		