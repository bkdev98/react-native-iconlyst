import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDelivery3Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.16 4.767-.846 2.116a6.3 6.3 0 0 0-.452 2.334l-.012 7.697c-.006 2.372 1.07 4.05 3.446 4.056l11.11.016c2.373.006 3.425-1.666 3.43-4.038l.014-7.71a6.3 6.3 0 0 0-.458-2.372l-.848-2.106a2.79 2.79 0 0 0-2.585-1.746H7.748c-1.14 0-2.165.694-2.588 1.753M7.465 16.865h2.996M3.986 8.007h17.726"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.558 3.014.854 4.993v5.222l-2.568-.965-2.557.965V8.007l.854-4.993"
    />
  </Svg>
);
export default IconlystDelivery3Light;
