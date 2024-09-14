import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMasterCardLight = ({
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
      d="M17.035 4.54H6.964C4.528 4.54 3 6.263 3 8.704v6.588c0 2.442 1.52 4.167 3.964 4.167h10.07c2.445 0 3.966-1.725 3.966-4.167V8.705c0-2.44-1.52-4.166-3.965-4.166"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 9.834h18M9.245 16.16a1.65 1.65 0 0 1-1.165.474 1.66 1.66 0 1 1 0-3.322c.451 0 .86.176 1.165.473"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.064 14.975a1.663 1.663 0 1 1-3.325 0 1.663 1.663 0 0 1 3.325 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMasterCardLight;
