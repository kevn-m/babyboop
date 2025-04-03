"use client"
import Image from "next/image"
// import f1GPTLogo from "./assets/f1gpt-logo.png"
import { useChat } from "@ai-sdk/react"

import { Message } from "ai"

import Bubble from "./components/Bubble"
import PromptSuggestionsRow from "./components/PromptSuggestionsRow"
import LoadingBubble from "./components/LoadingBubble"
import { FaPaperPlane } from "react-icons/fa"

const Chat = () => {
  const {
    input,
    handleInputChange,
    handleSubmit,
    append,
    isLoading,
    messages,
  } = useChat()

  const noMessages = !messages || messages.length === 0

  const handlePromptClick = (promptText: string) => {
    const msg: Message = {
      id: crypto.randomUUID(),
      content: promptText,
      role: "user" as const,
    }
    append(msg)
  }

  return (
    <main>
      <section className={noMessages ? "" : "populated"}>
        {noMessages ? (
          <>
            <p>Ask me anything about the F1!</p>
            <PromptSuggestionsRow onPromptClick={handlePromptClick} />
            <br />
          </>
        ) : (
          <div className="messages-container">
            {messages.map((message, index) => (
              <Bubble key={index} message={message} />
            ))}
            {isLoading && <LoadingBubble />}
          </div>
        )}
      </section>
      <form onSubmit={handleSubmit}>
        <input
          className="question-box"
          onChange={handleInputChange}
          value={input}
          placeholder="Ask me something..."
        />
        <button type="submit" aria-label="Send message">
          <FaPaperPlane />
        </button>
      </form>
    </main>
  )
}

export default Chat
