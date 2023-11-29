﻿import React from "react";
import NativityLogo from "../components/Elements/NativityLogo";
import Pilot from '../assets/20221201_194615_edited_edited.jpg'
import Drs from '../assets/2022 Drs Ruskusky_edited_edited.jpg'
import Claire from '../assets/2022 Claire Crone_edited.jpg'
import Mayor from '../assets/CFN_LTW_2019_edited_edited.jpg'
import Senator from '../assets/Light the World 2017_edited.jpg'
import Sisters from '../assets/Light the World 2016_edited.jpg'
import Carroll from '../assets/Dr. Carroll.jpg'
import Gregg from '../assets/Light the World 2018.jpeg'

const LightTheWorld = () => {
    return (
        <>
            <NativityLogo />
            <div className="mt-24 flex flex-col">
                <div className="flex items-center flex-col">
                    <h1 className="text-2xl flex justify-center font-bold">
                        Light the World Award
                    </h1>
                    <div className="w-2/3">  
                    <p className="flex justify-center text-center text-lg mb-6">
                        The “Light the World” award is given to a group or
                        individuals to recognize their exemplary Christ-like
                        service, sacrifice, and ministry in order to alleviate
                        real struggles by reaching out to individuals
                        one-by-one, lifting spirits, and providing hope to the
                        lost and broken. The award is given to those who light
                        the community of Central Illinois by making a meaningful
                        and lasting contribution through selfless acts of
                        service that changes lives.
                    </p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div>
                        <h2 className="flex justify-center">2022</h2>
                        <h2 className="flex justify-center">JOBS PARTNERSHIP--OFFERING A HELPING HAND</h2>
                        <p className="p-6">The Jobs Partnership is a faith-based program that
                        brings together local churches and area businesses to
                        train, equip, and employ citizens in the Peoria and
                        surrounding counties. The primary goal is to bring
                        program participants from dependency to
                        self-sufficiency, to help them get and keep a job.
                        Participants are required to complete a free 8-12 week
                        classroom course designed to promote personal growth and
                        professional success, including Biblical perspectives on
                        practical work principles and habits. Volunteers focus
                        on making participants productive, tax-paying citizens
                        and supporting families who contribute to the wellness
                        of the local community. It was founded on the idea that
                        relationships are key to changing and improving lives.
                        It was brought to Peoria in 2000 through the efforts of
                        Heaven's View Christian Fellowship, and has expanded to
                        Bloomington-Normal, a few county jails, several state
                        prisons, the Federal Prison system and to international
                        communities. Locally, some classes are held at the
                        Federal prison, county jails, and at Heaven's View
                        Christian Fellowship Church.</p>
                        <h2 className="flex justify-center">NEAL GLASSETT--LIFELINE PILOTS</h2>
                        <p className="p-6">Neal Glassett has logged 86 in-flight hours and 11,000
                        miles transporting medical patients around the country
                        in his first year with LifeLine Pilots. Founded in 1981,
                        by Wanda Whitsitt of Champaign, IL, LifeLine Pilots'
                        mission is to coordinate free air transportation,
                        through volunteer pilots, for passengers with medical
                        and humanitarian needs far from home. These private
                        flights provide medical patients with a safe travel
                        environment reducing risk of exposure in their
                        vulnerable conditions. They also get patients to their
                        destinations more quickly than commercial flights can.
                        LifeLine Pilots began as a small group of pilots in
                        Illinois who envisioned using their special skill of
                        flying to help people with emergencies to reach medical
                        centers. Neal learned about this program while he was
                        receiving his pilot licensure training in 2016. He knew
                        he wanted to use his talents and love for flying to
                        serve others. One of the requirements for LifeLine
                        Pilots is a minimum of 250 hours of flying time. Most
                        Saturdays with fair weather found Neal flying rescue
                        dogs to new owners for Pilots and Paws to acquire the
                        needed hours. In addition to his time, Neal donates 100%
                        of the cost of transporting people and pets in his Piper
                        airplane.</p>
                    </div>
                    <img
                        src={Pilot}
                        className="h-96"
                    />
                </div>
                <div>
                    <p></p>
                    <img src={Drs} className="h-96"/>
                </div>
                <div>
                    <p></p>
                    <img src={Claire} className="h-96"/>
                </div>
                <div>
                    <p></p>
                    <img src={Mayor} className="h-96"/>
                </div>
                <div>
                    <p></p>
                    <img src={Gregg} className="h-96"/>
                </div>
                <div>
                    <p></p>
                    <img src={Carroll} className="h-96"/>
                </div>
                <div>
                    <p></p>
                    <img src={Senator} className="h-96"/>
                </div>
                <div>
                    <p></p>
                    <img src={Sisters} className="h-96"/>
                </div>
            </div>
        </>
    );
};

export default LightTheWorld;
