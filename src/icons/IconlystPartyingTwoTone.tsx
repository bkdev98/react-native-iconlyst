import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPartyingTwoTone = ({
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
      d="M21.072 9.248A9 9 0 0 0 12.5 3a9 9 0 1 0 5.471 16.146l.829-.646"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.795 15.421h3.917c.858 0 1.554-.696 1.554-1.554v-.149a1.405 1.405 0 1 0-2.81 0v.036M12.438 16.663c.682-.21 1.119-.531 1.119-.892 0-.379-.767-.805-.767-.805s.767-.407.767-.766c0-.31-.422-.587-1.083-.77M8.617 9.81c.265-.345.655-.56 1.088-.56s.823.215 1.088.56M14.086 9.81c.265-.345.655-.56 1.088-.56s.823.215 1.088.56M9.5 3.5 2.5 2 4 9M3.5 5.5 6 3"
    />
  </Svg>
);
export default IconlystPartyingTwoTone;
