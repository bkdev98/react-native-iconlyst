import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessErrorBold = ({
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
      d="M12.8 11.103a.75.75 0 0 1-1.5 0V8.16a.75.75 0 0 1 1.5 0zm-.75 3.794a.746.746 0 0 1-.75-.745v-.01a.75.75 0 0 1 1.5 0 .755.755 0 0 1-.75.755m8.918-7.142c-5.168-5.112-12.67-5.114-17.837 0a1.963 1.963 0 0 0-.129 2.645l7.562 8.988a1.938 1.938 0 0 0 2.969 0l7.56-8.988c.65-.77.595-1.932-.125-2.645"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessErrorBold;
