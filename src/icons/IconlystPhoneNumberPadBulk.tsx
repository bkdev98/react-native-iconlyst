import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneNumberPadBulk = ({
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
      d="M6.219 3.5c-1.086 0-1.97.884-1.97 1.97a1.972 1.972 0 0 0 3.941 0c0-1.086-.884-1.97-1.971-1.97M6.219 10.03c-1.086 0-1.97.884-1.97 1.97a1.972 1.972 0 0 0 3.941 0c0-1.086-.884-1.97-1.971-1.97M18.78 7.44a1.973 1.973 0 0 0 1.97-1.97 1.972 1.972 0 0 0-3.941 0c0 1.085.884 1.97 1.97 1.97M18.78 10.03c-1.087 0-1.97.884-1.97 1.97a1.972 1.972 0 0 0 3.94 0c0-1.086-.884-1.97-1.97-1.97"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M12.498 3.5c-1.086 0-1.97.884-1.97 1.97a1.972 1.972 0 0 0 3.941 0c0-1.086-.884-1.97-1.97-1.97M12.498 10.03c-1.086 0-1.97.884-1.97 1.97a1.972 1.972 0 0 0 3.941 0c0-1.086-.884-1.97-1.97-1.97M12.498 16.56c-1.086 0-1.97.885-1.97 1.97a1.972 1.972 0 0 0 3.941 0c0-1.085-.884-1.97-1.97-1.97" />
    </G>
  </Svg>
);
export default IconlystPhoneNumberPadBulk;
