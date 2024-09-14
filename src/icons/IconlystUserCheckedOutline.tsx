import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserCheckedOutline = ({
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
      d="M7.298 17.397c-.846.767-1.185 1.743-1.185 2.602a.75.75 0 1 1-1.5 0c0-1.25.494-2.64 1.678-3.713 1.186-1.075 2.997-1.77 5.53-1.77a.75.75 0 0 1 0 1.5c-2.26 0-3.678.616-4.523 1.381M19.968 15.723a.75.75 0 0 1 0 1.061l-3.51 3.513a.75.75 0 0 1-1.062 0l-1.704-1.707a.75.75 0 1 1 1.061-1.06l1.174 1.176 2.98-2.982a.75.75 0 0 1 1.061 0M11.82 4.75a3.376 3.376 0 1 0 .002 6.752 3.376 3.376 0 0 0-.001-6.752M6.946 8.125a4.876 4.876 0 1 1 9.752.001 4.876 4.876 0 0 1-9.752 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserCheckedOutline;
