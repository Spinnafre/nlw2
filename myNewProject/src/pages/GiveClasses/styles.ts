import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:"#353535",
        padding:40
    },
    content:{
        flex:1,
        justifyContent:'center',
    },
    title:{
        color:'#FFFF',
        fontSize:32,
        lineHeight:37,
        maxWidth:180,
        fontFamily:'Archivo_700Bold'
    },
    description:{
        marginTop:26,
        color:'#E6E6F0',
        fontSize:18,
        lineHeight:26,
        maxWidth:250,
        fontFamily:'Archivo_400Regular'
    },
    ButtonText:{
        fontFamily:'Archivo_700Bold',
        color:'#FFFFFF',
        fontSize:20
    },
    button:{
        height:70,
        width:'100%',
        borderRadius:8,
        justifyContent:"center",
        alignItems:'center',
        padding:24,
        marginVertical:40
        
    },
    Buttonprimary:{
        backgroundColor:'#19ca69'       
    },
    
})

export default styles