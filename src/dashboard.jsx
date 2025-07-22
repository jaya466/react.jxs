import DashboardBannner from './components/dashboard_banner';
import CommonTitles from './components/common_titles';
import CommonOrogramsCard from './components/common_our_program_card';
import CommonValuesCard from './components/our_values_card';

function Dashboard() {
    return (
        <main>
            <DashboardBannner />
            <CommonTitles
                title="Our Values"
                description={"Not just any program — we provide the excellent teaching-learning experience to prepare you in your career."} />
                <div className='our-values-grid'>
                    <CommonValuesCard
                    iconURL={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
                        title={"Academic Excellence"}/>
                          <CommonValuesCard
                    iconURL={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/innovation.png"}
                        title={"Innovation & Creativity"}/>
                          <CommonValuesCard
                    iconURL={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/Integrity.png"}
                        title={"Integrity & Ethics"}/>
                          <CommonValuesCard
                    iconURL={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/Student-Centered.png"}
                        title={"* Student-Centered Learning"}/>
                          <CommonValuesCard
                    iconURL={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/Diversity.png"}
                        title={"Diversity and Inclusion"}/>
                          <CommonValuesCard
                    iconURL={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/global-perspective.png"}
                        title={"Global Perspective"}/>
                          <CommonValuesCard
                    iconURL={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/critical-thinking.png"}
                        title={"Critical Thinking &Problem Solving"}/>
                          <CommonValuesCard
                    iconURL={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/community-engagement.png"}
                        title={"Community Engagement"}/>
                    
                </div>
            <div className='our-programs'>
                <CommonOrogramsCard title={"Bsc.CSIT"}
                    description={"IT"}imageUrl={"https://media.edusanjal.com/gallery/shikshyalaya_3.jpg"} />
                    <CommonOrogramsCard title={"BBA"}
                    description={"haha"} imageUrl={"https://media.edusanjal.com/__sized__/cover_photo/shikshyalaya_cover_gEuEFmU-crop-c0-5__0-5-302x128-70.jpg"} />



            </div>
            </main>
            );
}

            export default Dashboard;
