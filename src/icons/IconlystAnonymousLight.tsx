import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnonymousLight = ({
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
    <Circle
      cx={10.491}
      cy={8.643}
      r={4.701}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.661 13.344H8.41a4.4 4.4 0 0 0-4.4 4.399c0 .644-.045 1.306.066 1.944M17.61 20.955v.007M17.608 18.741c-.01-.808.725-1.151 1.272-1.464.667-.367 1.119-.952 1.119-1.764 0-1.203-.973-2.17-2.168-2.17a2.16 2.16 0 0 0-2.168 2.17"
    />
  </Svg>
);
export default IconlystAnonymousLight;
