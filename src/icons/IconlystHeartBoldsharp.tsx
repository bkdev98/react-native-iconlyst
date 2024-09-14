import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartBoldsharp = ({
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
      d="M17.691 3.371c-2.096-.677-4.007-.113-5.44 1.583-1.436-1.698-3.347-2.259-5.44-1.583-2.648.852-4.299 3.243-4.31 6.24-.025 5.133 4.916 9.155 9.547 11.207l.203.09.203-.09C17.086 18.766 22.025 14.744 22 9.61c-.012-2.996-1.663-5.387-4.309-6.239"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartBoldsharp;
