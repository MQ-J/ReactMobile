export function Footer() {
    return (
        <div className="d-flex justify-content-around border border-dark rounded fixed-bottom m-3">
            <div className="d-flex flex-column justify-content-center w-25">
                <a className="btn p-0" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" role="button">
                    <p className="text-muted text-center text-nowrap mb-0">Bootstrap 5</p>
                </a>
            </div>

            <div className="d-flex flex-column justify-content-center w-25">
                <a className="btn p-0" href="https://pt-br.reactjs.org/" role="button">
                    <p className="text-muted text-center mb-0">React</p>
                </a>
            </div>
        </div>
    )
}