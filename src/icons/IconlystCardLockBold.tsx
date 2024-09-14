import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardLockBold = ({
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
      d="M21.18 7.83c0-2.793-1.794-4.67-4.465-4.67H6.645c-2.67 0-4.465 1.877-4.465 4.67v.08a.3.3 0 0 0 .3.3h18.4a.3.3 0 0 0 .3-.3zM17.845 10.747a3.86 3.86 0 0 1 2.761 1.098c.194.187.574.066.574-.203V10.01a.3.3 0 0 0-.3-.3H2.48a.3.3 0 0 0-.3.3v4.4c0 2.793 1.794 4.67 4.465 4.67h5.762a.3.3 0 0 0 .3-.3v-1.424c0-1.041.458-1.969 1.171-2.622a.33.33 0 0 0 .107-.231c.075-2.054 1.796-3.737 3.86-3.756"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.32 19.146a.84.84 0 0 1-.835.84h-3.193a.84.84 0 0 1-.835-.84v-1.79c0-.458.375-.83.835-.83h3.193c.46 0 .835.372.835.83zm-2.44-5.65c.315.01.592.109.812.323.224.216.35.506.352.807v.4h-2.312v-.397a1.146 1.146 0 0 1 1.147-1.132m2.664 1.795v-.673a2.64 2.64 0 0 0-.808-1.876 2.57 2.57 0 0 0-1.879-.745 2.64 2.64 0 0 0-2.625 2.62v.675a2.32 2.32 0 0 0-1.275 2.064v1.79a2.34 2.34 0 0 0 2.335 2.34h3.193a2.34 2.34 0 0 0 2.335-2.34v-1.79c0-.903-.522-1.678-1.276-2.065"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCardLockBold;
