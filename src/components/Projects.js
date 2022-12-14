import React from "react";
import ProjectCard from "./subcomponents/projectcard";
import crowdCntrl from "../assets/images/crowdCntrl.png"
import YCEV from "../assets/images/YCEV.png"
import Scheduler from "../assets/images/scheduler.png"
import Quiz from "../assets/images/Quiz.png"
import Passwordgen from "../assets/images/Passwordgen.png"
import Weatherapp from "../assets/images/Weatherapp.png"

export const Projects = () => {
    return (
        <div className='h-full'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold">
                            Below are some projects that I've created and worked with others on.
                        </h1>
                        {/* Projects Below */}
                        <div className="grid grid-cols-3 gap-5 mt-5">
                            <ProjectCard
                                project={'Crowd CNTRL'}
                                imageURL={crowdCntrl}
                                description={'My first Heroku deployment, and full stack project that utilized MYSQL and Passport for authorization.'}
                                link={'https://crowdcntrl.herokuapp.com/'} />
                            <ProjectCard
                                project={'Your Corner EV'}
                                imageURL={YCEV}
                                description={'A website for users who are looking for alternative fueling stations near them or near a particular location.'}
                                link={'https://kurohyou-studios.github.io/your-corner-ev/'} />
                            <ProjectCard
                                project={'Workday Scheduler'}
                                imageURL={Scheduler}
                                description={'This is a calendar application that allows users to save events throughout the day.'}
                                link={'https://ryancharleson.github.io/Challenge-05-workDayScheduler/'} />
                            <ProjectCard
                                project={'Code Quiz'}
                                imageURL={Quiz}
                                description={'This is a javascript quiz that adds points based on correct responses and includes a highscore page as well as a timer.'}
                                link={'https://ryancharleson.github.io/Javascript-Quiz/'} />
                            <ProjectCard
                                project={'Password Generator'}
                                imageURL={Passwordgen}
                                description={'Application to create passwords based on length, character type, numbers, and symbols.'}
                                link={'https://ryancharleson.github.io/Challenge-03/'} />
                            <ProjectCard
                                project={'Weather App'}
                                imageURL={Weatherapp}
                                description={'This application uses an API to display weather information based on users location or desired location.'}
                                link={'https://ryancharleson.github.io/Challenge-06-weatherApp/'} />

                        </div>
                    </div>

                </div>


            </div>
        </div>

    )
}