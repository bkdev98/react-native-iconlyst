import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCancelTwoTone = ({
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
      d="M11.795 12.778c3.75 3.75 4.865-.853 7.253 1.533 2.302 2.301 3.625 2.763.71 5.679-.367.293-2.688 3.826-10.846-4.33C.755 7.506 4.284 5.18 4.577 4.817c2.924-2.924 3.378-1.593 5.68.707 2.387 2.388-2.212 3.506 1.538 7.255"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.336 3-5.084 5.084m0-5.084 5.084 5.084"
    />
  </Svg>
);
export default IconlystPhoneCancelTwoTone;
