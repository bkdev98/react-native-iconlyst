import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruckAddPlusLight = ({
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
      d="M6.858 11.624a3.858 3.858 0 1 0-.003-7.716 3.858 3.858 0 0 0 .003 7.716M6.858 8.986V6.548m-1.22 1.22h2.438"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.976 18.175a1.916 1.916 0 1 0-3.831 0 1.916 1.916 0 0 0 3.831 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.144 18.175h-.056a2.08 2.08 0 0 1-2.078-2.079v-3.06"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.115 18.175a1.916 1.916 0 1 0-3.833 0 1.916 1.916 0 0 0 3.833 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.115 18.175h.807c1.147 0 2.077-.93 2.077-2.079v-3.441a2.36 2.36 0 0 0-1.408-2.16l-3.392-1.496M18.6 13.405H21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.2 16.259V7.977c0-1.148-.93-2.079-2.077-2.079h-1.084M8.977 18.175h5.308"
    />
  </Svg>
);
export default IconlystTruckAddPlusLight;
