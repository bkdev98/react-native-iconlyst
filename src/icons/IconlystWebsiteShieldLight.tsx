import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebsiteShieldLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.729 12.093V8.16c0-2.857-1.779-4.875-4.639-4.875H7.91c-2.851 0-4.639 2.018-4.639 4.875v7.707c0 2.856 1.78 4.874 4.639 4.874h1.697M11.578 6.727h-.064m-5.036 0h-.064zm2.55 0h-.064zM20.729 9.578H3.27"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.589 21.282s3.133-.948 3.133-3.564.114-2.53-.137-2.785c-.252-.254-2.586-1.066-2.996-1.066s-2.744.814-2.996 1.066c-.252.251-.137.17-.137 2.785s3.133 3.564 3.133 3.564"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebsiteShieldLight;
