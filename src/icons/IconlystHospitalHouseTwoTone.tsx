import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHospitalHouseTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.695 21h10.431a3.32 3.32 0 0 0 3.322-3.323v-7.173c0-.89-.4-1.734-1.092-2.298l-5.574-4.54a2.96 2.96 0 0 0-3.743 0l-5.574 4.54a2.97 2.97 0 0 0-1.092 2.298v7.173A3.32 3.32 0 0 0 7.695 21"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.957 16.597h-2.094a.47.47 0 0 1-.47-.47v-1.65H9.74a.47.47 0 0 1-.47-.47v-2.1c0-.26.212-.47.47-.47h1.655v-1.65c0-.26.21-.47.47-.47h2.093c.26 0 .47.21.47.47v1.65h1.653c.26 0 .47.21.47.47v2.1c0 .259-.21.47-.47.47h-1.653v1.65c0 .26-.21.47-.47.47"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHospitalHouseTwoTone;
