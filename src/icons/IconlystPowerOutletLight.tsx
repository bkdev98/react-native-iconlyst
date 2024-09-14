import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletLight = ({
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
      d="M7.832 6.493a6.84 6.84 0 0 0 .498 10.128c2.755 2.275 6.858 1.866 9.385-.66l1.462-1.462a1.52 1.52 0 0 0 0-2.147l-7.529-7.528a1.517 1.517 0 0 0-2.146 0z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.134 4-2.155 2.154M20 8.865l-2.154 2.154M10.893 10.088l3.019 3.019M7.833 16.168 4 20.001"
    />
  </Svg>
);
export default IconlystPowerOutletLight;
