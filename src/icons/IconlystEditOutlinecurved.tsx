import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditOutlinecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.058 11.588 1.227-1.635c.608-.81.864-1.808.721-2.811a3.76 3.76 0 0 0-1.477-2.497 3.795 3.795 0 0 0-5.308.756L4.47 14.396c-2.012 2.683-.222 5.879-.145 6.014a.75.75 0 0 0 .483.357c.058.014.618.138 1.4.138 1.262 0 3.1-.323 4.326-1.957l5.369-7.152a.8.8 0 0 0 .156-.208m-10.58 7.77c.78.095 2.75.162 3.855-1.311l4.996-6.656-3.664-2.751-4.997 6.656c-1.127 1.504-.507 3.345-.19 4.062M11.564 7.44l3.665 2.751.855-1.14a2.294 2.294 0 0 0-.456-3.207 2.3 2.3 0 0 0-3.209.457z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M19.733 20.643h-6.377a.75.75 0 0 1 0-1.5h6.377a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystEditOutlinecurved;
