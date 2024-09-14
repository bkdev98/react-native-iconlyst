import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHideOutlinecurved = ({
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
      d="M3.583 20.813c.146.147.338.22.53.22a.74.74 0 0 0 .53-.22l2.226-2.226q.08-.06.143-.143L20.417 5.04a.75.75 0 0 0-1.06-1.06l-1.878 1.878a10.77 10.77 0 0 0-5.483-1.509c-5.54 0-10 4.404-10 8.05 0 1.95 1.256 4.107 3.26 5.682l-1.673 1.673a.75.75 0 0 0 0 1.06m2.743-3.803c-1.713-1.295-2.83-3.092-2.83-4.612 0-2.948 3.922-6.55 8.5-6.55 1.527 0 3.025.382 4.382 1.11L14.184 9.15a3.93 3.93 0 0 0-2.186-.671h-.01a3.9 3.9 0 0 0-2.763 1.151 3.88 3.88 0 0 0-1.14 2.763c-.002.78.236 1.547.67 2.188zm3.521-3.522 3.244-3.243a2.4 2.4 0 0 0-1.094-.265h-.005a2.4 2.4 0 0 0-1.704.709 2.4 2.4 0 0 0-.702 1.706c-.002.383.09.758.261 1.093"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.994 20.45c-.947 0-1.898-.13-2.83-.389a.75.75 0 1 1 .4-1.445 9.1 9.1 0 0 0 2.43.333c4.583 0 8.51-3.602 8.51-6.55 0-.956-.444-2.045-1.249-3.065a.752.752 0 0 1 1.178-.93c1.013 1.285 1.571 2.703 1.571 3.994 0 3.647-4.465 8.051-10.01 8.051"
    />
    <Path
      fill={props.color}
      d="M12.566 16.25a.75.75 0 0 1-.134-1.487 2.42 2.42 0 0 0 1.934-1.939.75.75 0 0 1 1.476.268 3.92 3.92 0 0 1-3.14 3.145.7.7 0 0 1-.136.013"
    />
  </Svg>
);
export default IconlystHideOutlinecurved;
