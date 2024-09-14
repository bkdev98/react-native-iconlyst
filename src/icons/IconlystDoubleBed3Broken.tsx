import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleBed3Broken = ({
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
      d="M12.327 11.74v-.59a2.25 2.25 0 0 1 4.5 0v.62M12.327 11.15a2.25 2.25 0 1 0-4.5 0v.61M12.327 17.82h-6.84c-.614 0-.922 0-1.168-.088a1.5 1.5 0 0 1-.903-.904c-.089-.246-.089-.553-.089-1.168v-1.662c0-.615 0-.922.089-1.168a1.5 1.5 0 0 1 .903-.903c.246-.09.554-.09 1.168-.09h13.68c.615 0 .922 0 1.168.09a1.5 1.5 0 0 1 .903.903c.09.246.09.553.09 1.168v1.662c0 .615 0 .922-.09 1.168a1.5 1.5 0 0 1-.903.904c-.246.088-.553.088-1.168.088h-3.42M19.112 11.827V6.76c0-.615 0-.922-.088-1.168a1.5 1.5 0 0 0-.904-.904c-.246-.088-.553-.088-1.168-.088h-4.615M5.541 11.827V6.76c0-.615 0-.922.089-1.168a1.5 1.5 0 0 1 .903-.904C6.779 4.6 7.086 4.6 7.7 4.6h2.337M5.541 19.4v-1.562M19.112 19.4v-1.562"
    />
  </Svg>
);
export default IconlystDoubleBed3Broken;
