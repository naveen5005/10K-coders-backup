import React from 'react'

const UserForm = ({user3,handleChange,handleButton,btnName}) => {
  return (
    <div>
            <form>
        <div className="mb-3">
          <label htmlFor="exampleInputUname" className="form-label">User Name</label>
          <input type="text" className="form-control" name='uname' value={user3.uname} onChange={(e)=>handleChange(e)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPwd" className="form-label">Password</label>
          <input type="password" className="form-control" name='pwd' value={user3.pwd} onChange={(e)=>handleChange(e)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">Email</label>
          <input type="email" className="form-control" name='email' aria-describedby="emailHelp" value={user3.email} onChange={(e)=>handleChange(e)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPresentGender" className="form-label">Present Gender</label><br />
          <select name="presentGender" value={user3.presentGender} onChange={(e)=>handleChange(e)} className='form-control'>
            <option value="--select any one option--">--select any one option--</option>
            <option value="I am a man">I am a man</option>
            <option value="I am a woman">I am a woman</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputInterestedGender" className="form-label">Interested Gender</label><br />
          <select name="interestedGender" value={user3.interestedGender} onChange={(e)=>handleChange(e)} className='form-control'>
            <option value="--select any one option--">--select any one option--</option>
            <option value="I want to find a man">I want to find a man</option>
            <option value="I want to find a woman">I want to find a woman</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputYear" className="form-label">Year</label><br />
          <select name="year" value={user3.year} onChange={(e)=>handleChange(e)} className='form-control'>
            <option value="--select any one option--">--select any one option--</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
            <option value="1994">1994</option>
            <option value="1993">1993</option>
            <option value="1992">1992</option>
            <option value="1991">1991</option>
            <option value="1990">1990</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputMonth" className="form-label">Month</label><br />
          <select name="month" value={user3.month} onChange={(e)=>handleChange(e)} className='form-control'>
            <option value="--select any one option--">--select any one option--</option>
            <option value="JAN">JAN</option>
            <option value="FEB">FEB</option>
            <option value="MAR">MAR</option>
            <option value="APR">APR</option>
            <option value="MAY">MAY</option>
            <option value="JUN">JUN</option>
            <option value="JUL">JUL</option>
            <option value="AUG">AUG</option>
            <option value="SEP">SEP</option>
            <option value="OCT">OCT</option>
            <option value="NOV">NOV</option>
            <option value="DEC">DEC</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputDate" className="form-label">Date</label><br />
          <select name="date" value={user3.date} onChange={(e)=>handleChange(e)} className='form-control'>
            <option value="--select any one option--">--select any one option--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
        </div>

        
        <button type="button" className="btn btn-primary" onClick={handleButton}>{btnName}</button>
      </form>
    </div>
  )
}

export default UserForm
