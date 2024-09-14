import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquarelinkBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.157 10.3c0-.657.256-1.273.72-1.734a2.44 2.44 0 0 1 1.733-.718H22V6.005c0-.937-.364-1.816-1.027-2.475A3.53 3.53 0 0 0 18.5 2.505H9.843v11.203a2.452 2.452 0 0 1-2.454 2.453H3v1.844c0 .937.364 1.816 1.026 2.475A3.54 3.54 0 0 0 6.5 21.505h8.657z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.39 14.66a.97.97 0 0 0 .677-.282.94.94 0 0 0 .276-.671V2.504H3.5a.5.5 0 0 0-.5.5V14.66zM17.61 9.346a.96.96 0 0 0-.677.282.94.94 0 0 0-.276.671v11.204H18.5c.917 0 1.818-.374 2.473-1.025A3.47 3.47 0 0 0 22 18.003V9.346z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquarelinkBulk;
