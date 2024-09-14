import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCancelBroken = ({
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
      d="M8.912 15.66c8.158 8.155 10.48 4.622 10.845 4.329 2.916-2.916 1.593-3.378-.71-5.679-2.387-2.386-3.502 2.216-7.252-1.533s.849-4.867-1.538-7.255c-2.302-2.3-2.756-3.631-5.68-.707-.264.328-3.146 2.242 2.216 8.56M21.336 3l-5.084 5.084m0-5.084 5.084 5.084"
    />
  </Svg>
);
export default IconlystPhoneCancelBroken;
