import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperFailBroken = ({
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
      d="M4.25 13.915v3.425a3.8 3.8 0 0 0 3.822 3.777l.118-.002h7.883a3.77 3.77 0 0 0 3.729-3.775v-9.3l-5.065-5.278H7.979A3.73 3.73 0 0 0 4.25 6.49v3.712"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.474 2.75v2.91a2.574 2.574 0 0 0 2.568 2.574M13.576 14.648l-3.466-3.466M10.11 14.648l3.467-3.466"
    />
  </Svg>
);
export default IconlystPaperFailBroken;
