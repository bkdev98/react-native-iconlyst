import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.777 21.207a8.97 8.97 0 0 0 6.92-3.219c2.722-3.227 2.807-8.071.194-11.387A8.988 8.988 0 0 0 6.443 5.79c-2.751 2.76-3.345 6.848-1.804 10.192.128.321.625 1.203.959 1.784.19.33.17.736-.049 1.047s-.498.707-.714 1.033c-.389.583.024 1.363.722 1.362h.54c2.373 0 5.852-.002 6.68 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.191 10.361-1.728 3.537m6.674-3.537-1.728 3.537"
    />
  </Svg>
);
export default IconlystMessagesTwoTone;
