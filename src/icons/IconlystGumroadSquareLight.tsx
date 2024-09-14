import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGumroadSquareLight = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.395 7.45h-6.85a1 1 0 0 0-.998.998v7.43c0 .552.446 1 .998 1h6.91a1 1 0 0 0 1-1v-4.133a1 1 0 0 0-1-1h-3.554a1 1 0 0 0-.998 1v1.087c0 .551.446.998.998.998h1.178"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.395 7.45a.403.403 0 1 1 .806 0 .403.403 0 0 1-.806 0M13.078 13.841a.403.403 0 1 1 .806-.001.403.403 0 0 1-.806.001"
    />
  </Svg>
);
export default IconlystGumroadSquareLight;
