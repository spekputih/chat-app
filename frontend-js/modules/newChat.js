import Noty from "./Noty"
import moment from "moment"
import axios from "axios"

export default class Chat {
    constructor(targetUser){
        this.openConnection()
        this.targetUser = targetUser
        this.username
        this.avatar
        this.formInput = document.querySelector(`#input-${targetUser}`)
        this.chatLog = document.querySelector(`#chatLog-${targetUser}`)
        this.chatLogBox = document.querySelectorAll(`.message-${targetUser}`)
        this.formChat = document.querySelector(`#formChat-${targetUser}`)
        this.descriptionChannel = document.querySelector(`#description-${targetUser}`)
        this.descriptionChannel.previousValue = document.querySelector(`#description-${targetUser}`).innerHTML
        this.formInput.previousValue = ""
        this.dateChannel = document.querySelector(`#date-${targetUser}`)
        this.dateChannel.previous = this.dateChannel.innerHTML
        this.convertDateChannel()
        this.channelList = document.querySelector("#channel-list")
        this.isRemainingMessageExist = true
        this.messageCount = 20
        this.count = 20
        this.chatBoxOther = document.querySelectorAll(".other-" + this.targetUser)
        this.chatBoxAddIntersection()
        // this.previousDescriptionValue = document.querySelector(`#description-${targetUser}`).innerHTML
        
        console.log(this.chatBoxOther,".chat-box-other ." + this.targetUser)
        console.log(moment)
        this.event()
    }
    // event
    event(){
        console.log(this.descriptionChannel.previousValue)
        this.formChat.addEventListener("submit", (e)=>{
            e.preventDefault()
            this.sendMessageToServer()            
        })

        this.formInput.addEventListener("keyup", (e)=>{
            if(e.key != "Enter"){
                this.isDifferent(this.formInput, this.sendActivity)
            }
        })

        window.addEventListener("offline", ()=>{
            this.sendOnlineOrOfflineStatus("offline")
       })
        window.addEventListener("online", ()=>{
            this.sendOnlineOrOfflineStatus("online")
        })
        
        this.chatLog.addEventListener("scroll", (scroll)=>{
            this.retrieveMsgOnScroll()
        })
        
    }

    // methods
    chatBoxAddIntersection(){
        this.observer = new IntersectionObserver((entries)=>{
            
            if(entries.length > 0 ){
            //    console.log(entries[0].target.id, entries)
               for (let i = 0; i < entries.length; i++) {
                    if(entries[0].intersectionRatio == 0 && this.targetUser && this.username){
                        this.hasReceivedChat(entries[i].target.id)
                        
                    }
                    if(entries[i].isIntersecting && this.targetUser && this.username){
                        this.hasReadChat(entries[i].target.id)
                        this.unObserve(entries[i].target.id)    
                    }  
               }               
            }
        }, {
            root: this.chatLog,
            threshold: 0.2
        })
        this.chatBoxOther.forEach((chatBox)=>{
            this.observer.observe(chatBox)
            console.log("chatbox observed", chatBox)
        })
    }
    unObserve(messageId){
        this.singleChatOther = document.getElementById(messageId)
        console.log("single chat unobserve", this.singleChatOther)
        this.observer.unobserve(this.singleChatOther)
    }
    hasReadChat(messageId){     
        this.chatters = [this.username, this.targetUser]
        this.chatters.sort()   
        this.socket.emit('hasReadUpdate', {messageId: messageId, chatters: this.chatters, to: this.targetUser})       
    }
    hasReceivedChat(messageId){
        this.chatters = [this.username, this.targetUser]
        this.chatters.sort()   
        this.socket.emit('hasReadUpdate', {messageId: messageId, chatters: this.chatters, to: this.targetUser})
    }

    retrieveMsgOnScroll(){
        if(this.chatLog.scrollTop == 0){
            let previousHeight = this.chatLog.scrollHeight
            let currentHeight, topPosition
            console.log("fetching data...")
            // sort the name to query from database
            let name = [this.targetUser, this.username]
            name.sort()
            if(this.isRemainingMessageExist){
                axios.post("/get-chat-message", {queryName: name, count: this.messageCount} ).then((response)=>{
                    response.data[0].forEach((data, index)=>{
                        if(data.from === this.username){
                            if(data.isStatus == "sent"){
                                console.log(index)
                                this.chatLog.insertAdjacentHTML("afterbegin", 
                                `<div class="chat-log-box">
                                    <div id="${data.messageId}" class="chat-box-me">
                                        <p>${data.message}</p>
                                        <span class="time-chat"><span class="tc">11:20</span>
                                        <i class="fas fa-smile-wink" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div class="box-clear"></div>
                                </div>`)
                            }else{
                                console.log(index)
                                this.chatLog.insertAdjacentHTML("afterbegin", 
                                `<div class="chat-log-box">
                                    <div id="${data.messageId}" class="chat-box-me">
                                        <p>${data.message}</p>
                                        <span class="time-chat"><span class="tc">11:20</span>
                                        <i class="fas fa-smile-wink ${data.isStatus}" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div class="box-clear"></div>
                                </div>`)
                            }
                        }else{
                            console.log(index)
                            this.chatLog.insertAdjacentHTML("afterbegin", `<div class="chat-log-box message-${data.to}">
                            <div id="${data.messageId}" class="chat-box-other other-${data.from}">
                                <h6 class="name">${data.from}</h6>
                                <p class="message">${data.message}</p>   
                                <span class="time-chat"><span class="tc">11:20</span></span>                     
                            </div>
                            <div class="box-clear"></div>`)
                        }
                           
                    })
                    if(response.data[0].length === 0){
                        this.isRemainingMessageExist = false
                    }
                currentHeight = this.chatLog.scrollHeight
                topPosition = currentHeight - previousHeight
                this.chatLog.scrollTop = topPosition
                this.messageCount+=this.count
            }).catch((errors)=>{
                console.log(errors)
            })
        }
    }
}

    convertDateChannel(){
        let converting = this.dateChannel.innerHTML 
        console.log(typeof(converting))
        converting = moment(converting)
        converting.format("dddd Mo MMM YYYY") 
    }
    sendOnlineOrOfflineStatus(status){
        this.socket.emit("sendStatusOnlineOrOffline", {status: status, from: this.username})
    }
    isDifferent(el, handler){
        if(el.previousValue != el.value){
            handler.call(this)
        }
        el.previousValue = el.value
    }
    
    sendMessageToServer(){
        
        if(this.formInput.value != "" && this.username != this.targetUser){

            this.socket.emit("sendFromBrowser", {
                username: this.username,
                message: this.formInput.value,
                avatar: this.avatar,
                to: this.targetUser
            }, (response)=>{
                console.log(this.formInput.value)
                this.response = response.messageId
                this.isStatus = response.isStatus
                if (this.isStatus == "sent") {
                    console.log(this.isStatus)
                    this.chatLog.insertAdjacentHTML("beforeend", `<div class="chat-log-box">
                    <div id="${this.response}" class="chat-box-me">
                    <p>${this.formInput.value}</p>
                    <span class="time-chat"><span class="tc">11:20</span>
                    <i class="fas fa-smile-wink" aria-hidden="true"></i>
                    </span>
                    </div>
                    <div class="box-clear"></div>
                    </div>`)
                    
                }else if(this.isStatus == "received"){
                    console.log(this.isStatus)
                    this.chatLog.insertAdjacentHTML("beforeend", `<div class="chat-log-box">
                    <div id="${this.response}" class="chat-box-me">
                    <p>${this.formInput.value}</p>
                    <span class="time-chat"><span class="tc">11:20</span>
                        <i class="fas fa-smile-wink received" aria-hidden="true"></i>
                    </span>
                    </div>
                    <div class="box-clear"></div>
                    </div>`)
                    
                }else{
                    console.log(this.isStatus)
                    this.chatLog.insertAdjacentHTML("beforeend", `<div class="chat-log-box">
                    <div id="${this.response}" class="chat-box-me">
                    <p>${this.formInput.value}</p>
                    <span class="time-chat"><span class="tc">11:20</span>
                    </span>
                    </div>
                    <div class="box-clear"></div>
                    </div>`)
                    
                }
                this.descriptionChannel.previousValue = this.formInput.value
                    this.descriptionStatusUpdate(this.formInput.value, this.targetUser)        
                    console.log(this.username)
                    this.chatLog.scrollTop = this.chatLog.scrollHeight
                    this.formInput.value = ""
                    this.formInput.focus()
                
            })
            
        
        // this.updateDate()
        }
        
        // console.log(this.chatLog.scrollTop)
    }

    openConnection(){
        this.socket = io()
        console.log(this.socket)
		this.socket.on("welcome", data => {
			this.username = data.username
            this.avatar = data.avatar
            // console.log(data)
        })

        this.socket.on("privateMessageClass", (data, response)=>{
            // console.log("prvataClass")
            this.displayMessageFromServer(data)
            response(true)
        })
        this.socket.on("userOnline", (data)=>{
            this.userOnlineHandler(data)    
        })
        this.socket.on('sendActivityFromServer', (data)=>{
            // console.log("activity")
            this.sendActivityHandler(data)
        })

        this.socket.on("readChat", (data)=>{
            this.updateReadMessage(data)
        })
        
		
    }

    updateReadMessage(data){
        
        let element = document.getElementById(data.messageId)
        console.log(element, data.messageId)
        
        if(element.children[1].children[1]){
            
            if(element.children[1].children[1].classList[2] != "read"){
                console.log(element.children[1].children[1].classList[2])
                if(element.children[1].children[1].classList[2] === "received"){
                    element.children[1].children[1].classList.remove("received")
                    element.children[1].children[1].classList.add("read")
                }else if(element.children[1].children[1].classList[2] === "sent"){
                    element.children[1].children[1].classList.remove("sent")
                    element.children[1].children[1].classList.add("read")
                }else if(element.children[1].children[1].classList[2] === undefined){
                    element.children[1].children[1].classList.add("read")
                }
                
            }
        }
        //     element.add("read")
        // if(element[2] != "read"){
            
        // }
    }

    userOnlineHandler(data){
        this.topChatDescription = document.querySelector("#chatDescription-"+ data.from)
        if(this.topChatDescription){
                if(data.status == "online"){
                    this.topChatDescription.innerHTML = "Online"
                }else{
                    this.topChatDescription.innerHTML = "Offline"
                    
                }
            }
    }

    sendActivityHandler(data){
        // this.descriptionChannel.style.color = "green"
        if(data.activity == "typing"){
            this.descriptionStatusUpdate(`${data.from} is typing`, data.from, data.activity)
        }else if(data.activity == null){
            this.descriptionStatusUpdate(this.descriptionChannel.previousValue, data.from, null)
        }
        
        // this.descriptionChannel.style.color = "black"
    }
    sendActivity(){
        this.socket.emit("sendActivity", {
            to: this.targetUser,
            from: this.username,
            activityType: "typing"
        })
        clearTimeout(timeOut)
        console.log("sendActivity function", this.descriptionChannel.previousValue)
        let timeOut = setTimeout(()=> {
            this.socket.emit("sendActivity", {to: this.targetUser, from: this.username, activityType: null})
        }, 2000)
    }
    
    displayMessageFromServer(data){
        console.log(data)
        this.chatLog = document.querySelector(`#chatLog-${data.from}`)

        if(data.message != ""){
            this.chatLog.insertAdjacentHTML("beforeend", `<div class="chat-log-box">
            <div id="${data.messageId}" class="chat-box-other other-${data.from}">
                <h6 class="name">${data.from}</h6>
                <p class="message">${data.message}</p>   
                <span class="time-chat"><span class="tc">11:20</span></span>                     
            </div>
            <div class="box-clear"></div>`)
            this.descriptionChannel.previousValue = data.message
            this.descriptionStatusUpdate(data.message, data.from)
            this.singleChatBox = document.getElementById(data.messageId)
            this.observer.observe(this.singleChatBox)
        }
        
        console.log("from server", this.descriptionChannel.previousValue)
        this.chatLog.scrollTop = this.chatLog.scrollHeight
    
        // console.log(this.chatLog.scroll
    }
    
    descriptionStatusUpdate(message, user, activity){
        // console.log(message, user)
        this.descriptionChannel = document.querySelector(`#description-${user}`)
        this.descriptionChannel.innerHTML = message
        console.log(message, this.descriptionChannel.previousValue)
        if(activity == "typing"){
            this.descriptionChannel.style.color = "green"
        }else{
            this.descriptionChannel.style.color = "black"
        }
        console.log("element " + this.descriptionChannel.innerHTML)
        
        
    }

    updateDate(){
        let m = moment()
        m.format("dddd ")
        this.dateChannel.innerHTML = m.format("dddd Mo MMM YYYY")
    }

}