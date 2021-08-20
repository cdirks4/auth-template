// var twoSum = (nums, target) => {
// 	const differences = new Set();
// 	for (let i = 0; i < nums.length; i++) {
// 		let difference = target - nums[i];
// 		console.log(differences);
// 		if (differences.has(nums[i])) {
// 			index = nums.indexOf(difference);
// 			return [index, i];
// 		}
// 		differences.add(difference);
// 	}
// };
// console.log(twoSum([3, 2, 4], 6));

// var deleteNode = function (head, node) {
// 	return head;	// let found = '';
// 	// let walker = head;
// 	// while (head.next) {
// 	// 	if (head.val == node) {
// 	// 		found = head.next;
// 	// 		head.next = found.next;
// 	// 	} else {
// 	// 		head = head.next;
// 	// 	}
// 	// }
// 	// return walker;
// };
// function ListNode(val) {
// 	this.val = val;
// 	this.next = null;
// }
// const node = new ListNode(4);
// const node2 = new ListNode(5);
// const node3 = new ListNode(1);
// const node4 = new ListNode(9);
// node3.next = node4;
// node2.next = node3;
// node.next = node2;
// console.log(deleteNode(node, 5));
function matchingStrings(strings, queries) {
	// Write your code here

	let matching = [];
	let length = queries.length;
	console.log(length);
	let searchers = new Set(queries);
	for (let i = 0; i < strings.length; i++) {
		console.log(strings[i]);
		if (matching[i] === undefined && i < length) {
			matching[i] = 0;
		}
		if (searchers.has(strings[i])) {
			let index = queries.indexOf(strings[i]);
			if (index >= 0) matching[index]++;
		}
	}
	return matching;
}
let strings = ['depo', 'de', 'fgh', 'depo'];
let queries = ['depo', 'lmn', 'fgh'];
console.log(matchingStrings(strings, queries));
