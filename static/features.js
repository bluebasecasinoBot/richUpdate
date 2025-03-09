import { __c, __SYD , __p , __u , __g , __sC , __sS} from "./sydneyLib/sydneyDom.js"

__sS([
    {
        nameTag:'page3FloatText',
        style:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            padding:'10px 5px',
            overflow:'visible',
        }
    }
])

__SYD.features_float = ({content,title,align = "left",img = '',delay = '0' , id} = {}) =>{
    return __c(
        'div',
        {
            style:`display:flex;flex-wrap:wrap;flex-direction:column;height:fit-content;width:100%;max-width:900px;align-items:center;position:relative;row-gap:15px;padding:10px;border-radius:15px;justify-content:center;perspective:500px;`,
            class:`tab_design_3d`,
            id:`feature__${id}`,
            // class:__p(['hsec6_text_img_array','show'],false) === false ? (align == 'left' ? 'child_s_image_comp__left_compiment' : 'child_s_image_comp__right_compiment') : 'child_s_image_comp'
        },
        [
            __SYD.floatingText({content,title,align,delay}),
            // __SYD.broadImg({align:align , img:img , delay})
        ]
    )
}


__SYD.floatingText = ({content = [] , title = '' , align = 'left' , delay , summary = ""} = {}) =>{
    
    return __c(
        'div',
        {
            style:`z-index:10;min-height:${__p(['subContainer','scaled'],false) ? '100%' : '50%'};height:fit-content;width:${__p(['subContainer','scaled'],false) ? '50%' : '100%'};overflow-x:hidden;position:${__p(['subContainer','scaled'],false) ? 'static' : 'static'};top:0;${align == 'left' ? 'left:0;' : 'right:0;'}max-width:${__p(['subContainer','scaled'],false) ? '50%' : 'unset'};${align === 'left' ? 'border-top-right-radius:25px;border-bottom-left-radius:25px;' :'border-top-left-radius:25px;border-bottom-right-radius:25px;'}text-align:left;animation-delay:${delay}s;`+__sC.page3FloatText({method:"add" , style:{padding:__p(['subContainer','scaled'],false) ? "30px 20px" : "30px 5px"}}),//${__p(['subContainer','scaled'],false) ? "left" : "center"}//border-${align === 'left' ? 'right' : 'left'}:1px solid rgba(255,255,255,.2);
            class:`text miniTabs_3d`
        },
        [
            __c(
                "div",
                {
                    style:"position:absolute;height:100%;width:100%;z-index:10;border-radius:inherit;",
                    class:`${align === "left" ? "partition_left" : "partition_right"}`
                }
            ),
            __c(
                'div',
                {
                    style:'font-size:20px;font-weight:unset;padding:10px;width:100%;font-family:header;margin-bottom:15px;z-index:15;color:#0099FF;',
                    class:"mainTitle_text"
                },
                [
                    title
                ]
            ),
            __c(
                "p",
                {
                    style:`display:${summary.length === 0 ? "none" : "block"};font-size:18px;padding:10px;width:100%;font-weight:900;color:#b0b0b0;z-index:15;`,
                },
                [
                    summary
                ]
            ),
            __c(
                'div',
                {
                    style:`font-size:18px;padding${__p(['subContainer','scaled'],false) ? "-left" : ""}:10px;line-height:25px;color:#b0b0b0;font-weight:900;width:100%;display:flex;flex-direction:column;row-gap:20px;z-index:15;`,
                    // class:'floatingTxt'
                },
                [
                    // __c("p",{style:"display:inline;color:#b0b0b0"},[content]),
                    __SYD.icon_floatText(content[0]),
                    __SYD.icon_floatText(content[1]),
                ]
            )
        ],
        {
            createState:{
                stateName:'floatingText',
                state:{h:'100%'}
            },
            mediaQuery:{
                query:[{size:'<750px', prop:{h:'50%'}}],
                defState:{h:'100%'}
            }
        }
    )
}

__SYD.icon_floatText = ({header , text , i_class} = {}) =>{
    return __c(
        "div",
        {
            style:"display:flex;column-gap:30px;width:100%;height:fit-content;align-items:center"
        },
        [
            // __c("i" , {style:"font-size:30px;color:#0066FF;font-weight:900;height:30px;min-width:30px;" , class:`${i_class}`}),
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;flex-direction:column;row-gap:7px;"
                },
                [
                    __c("strong" , {style:"color:#fff;"} , [`${header}`]),
                    __c("p" , {style:"font-weight:500;border-radius:10px;background:linear-gradient(to top, #0D1117, #161B22);padding:10px;"} , [`${text}`])
                ]
            )
        ]
    )
}