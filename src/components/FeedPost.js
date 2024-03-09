
import { StyleSheet, Image, Text, View } from "react-native";
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import likeImage from '../../assets/images/like.png'


const FeedPost = ({post}) =>{
  return (
   
      <View style={styles.post}>
        {/* aHeader */}
        <View style={styles.header}>
          <Image
            source={{ uri: post.User.image }}
            style={styles.profilePicture}
          />
          <View>

          <Text style={styles.name}>{post.User.name}</Text>
          <Text style={styles.createdAt}>{post.createdAt}</Text>
          </View>
          {/* Body */}
          
          <Entypo name="dots-three-horizontal" size={18} color="gray" style={{marginLeft:"auto"}} />
        </View>
        <View style={styles.body}>

          {post.description && (<Text style={styles.description}>{post.description}</Text>)}
          {post.image && (<Image source={{uri:post.image}} style={styles.image}/>)}
        </View>
          <View style={styles.footer}>
            <View style={styles.statsRow}>

              <Image source={likeImage} style={styles.likeImage}/>
              <Text style={styles.likedBy} >Elon Musk and {post.numberOfLikes} likes</Text>
              <Text style={styles.numberOfShares}>{post.numberOfShares} shares</Text>
            </View>
            <View style={styles.iconsRow}>
                <View style={styles.iconButton}>
                     <AntDesign name="like2" size={18} color={"gray"}/> 
                     <Text style={styles.iconButtonText}>Like</Text>
                </View>
                <View style={styles.iconButton}>
                     <FontAwesome5 name="comment-alt" size={18} color={"gray"}/> 
                     <Text style={styles.iconButtonText}>Comment</Text>
                </View>
                <View style={styles.iconButton}>
                     <MaterialCommunityIcons name="share-outline" size={18} color={"gray"}/> 
                     <Text style={styles.iconButtonText}>Share</Text>
                </View>
            </View>
            
          </View>
      </View>
      
    
  );
}

const styles = StyleSheet.create({
 
  post: {
    width: "100%",
    marginVertical:10,
    backgroundColor:'#fff',
  },
  header: {
    padding: 10,
    width: "100%",
    flexDirection: "row",
    alignItems:"center"
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight:10,
  },
  name:{
    fontWeight:'500'
  },
  body:{

    paddingHorizontal:10,
  },
  description:{
    lineHeight:18,
    marginBottom:5,
  },
  image:{
    width:"100%",
    aspectRatio:1,
    
  },
  footer:{
    paddingHorizontal:10,
    
  },
  statsRow:{
    paddingVertical:10,
    flexDirection:"row",
    alignItems:"center",
    borderBottom:StyleSheet.hairlineWidth,
    borderColor:"lightgray"
  },
  likeImage:{
    width:20,
    height:20,
    marginRight:5,
  },
  likedBy:{
    color:"gray"
  },
  numberOfShares:{
    marginLeft:"auto",
    color:'gray'
  },
  iconsRow:{
    paddingVertical:10,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  iconButton:{
    flexDirection:'row',
    alignItems:'center'
  },
  iconButtonText:{
    color:'gray',
    marginLeft:5,
  }
});


export default FeedPost;