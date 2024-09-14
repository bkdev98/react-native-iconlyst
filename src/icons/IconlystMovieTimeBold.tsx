import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieTimeBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M8.742 6.132a.3.3 0 0 0 .3.3H13.6a.3.3 0 0 0 .3-.3V2.503a.3.3 0 0 0-.3-.3H9.042a.3.3 0 0 0-.3.3zM15.703 2.22a.29.29 0 0 0-.304.294v3.619a.3.3 0 0 0 .3.3h4.235a.288.288 0 0 0 .287-.345c-.487-2.25-2.17-3.724-4.518-3.867M16.923 10.937c1.075 0 2.085.284 2.961.78.211.119.486-.027.486-.27V8.234a.3.3 0 0 0-.3-.3H2.572a.3.3 0 0 0-.3.3v7.7c0 3.152 2.027 5.27 5.044 5.27h4.558c.265 0 .407-.325.245-.536a6 6 0 0 1-1.248-3.67c0-3.341 2.716-6.06 6.053-6.06M7.242 2.514a.29.29 0 0 0-.304-.293c-2.348.144-4.03 1.617-4.517 3.867a.288.288 0 0 0 .287.345h4.234a.3.3 0 0 0 .3-.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.923 20.298a3.305 3.305 0 0 1 0-6.61 3.31 3.31 0 0 1 3.304 3.31c0 1.82-1.483 3.3-3.304 3.3m0-8.11a4.81 4.81 0 0 0-4.802 4.81c0 2.646 2.155 4.8 4.802 4.8a4.81 4.81 0 0 0 4.804-4.8 4.813 4.813 0 0 0-4.804-4.81"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.567 17.403-.768-.456a.3.3 0 0 1-.147-.258v-1.052a.75.75 0 0 0-1.5 0v1.65c0 .264.14.51.367.645l1.282.76a.749.749 0 1 0 .766-1.29"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMovieTimeBold;
