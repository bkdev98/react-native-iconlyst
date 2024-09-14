import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorLight = ({
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
      d="M17.456 20.787h1.812M4.719 20.79h8.983"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.412 3.21H6.587C4.383 3.21 3 4.774 3 6.982v5.963c0 2.21 1.376 3.77 3.587 3.77h10.824c2.212 0 3.589-1.56 3.589-3.77V6.98c0-2.208-1.377-3.77-3.588-3.77"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorLight;
