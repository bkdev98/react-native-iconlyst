import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUploadOutlinesharp = ({
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
      d="M11.5 16.759V2.48H13v14.278z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.914 5.773 12.25 1.42l4.337 4.354-1.063 1.059-3.274-3.288-3.273 3.288zM2.25 10.245h6.125v1.5H3.75v9.024h17v-9.024h-4.625v-1.5h6.125v12.024h-20z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUploadOutlinesharp;
