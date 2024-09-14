import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingCircle3Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
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
      d="M6.32 18.608a1.005 1.005 0 0 0-1.374.348 1 1 0 1 0 1.715 1.03l.006-.01a.995.995 0 0 0-.346-1.368M3.833 14.818a1.004 1.004 0 0 0-1.375.348 1 1 0 1 0 1.715 1.03l.006-.01a.995.995 0 0 0-.346-1.368M3.072 12.11c.34 0 .671-.173.858-.485l.006-.01a.995.995 0 0 0-.345-1.367 1.006 1.006 0 0 0-1.375.347 1 1 0 0 0 .856 1.515M5.976 7.475l.006-.01a.995.995 0 0 0-.346-1.367 1.007 1.007 0 0 0-1.375.348 1 1 0 1 0 1.715 1.03M8.488 5.255a1 1 0 0 0 1.342-.447l.005-.01a.996.996 0 0 0-.45-1.337 1.007 1.007 0 0 0-1.344.452 1 1 0 0 0 .447 1.342M11.942 2.871h-.002a1 1 0 0 0-.002 2c4.41.01 7.995 3.602 7.989 8.01a7.95 7.95 0 0 1-2.35 5.654 7.94 7.94 0 0 1-5.646 2.336c-.988.045-1.964-.177-2.873-.532a.999.999 0 1 0-.728 1.863 9.9 9.9 0 0 0 3.603.67 9.92 9.92 0 0 0 7.056-2.92 9.94 9.94 0 0 0 2.938-7.07c.008-5.509-4.471-10-9.985-10.01"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoadingCircle3Bold;
