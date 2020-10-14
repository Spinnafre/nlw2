import { StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:"#353535",
        padding:40
    },
    img:{
        width:'100%',
        resizeMode:'contain'
    },
    title:{
        color:'#FFFFFF',
        fontFamily:'Archivo_400Regular',
        fontSize:20,
        lineHeight:30,
        marginTop:80
        
    },
    Buttoncontainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        marginTop:40
    },
    ConnectionsText:{
        fontFamily:'Archivo_400Regular',
        fontSize:16,
        lineHeight:20,
        marginTop:40,
        maxWidth:340,
        color:'#FFFFFF',
        
    },
    ButtonText:{
        fontFamily:'Archivo_700Bold',
        color:'#FFFFFF',
        fontSize:20
    },
    button:{
        height:100,
        width:'40%',
        borderRadius:8,
        justifyContent:"center",
        alignItems:'center',
        padding:24
        
    },
    Buttonprimary:{
        backgroundColor:'#8257E5',        
    },
    ButtonSecondary:{
        backgroundColor:'#19ca69',  
    },
    titleBold:{
        fontFamily:'Poppins_600SemiBold',
    }
})
export default styles
