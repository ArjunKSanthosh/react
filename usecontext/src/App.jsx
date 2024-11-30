import '../src/App.css'
import Content from './Content'
import Header from './Header'
import ThemeProvider from './ThemeProvider'
function App(){
    return(
        <>
        <ThemeProvider>
            <Header/>
            <Content/>
        </ThemeProvider>
       
        
        </>
    )
}
export default App