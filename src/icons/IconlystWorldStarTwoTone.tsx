import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldStarTwoTone = ({
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
      d="M11.806 21a9.013 9.013 0 0 1-8.278-8.99C3.528 7.04 7.56 3 12.538 3c4.603 0 8.39 3.45 8.934 7.903"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.876 11.09a21 21 0 0 0-.197-2.212C15.21 5.446 13.982 3 12.54 3c-1.435 0-2.672 2.446-3.141 5.878a22 22 0 0 0-.216 3.13c0 1.107.075 2.167.216 3.142.328 2.38 1.34 4.678 2.409 5.85M3.528 12.018h8.602"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.078 13.537.894 1.8c.046.09.133.154.233.169l2.002.289a.3.3 0 0 1 .203.118.3.3 0 0 1-.032.4l-1.451 1.402a.3.3 0 0 0-.088.27l.347 1.982a.303.303 0 0 1-.25.344.34.34 0 0 1-.2-.031l-1.783-.935a.3.3 0 0 0-.288 0l-1.797.94a.313.313 0 0 1-.415-.128c-.031-.058-.042-.126-.031-.192l.347-1.981a.3.3 0 0 0-.088-.27l-1.459-1.404a.305.305 0 0 1 0-.429.35.35 0 0 1 .175-.085l2.004-.291a.32.32 0 0 0 .231-.17l.893-1.798a.3.3 0 0 1 .177-.154.314.314 0 0 1 .376.155"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWorldStarTwoTone;
