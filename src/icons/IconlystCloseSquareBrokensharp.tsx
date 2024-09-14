import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloseSquareBrokensharp = ({
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
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="m14.65 10.129-4.8 4.792M14.65 14.924l-4.8-4.797M17.202 20.349a9.24 9.24 0 0 0 4.298-7.814c0-5.11-4.14-9.25-9.25-9.25A9.25 9.25 0 0 0 3 12.535a9.25 9.25 0 0 0 9.25 9.25"
    />
  </Svg>
);
export default IconlystCloseSquareBrokensharp;
