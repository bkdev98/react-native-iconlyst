import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWheelchairTwoTone = ({
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
      d="M8.653 20.9a4.742 4.742 0 1 0 0-9.485 4.742 4.742 0 0 0 0 9.484M19.444 20.903a2.467 2.467 0 1 0 0-4.934 2.467 2.467 0 0 0 0 4.934M19.443 15.967l-.671-6.512a1.41 1.41 0 0 0-1.398-1.23L7.605 8.21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.075 13.102h-6.8"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.56 3.102h2.062l-.037 8.316"
    />
  </Svg>
);
export default IconlystWheelchairTwoTone;
