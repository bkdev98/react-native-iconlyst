import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M1.5 13.07H23v1.5H1.5zM15.016 4.065h6.202v6.495h-1.5V5.565h-4.702zM3.281 4.065h6.232v1.5H4.781v4.995h-1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.219 13.07v8.934h-6.203v-1.5h4.702V13.07zM4.781 13.07v7.434h4.732v1.5H3.281V13.07z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanOutlinesharp;
