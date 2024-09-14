import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLinkedinBold = ({
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
      d="M16.582 15.488a.75.75 0 0 1-1.5 0v-3.09a1.58 1.58 0 0 0-1.576-1.58 1.58 1.58 0 0 0-1.576 1.58v3.09a.75.75 0 0 1-1.5 0v-3.09c0-1.698 1.38-3.08 3.076-3.08a3.08 3.08 0 0 1 3.076 3.08zm-8.412-5.16c-.414 0-.785-.365-.785-.78 0-.414.371-.79.785-.79s.786.376.786.79-.372.78-.786.78m.748 5.16a.75.75 0 0 1-1.5 0v-3.41a.75.75 0 0 1 1.5 0zM12 3.008c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLinkedinBold;
