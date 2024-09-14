import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUnlockBrokencurved = ({
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
      d="M16.62 5.93a4.58 4.58 0 0 0-4.43-3.238 4.56 4.56 0 0 0-4.5 4.484v2.17M12.25 14.097v2.221"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.354 21.091c3.358-.57 4.556-2.328 4.556-6.055 0-4.703-1.91-6.27-7.66-6.27s-7.66 1.567-7.66 6.27c0 4.704 1.91 6.272 7.66 6.272"
    />
  </Svg>
);
export default IconlystUnlockBrokencurved;
