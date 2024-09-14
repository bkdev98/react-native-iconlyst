import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSketchTwoTone = ({
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
      d="M13.183 19.554a1.6 1.6 0 0 1-2.367 0L3.51 11.527a1.96 1.96 0 0 1-.169-2.423L6.292 4.78a1.96 1.96 0 0 1 1.62-.855h4.092"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.182 19.554 7.307-8.028a1.96 1.96 0 0 0 .17-2.422l-2.942-4.321a1.96 1.96 0 0 0-1.62-.857h-4.093"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSketchTwoTone;
