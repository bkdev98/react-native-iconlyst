import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInfoMenuTwoTone = ({
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
      strokeWidth={1.5}
      d="M6.244 11.02a1.744 1.744 0 1 0 0 3.488 1.744 1.744 0 0 0 0-3.488Z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.5 11.02a1.744 1.744 0 1 0 0 3.488 1.744 1.744 0 0 0 0-3.488Z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M18.756 11.02a1.744 1.744 0 1 0 0 3.488 1.744 1.744 0 0 0 0-3.488Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInfoMenuTwoTone;
