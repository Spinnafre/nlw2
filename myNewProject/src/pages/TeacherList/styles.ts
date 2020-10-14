import { StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#353535",
    },
    teacherList:{
        marginTop:-30,
    },
    searchForm:{
        marginBottom:8
    },
    Label:{
        color:'#d4c2ff',
        fontFamily:'Archivo_400Regular'
    },
    input:{
        backgroundColor:'#ffff',
        height:54,
        borderRadius:8,
        justifyContent:'center',
        paddingHorizontal:16,
        marginTop:4,
        marginBottom:16


    },
    buttonSubmit:{
        backgroundColor:'#19ca69',  
        height:70,
        width:'100%',
        borderRadius:8,
        justifyContent:"center",
        alignItems:'center',
    },
    submitButtonText:{
        fontFamily:'Archivo_700Bold',
        color:'#FFFFFF',
        fontSize:20
    },
    inputGroup:{
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    inputBlock:{
        width:'48%'
        
    }
    
})
export default styles
