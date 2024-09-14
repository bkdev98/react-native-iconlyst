import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChemistryFlaskOutline = ({
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
      d="M4.378 2.25a.75.75 0 0 1 .75.75v12.834a2.41 2.41 0 0 0 2.416 2.416 2.424 2.424 0 0 0 2.417-2.416V3a.75.75 0 1 1 1.5 0v12.834a3.924 3.924 0 0 1-3.917 3.916 3.94 3.94 0 0 1-2.767-1.142l-.004-.003a3.9 3.9 0 0 1-1.145-2.771V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.758 3a.75.75 0 0 1 .75-.75h8.074a.75.75 0 0 1 0 1.5H3.508a.75.75 0 0 1-.75-.75M7.578 10.676a.75.75 0 0 1 .75-.75h2.384a.75.75 0 0 1 0 1.5H8.328a.75.75 0 0 1-.75-.75m.778 2.747a.75.75 0 0 1 .75-.75h1.606a.75.75 0 0 1 0 1.5H9.106a.75.75 0 0 1-.75-.75M3.627 6.133a.75.75 0 0 1 .75-.75h6.333a.75.75 0 0 1 0 1.5H4.377a.75.75 0 0 1-.75-.75M13.79 6.95a.75.75 0 0 1 .75.75v10.133a2.406 2.406 0 0 0 2.416 2.416 2.424 2.424 0 0 0 2.417-2.416V7.699a.75.75 0 0 1 1.5 0v10.134a3.924 3.924 0 0 1-3.917 3.916c-1.079 0-2.06-.443-2.767-1.141l-.004-.004a3.9 3.9 0 0 1-1.145-2.771V7.699a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.99 13.578a.75.75 0 0 1 .75-.75h2.384a.75.75 0 0 1 0 1.5H17.74a.75.75 0 0 1-.75-.75m.778 2.747a.75.75 0 0 1 .75-.75h1.606a.75.75 0 1 1 0 1.5h-1.606a.75.75 0 0 1-.75-.75M12.17 7.7a.75.75 0 0 1 .75-.75h8.074a.75.75 0 1 1 0 1.5H12.92a.75.75 0 0 1-.75-.75M13.041 10.828a.75.75 0 0 1 .75-.75h6.333a.75.75 0 1 1 0 1.5h-6.333a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChemistryFlaskOutline;
