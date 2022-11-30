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
                'Designed and developed great looking, interactive and responsive front-end pages using React.js & Vue.js',
                'Developing and deploying micro-services using SpringBoot',
                'Database development and administration [MySQL]', 'Collaborating in system and acceptance testing.',
                'Delivery / deployment.'],
                apptech : 'Java, Junit, Jenkins, JavaScript, SQL, Vue.js, React.js, SpringBoot'
            },
            scoasoft : {
                appname : 'Scoasoft',
                applink : 'https://github.com/Silas-seal/Scoasoft',
                appdesc : 'Institution management software to automate data'+
                ' processing and presentation in adminstration departments. These include: Profiles, '+
                'Performance, Payments and Attendance. The target software was both desktop and web.',
                mycontr : ['Analysing and designing the system.','Building app GUI Nodes and Panels.',
                'Coding and testing of api components.','Integration and System testing.', 
                'Database development and administration.', 'Writing reusable frontend React Componets.', 
                'Writing modular backend core-services and features using Node.js.'],
                apptech : 'Java, JavaFX, Junit, SQL, React.js, Node.js, Html & CSS'
            },
            jeumxtool : {
                appname : 'JeumxTool',
                applink : 'https://jeumxtool.herokuapp.com/',
                appdesc : 'A Java developer tool targeting JavaFX runtime and application packaging '+
                'on desktop platforms. It\'s a self inspired project, so I developed it  from scratch.',
                mycontr : ['Structured and designed specifications.', 'Developed the components '+
                'and assembled a single tool.', 'Tested and debugged the software.', 
                'Developed a website for the developed tool.', 'Deployed a functional tool.'],
                apptech : 'Java, JavaFX, Junit, Batch, Vue.js, Python (Django), Sqlite3, Html & CSS'
            },
            rswebapp : {
                appname : 'Remote Station webapp',
                applink : 'https://remotestation.herokuapp.com/',
                appdesc : 'On-going revision of our web application at Remote Station. '+
                'The Objective is to simply the app, make it lightweight and more responsive using '+
                'React on frontend and Python (flask) on the backend.',
                mycontr : ['Writing reusable React Components.', 'Coding and testing features in Python.',
                'Implementing web services with flask.', 'Database development and administration.', 
                'Development an AI for client engagement, writing clean, readable, reusable and well documented Python Code in Jupyter Notebooks.',
                'Security monitoring.'],
                apptech : 'Python, Flask, AI (Machine Learning), React.js, SQL, Html & CSS'
            },
        }
    }

    shouldComponentUpdate() {
        return false;
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