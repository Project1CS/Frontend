import "./AdminForm.css"
import robe from '../images/robe.jpg'
import PhotoAdmin from "./PhotoAdmin";
function AdminForme(){
    return(
        <div className="ContentAdminF">
            <div className="FormContent">
             <form className="form">
             <div className="ProfileImage">
             <PhotoAdmin/>
             </div>
             <div className="InfoAdmin">
               <div className='inputText'>
                 <label for="fullName" > Full Name</label>
                 <input type="email" name="fullName" id="fullName" class="input-form" />
               </div>
              
               <div className='inputText'>
                 <label for="password"> Password</label>
                 <input type="password" name="Password" id="password" class="input-form" />
               </div>
               <div className='inputText'>
                 <label for="confirmPassword" > Confirm Password</label>
                 <input type="password" name=" Confirm_Password" id="confirmPassword" class="input-form" />
               </div>
               <div className="button">
                 <button> Save </button>
             </div>
             </div>
            
             </form>
           
            </div>
        </div>
    )

}
export default AdminForme;