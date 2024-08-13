from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

# Create a new chatbot instance
chatbot = ChatBot('SimpleBot')

# Create a new trainer for the chatbot
trainer = ChatterBotCorpusTrainer(chatbot)

# Train the chatbot on the English corpus
trainer.train('chatterbot.corpus.english')

# Get a response to an input statement
while True:
    try:
        user_input = input("You: ")
        bot_response = chatbot.get_response(user_input)
        print(f"Bot: {bot_response}")

    except (KeyboardInterrupt, EOFError, SystemExit):
        break
