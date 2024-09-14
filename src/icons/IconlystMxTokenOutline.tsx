import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMxTokenOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M7.376 6.823c.954-1.645 3.315-1.685 4.325-.075l5.923 9.458c.284.454.781.73 1.317.73a.75.75 0 0 1 0 1.5H5.027c-1.945 0-3.16-2.108-2.185-3.792zm8.935 10.113-5.88-9.39a1.026 1.026 0 0 0-1.757.03l-4.534 7.82c-.396.684.097 1.54.887 1.54z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.23 7.616a1.025 1.025 0 0 0-1.756-.028l-1.367 2.188a.75.75 0 1 1-1.272-.795l1.367-2.188c1.007-1.613 3.37-1.576 4.325.07l4.065 7c1.168 2.036-.302 4.574-2.65 4.574a.75.75 0 0 1 0-1.5 1.554 1.554 0 0 0 1.35-2.327l-.001-.001z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMxTokenOutline;
