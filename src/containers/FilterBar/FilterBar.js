import React, { Component } from 'react'

export default class FilterBar extends Component {
    render() {
        return (
            <div className="col-lg-3">
                <div className="row">
                    <div className="col-12">
                        <OrderFilter />
                    </div>
                </div>
                
            </div>
        )
    }
}
