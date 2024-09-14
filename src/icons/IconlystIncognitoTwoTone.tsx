import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIncognitoTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.676 17.446a3.21 3.21 0 1 1-6.42 0 3.21 3.21 0 0 1 6.42 0M20.746 17.446a3.21 3.21 0 1 1-6.42 0 3.21 3.21 0 0 1 6.42 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.676 17.407c1.272-.423 2.488-.418 3.65 0M19.253 10.125l-.27-2.725a3.875 3.875 0 0 0-3.856-3.492H9.876A3.875 3.875 0 0 0 6.02 7.4l-.27 2.725"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 10.791c5.955-.98 11.956-.967 18 0"
    />
  </Svg>
);
export default IconlystIncognitoTwoTone;
