﻿import React from "react";
import AboutImage from "../assets/MTCNav-PSO.jpg";

const About = () => {
    return (
        <>
            {/* Mobile */}
            <div className="flex desktop:hidden flex-col items-center">
                <h1 className="text-2xl font-bold mt-28">
                    About Us and Our Mission
                </h1>
                <div className="flex flex-col justify-center">
                    <div className="h-1/5">
                        <img src={AboutImage} className="w-full h-full p-4" />
                    </div>
                    <div className="card flex flex-col items-center justify-center bg-beigeGreen-200 px-4 mx-6 mb-6">
                        <div className="card-body">
                            <p className="pb-2 indent-4">
                                The Peoria Area Community Festival of Nativities
                                began in 2016 as an attempt to gather those with
                                a love of Christ across denominations during the
                                Christmas holiday. Originally spearheaded by the
                                Church of Jesus Christ of Latter-day Saints and
                                the Sisters of St. Francis of the Immaculate
                                Conception the festival has expanded to include
                                a multitude of congregations, showcasing over
                                1000 nativities and engaging hundreds of
                                volunteers.
                            </p>
                            <p className="py-2 indent-4">
                                We invite community members in the Peoria,
                                Illinois area to join us in celebrating the
                                birth of Jesus Christ by viewing nativity
                                displays from around the world and enjoying
                                musical performances from local talent. Members
                                from different churches have come together to
                                create this unique and complimentary interfaith
                                nativity exhibit with one simple hope in mind:
                                to provide a peaceful place for individuals and
                                families to reflect upon Christ's sacred birth
                                as they usher in the Christmas season.
                            </p>
                            <p className="py-2 indent-4">
                                The nativity scene has been around since 1223,
                                when St. Francis of Assisi was inspired by a
                                trip to the Holy Land and used living people and
                                animals to stage Jesus Christ's humble
                                beginnings. The living scene was soon recreated
                                in other Catholic countries in the form of three
                                dimensional figurines, also known as a crèche,
                                with Mary and the Christ child at the center,
                                often surrounded by Joseph, shepherds, wise men,
                                angels, and animals. The crèche gained
                                popularity and has spread across cultural and
                                political boundaries to become a traditional
                                Christian symbol of Christ's birth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop */}
            <div className="phone:hidden desktop:flex flex-col items-center mt-28">
                <div className="flex flex-row justify-around items-center">
                    <div className="flex h-1/6 align-middle">
                        <img src={AboutImage} className="w-full h-full m-10" />
                    </div>
                    <div className="card flex flex-col bg-beigeGreen-200 items-center justify-center w-1/3 mx-12 my-4">
                        <div className="card-body">
                            <h1 className="card-title flex justify-center ">
                                About Us and Our Mission
                            </h1>
                            <div>
                                <p className="py-2">
                                    The Peoria Area Community Festival of
                                    Nativities began in 2016 as an attempt to
                                    gather those with a love of Christ across
                                    denominations during the Christmas holiday.
                                    Originally spearheaded by the Church of
                                    Jesus Christ of Latter-day Saints and the
                                    Sisters of St. Francis of the Immaculate
                                    Conception the festival has expanded to
                                    include a multitude of congregations,
                                    showcasing over 1000 nativities and engaging
                                    hundreds of volunteers.
                                </p>
                                <p className="py-2">
                                    We invite community members in the Peoria,
                                    Illinois area to join us in celebrating the
                                    birth of Jesus Christ by viewing nativity
                                    displays from around the world and enjoying
                                    musical performances from local talent.
                                    Members from different churches have come
                                    together to create this unique and
                                    complimentary interfaith nativity exhibit
                                    with one simple hope in mind: to provide a
                                    peaceful place for individuals and families
                                    to reflect upon Christ's sacred birth as
                                    they usher in the Christmas season.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-beigeGreen-200 w-2/3 mb-4">
                    <p className="card-body py-2">
                        The nativity scene has been around since 1223, when St.
                        Francis of Assisi was inspired by a trip to the Holy
                        Land and used living people and animals to stage Jesus
                        Christ's humble beginnings. The living scene was soon
                        recreated in other Catholic countries in the form of
                        three dimensional figurines, also known as a crèche,
                        with Mary and the Christ child at the center, often
                        surrounded by Joseph, shepherds, wise men, angels, and
                        animals. The crèche gained popularity and has spread
                        across cultural and political boundaries to become a
                        traditional Christian symbol of Christ's birth.
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;
