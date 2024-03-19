import React from "react";
import { Link } from "react-router-dom";
import Pilot from "../assets/DualAward-PSO.jpg";
import Drs from "../assets/2022-Drs-Ruskusky-PSO.jpg";
import Claire from "../assets/2022-Claire-Crone-PSO.jpg";
import Mayor from "../assets/CFN_LTW_2019-PSO.jpg";
import Senator from "../assets/Light-the-World-2017-PSO.jpg";
import Sisters from "../assets/Light-the-World-2016-PSO.jpg";
import Carroll from "../assets/Dr_Carroll-PSO.jpg";
import Gregg from "../assets/Light-the-World-2018-PSO.jpg";
import { NavLink } from "react-router-dom";

const LightTheWorld = () => {
    return (
        <>
            <div className="mt-32 flex flex-col">
                <div className="flex items-center flex-col">
                    <h1 className="text-4xl flex justify-center font-bold my-4">
                        Light the World Award
                    </h1>
                    <div className="w-[67%] pt-16 pb-20">
                        <p className="flex justify-center text-center text-xl mb-6">
                            The “Light the World” award is given to a group or
                            individuals to recognize their exemplary Christ-like
                            service, sacrifice, and ministry in order to
                            alleviate real struggles by reaching out to
                            individuals one-by-one, lifting spirits, and
                            providing hope to the lost and broken. The award is
                            given to those who light the community of Central
                            Illinois by making a meaningful and lasting
                            contribution through selfless acts of service that
                            changes lives.
                        </p>
                        <div className="flex flex-row justify-center items-center">
                            <p className="mr-8">
                                To nominate an individual or organization please
                                click here
                            </p>
                            <NavLink to={"/home"} className="btn btn-disabled">
                                Nominate
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2 className="flex justify-center text-3xl font-semibold mb-4">
                        2022
                    </h2>
                    <div className="card card-side bg-beigeGreen-200 min-h-[30rem] flex flex-row mx-8 mb-8">
                        <div className="card-body w-[300%]">
                            <h2 className="card-title flex justify-center">
                                Jobs Partnership--Offering A Helping Hand
                            </h2>
                            <p className="">
                                The Jobs Partnership is a faith-based program
                                that brings together local churches and area
                                businesses to train, equip, and employ citizens
                                in the Peoria and surrounding counties. The
                                primary goal is to bring program participants
                                from dependency to self-sufficiency, to help
                                them get and keep a job. Participants are
                                required to complete a free 8-12 week classroom
                                course designed to promote personal growth and
                                professional success, including Biblical
                                perspectives on practical work principles and
                                habits. Volunteers focus on making participants
                                productive, tax-paying citizens and supporting
                                families who contribute to the wellness of the
                                local community. It was founded on the idea that
                                relationships are key to changing and improving
                                lives. It was brought to Peoria in 2000 through
                                the efforts of Heaven's View Christian
                                Fellowship, and has expanded to
                                Bloomington-Normal, a few county jails, several
                                state prisons, the Federal Prison system and to
                                international communities. Locally, some classes
                                are held at the Federal prison, county jails,
                                and at Heaven's View Christian Fellowship
                                Church.
                            </p>
                            <h2 className="card-title flex justify-center">
                                Neal Glassett--Lifeline Pilots
                            </h2>
                            <p className=" ">
                                Neal Glassett has logged 86 in-flight hours and
                                11,000 miles transporting medical patients
                                around the country in his first year with
                                LifeLine Pilots. Founded in 1981, by Wanda
                                Whitsitt of Champaign, IL, LifeLine Pilots'
                                mission is to coordinate free air
                                transportation, through volunteer pilots, for
                                passengers with medical and humanitarian needs
                                far from home. These private flights provide
                                medical patients with a safe travel environment
                                reducing risk of exposure in their vulnerable
                                conditions. They also get patients to their
                                destinations more quickly than commercial
                                flights can. LifeLine Pilots began as a small
                                group of pilots in Illinois who envisioned using
                                their special skill of flying to help people
                                with emergencies to reach medical centers. Neal
                                learned about this program while he was
                                receiving his pilot licensure training in 2016.
                                He knew he wanted to use his talents and love
                                for flying to serve others. One of the
                                requirements for LifeLine Pilots is a minimum of
                                250 hours of flying time. Most Saturdays with
                                fair weather found Neal flying rescue dogs to
                                new owners for Pilots and Paws to acquire the
                                needed hours. In addition to his time, Neal
                                donates 100% of the cost of transporting people
                                and pets in his Piper airplane.
                            </p>
                        </div>
                        <figure className="p-8">
                            <img src={Pilot} className="" />
                        </figure>
                    </div>
                    <div className="card card-side bg-beigeGreen-200 h-[30rem] flex flex-row m-8">
                        <figure className="p-8">
                            <img src={Drs} className="" />
                        </figure>
                        <div className="card-body w-[300%]">
                            <h2 className="card-title flex justify-center">
                                Dr. Jeff and Dr. Suzanne White Ruskusky - Almost
                                Home Kids
                            </h2>
                            <div className="flex flex-col items-center mt-4">
                                <p className="my-4">
                                    Drs. Jeff and Suzanne are local podiatrists
                                    who were very instrumental in establishing
                                    Almost Home Kids in Peoria which is located
                                    at 5200 N. Hamilton Rd. Peoria, IL 61614.
                                    Jeff and Suzanne were the driving force
                                    behind this home being built through their
                                    dedication, their fund raising, and their
                                    loving care for children with special needs.
                                    While raising two sons (Garrett and Gabriel)
                                    with special needs they saw the need for
                                    this home to be here in Peoria not only for
                                    their sons but for other special needs
                                    children in our area.
                                </p>
                                <p className="my-4">
                                    Almost Home Kids provides a bridge from
                                    hospital to home through an innovative
                                    community-based care system for children
                                    with medical complexities. Almost Home Kids
                                    responds to the needs of families, train
                                    caregivers, offer respite care, advocate for
                                    accessibility and inclusion and educate
                                    healthcare professionals.
                                </p>
                                <p className="my-4">
                                    The Peoria Home is one of only three in the
                                    nation and is affiliated with OSF Healthcare
                                    Children's Hospital of Illinois. For more
                                    information please go to their website:{" "}
                                    <Link
                                        target={"_blank"}
                                        to={"https://www.almosthomekids.org/"}
                                        className="underline"
                                    >
                                        Almost Home Kids
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <h2 className="flex justify-center text-3xl font-semibold my-4">
                        2021
                    </h2>
                    <div className="card card-side flex flex-row bg-beigeGreen-200 min-h-[30rem] m-8">
                        <div className="card-body w-[300%]">
                            <h2 className="card-title flex justify-center">
                                Sophia's Kitchen
                            </h2>
                            <div className="mt-4">
                                <p className="my-4">
                                    Inspired by the spirit of St. Francis and
                                    under the pastoral leadership of Sacred
                                    Heart/St. Joseph Parish, this mission is an
                                    outward expression of our Catholic/
                                    Christian beliefs.
                                </p>

                                <p className="my-4">
                                    Volunteers make hundreds of peanut butter
                                    and jelly sandwiches daily. The rest of the
                                    menu varies day by day as God provides.
                                    Local grocery stores and restaurants donate
                                    liberally to help provide filling and
                                    nutritious food.
                                </p>

                                <p className="my-4">
                                    "Who do we serve? Homeless, underemployed,
                                    unemployed, veterans, elderly, and the
                                    broken. What do we serve? Peanut butter and
                                    jelly sandwiches, hot soup, vegetables,
                                    fruits, treats, and hope. Guests at Sophia's
                                    Kitchen are treated with dignity as we show
                                    Christ's love. Anyone who is hungry is
                                    served. Our bag lunch may be taken to go, or
                                    guests may join us in our Spiritual Center
                                    where volunteers share their faith. All are
                                    welcome."
                                </p>

                                <p className="my-4">
                                    Sophia's Kitchen is located next to Historic
                                    St. Joseph Church, 103 Richard Pryor Place
                                    in Peoria. Sophia's Kitchen is staffed by a
                                    dedicated group of volunteers, who give
                                    generously of their time so that no one goes
                                    hungry. Donations are accepted Monday
                                    through Friday from 8 AM to 3 PM.
                                </p>
                            </div>
                        </div>
                        <figure className="p-8">
                            <img src={Claire} className="" />
                        </figure>
                    </div>
                    <h2 className="flex justify-center text-3xl font-semibold mb-4">
                        2019
                    </h2>
                    <div className="card card-side bg-beigeGreen-200 min-h-[30rem] flex flex-row m-8">
                        <figure className="p-8">
                            <img src={Carroll} className="" />
                        </figure>
                        <div className="card-body w-[100%]">
                            <h2 className="card-title flex justify-center">
                                Dr. John Carroll
                            </h2>
                            <p className="flex items-center">
                                Dr. John Carroll started the Haitian Hearts
                                Organization in the 1990's. Haitian Hearts has
                                brought more than 200 children and young adults
                                to the United States for heart surgery since
                                1995. Dr. Carroll travels to Haiti to provide
                                medical care to the people of this impoverished
                                Caribbean country. While in Haiti, Dr. Carroll
                                works in hospitals and clinics to care for the
                                Haitian people, providing general medical care,
                                while identifying children that would benefit
                                from more advanced medical care in the United
                                States. Dr. Carroll and his wife Maria work with
                                medical systems throughout the United States to
                                coordinate the transportation and medical care
                                required to treat these patients - often
                                spending months, if not years, organizing the
                                specifics of visas, passports, transportation,
                                housing, medical care, and medical aftercare for
                                each patient.
                            </p>
                        </div>
                    </div>
                    <div className="card card-side bg-beigeGreen-200 min-h-[30rem] flex flex-row m-8">
                        <div className="card-body w-[100%]">
                            <h2 className="card-title flex justify-center">
                                Vi Heinz
                            </h2>
                            <p className="flex items-center">
                                Violet Heinz, 91 years old, has been a volunteer
                                in the pre-op department at Methodist Hospital
                                for 31 years and is just short of 10,000 hours
                                of volunteer service. She assembles the
                                pre-surgery kits and mentors the summer
                                volunteers that come to the hospital. She joined
                                the Methodist Women's Service League in 2003 and
                                has exceeded an additional 2,500 hours of
                                volunteer service for their organization. Since
                                2003 she has made an average of 35 quilts a year
                                that are used at the annual gift show to raise
                                funds for earmarked projects at the hospital. Vi
                                has also been a volunteer at the Heart of
                                Illinois Harvest, for the past 25 years, where
                                she spends each Friday picking up food from
                                grocery stores and restaurants and delivering to
                                organizations that assist the poor and hungry.
                            </p>
                        </div>
                        <figure className="p-8">
                            <img src={Mayor} className=" " />
                        </figure>
                    </div>
                    <h2 className="flex justify-center text-3xl font-semibold mb-4">
                        2018
                    </h2>
                    <div className="card card-side bg-beigeGreen-200 min-h-[30rem] flex flex-row m-8">
                        {" "}
                        <figure className="p-8">
                            <img src={Gregg} className="" />
                        </figure>
                        <div className="card-body w-[100%]">
                            <h2 className="card-title flex justify-center">
                                Dr. Gregg Stoner
                            </h2>
                            <div className="mt-4">
                                <p className="my-4">
                                    In 2000, Dr. Gregg Stoner was involved in a
                                    faith-based program at his parish, St.
                                    Thomas the Apostle, which had a theme of
                                    social justice. The program, called
                                    JustFaith, was a nine-month program based on
                                    scripture that immersed the participants in
                                    justice and peace ideas and efforts. At the
                                    conclusion of the program, the participants
                                    were asked to discern in what way he or she
                                    was willing to make a concrete effort on
                                    behalf of justice and peace.
                                </p>
                                <p className="my-4">
                                    As the program concluded, Dr. Stoner made
                                    the decision to leave his very successful
                                    private practice in medicine and join an
                                    emerging Health Care Clinic for the
                                    uninsured in Peoria. This clinic had been
                                    founded by a former bishop of the Catholic
                                    diocese of Peoria, and was beginning to have
                                    an impact on the Peoria area. Its mission is
                                    to provide high quality, affordable,
                                    comprehensive primary health care for those
                                    who were unable to afford it. Dr. Stoner is
                                    now the chief medical officer for Heartland
                                    Health Clinic. The clinic has grown from one
                                    location to the present eight locations in
                                    the tri-county area to better serve the
                                    community.
                                </p>
                                <p className="my-4">
                                    For his selfless, community-minded service,
                                    Dr. Gregg Stoner was the 2018 Light the
                                    World recipient.
                                </p>
                            </div>
                        </div>
                    </div>
                    <h2 className="flex justify-center text-3xl font-semibold mb-4">
                        2017
                    </h2>
                    <div className="card card-side bg-beigeGreen-200 min-h-[30rem] flex flex-row m-8">
                        {" "}
                        <div className="card-body w-[250%]">
                            <h2 className="card-title flex justify-center">
                                Dream Center Peoria
                            </h2>
                            <div className="">
                                <p className="my-4">
                                    For excellence in Christ-like service,
                                    sacrifice, and life-changing ministry within
                                    the Peoria community, Senator Chuck Weaver
                                    presented the 2017 Light the World award to
                                    Dream Center Peoria.
                                </p>

                                <p className="my-4">
                                    “I cannot think of an organization more
                                    worthy and fitting of this award,” Phil
                                    Luciano, award nominator, said of Dream
                                    Center Peoria. “Like no other organization,
                                    Dream Center Peoria has succeeded in lifting
                                    up Peoria, especially those most vulnerable
                                    and in need of help.”
                                </p>

                                <p className="my-4">
                                    Operating since 2002, Dream Center Peoria is
                                    a faith-based, non-profit organization
                                    intent on helping individuals break out of
                                    poverty through several programs that fall
                                    under their three-pronged approach: Basic
                                    Human Needs, Youth Development and Community
                                    Outreach. From 2012-2016 alone, 122,276
                                    nights of sleep to 1,324 individuals, of
                                    which 390 were children were achieved in the
                                    homeless shelter with thousands more being
                                    impacted through their multiplicity of
                                    programs from school backpacks filled with
                                    supplies to youth vocational training and
                                    mentoring.
                                </p>

                                <p className="my-4">
                                    “The impact of Dream Center Peoria is so
                                    evident because of the hearts of those who
                                    have consistently served this city, without
                                    fanfare, for 15 years,” Brian Uhlenhopp,
                                    Dream Center Peoria Development Director
                                    said. “Thank you to all who share in the
                                    great story of Dream Center Peoria.”
                                </p>
                            </div>
                        </div>
                        <figure className="p-8">
                            <img src={Senator} className="" />
                        </figure>
                    </div>
                    <h2 className="flex justify-center text-3xl font-semibold mb-4">
                        2016
                    </h2>
                    <div className="card card-side bg-beigeGreen-200 min-h-[30rem] flex flex-row m-8">
                        <figure className="p-8">
                            <img src={Sisters} className=" " />
                        </figure>
                        <div className="card-body w-[250%] gap-8">
                            <h2 className="card-title flex justify-center">
                                Sisters Of St Francis Of Immaculate Conception
                            </h2>
                            <div className="mt-4">
                                <p className="flex items-center mb-8">
                                    In recognition for their past 125 years of
                                    unfailing ministry within the Central
                                    Illinois community, the 2016 Light the World
                                    Award was presented to the Sisters of St.
                                    Francis of the Immaculate Conception.
                                </p>
                                <p className="flex items-center">
                                    These Sisters have blessed thousands of
                                    lives since their 1891 inception by Mother
                                    Mary Pacifica, baptized Margaret Forrestal,
                                    when she responded to a call to staff an
                                    orphanage in Metamora, Illinois. From there,
                                    the scope and breadth of the sisterhood has
                                    continually increased to include teaching in
                                    parish schools and staffing homes for the
                                    aging. Currently, the 23 Sisters serve in
                                    volunteer capacities ranging from counseling
                                    and spiritual guidance in venues throughout
                                    the community including The Children's
                                    Hospital of Illinois at Saint Francis
                                    Medical Center among others. Other current
                                    ministries include adult literacy and
                                    tutoring, nursing home management and
                                    service, hot meal delivery to homebound
                                    individuals, citizenship classes, vocational
                                    training, school teaching, and more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LightTheWorld;
