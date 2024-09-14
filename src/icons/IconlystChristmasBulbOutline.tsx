import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasBulbOutline = ({
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
      d="M8.08 15.413a.75.75 0 0 1 .813-.001L12 17.414l3.108-2.002a.75.75 0 0 1 .808-.003l2.85 1.81a.75.75 0 0 1-.804 1.267l-2.445-1.553-3.11 2.003a.75.75 0 0 1-.813 0l-3.107-2-2.43 1.57a.75.75 0 1 1-.815-1.26zM8.022 11.306a.75.75 0 0 1 .812 0L12 13.346l3.166-2.04a.75.75 0 0 1 .812 0l3.54 2.275a.75.75 0 1 1-.81 1.262l-3.135-2.015-3.167 2.04a.75.75 0 0 1-.812 0l-3.166-2.04-3.139 2.023a.75.75 0 0 1-.812-1.261z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.999 21.115a6.456 6.456 0 1 1 0-12.912 6.456 6.456 0 0 1 0 12.912M4.043 14.66a7.956 7.956 0 1 0 15.912 0 7.956 7.956 0 0 0-15.912 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.883 6.303c0-.967.783-1.75 1.75-1.75h2.738c.967 0 1.75.783 1.75 1.75v1.52a.75.75 0 0 1-1.5 0v-1.52a.25.25 0 0 0-.25-.25h-2.738a.25.25 0 0 0-.25.25v1.52a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.238 4.428c0-.967.784-1.75 1.75-1.75h.026c.966 0 1.75.783 1.75 1.75v.875a.75.75 0 0 1-1.5 0v-.875a.25.25 0 0 0-.25-.25h-.026a.25.25 0 0 0-.25.25v.875a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasBulbOutline;
