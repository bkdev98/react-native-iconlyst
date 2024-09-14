import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpermTwoTone = ({
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
      d="M17.152 15.658c1.041.864 2.784.48 3.89-.856 1.108-1.335 1.163-3.118.122-3.981-1.043-.863-2.784-.48-3.891.855-1.108 1.336-1.162 3.119-.121 3.982"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.291 7.31c-.9 1.382-2.502 1.933-3.58 1.231-1.076-.702-1.219-2.39-.319-3.771.9-1.382 2.503-1.932 3.58-1.23 1.076.7 1.22 2.39.32 3.77"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.817 8.664s-.83 3.335-3.869 2.514c-.943-.255-2.034-.345-2.913.164-.619.358-.9.963-1.125 1.613M4.578 20.59c1.79.47 3.81.033 4.56-1.815.414-1.021.696-2.26 1.963-2.475.778-.132 1.41.326 2.043.7.791.467 1.788.842 2.7.526.767-.266 1.282-.957 1.564-1.69"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSpermTwoTone;
