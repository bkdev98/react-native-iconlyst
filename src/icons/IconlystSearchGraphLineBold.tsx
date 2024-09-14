import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchGraphLineBold = ({
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
      d="M4.715 11.42C4.715 7.328 8.043 4 12.133 4s7.417 3.328 7.417 7.42-3.327 7.42-7.417 7.42-7.418-3.328-7.418-7.42m17.276 8.872-2.734-2.73a9.37 9.37 0 0 0 2.293-6.142c0-5.194-4.225-9.42-9.417-9.42s-9.418 4.226-9.418 9.42 4.225 9.42 9.418 9.42a9.35 9.35 0 0 0 5.662-1.911l2.783 2.779a1 1 0 0 0 1.414-.001c.39-.391.39-1.024 0-1.415"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.218 8.677-1.882 2.427-2.12-1.66a1 1 0 0 0-1.409.176l-2.552 3.31a1 1 0 1 0 1.584 1.221l1.937-2.512 2.117 1.658a.997.997 0 0 0 1.407-.174l2.498-3.219a1 1 0 1 0-1.58-1.227"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchGraphLineBold;
