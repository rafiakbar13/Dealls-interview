import React from "react";

const CartsInfo = ({ cart, users }: any) => {
    if (!users) return <div>loading...</div>
    const user = users.find((user: any) => user.id === cart.userId);
    return (
        <article className="w-full">
            <h4>Details</h4>
            <div key={cart.id} className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 mt-3 bg-slate-200  p-8 border-2 border-slate-500">
                <p>User: {user.firstName}</p>
                <p>Total Products: {cart.totalProducts}</p>
                <p>Added On: 22-Januari-2022</p>
                <p>TotalAmount: {cart.total}</p>
            </div>
        </article>
    );
};

export default CartsInfo;
