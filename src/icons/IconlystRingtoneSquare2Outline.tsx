import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneSquare2Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M16.467 21.75H8.033c-3.309 0-5.533-2.321-5.533-5.776V8.026c0-3.455 2.224-5.776 5.533-5.776h8.435C19.777 2.25 22 4.571 22 8.026v7.948c0 3.455-2.224 5.776-5.533 5.776m-8.434-18C5.583 3.75 4 5.429 4 8.026v7.948c0 2.6 1.583 4.276 4.033 4.276h8.434c2.45 0 4.033-1.679 4.033-4.276V8.026c0-2.6-1.583-4.276-4.032-4.276z"
    />
    <Path
      fill={props.color}
      d="M15.503 15.951h-6.5a2.108 2.108 0 0 1-1.905-3l.278-.589c.148-.32.225-.668.226-1.021v-.784a4.652 4.652 0 1 1 9.3 0v.783c0 .353.078.702.229 1.022l.277.588a2.107 2.107 0 0 1-1.907 3zM12.25 7.4a3.157 3.157 0 0 0-3.153 3.153v.784c0 .575-.126 1.142-.37 1.663l-.277.59a.607.607 0 0 0 .548.865h6.5a.608.608 0 0 0 .55-.865l-.273-.59a3.9 3.9 0 0 1-.372-1.661v-.782A3.157 3.157 0 0 0 12.25 7.4"
    />
    <Path
      fill={props.color}
      d="M12.25 18.1a2.6 2.6 0 0 1-2.592-2.592.75.75 0 1 1 1.5 0 1.092 1.092 0 0 0 2.184 0 .75.75 0 1 1 1.5 0A2.6 2.6 0 0 1 12.25 18.1"
    />
  </Svg>
);
export default IconlystRingtoneSquare2Outline;
