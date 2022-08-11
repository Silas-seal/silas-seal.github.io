//Projects completed at Remote Station

class RsProjects extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            reengineering : {
                appname : 'Re-engineering',
                applink : 'https://github.com/Silas-seal/Innerveil',
                appdesc : 'This project was to rebuild a web application using Java technologies. '+
                'The target was to add functionalities, optimize performance and maximize security.',
                mycontr : ['Reverse engineering to acquire new system specifications.', 
                'Coding and testing a reusable business api for the new app.',
                'Writing Java servlets to handle bulk client requests.',
                'Implemeting Restful web services to be accessed by both web and app clients.',
                'Database administration [MySQL]', 'Collaborating in system and acceptance testing.',
                'Delivery / deployment.'],
                apptech : 'Java, Junit, Jenkins, JavaScript, SQL, Vue.js'
            },
            scoasoft : {
                appname : 'Scoasoft',
                applink : 'https://github.com/Silas-seal/Scoasoft',
                appdesc : 'Institution management software to automate data'+
                ' processing and presentation in adminstration departments. These include: Profiles, '+
                'Performance, Payments and Attendance. The target software was both desktop and web.',
                mycontr : ['Analysing and designing the system.','Building app GUI Nodes and Panels.',
                'Coding and testing of api components.','Integration and System testing.', 
                'Database administration.', 'Writing reusable frontend React Componets.', 
                'Collaboration on backend programming using Node.js.'],
                apptech : 'Java, JavaFX, Junit, SQL, React.js, Node.js, Html & CSS'
            },
            jeumxtool : {
                appname : 'JeumxTool',
                applink : 'https://jeumxtool.herokuapp.com/',
                appdesc : 'A Java developer tool targeting JavaFX runtime and application packaging '+
                'on desktop platforms. It\'s a self inspired project, so I developed it  from scratch.',
                mycontr : ['Structured and designed specifications.', 'Developed the components '+
                'and assembled a single tool.', 'Tested and debugged the software.', 
                'Developed a website for my developed tool.', 'Deployed a functional tool.'],
                apptech : 'Java, JavaFX, Junit, Batch, Vue.js, Python (Django), Sqlite3, Html & CSS'
            },
            rswebapp : {
                appname : 'Remote Station webapp',
                applink : 'https://remotestation.herokuapp.com/',
                appdesc : 'On-going revision and rebuilding of our web application here at Remote Station. '+
                'The Objective is to simply the app, make it lightweight and more responsive using '+
                'React on frontend and Python (flask) on the backend.',
                mycontr : ['Writing reusable React Components.', 'Coding and testing features in Python.',
                'Implementing web services with flask.', 'Database administration.', 'Security monitoring.'],
                apptech : 'Python, Flask, React.js, SQL, Html & CSS'
            },
        }
    }

    render() {
        return (
            <div>
                <ProjectView project={this.state.reengineering} /> <p/>
                <ProjectView project={this.state.scoasoft} /> <p/>
                <ProjectView project={this.state.jeumxtool} /> <p/>
                <ProjectView project={this.state.rswebapp} />
            </div>
        );
    }

}

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

ReactDOM.render(<RsProjects />, document.getElementById('rsprojects'));
ReactDOM.render(<AirProjects />, document.getElementById('airprojects'));