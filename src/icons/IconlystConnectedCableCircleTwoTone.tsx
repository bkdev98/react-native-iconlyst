import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectedCableCircleTwoTone = ({
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
      d="M19.18 5.94A9 9 0 1 1 6.453 18.67 9 9 0 0 1 19.18 5.94"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.972 10.424 1.086-1.087a2.512 2.512 0 0 1 3.553 3.552l-1.087 1.087M15.613 9.334l3.428-3.428M14.514 13.997l-1.086 1.087a2.512 2.512 0 0 1-3.552-3.552l1.086-1.087M14.94 14.407l-4.395-4.395M9.874 15.086l-3.468 3.468M17.901 14.195l.986.264M14.664 17.34l.361.954M6.59 9.957l.986.264M10.452 6.121l.361.954"
    />
  </Svg>
);
export default IconlystConnectedCableCircleTwoTone;
