import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruckRemoveClose2TwoTone = ({
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
      d="M5.645 18.175h-.056a2.08 2.08 0 0 1-2.078-2.079v-3.06M16.699 16.259V7.977c0-1.148-.93-2.079-2.078-2.079h-1.084M9.475 18.175h5.308M18.615 18.175h.807c1.147 0 2.077-.93 2.077-2.078v-3.442a2.36 2.36 0 0 0-1.408-2.16L16.699 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.1 13.405h2.4"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.476 18.175a1.916 1.916 0 1 0-3.831 0 1.916 1.916 0 0 0 3.831 0M18.615 18.175a1.916 1.916 0 1 0-3.832 0 1.916 1.916 0 0 0 3.832 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.358 11.624a3.858 3.858 0 1 0-.003-7.716 3.858 3.858 0 0 0 .003 7.716M6.494 8.629l1.723-1.723m-1.723 0 1.723 1.723"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTruckRemoveClose2TwoTone;