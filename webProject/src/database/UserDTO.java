package database;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * User Data Access Objekt
 * 
 * @author mn/tb
 * @version 1.2
 */

public class UserDTO implements Serializable
{
	/**
	 * 
	 */
	private static final long serialVersionUID = -7272979590540794430L;
	/** Operatoer-identifikationsnummer (opr_id) i omraadet 1-99999999. Vaelges af brugerne */
	int UserId;                     
	/** Operatoernavn (opr_navn) min. 2 max. 20 karakterer */
	String Firstname; 
	/** Operatoernavn (opr_navn) min. 2 max. 20 karakterer */
	String Lastname;     
	/** Operatoer cpr-nr 10 karakterer */
	String CPR;                 
	/** Operatoer password min. 7 max. 8 karakterer */
	String Password; 
	List<String> roles;

	public UserDTO(){
		roles = new ArrayList<String>();
	}
    
    public int getUserId() { return UserId; }
	public void setUserId(int UserId) { this.UserId = UserId; }
	public String getFirstname() { return Firstname; }
	public void setFirstname(String Firstname) { this.Firstname = Firstname; }
	public String getLastname() { return Lastname; }
	public void setLastname(String Lastname) { this.Lastname = Lastname; }
	public String getCPR() { return CPR; }
	public void setCPR(String CPR) { this.CPR = CPR; }
	public String getPassword() { return Password; }
	public void setPassword(String Password) { this.Password = Password; }
	   public List<String> getRoles() {
			return roles;
		}

		public void setRoles(List<String> roles) {
			this.roles = roles;
		}
		public void addRole(String role){
			roles.add(role);
		}
	public String toString() { return "\n" + UserId + "\t" + Firstname + "\t" + Lastname + "\t" + CPR + "\t" + Password + "\t" + roles; }
}
