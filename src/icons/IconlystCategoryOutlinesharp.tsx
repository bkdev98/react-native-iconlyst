import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCategoryOutlinesharp = ({
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
      d="M2.107 2.643h8.5v8.5h-8.5zm1.5 1.5v5.5h5.5v-5.5zM14.352 1.688l8.21 2.2-2.2 8.21-8.21-2.2zm1.06 1.837L13.99 8.838 19.3 10.26l1.424-5.312zM2.107 13.643h8.5v8.5h-8.5zm1.5 1.5v5.5h5.5v-5.5zM13.107 13.643h8.5v8.5h-8.5zm1.5 1.5v5.5h5.5v-5.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCategoryOutlinesharp;
