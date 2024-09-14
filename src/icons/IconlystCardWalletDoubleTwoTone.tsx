import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardWalletDoubleTwoTone = ({
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
      d="M16.717 3H8.282C5.342 3 3.5 5.081 3.5 8.026v7.948C3.5 18.919 5.334 21 8.282 21h8.434c2.949 0 4.784-2.081 4.784-5.026V8.026C21.5 5.081 19.665 3 16.717 3"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.88 9.35V8.5c0-1.277-.791-2.18-2.077-2.18h-4.606c-1.277 0-2.079.903-2.079 2.18v.85M6.339 9.35h12.324M16.88 15.698v-.61c0-1.279-.791-2.182-2.077-2.182h-4.606c-1.277 0-2.079.903-2.079 2.182v.61"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.659 15.695h-4.204v.03A1.95 1.95 0 0 1 12.5 17.68a1.95 1.95 0 0 1-1.956-1.955v-.03H6.341"
    />
  </Svg>
);
export default IconlystCardWalletDoubleTwoTone;
