import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEye3Outline = ({
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
      d="M19.569 14.02c-2.932-6.352-11.706-6.352-14.638 0a.75.75 0 1 1-1.362-.628c3.468-7.515 13.894-7.515 17.362 0a.75.75 0 1 1-1.362.629"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.253 13.56c-.858 0-1.562.701-1.562 1.564 0 .862.704 1.563 1.562 1.563.86 0 1.563-.7 1.563-1.563 0-.862-.703-1.564-1.563-1.564m-3.062 1.564a3.066 3.066 0 0 1 3.062-3.064 3.066 3.066 0 0 1 3.063 3.064 3.065 3.065 0 0 1-3.063 3.063 3.065 3.065 0 0 1-3.062-3.063"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEye3Outline;
