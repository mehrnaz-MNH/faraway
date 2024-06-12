import React from 'react'

export const Stats = ({ list }) => {

    if (!list.length) {

        return (
            <div className="stats">
                <h3>start by adding some Items</h3>
            </div>
        )
    }


    const packedCount = list.filter(item => item.packed).length
    const allCount = list.length;

    return (
        <div className="stats">
            {packedCount === allCount ?
                <h3>You are ready for your flight </h3> :
                <h3>You Have {allCount} on your list . You have already packed {packedCount} .  {((packedCount / allCount) * 100).toFixed(1)} %</h3>}


        </div>
    )
}



