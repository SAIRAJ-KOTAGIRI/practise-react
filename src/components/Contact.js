const Contact = () => {
    return (
        <div className="container">
            <h1 className="font-bold text-3xl p-4 m-4"> Contact Us</h1>
            <form>
                <input text="text" className="border border-black p-2 m-2" placeholder="name" />
                <input text="text" className="border border-black p-2 m-2" placeholder="message" />
                <button className="bg-gray-100 border border-black p-2 m-2 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact