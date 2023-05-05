module.exports ={ 
    parser : "@typescript-eslint/parser",
    extends:[
        "plugin:@typescript-eslint/recommanded",
        "plugin:@typescript-eslint",
        "plugin:prettier/recommanded",        
    ],
    parseOptions:{
        ecmaVersion :2018,
        sourceType:'module,'
    },
    rules:{}
}