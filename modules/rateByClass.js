export const rateByClass = (rate) => {
  if(rate >= 8){
    return 'high-rating'
  }else if(rate >= 5){
    return 'medium-rating'
  }else{
    return 'bad-rating'
  }
}