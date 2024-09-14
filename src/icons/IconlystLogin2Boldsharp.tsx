import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLogin2Boldsharp = ({
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
      d="M8.925 2.409v9h5.29c-1.05-.98-1.73-2.37-1.73-3.85v-.75h1.5v.75c0 2.02 1.83 3.85 3.85 3.85h.75v1.5h-.75c-2.02 0-3.85 1.83-3.85 3.84v.75h-1.5v-.75c0-1.48.68-2.86 1.73-3.84h-5.29v9h12.43v-19.5zM3.145 12.909h5.78v-1.5h-5.78z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLogin2Boldsharp;
