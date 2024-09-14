import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAppleArcadeTwoTone = ({
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
      d="M19.895 12.852v4.301c0 .4-.239.76-.606.916l-6.509 2.77a2 2 0 0 1-1.56 0L4.71 18.07a1 1 0 0 1-.606-.916v-4.301"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.233 9.321a2 2 0 0 1 1.533 0l6.522 2.719c.817.34.817 1.498 0 1.838l-6.522 2.719a2 2 0 0 1-1.533 0l-6.522-2.719c-.817-.34-.817-1.498 0-1.838z"
    />
    <Circle
      cx={12.002}
      cy={4.992}
      r={1.992}
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
      d="M12 6.984v5.976"
    />
  </Svg>
);
export default IconlystAppleArcadeTwoTone;
