import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarSquareBroken = ({
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
      d="m7.86 20.868 3.918-7.435 3.918 7.435M11.778 20.839v-7.406M20.503 11.075l.8-.291c.55-.2.833-.808.633-1.357l-1.462-4.015c-.2-.549-.807-.832-1.356-.632l-6.404 2.33a2.117 2.117 0 0 0-1.266 2.714l.738 2.026a2.117 2.117 0 0 0 2.713 1.265l2.739-.997M12.638 13.09l-4.07 1.482a2.117 2.117 0 0 1-2.714-1.265l-.193-.53a2.117 2.117 0 0 1 1.266-2.713l1.74-.633M5.398 12.053l-2.704.984a1.053 1.053 0 0 0 .72 1.98l.677-.247"
    />
  </Svg>
);
export default IconlystStarSquareBroken;
