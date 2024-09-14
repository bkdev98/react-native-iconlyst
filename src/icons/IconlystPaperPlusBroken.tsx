import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperPlusBroken = ({
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
      d="M4.25 11V6.49a3.82 3.82 0 0 1 3.835-3.728h6.652l5.066 5.278v9.3a3.77 3.77 0 0 1-3.73 3.775H8.085q-.093.002-.185.002a3.714 3.714 0 0 1-3.65-3.777v-2.712"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.474 2.75v2.91a2.575 2.575 0 0 0 2.57 2.574M14.294 12.914h-4.9M11.844 15.364v-4.9"
    />
  </Svg>
);
export default IconlystPaperPlusBroken;
