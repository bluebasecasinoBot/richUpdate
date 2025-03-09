import {__c,__SYD,__sS,__sC,__m,__g,__p, __u, __v , manage_mediaQuery} from './sydneyLib/sydneyDom.js';

import './_body_p1.js';
// import './_body_p2.js';
import './p2_rich.js'
import './_body_p3.js';
import './_body_p4.js';
import './_body_p5.js';
import "./roadMap.js";
import "./features.js"

__sS([
    {
        nameTag:'container',
        style:{
            height:'100vh',
            width:'100vw',
            background:'radial-gradient(circle, #002B36 20%, #000000 80%)',
            backgroundAttachment: 'fixed',
            overflowY:'scroll',
            position:'relative',
            fontFamily:"sticker",
            overflowX:'hidden',
            color:'#fff'
        }
    },
    {
        nameTag:'navBar',
        style:{
            width:'100%',
            display:'flex',
            padding:'15px 20px',
            columnGap:'30px',
            position:'sticky',
            top:'0',
            zIndex:'999',
            alignItems:'center',
            justifyContent:'space-around',
            minHeight:'70px'
        }
    },
    {
        nameTag:"txt_shade1",
        style:{
            color:"#fff",
            textShadow:"0px 0px 2px #171717",
            lineHeight:"20px"
        }
    },
    {
        nameTag:"txt_shade2",
        style:{
            color:"#fff",
            textShadow:"3px 3px 1px #171717",
        }
    },
    {
        nameTag:"txt_shade3",
        style:{
            color:"#fff",
            textShadow:"2px 2px 1px #171717"
        }
    }
])

__sS(
    {
        nameTag:'_social_style',
        style:{
            minHeight:'35px',
            minWidth:'35px',
            maxHeight:"35px",
            maxWidth:"35px",
            cursor:'pointer',
            borderRadius:'50%',
            
        }
    }
)

__SYD.container = () =>{
    return __c(
        'div',
        {
            style:__sC.container(),
            class:"container"
        },
        [
            __SYD.navBar(),
            __SYD._p1(),
            // __SYD._p2(),
            __SYD._p2(),
            __SYD._p3(),
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;flex-direction:column;gap:20px;align-items:center;width:100%;padding:10px;padding-top:50px;",
                    id:"feature"
                },
                [
                    __c('h1',{class:'',style:`font-weight:700;font-family:header;font-size:${__p(['_p2','__font'],{1:'30px'})['1']};`+__sC['txt_shade2']()},['$RICH Features']),

                    __SYD.features_float({content:[
                        {header:"💰 Hold $RICH, Be $RICH" , text:"Forget slow gains—$RICH is your ticket to crypto glory. Inspired by the wildest meme-fueled gains, this isn’t just a token—it’s a movement." , i_class:"fa-solid fa-shield-halved"},
                        {header:"🔹 Zero Utility, Maximum Clout" , text:"$RICH isn’t about complex roadmaps. It’s about vibes, virality, and victory. The more people flex it, the higher we ride." , i_class:"fa-solid fa-link"},
                    ] , title:'The Ultimate Crypto Flex' , align:'right' , img:'eth.jpg' , delay:'1.2' , summary:`"$RICH is the ultimate meme coin flex – community-driven, hype-fueled, and built for virality. No complex roadmaps, just pure meme energy and unstoppable growth." 🚀💰` , id:2}),
                    __SYD.features_float({content:[
                        {header:"💎 100% Community-Driven" , text:"No dev dumps. No whale manipulation. Just pure meme energy backed by a diamond-handed community." , i_class:"fa-solid fa-shield-halved"},
                        {header:"🚀 Viral Growth Potential" , text:"With strategic marketing, viral memes, and top-tier influencers, $RICH is set to explode in the crypto space." , i_class:"fa-solid fa-link"},
                    ] , title:'Unstoppable Hype & Community Power' , align:'right' , img:'eth.jpg' , delay:'1.2' , summary:`"$RICH is powered by an unstoppable community, driven by pure meme energy and viral growth. With no dev dumps and strategic hype, it’s set to take over the crypto space." 🚀💎` , id:2}),
                ],
                {
                    type:"feature"
                }
            ),
            __SYD.roadMapPage(),
            __SYD._p5(),
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;justify-content:center;padding:30px 0px;"
                },
                [
                    __c(
                        "div",
                        {
                            style:"height:fit-content;width:90%;max-width:600px;display:flex;align-items:center;justify-content:center;padding:50px 10px;background:linear-gradient(145deg, #0A0F1F, #001F3F);box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);border:2px solid #00FFFF;gap:20px;"
                        },
                        [
                            __SYD.commLinks("Telegram" , "https://t.me/ragstorichcoin"),
                            __SYD.commLinks("X" , "https://x.com/to_riches37226?s=21"),
                        ]
                    ),
                ],
                {
                    type:"contact"
                }
            ),
            __c(
                'div',
                {
                    style:'height:fit-content;width:100%;padding:50px;background:transparent;display:flex;align-items:center;flex-direction:column;'+__sC['txt_shade3']()
                },
                [
                    __c('p',{style:'font-size: .9rem;font-family:header;text-align:center;font-weight:900;color:#fff;width:100vw;word-spacing:12px;'},[
                        `© ${new Date().getFullYear()} All Right Reserved by $RICH`
                    ])
                ]
            )
        ],
        {
            genericStyle:['bg_cover']
        }
    )
}

__SYD.commLinks = (linkName , link) =>{
    return __c('a',{href:`${link}`,target:'blank',style:`display:${__p(['navBar','__nav_d'],'flex')};align-items:center;justify-content:center;padding:15px 30px;text-decoration:none;margin-right:15px;`,class:'btn_buy'},[`${linkName}`],{genericStyle:['bg_fit']})
}

__SYD.navBar = () =>{
    return __c(
        'div',
        {
            style:__sC.navBar({
                method:'add',
                style:{
                    height:__p(['navBar','_h'],'fit-content'),
                    padding:`15px ${__p(['navBar','padd'],'20px')}`,
                    justifyContent:`${__p(['navBar','padd'],'20px') === '20px' ? 'space-around' : 'space-between'}`
                }
            }),
            class:"navBar"
        },
        [
            __c(
                'div',
                {
                    style:`min-height:${__p(['navBar','l_size'],'50px')};min-width:${__p(['navBar','l_size'],'50px')};border-radius:unset;background-image:url('./assets/logo.jpeg');border-radius:50%;border:2px solid #39ff1499;background-color:transparent;${__p(['navBar','__nav_d'],'flex') === 'flex' ? '' : 'position:absolute;left:5px;'};`,
                },[],{genericStyle:['bg_fit']}
            ),
            __c(
                'div',
                {
                    style:`display:${__p(['navBar','__nav_d'],'flex')};width:fit-content;height:fit-content;justify-content:center;column-gap:50px;padding:5px;` + __sC['txt_shade1'](),
                },
                [
                    __SYD.nav_b_text('About','_p3'),
                    __SYD.nav_b_text('tokenomics','_p5'),
                    __SYD.nav_b_text('road map','roadMapPage'),
                ]
            ),
            __c(
                "div",
                {
                    style:`display:${__p(['navBar','__nav_d'],'flex')};width:fit-content;height:fit-content;justify-content:center;column-gap:50px;padding:5px;` + __sC['txt_shade1'](),
                },
                [
                    __SYD.nav_b_text('Features','feature'),
                    __SYD.nav_b_text('Contact','contact'),
                ]
            ),
            // __SYD.page1Socials(),
            __c(
                'div',
                {
                    style:`position:absolute;right:5px;height:35px;width:35px;background-image:url('./assets/menu.png');display:${__p(['navBar','__nav_d'],'flex') === 'flex' ? 'none' : 'block'};`,class:' menuRotate'
                },
                [

                ],
                {
                    events:{
                        onclick:() =>{
                            const mobileMenu = __g('mobileMenu');
                            // console.log(__v['mobileMenu'])
                            switch(mobileMenu._d)
                            {
                                case 'none':
                                    mobileMenu._d = 'flex';
                                    let _t1 = setTimeout(() =>{
                                        const mobileMenu = __g('mobileMenu');
                                        mobileMenu._op = '1';
                                        __u('mobileMenu',{type:'a',value:mobileMenu});
                                        clearTimeout(_t1)
                                    },100);
                                break;
                                case 'flex':
                                    mobileMenu._op = '0'
                                    let _t2 = setTimeout(() =>{
                                        const mobileMenu = __g('mobileMenu');
                                        mobileMenu._d = 'none';
                                        __u('mobileMenu',{type:'a',value:mobileMenu})
                                        clearTimeout(_t2)
                                    },300)
                            }
                            __u('mobileMenu',{type:'a',value:mobileMenu});
                            __v['mobileMenu'].focus();
                        }
                    },
                    genericStyle:['bg_fit']
                }
            ),
            __SYD.mobileMenu()
        ],
        {
            createState:{
                stateName:'navBar',
                state:{_h:'fit-content',l_size:'50px' , padd:'20px' , __nav_d:'flex'}
            },
            mediaQuery:{
                query:[
                    {size:'<500px',prop:{_h:'fit-content',l_size:'40px' , padd:'5px'}},
                    {size:'<800px',prop:{__nav_d:'none'}}
                ],
                defState:{_h:'fit-content',l_size:'50px',__nav_d:'flex',padd:'20px'}
            },
            genericStyle:['bg_cover']
        }
    )
}

__SYD.nav_b_text = (text,click) =>{
    return __c(
        'p',
        {
            style:'font-size:14px;font-weight:700;cursor:pointer;text-transform:uppercase;font-family:header;transition:all .3s linear;',
            // class:'btn_buy'
        },
        [
            text
        ],
        {
            events:{
                onclick:() =>{
                    switch(true)
                    {
                        case click === 'suntzutrx':
                            window.location = 'https://suntzutrx.xyz/'
                        break;
                        default:
                            __v[click].scrollIntoView();
                            __v['mobileMenu'].blur();
                            
                    }
                },
                onmouseover:(e) =>{
                    e.target.style.textShadow = '2px 2px 1px #171717'
                },
                onmouseout:(e) =>{
                    e.target.style.textShadow = '0px 0px 2px #171717'
                },
            }
        }
    )
}

__SYD.mobileMenu = () =>{
    return __c(
        'div',
        {
            style:`height:fit-content;width:fit-content;min-width:200px;padding:20px 10px;display:${__p(['mobileMenu','_d'],'none')};flex-direction:column;row-gap:20px;border-radius:15px;border-top-right-radius:unset;border-bottom-right-radius:unset;position:absolute;top:100%;right:0;opacity:${__p(['mobileMenu','_op'],'0')};transition:opacity .3s linear;box-shadow:-2px 2px 10px #333333b3;border-left:2px solid rgba(57, 255, 20, 0.6);`,
            tabindex:'1',
            class:'mobile_menu tab_design_3d'
        },
        [
            __SYD.nav_b_text('About','_p3'),
            __SYD.nav_b_text('Tokenomics','_p5'),
            __SYD.nav_b_text('Road Map','roadMapPage'),
            __SYD.nav_b_text('Features','feature'),
            __SYD.nav_b_text('Contacts','contact'),
            __SYD.nav_b_text('Buy Now','suntzutrx'),
            // __SYD.buyNowBtn()

        ],
        {
            createState:{
                stateName:'mobileMenu',
                state:{_d:'none',_op:'0'}
            },
            events:{
                onblur:() =>{
                    const mobileMenu = __g('mobileMenu');
                    console.log('hey')
                    mobileMenu._op = '0'
                    let _t2 = setTimeout(() =>{
                        const mobileMenu = __g('mobileMenu');
                        mobileMenu._d = 'none';
                        __u('mobileMenu',{type:'a',value:mobileMenu})
                        clearTimeout(_t2)
                    },300)
                    __u('mobileMenu',{type:'a',value:mobileMenu})
                }
            }
        }
    )
}


__SYD.page1Socials = () =>{
    return __c(
        'div',
        {
            style:`width:fit-content;padding:10px 0;display:flex;justify-content:center;align-items:center;column-gap:20px;row-gap:20px;flex-wrap:wrap;${__p(['navBar','__nav_d'],'flex') === 'flex' ? "" : "position:absolute;right:60px;"};`
        },
        [
            // __SYD.page1SocialBtn({contentSrc:'mm'}),
            __SYD.page1SocialBtn({contentSrc:'tel' , link:"https://t.me/ragstorichcoin"}),
            __SYD.page1SocialBtn({contentSrc:'x' , link:"https://x.com/to_riches37226?s=21"})
        ]
    )
}

__SYD.page1SocialBtn = ({contentSrc,link = '#'}) =>{
    return __c(
        'div',
        {
            style:__sC._social_style({method:'add',style:{backgroundImage:`url('./assets/${contentSrc}.png')`}}),
            class:'btn_buy'
        },
        [],
        {
            genericStyle:['bg_fit'],
            events:{
                onclick:() =>{
                    window.location = link
                }
            }
        }
    )
}

__m(__SYD.container())

window.addEventListener('DOMContentLoaded' , e =>{
    manage_mediaQuery(window.innerWidth)
})
