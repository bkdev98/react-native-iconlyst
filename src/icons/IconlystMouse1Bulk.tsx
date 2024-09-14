import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouse1Bulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.195 9.295C19.194 5.549 15.965 2.5 12 2.5c-1.917 0-3.721.703-5.08 1.981-1.365 1.284-2.117 2.995-2.116 4.816l.002 5.409c0 3.746 3.227 6.794 7.195 6.794s7.196-3.049 7.196-6.797z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.002 10.445a.75.75 0 0 0 .75-.75V7.672a.75.75 0 0 0-1.5 0v2.023c0 .414.336.75.75.75"
    />
  </Svg>
);
export default IconlystMouse1Bulk;
