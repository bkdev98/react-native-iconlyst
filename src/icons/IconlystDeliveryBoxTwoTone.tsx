import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.292 19.663a1.3 1.3 0 0 0-1.343-1.259 1.3 1.3 0 0 0-1.265 1.335c.02.717.622 1.28 1.342 1.26a1.3 1.3 0 0 0 1.266-1.336"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.813 6.74 2.08.61 4.532 11.188M12.201 19.216l7.988-3.202"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.934 14.9-2.689 1.037c-.935.362-1.781-.071-2.145-1.005L9.161 7.74c-.365-.934-.037-1.819.903-2.182l2.688-1.037c.94-.363 1.781.071 2.145 1.005l2.94 7.192c.364.934.037 1.819-.903 2.181"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.79 7.673 1.175-.454"
    />
  </Svg>
);
export default IconlystDeliveryBoxTwoTone;
