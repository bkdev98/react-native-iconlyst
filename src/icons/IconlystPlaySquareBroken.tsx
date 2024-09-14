import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaySquareBroken = ({
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
      d="M16.466 21c2.949 0 4.784-2.081 4.784-5.026V8.026C21.25 5.081 19.415 3 16.467 3H8.032C5.092 3 3.25 5.081 3.25 8.026v7.948C3.25 18.919 5.084 21 8.032 21h4.217"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.837 8.937c-.87-.37-1.759.053-1.888 1.048a19 19 0 0 0 0 4.026c.118.958.925 1.435 1.888 1.052a10.2 10.2 0 0 0 2.982-1.889c.76-.705.743-1.67 0-2.348a10 10 0 0 0-.363-.32"
    />
  </Svg>
);
export default IconlystPlaySquareBroken;
