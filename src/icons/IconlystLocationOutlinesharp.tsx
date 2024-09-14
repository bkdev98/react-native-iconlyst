import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLocationOutlinesharp = ({
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
      d="M9.014 11.306a3.237 3.237 0 1 1 6.473 0 3.237 3.237 0 0 1-6.473 0M12.25 9.57a1.737 1.737 0 1 0 0 3.474 1.737 1.737 0 0 0 0-3.474"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 4c-3.68 0-6.826 3.328-6.71 7.074.083 2.672 1.785 5.162 3.59 7.049a23.4 23.4 0 0 0 3.125 2.717 22.53 22.53 0 0 0 3.116-2.674c1.802-1.867 3.506-4.358 3.59-7.092C19.074 7.328 15.928 4 12.25 4m0 17.75-.41.628-.002-.001-.006-.004-.018-.012-.067-.045q-.087-.058-.244-.17a24.943 24.943 0 0 1-3.456-2.987C6.17 17.2 4.141 14.363 4.041 11.12 3.9 6.563 7.689 2.5 12.25 2.5c4.56 0 8.349 4.062 8.21 8.62-.101 3.301-2.128 6.137-4.01 8.088a24 24 0 0 1-3.46 2.948 14 14 0 0 1-.312.21l-.018.012-.006.003-.001.002zm0 0 .402.633-.407.259-.405-.264z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLocationOutlinesharp;
