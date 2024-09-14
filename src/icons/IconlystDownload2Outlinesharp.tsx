import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownload2Outlinesharp = ({
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
      d="M2.25 8.443h6.125v1.5H3.75v9.929h17v-9.93h-4.625v-1.5h6.125v12.93h-20z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.5 18.345V2.905H13v15.44z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13 17.595c0-2.945-2.585-5.345-5.346-5.345h-.75v1.5h.75c1.965 0 3.846 1.76 3.846 3.845v.75H13z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.5 17.595c0-2.945 2.585-5.345 5.346-5.345h.75v1.5h-.75C14.88 13.75 13 15.51 13 17.595v.75h-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownload2Outlinesharp;
