import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpermLight = ({
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
      d="M16.242 15.658c1.04.864 2.784.48 3.89-.856 1.108-1.335 1.162-3.118.121-3.981-1.042-.863-2.783-.48-3.89.855-1.108 1.336-1.162 3.119-.121 3.982"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.381 7.31c-.9 1.382-2.502 1.933-3.58 1.231-1.076-.702-1.219-2.39-.319-3.771.9-1.382 2.503-1.932 3.58-1.23 1.076.7 1.219 2.39.319 3.77"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.907 8.664s-.83 3.335-3.87 2.514c-.942-.255-2.034-.345-2.912.164-.619.358-.9.963-1.125 1.613M3.668 20.59c1.79.47 3.81.033 4.56-1.815.414-1.021.696-2.26 1.963-2.475.778-.132 1.41.326 2.043.7.791.467 1.788.842 2.7.526.767-.266 1.282-.957 1.564-1.69"
    />
  </Svg>
);
export default IconlystSpermLight;
