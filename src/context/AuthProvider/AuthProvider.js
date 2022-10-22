import React, { Children, createContext, useEffect, useState } from 'react';


const AuthContext = createContext();

const AuthProvider = () => {
    const user = {displayName : 'sohag'}
   
    return (
        <div>
            {/* <AuthContext.Provider value={user}>
                {Children}
            </AuthContext.Provider> */}
        </div>
    );
};

export default AuthProvider;