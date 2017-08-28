const aritGeo =  (arr) => {
    if(Array.isArray(arr)){
        const diff = arr[1] - arr[0];
        const ratio = arr[1] / arr[0];

        let arith = true;
        let geo = true;

        for(let i = 0; i < arr.length - 1; i++)
        {
            if( arr[i + 1] - arr[i] !== diff )
                arith = false;
            if(arr[i + 1] / ratio !== arr[i])
                geo = false;
            }

        if(arr.length === 0) {
                return 0
        }else {
            if(arith === true) {
                return "Arithmetic";
            }
            else if(geo === true){
                return "Geometric";
            }
            else{
                return -1;
            }
        }
    }
    else {
        return "Invalid Argument";
    }
};

 export default aritGeo;
