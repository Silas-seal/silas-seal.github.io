
class AirProjects extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            associate : {
                appname : 'Associate portal',
                applink : '',
                appdesc : 'Airtel project to digitalize reporting structure and engagement of agents. '+
                'The app had two tiers, web and mobile (android) to allow tracking of airtel money sales and services.',
                mycontr : ['Structured the system blueprint (design).', 'Designed the web experience.',
                'Implemented backend services with C# (ASP.NET)', 'Developed a mobile (android) app '+
                'to communicate with the web api.', 'Collaborated in system and acceptance testing.',
                'Database development.'],
                apptech : 'C#, ASP.NET, SQL, Java, Html, JavaScript & CSS'
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div>
                <ProjectView project={this.state.associate} />
            </div>
        )
    }
}

class ProjectView extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="project">
                <div className="head">{this.props.project.appname}</div> <br/>
                <a href={this.props.project.applink} target='_blank'>
                    {this.props.project.applink}
                </a>
                <hr/>
                {this.props.project.appdesc} <p/>
                <h3>My Contribution</h3>
                <div className="detail">
                <ul type="square">
                    {this.props.project.mycontr.map((cont, key) => <li key={key}>{cont}</li> )}
                </ul> </div><p/>
                Skills Used : {this.props.project.apptech}
                <hr/>
            </div>
        );
    }
}

var el = document.getElementById('airprojects');

var root = ReactDOM.createRoot(el);

root.render(<AirProjects />);