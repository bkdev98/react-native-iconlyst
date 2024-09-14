import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsHorizontalExpandOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.197 6.997a2.55 2.55 0 0 1 3.606 0l3.2 3.2a2.55 2.55 0 0 1 0 3.606l-3.2 3.2a2.55 2.55 0 0 1-4.27-2.453h-3.067a2.55 2.55 0 0 1-4.27 2.453l-3.2-3.2a2.55 2.55 0 0 1 0-3.606l3.2-3.2a2.55 2.55 0 0 1 4.27 2.453h3.068a2.55 2.55 0 0 1 .663-2.453m2.545 1.06a1.05 1.05 0 1 0-1.485 1.485l.128.128a.75.75 0 0 1-.53 1.28h-5.71a.75.75 0 0 1-.53-1.28l.127-.128a1.05 1.05 0 0 0-1.484-1.484l-3.2 3.2a1.05 1.05 0 0 0 0 1.485l3.2 3.2a1.05 1.05 0 1 0 1.484-1.485l-.127-.128a.75.75 0 0 1 .53-1.28h5.71a.75.75 0 0 1 .53 1.28l-.127.128a1.05 1.05 0 0 0 1.484 1.485l3.2-3.2a1.05 1.05 0 0 0 0-1.485z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsHorizontalExpandOutline;
