import { useEffect, useState } from 'preact/hooks'
import { createContext } from 'preact'
import Box from './components/box'
import SearchBar from './components/searchbar/searchbar'
import './app.css'
// Import the functions you need from the SDKs you need


export const SearchContext = createContext(null)

export function App() {

  const [input, setInput] = useState('')



  return (
    <>
    <SearchContext.Provider value={[input, setInput]}>
      <div className='HeadersTop'>
        <h1>Copilot</h1>
        <SearchBar/>
      </div>

      <div className="CardsTop">
            <div className="LeftColumTop">        
            <Box title ='General Information' 
            size="width: 450px; height: 280px"
            type='Information'/>
            <Box title ='Call History' 
            size="width: 450px; height: 250px"
            type='History'/>
            </div> 
            
            <div>
            <Box title ='Notes' 
            size="width: 450px; height: 540px"
            type='Notes'/>
            </div>
          
      </div>


        <div className='BottomCards'>
          
            <Box title ='CRM Sales history' 
            size="width: 950px; height: 340px"
            type='Sales'/>
            
        </div>

        </SearchContext.Provider>
 
    </>
  )
}
