import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruckHideMinusTwoTone = ({
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
      d="M5.644 18.175h-.056a2.08 2.08 0 0 1-2.078-2.079v-3.06M18.615 18.175h.807c1.147 0 2.077-.93 2.077-2.079v-3.441a2.36 2.36 0 0 0-1.408-2.16l-3.392-1.496"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.1 13.404h2.4"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.475 18.174h5.308M16.699 16.259V7.977c0-1.148-.93-2.079-2.078-2.079h-1.084"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.476 18.175a1.916 1.916 0 1 0-3.833 0 1.916 1.916 0 0 0 3.833 0M18.615 18.175a1.916 1.916 0 1 0-3.832 0 1.916 1.916 0 0 0 3.832 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.358 11.624a3.858 3.858 0 1 0-.003-7.716 3.858 3.858 0 0 0 .003 7.716M6.139 7.767h2.437"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTruckHideMinusTwoTone;
