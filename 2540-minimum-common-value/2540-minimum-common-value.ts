function getCommon(nums1: number[], nums2: number[]): number {
    let i=0,j=0
    while(nums1.length>i && nums2.length>j){
        if(nums1[i]==nums2[j]) return nums1[i]

        if(nums1[i]<nums2[j]){
            i++
        }else{
            j++
        }
    }
    return -1
};