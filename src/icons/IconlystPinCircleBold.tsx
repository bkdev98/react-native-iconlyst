import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinCircleBold = ({
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
      d="M12 16.46c-.83 0-3.81-2.54-3.81-5.11 0-2.1 1.71-3.81 3.81-3.81s3.81 1.71 3.81 3.81c0 2.57-2.98 5.11-3.81 5.11M12 2.5c-5.24 0-9.5 4.26-9.5 9.5s4.26 9.5 9.5 9.5 9.5-4.26 9.5-9.5-4.26-9.5-9.5-9.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 10.19c-.66 0-1.19.53-1.19 1.19 0 .65.53 1.19 1.19 1.19s1.19-.54 1.19-1.19c0-.66-.53-1.19-1.19-1.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinCircleBold;
