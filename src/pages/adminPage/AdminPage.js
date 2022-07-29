import React from 'react'
import './AdminPage.css'

const AdminPage = () => {
    return (
        <form action="">
            <div className='admin'>
            <div className="left">
                    <div className="box">
                        <input type="text" placeholder='Title' className='title'/>
                        <div className="price">
                            <div>
                                <span className="title">Price</span>
                                <input type="number" />
                            </div>
                            <div>
                                <span className="title">In Stock</span>
                                <input type="number" />
                            </div>
                        </div>

                        <div>
                            <textarea name="" id="" cols="90" rows="7" placeholder='Description'></textarea>
                        </div>

                        <div>
                            <textarea name="" id="" cols="90" rows="8" placeholder='Content'></textarea>
                        </div>
                        <select>
                            <option value="all">All products</option>
                            <option value="macbook">macbook</option>
                            <option value="iMac">iMac</option>
                            <option value="iPad">iPad</option>
                        </select>

                        <div className="btn">
                            <input type="submit" value="submit" className='button' />
                        </div>
                    </div>
            </div>

            <div className="right">
                <div className='upload'>
                    <span>Upload</span>
                    <input type="text" />
                </div>

                <div className='sale'>
                    <small>Sale</small>
                    <input type="number" name="" id="" />
                </div>
            </div>
            
        </div>
        </form>
    )
}

export default AdminPage