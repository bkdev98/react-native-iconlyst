import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallWarningBroken = ({
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
      d="M8.899 15.638c8.19 8.189 10.52 4.641 10.888 4.347 2.928-2.928 1.6-3.39-.712-5.701-2.398-2.396-3.517 2.225-7.282-1.54-3.765-3.764.852-4.886-1.544-7.283-2.312-2.31-2.767-3.646-5.703-.71C4.281 5.08 1.388 7 6.77 13.342M16.861 9.069v-.06M16.856 3v3.386"
    />
  </Svg>
);
export default IconlystPhoneCallWarningBroken;
