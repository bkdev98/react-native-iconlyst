import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserAiTwoTone = ({
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
      d="M3 12a9 9 0 1 0 12.755-8.182"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.852 19.374c.204-1.586 1.615-3.347 5.118-3.347 3.541 0 4.943 1.771 5.137 3.377M8.62 11.305a3.296 3.296 0 1 0 5.154-3.571"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.596 4.242-.101.273A3.76 3.76 0 0 1 3.273 6.74L3 6.842l.273.1a3.76 3.76 0 0 1 2.222 2.226l.1.273.102-.273a3.76 3.76 0 0 1 2.221-2.225l.273-.101-.273-.102a3.76 3.76 0 0 1-2.221-2.225zM10.906 3A1.77 1.77 0 0 1 9.73 4.178a1.77 1.77 0 0 1 1.176 1.179 1.77 1.77 0 0 1 1.177-1.179A1.77 1.77 0 0 1 10.906 3"
    />
  </Svg>
);
export default IconlystUserAiTwoTone;
