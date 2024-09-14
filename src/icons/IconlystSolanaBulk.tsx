import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSolanaBulk = ({
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
      d="M16.717 2.505H8.283C5.123 2.505 3 4.727 3 8.035v7.939c0 3.308 2.123 5.53 5.283 5.53h8.433c3.16 0 5.284-2.222 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.932 13.776-1.32 2.78a.75.75 0 0 1-.679.427H7.744a.75.75 0 0 1-.634-.35.75.75 0 0 1-.044-.722l1.172-2.464-1.172-2.572a.74.74 0 0 1-.072-.312v-.004l.001-.004c0-.028.008-.055.015-.082q.008-.024.012-.05l.008-.045a.5.5 0 0 1 .03-.116l.002-.014.004-.017 1.321-2.78a.75.75 0 0 1 .678-.428h8.19a.75.75 0 0 1 .677 1.072L16.76 10.56l1.172 2.574a.7.7 0 0 1 .071.31v.005a.5.5 0 0 1-.024.132l-.013.046-.009.045c-.004.024-.007.048-.017.07l-.004.017zM16.07 8.524l-.614 1.29h-6.53l.613-1.29zm-.614 2.79h-6.54l.627 1.38h6.542zm-6.525 4.17.614-1.29h6.528l-.613 1.29z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSolanaBulk;
