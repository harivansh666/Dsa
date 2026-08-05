// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addFirst(data) {
//     const newNode = new Node(data);
//     newNode.next = this.head;
//     this.head = newNode;
//   }
// }

// const list = new LinkedList();
// const final = list.addFirst(12);
// console.log(final);

class Node {
  constructor(data) {
    ((this.data = data), (this.next = null));
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this;
    this.tail = this.head;
    this.size++;
  }
  addAtLast(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;

      this.size++;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
    return this;
  }
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  printLL() {
    let temp = this.head;
    while (temp != null) {
      process.stdout.write(`${temp.data} -> `);
      temp = temp.next;
    }
  }
  insertAtIndex(data, index) {
    const newNode = new Node(data);
    if (index < 0 || this.size < index) {
      console.log("Invalid Index");
    }

    if (this.head < 0) {
      return this.addFirst(data);
    }

    let temp = this.head;

    for (let i = 1; i < index - 1; i++) {
      return temp.next;
    }
    newNode.next = temp.next;
    temp.next = newNode;
    this.size++;
    return this;
  }
  deleteAtIndex(index) {
    if (index > this.size || index < 0) {
      console.log("please Enter valid index");
    }
    let temp = this.head;
    for (let i = 1; i < index - 1; i++) {
      temp = temp.next;
    }
    this.size--;
    temp.next = temp.next.next;
  }

  // reversell() {
  //   let temp = this.head;
  //   let prev = null;
  //   while (temp != null) {
  //     let front = temp.next; // Save next node
  //     temp.next = prev; // Reverse current node's pointer
  //     prev = temp; // Move prev forward
  //     temp = front; // Move temp forward
  //   }
  //   this.head = prev;
  //   // return prev; // New head
  // }

  reversellRecursive() {
    let temp = this.head;
    if (temp != null || head.next === null) return temp;

    const newHead = this.reversellRecursive(temp.next);
    temp.next.next = temp;

    // break old link
    temp.next = null;

    return newHead;
  }
}

const list = new LinkedList();
list.addFirst(1);
list.addAtLast(2);
list.addAtLast(3);
list.addAtLast(4);
list.reversellRecursive(list);

// list.reversell();

list.printLL();
// list.insertAtIndex(8, 2);
// list.deleteAtIndex(4);
// console.log(list);
