import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdSquareOutline = ({
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
      d="M5.087 5.879C4.41 6.605 4 7.669 4 8.985v7.948c0 1.318.409 2.38 1.084 3.106.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.788 1.085-3.106V8.985c0-1.318-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17M3.99 4.856C4.975 3.8 6.377 3.21 8.032 3.21h8.435c1.66 0 3.062.59 4.046 1.647C21.49 5.907 22 7.358 22 8.985v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.5-1.487-4.128V8.985c0-1.628.511-3.079 1.49-4.129"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.174 12.88a3.078 3.078 0 0 1 6.156 0v1.76a.75.75 0 1 1-1.5 0v-1.76a1.578 1.578 0 1 0-3.156 0v2.798c0 .87.707 1.578 1.578 1.578a.75.75 0 0 1 0 1.5 3.08 3.08 0 0 1-3.078-3.078z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 12.514a.75.75 0 0 1 .75.75v2.124a.75.75 0 0 1-1.5 0v-2.124a.75.75 0 0 1 .75-.75M10.052 7.601a5.706 5.706 0 0 1 7.906 5.267v2.628a.75.75 0 0 1-1.5 0v-2.628a4.206 4.206 0 0 0-5.826-3.883.75.75 0 0 1-.58-1.384M8.65 9.346a.75.75 0 0 1 .18 1.046 4.3 4.3 0 0 0-.793 2.502v3.633a.75.75 0 0 1-1.5 0v-3.633a5.8 5.8 0 0 1 1.067-3.368.75.75 0 0 1 1.046-.18"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTouchIdSquareOutline;
