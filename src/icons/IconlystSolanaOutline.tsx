import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSolanaOutline = ({
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
      d="M5.114 16.103a.75.75 0 0 1 .636-.353h15.5a.75.75 0 0 1 .636 1.148l-2.5 4a.75.75 0 0 1-.636.352H3.25a.75.75 0 0 1-.636-1.148zm1.052 1.147-1.563 2.5h13.731l1.563-2.5zM2.594 9.636a.75.75 0 0 1 .656-.386h15.5a.75.75 0 0 1 .636.352l2.5 4a.75.75 0 0 1-.636 1.148H5.75a.75.75 0 0 1-.636-.352l-2.5-4a.75.75 0 0 1-.02-.762m2.01 1.114 1.562 2.5h13.73l-1.562-2.5zM5.114 3.103a.75.75 0 0 1 .636-.353h15.5a.75.75 0 0 1 .636 1.148l-2.5 4a.75.75 0 0 1-.636.352H3.25a.75.75 0 0 1-.636-1.147zM6.166 4.25l-1.563 2.5h13.731l1.563-2.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSolanaOutline;
