import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRetouchMagicWandOutline = ({
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
      d="M14.745 7.852 6.52 16.078h-.001a1.71 1.71 0 0 0 0 2.417l1.258 1.254a1.71 1.71 0 0 0 2.42 0l8.224-8.226h.001a1.71 1.71 0 0 0 0-2.417l-1.258-1.254a1.71 1.71 0 0 0-2.419 0m3.478-1.062a3.21 3.21 0 0 0-4.538.001l-8.226 8.226-.001.001a3.21 3.21 0 0 0 .001 4.539h.001l1.257 1.253a3.21 3.21 0 0 0 4.54 0l8.21-8.21.033-.034a3.21 3.21 0 0 0-.018-4.522zm-.02 5.262v-.006.006m0-.012"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.936 8.54a.75.75 0 0 1 1.06 0l4.712 4.712a.75.75 0 1 1-1.06 1.06l-4.712-4.711a.75.75 0 0 1 0-1.061M10.017 2.695a.75.75 0 0 1 .75.75v.057a.75.75 0 0 1-1.5 0v-.057a.75.75 0 0 1 .75-.75M5.3 7.43a.75.75 0 0 1 .75.75v.038a.75.75 0 1 1-1.5 0V8.18a.75.75 0 0 1 .75-.75M17.705 18.59a.75.75 0 0 1 .75.75v.038a.75.75 0 0 1-1.5 0v-.038a.75.75 0 0 1 .75-.75M9.128 6.652a.75.75 0 0 1 .75.75v.057a.75.75 0 1 1-1.5 0v-.057a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRetouchMagicWandOutline;
