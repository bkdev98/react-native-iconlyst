import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareTouchIdCloseBroken = ({
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
      d="M12.574 21H8.032c-2.948 0-4.782-2.081-4.782-5.026V12M21.25 14.028V8.026C21.25 5.081 19.415 3 16.467 3H8.032C5.093 3 3.25 5.081 3.25 8.026"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.268 9.811a4.58 4.58 0 0 1 5.747-1.966M7.672 15.469v-2.836M15.994 9.434c.526.745.835 1.655.835 2.637v1.705M14.014 16.51v-4.272a1.804 1.804 0 1 0-3.606 0v.483M10.408 16.51v-1.623M19.437 19.184l1.812 1.813m-1.812-1.813-1.814-1.813m1.814 1.813 1.812-1.813m-1.812 1.813-1.814 1.813"
    />
  </Svg>
);
export default IconlystSquareTouchIdCloseBroken;
