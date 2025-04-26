import React from 'react'
import {getMinutes} from 'date-fns'

import {TickLabel, TickMarker} from './StyledComponents'

interface TickProps {
    tick: {
        id: string
        value: number
        percent: number
    }
    count: number
    format: (value: number) => string,
    showMinutes: number | undefined
}

const Tick: React.FC<TickProps> = ({tick, count, format, showMinutes}) => {
    const minutes = getMinutes(tick.value);

    const showLabel = (showMinutes ?? 0) % minutes == 0;
    const tickLabelStyle = {
        marginLeft: `${-(100 / count) / 2}%`,
        width: `${100 / count}%`,
        left: `${tick.percent}%`,
    }

    return (
        <>
            <TickMarker
                isFullHour={showLabel}
                style={{left: `${tick.percent}%`}}/>
            {showLabel && <TickLabel
                style={tickLabelStyle}>{format(tick.value)}</TickLabel>}
        </>
    )
}

export default Tick
