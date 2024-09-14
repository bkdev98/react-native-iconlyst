import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInformationOutline = ({
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
      d="M16.681 20.85H7.832a5.14 5.14 0 0 1-3.657-1.48A5.96 5.96 0 0 1 2.5 15.09V8.913A5.44 5.44 0 0 1 7.832 3.15h8.836A5.44 5.44 0 0 1 22 8.913v6.177a5.96 5.96 0 0 1-1.675 4.275 5.05 5.05 0 0 1-3.644 1.485m-8.851-1.5h8.849a3.58 3.58 0 0 0 2.588-1.043A4.48 4.48 0 0 0 20.5 15.09V8.913c0-2.47-1.611-4.263-3.832-4.263H7.832C5.611 4.65 4 6.443 4 8.913v6.177a4.48 4.48 0 0 0 1.233 3.213c.7.669 1.63 1.044 2.597 1.047"
    />
    <Path
      fill={props.color}
      d="M13.242 16.632h-6.3a.75.75 0 1 1 0-1.5h6.3a.75.75 0 1 1 0 1.5m-3.6-2.874h-2.7a.75.75 0 1 1 0-1.5h2.7a.75.75 0 1 1 0 1.5M17.001 11.567h-2.485a1.31 1.31 0 0 1-1.307-1.307V8.227a1.31 1.31 0 0 1 1.307-1.307h2.485a1.31 1.31 0 0 1 1.308 1.307v2.033a1.31 1.31 0 0 1-1.308 1.307m-2.292-1.5h2.1V8.42h-2.1z"
    />
  </Svg>
);
export default IconlystInformationOutline;
