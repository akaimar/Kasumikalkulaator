const app = new Vue({
    el: '#app',
    data: {
        leheNimi: 'Tehingukasumi kalkulaator',
        ostuhind: 0,
        ostukogus: 0,
        myygihind: 0,
        myygikogus: 0,
        ostukulu: 0,
        myygikulu: 0,
        step: 0.01,
    },
    computed: {
        arvutaja: function(){
            let a = this.ostuhind;
            let b = this.ostukogus;
            let c = this.myygihind;
            let d = this.myygikogus;
            let e = this.ostukulu;
            let f = this.myygikulu;

            let calc_kogukulu = parseFloat(a * b);
            let calc_kasum = parseFloat((c * d) - (a * b)); //parseInt() või parseFloat() teisendab teksti numbriks
            let calc_kulu = parseFloat(e) + parseFloat(f); 
            let calc_netotulu = calc_kasum - calc_kulu;
            let breakeven = ((parseFloat(e) + parseFloat(f))/parseFloat(b)) + parseFloat(a);

            return 'Investeering: '+ calc_kogukulu + 'Tehingukasum: ' + (calc_kasum).toFixed(2) + ' Tehingukulud: ' + (calc_kulu).toFixed(2) + ' Netokasum: ' + (calc_netotulu).toFixed(2) + 'Breakeven: ' + (breakeven).toFixed(2);
        }
    }
});