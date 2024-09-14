import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashCircleTwoTone = ({
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
      d="M18.363 5.773A9 9 0 1 1 5.635 18.5 9 9 0 0 1 18.363 5.773"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.744 12.51 1.81-4.416a.28.28 0 0 1 .263-.184h2.426c.194 0 .33.192.265.375l-1.072 2.518a.28.28 0 0 0 .265.374h2.29c.242 0 .37.285.212.467l-4.35 4.964c-.195.224-.56.03-.483-.258l.83-3.109a.28.28 0 0 0-.272-.353h-1.92a.28.28 0 0 1-.264-.378"
    />
  </Svg>
);
export default IconlystFlashCircleTwoTone;
