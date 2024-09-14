import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDonutTwoTone = ({
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
      cx={11.999}
      cy={12.293}
      r={3.507}
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
      d="M20.932 14.705a9.25 9.25 0 1 0-6.726 6.573 2.5 2.5 0 0 1-.391-1.341c0-.682.274-1.3.718-1.75a2.5 2.5 0 0 1-.112-.742 2.492 2.492 0 0 1 3.108-2.414 2.49 2.49 0 0 1 3.403-.326"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.25 9.583c1.246-3.528 3.954-.856 5.058-2.921M10.37 15.43c.138.699-1.018 2.597-2.812 1.945-2.51-.912-2.415 1.159-2.415 1.159M13.428 6.147h.01M7.459 8.554h.01M9.371 5.827h.01M5.143 12.293h.01M6.873 14.861h.01M19.13 17.717l.008.008M18.91 20.91l.007.008"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDonutTwoTone;
