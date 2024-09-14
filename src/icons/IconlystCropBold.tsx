import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCropBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.204 4.202h3.963a.75.75 0 0 0 0-1.5h-3.963a.75.75 0 0 0 0 1.5M3.186 15.184a.75.75 0 0 0 .75-.75v-3.962a.75.75 0 0 0-1.5 0v3.962c0 .414.336.75.75.75M21.186 9.722a.75.75 0 0 0-.75.75v3.962a.75.75 0 0 0 1.5 0v-3.962a.75.75 0 0 0-.75-.75M7.346 20.69c-1.853-.216-3.12-1.497-3.39-3.426a.75.75 0 0 0-1.486.208c.365 2.608 2.167 4.412 4.702 4.707a.75.75 0 0 0 .174-1.49M21.219 16.626a.756.756 0 0 0-.847.639c-.273 1.956-1.506 3.206-3.381 3.424a.752.752 0 0 0 .174 1.49c2.53-.295 4.328-2.098 4.694-4.706a.75.75 0 0 0-.64-.848M14.168 20.702h-3.963a.75.75 0 0 0 0 1.5h3.963a.75.75 0 0 0 0-1.5M16.57 16.54a1 1 0 1 0 0-2h-5.68a.79.79 0 0 1-.79-.792v-5.68a1 1 0 1 0-2 0v.302h-.3a1 1 0 0 0 0 2h.3v3.378a2.794 2.794 0 0 0 2.79 2.791h3.377v.3a1 1 0 0 0 2 0v-.3zM3.11 8.29a.75.75 0 0 0 .847-.639c.27-1.933 1.537-3.216 3.388-3.433a.75.75 0 0 0 .66-.833.754.754 0 0 0-.834-.657c-2.534.296-4.335 2.104-4.702 4.716-.056.41.23.79.64.847M16.991 4.217c1.874.22 3.106 1.471 3.381 3.435a.75.75 0 0 0 1.486-.208c-.366-2.614-2.164-4.42-4.693-4.717a.75.75 0 0 0-.174 1.49"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.592 8.37a1 1 0 1 0 0 2h1.884c.436 0 .79.354.79.79v1.916a1 1 0 1 0 2 0V11.16a2.793 2.793 0 0 0-2.79-2.79z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCropBold;
