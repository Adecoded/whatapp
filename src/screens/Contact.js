
import { FlatList} from 'react-native'


export default function ContactScreen() {


  return (
  <FlatList
    data={users}
    renderItem={({item}) => <ContactScreen user={item.user}/>}
  />
  )
}
