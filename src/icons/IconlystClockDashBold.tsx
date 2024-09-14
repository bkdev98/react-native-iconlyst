import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClockDashBold = ({
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
      d="m11.298 13.528 3.191 1.91a.999.999 0 1 0 1.027-1.716l-2.704-1.62V8.55a1 1 0 0 0-2 0v4.12c0 .352.184.677.486.858M8.566 4.34a.998.998 0 0 0 1.376-.324l.007-.01a.996.996 0 0 0-.327-1.372 1.006 1.006 0 0 0-1.38.33 1 1 0 0 0 .324 1.376M6.18 6.52l.005-.01a.996.996 0 0 0-.476-1.328 1.005 1.005 0 0 0-1.335.479 1 1 0 1 0 1.806.859M3.23 11.24a1 1 0 0 0 .869-.504l.006-.01a.996.996 0 0 0-.375-1.36 1.005 1.005 0 0 0-1.367.378 1 1 0 0 0 .867 1.496M3.991 13.948a1.006 1.006 0 0 0-1.375.348 1 1 0 1 0 1.715 1.029l.006-.01a.995.995 0 0 0-.346-1.367M6.413 17.7a1.005 1.005 0 0 0-1.344.453 1 1 0 0 0 1.79.895l.004-.01a.996.996 0 0 0-.45-1.337"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.1 2H12.1a1 1 0 0 0-.002 2c4.41.009 7.995 3.602 7.989 8.009a7.96 7.96 0 0 1-2.351 5.656A7.94 7.94 0 0 1 12.09 20h-.017a7.8 7.8 0 0 1-2.857-.532 1.002 1.002 0 0 0-.728 1.864c1.143.445 2.314.648 3.604.668a9.93 9.93 0 0 0 7.055-2.919 9.95 9.95 0 0 0 2.938-7.069C22.094 6.502 17.614 2.011 12.1 2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClockDashBold;
