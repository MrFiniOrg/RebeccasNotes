import * as React from "react"
// Cool
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStickyNote, faCog } from '@fortawesome/free-solid-svg-icons'

import { MinHeightProperty, MinWidthProperty, BackgroundProperty } from "csstype"

interface INavigationProps
{
    minHeight: MinHeightProperty<string>
    minWidth: MinWidthProperty<string>
    background?: BackgroundProperty<string>
    withBorderRadius?: boolean
}

export const NavigationBar : React.FC<INavigationProps> = (props: INavigationProps) => 
{
    const { minHeight, minWidth } = props
    const { withBorderRadius } = props

    let { background } = props
    if(background === undefined){ background = "darkslateblue"}

    const NavigationStyleClassCollection = ["navigationWrapper"]
    if(withBorderRadius === true){NavigationStyleClassCollection.push("roundedCorners")}

    return (<div className={NavigationStyleClassCollection.join(" ")} style={{ minHeight, minWidth, background }}>
        <div className="navigationItem noselect">
            <span>
                Notes
            </span>    
            <FontAwesomeIcon
                icon={faStickyNote}
                color="ghostwhite"
                title="See what notes are available"
            />
        </div>
        <div className="navigationItem noselect">
            <span>
                Settings
            </span>    
            <FontAwesomeIcon
                spin={true}
                color="ghostwhite"
                icon={faCog}
                title="Change Your Settings"
            />
        </div>
    </div>)
}