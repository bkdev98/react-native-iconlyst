import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHospitalHouseBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21H6.784a3.32 3.32 0 0 1-3.321-3.323v-7.173c0-.89.4-1.734 1.091-2.298l5.575-4.54a2.96 2.96 0 0 1 3.743 0l5.574 4.54a2.97 2.97 0 0 1 1.092 2.298v7.173A3.32 3.32 0 0 1 17.216 21h-1.013"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.047 16.597h-2.094a.47.47 0 0 1-.47-.47v-1.65H8.83a.47.47 0 0 1-.47-.47v-2.1c0-.26.212-.47.47-.47h1.654M10.953 9.316h2.094c.26 0 .47.21.47.47v1.652h1.653c.26 0 .47.21.47.47v2.098c0 .26-.21.471-.47.471h-1.653"
    />
  </Svg>
);
export default IconlystHospitalHouseBroken;
