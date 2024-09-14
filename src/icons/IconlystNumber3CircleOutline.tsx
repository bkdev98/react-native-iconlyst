import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber3CircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.5 8.383a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .573 1.233l-1.786 2.119c1.143.5 1.956 1.61 1.956 2.931 0 1.808-1.521 3.217-3.328 3.217-.91 0-1.74-.354-2.345-.932a.75.75 0 1 1 1.037-1.084c.33.316.79.516 1.308.516 1.042 0 1.828-.799 1.828-1.717s-.787-1.718-1.828-1.718a.75.75 0 0 1-.574-1.233l1.545-1.832H10.25a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 4.133a8.25 8.25 0 0 0-8.25 8.25 8.25 8.25 0 0 0 8.25 8.25 8.25 8.25 0 0 0 8.25-8.25 8.25 8.25 0 0 0-8.25-8.25m-9.75 8.25a9.75 9.75 0 0 1 9.75-9.75 9.75 9.75 0 0 1 9.75 9.75 9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNumber3CircleOutline;
