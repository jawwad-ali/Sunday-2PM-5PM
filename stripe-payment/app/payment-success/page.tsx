interface IParams {
    searchParams: {
        amount: number
    }
}

const PaymentSuccess = ({ searchParams }: IParams) => {
    return (
        <div className="text-center w-full">
            <h1 className="text-6xl">Thank you for purchasing $ {searchParams.amount}</h1>
        </div>
    )
}

export default PaymentSuccess
