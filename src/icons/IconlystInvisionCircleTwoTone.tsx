import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInvisionCircleTwoTone = ({
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
      d="M16.217 3H7.782C4.842 3 3 5.081 3 8.026v7.948C3 18.919 4.834 21 7.782 21h8.434C19.165 21 21 18.919 21 15.974V8.026C21 5.081 19.165 3 16.217 3"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.594 11.047h1.124l-.725 2.97c-.214.882.173 2.01 1.276 2.01h1.219a.67.67 0 0 0 .652-.507l.99-3.967a.67.67 0 0 1 .653-.506h1.219c.352 0 .663.182.9.456.363.404.445.982.394 1.504-.09.798-.597 1.668-.394 2.475.287.749 1.177.732 1.504.232M9.313 8.042v.029m.118-.023a.118.118 0 1 1-.237 0 .118.118 0 0 1 .237 0"
    />
  </Svg>
);
export default IconlystInvisionCircleTwoTone;
