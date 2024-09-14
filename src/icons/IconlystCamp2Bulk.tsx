import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp2Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M21.75 20.489c0 .42-.34.75-.75.75H3a.749.749 0 1 1 0-1.5h.4l7.75-14.36-.81-1.51c-.2-.36-.07-.82.3-1.01.36-.2.82-.07 1.02.3l.34.63.34-.63c.2-.37.66-.5 1.02-.31.36.2.5.66.3 1.02l-.81 1.5 7.75 14.37h.4c.41 0 .75.34.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.36 17.948v3.29h-1.5v-3.29c0-1.02-.83-1.85-1.85-1.85s-1.85.83-1.85 1.85v3.29h-1.5v-3.29a3.35 3.35 0 0 1 6.7 0M16.43 12.008H7.57l.81-1.5h7.24z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCamp2Bulk;
