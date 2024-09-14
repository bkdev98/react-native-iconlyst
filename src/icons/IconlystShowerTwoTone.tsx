import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShowerTwoTone = ({
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
      d="M15.026 6.85V5.5c0-1.52-1.346-2.69-2.851-2.474l-4.49.64A2.5 2.5 0 0 0 5.537 6.14v10.778"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.592 11.285c0-2.52 2.102-4.55 4.65-4.43 2.385.112 4.22 2.167 4.22 4.556a.837.837 0 0 1-.837.836H11.43a.837.837 0 0 1-.837-.836z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.248 15.23v2.161m0 2.615V21m5.557-5.77v2.161m0 2.615V21m-2.778-1.354v-1.319m0-2.614v-.482"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystShowerTwoTone;
