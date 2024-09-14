import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapHorizontalSquareBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.217 2.688H7.782c-3.16 0-5.282 2.22-5.282 5.525v7.948c0 3.305 2.122 5.526 5.282 5.526h8.434c3.16 0 5.284-2.22 5.284-5.527V8.215c0-3.306-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.241 9.508a.75.75 0 0 1-.212.511l-.01.01-1.751 1.74a.75.75 0 0 1-1.061-.003.75.75 0 0 1 .003-1.06l.462-.46H8.701a.75.75 0 0 1 0-1.5h4.972l-.463-.46a.75.75 0 1 1 1.058-1.064l1.751 1.742.006.005.001.001.002.003a.8.8 0 0 1 .157.238v.001a.7.7 0 0 1 .056.273zm-.936 6.122h-4.974l.463.461a.749.749 0 1 1-1.058 1.063l-1.751-1.742a.75.75 0 0 1 0-1.064l1.751-1.74a.75.75 0 0 1 1.058 1.063l-.462.46h4.973a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapHorizontalSquareBulk;
