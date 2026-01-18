import React from 'react';
function MemberCard({name, role}) {
    return(
        <>
        <h5>Name:{name}</h5>
        <h5>Role:{role}</h5>
        </>
    )
}
export default MemberCard;