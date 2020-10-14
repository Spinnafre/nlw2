import { StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#FFFFFF",
        borderWidth:1,
        borderColor:'#E6E6F0',
        borderRadius:8,
        overflow:'hidden',
        marginBottom:16,
    },
    profileInfo:{
        marginLeft:16,

    },
    profile:{
        flexDirection:'row',
        alignItems:'center',
        padding:24,
    },
    name:{
        fontFamily:'Archivo_700Bold',
        color:'#353535',
        fontSize:20,
        lineHeight:35
    },
    subject:{
        fontFamily:'Archivo_700Bold',
        color:'#9C98A6',
        fontSize:12,
    },
    avatar:{
        width:64,
        height:64,
        borderRadius:32,
        borderColor:'#eee'
    },
    bio:{
        fontFamily:'Archivo_400Regular',
        color:'#6a6188',
        marginHorizontal:24,
        fontSize:14,
        lineHeight:24
    },
    ButtonsContainer:{
        flexDirection:'row',
        marginTop:16,
        padding:24
    },
    FavoriteButton:{
        width:56,
        height:56,
        borderRadius:8,
        marginRight:8,
        backgroundColor:'#8257E5',
        alignItems:'center',
        justifyContent:'center'

    },
    favorited:{
        backgroundColor:'#e33d3d'
    },
    ContactButton:{
        flex:1,
        borderRadius:8,
        marginRight:8,
        backgroundColor:'#04d361',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    ContactButtonText:{
        color:'#fff',
        fontFamily:'Archivo_700Bold',
        fontSize:16,
        marginLeft:16
    },
    footer:{
        backgroundColor:'#fafafc',
        marginTop:24,
        padding:24,
        alignItems:'center',

    },
    price:{
        fontFamily:'Archivo_400Regular',
        color:'#6a6188',
        marginHorizontal:24,
        fontSize:14,
        lineHeight:24

    },
    priceValue:{
        fontFamily:'Archivo_700Bold',
        color:'#8257E5',
        fontSize:20,
    

    },
    
})
export default styles