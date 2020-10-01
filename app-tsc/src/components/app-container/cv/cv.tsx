import React, { Fragment, useState } from "react";
import MyselfPic from "./../../../assets/pictures/moi-rond.png";
import "./cv.scss";

const CVPage = props => {

    const [seeAnimation, SetSeeAnimation] = useState(false);

    return (

        <Fragment>
            <div className=' triangle-topright phablet-only phablet-only'></div>
            <div className="cvPage">
                <div className="introduction" onMouseEnter={() => { SetSeeAnimation(true) }}>
                    <div className=' triangle-topright hide-phone-only hide-phablet-only '></div>
                    <div className='full-width'>
                        <div className="myPic">
                            <img src={MyselfPic} className='responsive' />
                        </div>

                        <div className='cv-head' >
                            {!!seeAnimation &&
                                <div className='dynamic'>
                                    <LeftChevron />
                                    <Slash />
                                    <RightChevron />
                                </div>
                            }
                            <div className="cv-head-1">
                                <h1 className='red no-margin'>CÉLINE DAFFE</h1>
                                <h2 className='darkred no-margin'>Développeuse Front</h2>
                                <h3 className='black'>Freelance</h3>
                                <h4 className='black'>Ex-présidente BDX I/O</h4>

                            </div>
                            <div className={seeAnimation ? 'cv-head-2 animation' : 'cv-head-2'}>
                                <div>Mérignac</div>
                                <div>06 198 198 50</div>
                                <div>celinedaffe@live.fr</div>
                                <div> Github: @atakikoo</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='content'>
                    <div className="row">
                        {/* top left */}
                        <div className=' separation-line max-phablet'></div>
                        <div className='column text-right column-separator no-padding d-block'>
                            <div className="title column fix-height">EXPÉRIENCES</div>
                            <div className='column'><strong className='brown inner-space-bottom-20'>Freelance - Depuis septembre 2019</strong></div>
                            <div className='column '>
                                <div><strong className='brown'><a href="https://www.chateauedmus.com/">Château Edmus</a> -</strong> Refonte du site </div>
                                <div className="darkred text-oblique">Gatsby, ReactJs, Prismic et SpectreCSS</div>
                                <div><strong className='brown'>Multiven -</strong> Mission d’intégration pour une plateforme de vente
                        basé sur le blockchain</div>
                                <div className="darkred text-oblique">Angular</div>
                                <div><strong className='brown'><a href="https://app.wizim.io/">Wizim</a> -</strong> Mission de développement de nouvelles fonctionnalités pour une
                            plateforme de gestion d’intérimaires</div>
                                <div className="darkred text-oblique">React, NodeJs</div>
                            </div>
                        </div>

                        {/* top right */}
                        <div className="column no-padding d-block">
                            <div className="title column fix-height"></div>
                            <div className="column"><strong className='brown  inner-space-bottom-20'>Développeuse Front-end 2016 - 2018</strong></div>
                            <div className='column'>
                                <div><strong className='brown'><a href="https://www.4sh.fr/">4SH France</a></strong>
                                    <div>Missions principalement sur des applications métier, en déploiement continue (SCRUM), dans des secteurs très divers : gestion de flux d’avions et de marchandises; immobilier; serious game.</div>
                                    <div>Century21, Aéroport de la réunion, Arkhé, AcaNexia, Sud Ouest</div>
                                    <div className="darkred text-oblique">Typescript, Angular, AngularJs, Javascript, Ionic, bonnes pratiques, Foundation, Sass, responsive.</div>
                    Collaboration avec l’équipe fonctionnelle, designer et bien sûr le client.</div>
                                <div>Mérignac</div>

                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className='separation-line max-phablet'></div>
                        {/* bottom left */}
                        <div className="column column-separator text-right no-padding">
                            <div className="title column">FORMATION</div>
                            <div className='column'><span className="text-oblique brown">WildCodeSchool </span> <br className='max-phablet' /> Bootcamp de 5 mois spécialisé en Javascript <br />
                         AngularJs, NodeJs, Sass, MongoDB, Ionic, Cordova <br />  La Loupe - Sep. 2015 à Jan. 2016</div>
                            <div className='column'><span className="text-oblique brown">Master Conception et Direction de Projets Culturels</span> <br className='max-phablet' />Université Paris 3, Sorbonne Nouvelle <br /> Paris - 2011</div>
                            <div className='column'><span className="text-oblique brown">Licence de Conception et Mise en Oeuvre de Projets Culturels</span> <br className='max-phablet' />Université Paris 3 <br /> Paris - 2009</div>
                            <div className='column'><span className="text-oblique brown">Bac STI Arts Appliqués</span><br className='max-phablet' />École Supérieure des Arts Appliqués et du Textile <br /> Roubaix (59) -2005</div>
                            <div className='column'></div>
                        </div>

                        {/*  bottom right */}
                        <div className='separation-line max-phablet'></div>
                        <div className="column  no-padding">
                            <div className="title column">LES +</div>
                            <div className='column space-bottom-30'> Présidente pendant 2 ans de l’association Bordeaux Développer Experience qui organise
                        depuis 2013 <a href="https://www.bdxio.fr/">BDX I/O</a> une conférence dédié au monde du développement. Participation régulière aux meetups Bordeaux JS et d’autres à l’occasion.</div>
                            <div className=' separation-line max-phablet'></div>
                            <div className="title column">QUALITÉS</div>

                            <div className='column'>Réactivité, adaptabilité, bonne communication, autonomie</div>
                            <div className='column space-bottom-30'><span className="brown d-inline">Anglais courant écrit et parlé </span>(voyage en Australie de 7 mois)</div>
                            <div className=' separation-line max-phablet'></div>
                            <div className="title column"> INTÉRÊTS</div>
                            <div className='column'> <ul> <li>React, UX-UI</li> <li>Pyton, Kotlin, NodeJs</li>
                                <li>Japon, voyage</li> <li>Science-fiction, littérature contemporaine</li> </ul></div>
                        </div>
                    </div>
                    <div className='cv-footer'>
                        <div className='icon-left'><span className='icon icon-airplane'></span></div>
                        <div className='icon-middle'><span className='icon icon-tea-cup'></span></div>
                        <div className='icon-right'><span className='icon icon-open-book'></span></div>
                    </div>

                </div>
            </div >

        </Fragment>
    )
};

export default CVPage;

const LeftChevron = props => {
    return (
        <svg version="1.1" id="Capa_1" x="0px" y="0px" className='icon-element animate__animated animate__repeat-1 animate__backInLeft' stroke='$red'
            viewBox="70 -50 380 530.175" fill="darkRed">
            <g>
                <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
            </g>

        </svg>
    )
};

const RightChevron = props => {
    return (
        <svg version="1.1" id="Capa_1" x="0px" y="0px" className='icon-element animate__animated animate__repeat-1 animate__backInDown'
            viewBox="30 -50 380 530.175" fill="darkRed">
            <g>
                <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
		c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
		"/>
            </g>

        </svg>
    )
};


const Slash = props => {
    return (
        <svg version="1.1" id="Capa_1" x="0px" y="0px" className='slash animate__animated animate__repeat-1 animate__rotateIn'
            viewBox="0 0 150 600" >
            <line x1="20" y1="580" x2="120" y2="20" stroke="darkred" strokeWidth='30' strokeLinecap="round" />
        </svg>
    )
}; 
