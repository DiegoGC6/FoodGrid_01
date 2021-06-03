import React from 'react'
import { StreamChat } from 'stream-chat'
import HeaderLoggedIn from '../components/HeaderLoggedIn'
import {  
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react'

import 'stream-chat-react/dist/css/index.css'


const chatClient = StreamChat.getInstance('dz5f4d5kzrue')
const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoib3JhbmdlLWJsb2NrLTciLCJleHAiOjE2MjIyNDgzMjN9.J_5XaLPjRm_e9gd_ORyvas3qNBDFd3140GkeoV4SXYk'

chatClient.connectUser(
  {
    id: 'orange-block-7',
    name: 'orange',
    image: 'https://getstream.io/random_png/?id=orange-block-7&name=orange',
  },
  userToken
)

const channel = chatClient.channel('messaging', 'orange-block-7', {
  // add as many custom fields as you'd like
  image: '',
  name: 'Your Chat Today',
  members: ['orange-block-7'],
})

const OurChat = () => (
  <>
  <HeaderLoggedIn />
  <div style={{height:"350px;",width:"900px", marginRight: "500px", marginLeft: "500px", padding: "0", backgroundColor: "red"}}>
      <Chat client={chatClient} theme='messaging light'>
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  </>    
)

export default OurChat
