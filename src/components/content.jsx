import '../App.css';
import Myleftbar from './leftbar'
import Myright from './rightbar'
function content(){
    return (
        <div className="main">
                  <Myleftbar/>
            <p>This is the main content.</p>
            <Myright/>
            </div>              
    )
}
export default content