import React from 'react'
import AppRoutes from './AppRoutes'
import { AuthProvider } from './context/AuthContext'
import ChatBot from './components/chatbot' // ✅ Import ChatBot

const App = () => {
  return (
    <div>
      <AuthProvider>
        <AppRoutes />
        <ChatBot /> {/* ✅ Chatbot visible on all pages */}
      </AuthProvider>
    </div>
  )
}

export default App
