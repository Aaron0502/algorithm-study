import { selectionSortTest } from "./01_easy_sort/selectionSort";
import { bubbleSortTest } from "./01_easy_sort/bubbleSort";
import { insertionSortTest } from "./01_easy_sort/insertionSort";
import { mergeSortTest } from "./02_nlogn_sort/mergeSort";
import { smallSumTest } from "./02_nlogn_sort/smallSum";
import { reversePairsTest } from "./02_nlogn_sort/reversePairs";
import { quickSortTest } from "./02_nlogn_sort/quickSort";
import { heapSortTest } from "./03_heap_sort/heapSort";
import { testPriorityQueue } from "./data-structure";
import { sortedArrDistanceLessKTest } from "./03_heap_sort/sortedArrDistanceLessK";
import { countSortTest } from "./03_heap_sort/countSort";
import { radixSortTest } from "./03_heap_sort/radixSort";
// import { testCopyRandomList } from "./04_linked_list/copyRandomList";
import { prevOrderTreeTest } from "./05_binary_tree/preOrderTravel";
import { inOrderTreeTest } from "./05_binary_tree/inOrderTravel";
import { posOrderTreeTest } from "./05_binary_tree/posOrderTravel";
import { levelOrderTreeTest } from "./05_binary_tree/levelOrderTravel";

selectionSortTest();
bubbleSortTest();
insertionSortTest();
mergeSortTest();
smallSumTest();
reversePairsTest();
quickSortTest();
heapSortTest();
testPriorityQueue();
sortedArrDistanceLessKTest();
countSortTest();
radixSortTest();
// console.log(99, testCopyRandomList());
prevOrderTreeTest();
inOrderTreeTest();
posOrderTreeTest();
levelOrderTreeTest();

function App() {
  return <div>test</div>;
}

export default App;
