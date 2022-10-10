var family = {
    'address':'Seoul',
    members : {},
    addFamily : function(age, name, role){
        this.members[role] ={
            age : age,
            name : name
        }
    },

    getHeadcount : function(){
        return Object.keys(this.members) // [ 'aunt', 'niece', 'dog' ]

       //        return (this.members) 
    /* {
    aunt: { age: 30, name: 'chloe' },
    niece: { age: 3, name: 'lyn' },
    dog: { age: 10, name: 'dangdangi' }
    }
    */
    }
}

family.addFamily(30,'chloe','aunt')
family.addFamily(3,'lyn','niece')
family.addFamily(10,'dangdangi','dog')
console.log(family.getHeadcount())