import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoSlidesBroken = ({
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
      d="M18.13 13.001v3.9c0 1.713-1.388 3.102-3.1 3.102H9.09a3.1 3.1 0 0 1-3.102-3.101V7.1C5.988 5.388 7.377 4 9.09 4h5.94c1.713 0 3.101 1.388 3.101 3.1v2.451M3.084 7.465v9.068M21.084 7.465v9.068"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.06 12.871a7.6 7.6 0 0 1-2.232 1.4c-.72.285-1.324-.07-1.412-.78a14 14 0 0 1 0-2.983c.097-.738.761-1.05 1.412-.777a7.5 7.5 0 0 1 2.231 1.4c.556.504.569 1.218 0 1.74"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoSlidesBroken;
