const mat = [[1,1],[1,1]];


function sumOfAllSubMatrices(mat){
    let n = mat.length;

    let sum =0;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            sum = sum + (i+1)*(j+1)*(n-i)*(n-j)*mat[i][j];
        }
    }
    return sum;
}

console.log(sumOfAllSubMatrices(mat));