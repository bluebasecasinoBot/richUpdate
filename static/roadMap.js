import { __c, __p, __sC, __SYD } from "./sydneyLib/sydneyDom.js";

__SYD.roadMapPage = () =>{
    return __c(
        "div",
        {
            style:"min-height:fit-content;padding:70px 0;width:100%;column-gap:20px;justify-content:space-around;align-items:center;position:relative;" + __sC["container"]({method:"use" , style:['display','rowGap']}),
            class:"page4_flex",
            id:'roadMap'
        },
        [
            __c(
                "p",
                {
                    style:"display:flex;flex-direction:column;row-gap:30px;text-align:center;font-weight:900;align-items:center;font-size:18px;padding:0 15px;", //+ __sC['txt_shade1'](),
                    class:"page2_text"
                },
                [
                    __c(
                        "p",
                        {
                            style:`font-size:25px;font-weight:900;text-transform:capitalize;margin-bottom:10px;width:fit-content;font-family:sunrise;color:#fff;margin-bottom:10px;font-size:${__p(['roadMapPage' , '__font'],{1:'30px'})['1']};font-family:header;` + __sC['txt_shade2'](),
                            class:"tokenomic_text"
                        },
                        [
                            "Roadmap"
                        ]
                    ),

                    __c(
                        "div",
                        {
                            style:`font-family:header;display:flex;flex-direction:column;row-gap:30px;height:fit-content;width:fit-content;transform: translateX(25%) scale(${__p(['roadMapPage' , '__query'],false) ? ".8" : "1"});` +__sC['txt_shade2']()
                        },
                        [
                            __c(
                                "p",
                                {
                                    style:"padding:10px;transform:translateX(-150px);width: ;margin-left:15px;border-radius:10px;animation-delay:0s;",
                                    class:"right_slant glassMorph_btn"
                                },
                                [
                                    `
                                        Phase 1: Meme
                                    `
                                ]
                            ),
                            __c(
                                "p",
                                {
                                    style:"padding:10px;transform:translateX(50px);width:200px;margin-left:15px;border-radius:10px;animation-delay:.4s;",
                                    class:"left_slant glassMorph_btn"
                                },
                                [
                                    `
                                        Phase 2: HODL
                                    `
                                ]
                            ),
                            __c(
                                "p",
                                {
                                    style:`padding:10px;transform:translateX(-150px);width:200px;margin-left:15px;border-radius:10px;animation-delay:.8s;`,
                                    class:"glassMorph_btn"
                                },
                                [
                                    `
                                        Phase 3: More Meme
                                    `
                                ]
                            )
                        ]
                    )
                ]
            ),
        ],
        {
            createState:{
                stateName:"roadMapPage",
                state:{__query:false,__font:{1:'30px',2:'20px'}}
            },
            mediaQuery:{
                query:[{size:"<600px",prop:{__query:true,__font:{1:'25px',2:'17px'}}}],
                defState:{__query:false,__font:{1:'30px',2:'20px'}}
            }
        }
    )
}