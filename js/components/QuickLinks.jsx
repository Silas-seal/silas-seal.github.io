//Quick links component

function QuickLinks() {
    return (
        <div className="quick">
            <table cellPadding={7} cellSpacing={7}>
                <tbody><tr>
                    <td align="center" valign="center">
                        <a href="https://m.facebook.com/muwanguzi.silas" target='_blank'>
                            <img src='images/facebook.png' className='icon' />
                        </a>
                    </td>
                    <td align="center" valign="center">
                        <a href="https://ug.linkedin.com/in/muwanguzi-silas-3b17181ab" target='_blank'>
                            <img src='images/linkedin.png' className='icon' />
                        </a>
                    </td>
                    <td align="center" valign="center">
                        <a href="https://github.com/Silas-seal" target='_blank'>
                            <img src='images/github.png' className='icon' />
                        </a>
                    </td>
                    <td align="center" valign="center">
                        <a href="https://www.hackerrank.com/silas_seal7" target='_blank'>
                            <img src='images/hackerrank.png' className='icon' />
                        </a>
                    </td>
                </tr></tbody>
            </table>
        </div>
    );
}

var el = document.getElementById('quicklinks');

var root = ReactDOM.createRoot(el);

root.render(<QuickLinks />);