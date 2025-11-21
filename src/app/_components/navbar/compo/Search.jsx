

function Search() {
    return (<>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn border-none lg:hidden" onClick={() => document.getElementById('my_modal_2').showModal()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
        </button>
        {/* This is a modal. for small screen */}
        <dialog id="my_modal_2" className="modal modal-top lg:hidden">

            <div className="modal-box pb-8" >
                {/* This form will close the modal when clicked. */}
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {/*-------------- Main Modal Content----------------- */}
                <h3 className="font-bold pb-4">Perform Search </h3>
                <div className="join lg:hidden  rounded bg-accent w-full">
                    <input type="text" className="input join-item border-0 bg-base-300 focus:outline-0 w-full" placeholder="Search" />
                    <button className="btn  bg-base-300 join-item " >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                    </button>
                </div>
            </div>
            {/* This form will close the modal if clicked outside (dialog method closes a modal) */}
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>


        {/* This is default searchbar for large screen */}
        <div className="hidden lg:join  rounded-full bg-accent">
            <input type="text" className="input join-item border-0 bg-base-300 focus:outline-0 w-60" placeholder="Search" />
            <button className="btn  bg-base-300 join-item " >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
            </button>
        </div>
    </>)
}

export default Search;
