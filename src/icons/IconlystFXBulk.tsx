import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFXBulk = ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.212 2.807H7.778c-3.157 0-5.278 2.218-5.278 5.52v7.947c0 3.303 2.121 5.522 5.278 5.522h8.434c3.163 0 5.288-2.22 5.288-5.522V8.328c0-3.303-2.125-5.521-5.288-5.521"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.313 15.636a.75.75 0 0 0 .143-1.051L15.72 12.3l1.736-2.284a.75.75 0 1 0-1.193-.907l-1.484 1.952-1.483-1.952a.75.75 0 0 0-1.194.907l1.735 2.282-1.735 2.282a.751.751 0 0 0 .596 1.204c.227 0 .45-.102.598-.297l1.482-1.95 1.485 1.954a.746.746 0 0 0 1.05.144M8.166 10.314h2.029a.75.75 0 0 0 0-1.5H7.416a.75.75 0 0 0-.75.75v5.473a.75.75 0 0 0 1.5 0v-1.984h1.762a.75.75 0 0 0 0-1.5H8.166z"
    />
  </Svg>
);
export default IconlystFXBulk;
