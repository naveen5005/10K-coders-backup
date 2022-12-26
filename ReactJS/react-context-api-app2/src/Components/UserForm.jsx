import React from 'react'

const UserForm = ({ users2, handleChange, handleButton, btnName }) => {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputUniveristy" className="form-label">University</label>
                    <input type="text" className="form-control" name='university' value={users2.university} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputInstiute" className="form-label">Institute</label>
                    <input type="text" className="form-control" name='institute' value={users2.institute} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <select className="form-control" name="branch" value={users2.branch} onChange={(e) => { handleChange(e) }}>
                        <option value="">--select any branch--</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="MECH">MECH</option>
                        <option value="CSE">CSE</option>
                        <option value="CIVIL">CIVIL</option>
                    </select>
                </div>
                <div className="mb-3">
                    <select className="form-control" name="degree" value={users2.degree} onChange={(e) => { handleChange(e) }}>
                        <option value="">--select any degree--</option>
                        <option value="Bachelor's">Bachelor's</option>
                        <option value="Masters">Masters</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Post Graduate">Post Graduate</option>
                    </select>
                </div>
                <div className="form-check">
                    <input className="form-check-input" checked={users2.status === "Completed"} value={"Completed"} onChange={(e) => { handleChange(e) }} type="radio" name="status" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Completed
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" checked={users2.status === "Pursuing"} value={"Pursuing"} onChange={(e) => { handleChange(e) }} type="radio" name="status" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Pursuing
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputavgCPI" className="form-label">Areas of Interest</label>
                    <div className="form-check">
                        <input className="form-check-input" name='areasofInterest' type="checkbox" value="singing" onChange={(e) => { handleChange(e) }} checked={users2.areasofInterest.indexOf("singing") > -1} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            singing
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" name='areasofInterest' type="checkbox" value="coding" onChange={(e) => { handleChange(e) }} checked={users2.areasofInterest.indexOf("coding") > -1} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            coding
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" name='areasofInterest' type="checkbox" value="playing" onChange={(e) => { handleChange(e) }} checked={users2.areasofInterest.indexOf("playing") > -1} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            playing
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputavgCPI" className="form-label">AvgCPI</label>
                    <input type="number" className="form-control" name='avgCPI' value={users2.avgCPI} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputExperience" className="form-label">Experience</label>
                    <input type="number" className="form-control" name='experience' value={users2.experience} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputWebsite" className="form-label">WebSite</label>
                    <input type="url" className="form-control" name='website' value={users2.website} onChange={(e) => { handleChange(e) }} />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleButton}>{btnName}</button>
            </form>
        </div>
    )
}

export default UserForm
