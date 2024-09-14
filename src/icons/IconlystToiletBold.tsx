import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToiletBold = ({
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
      d="M10.573 20.125c.22-.58.36-1.18.43-1.74.62.25 1.3.39 2.01.39.7 0 1.37-.14 1.98-.39.07.56.21 1.16.43 1.74zm8.76-8.37H6.643a.749.749 0 1 0 0 1.5h.98v.14c0 1.66.77 3.13 1.96 4.12v.01c-.03.63-.16 1.75-.64 2.6h-1.13c-.42 0-.75.34-.75.75 0 .42.33.75.75.75h10.4a.749.749 0 1 0 0-1.5h-1.15c-.48-.85-.61-1.96-.64-2.6 1.19-.98 1.97-2.46 1.97-4.13v-.14h.94c.42 0 .75-.33.75-.75 0-.41-.33-.75-.75-.75M11.873 6.475h-1.08a.749.749 0 1 1 0-1.5h1.08a.749.749 0 1 1 0 1.5m3.53-4.1h-4.79a3 3 0 0 0-2.99 3v4.45c0 .28.22.5.5.5h9.77c.28 0 .5-.22.5-.5v-4.45a3 3 0 0 0-2.99-3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystToiletBold;
