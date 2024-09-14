import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHuobiTokenBroken = ({
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
      d="M7.76 11.18c2.665-3.365 4.08-6.853 4.448-8.18.338.197 2.67 2.005 2.17 5.435-.411 2.806-4.688 5.4-4.412 8.853.09.906.37 1.774.806 2.572.137.254.573 1.02.573 1.02s-.284.087-.731.01c-1.535-.263-2.846-1.664-3.579-2.993a5.7 5.7 0 0 1-.72-2.898"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.972 21v-.003c-.41-.364-3.916-2.94-1.384-6.235 2.62-3.47 2.813-4.35 2.813-4.35 3.564 3.848 2.26 6.89.686 8.716"
    />
  </Svg>
);
export default IconlystHuobiTokenBroken;
