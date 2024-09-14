import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSimcardRefreshOutline = ({
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
      d="M11.977 11.274q.141-.018.287-.018a2.245 2.245 0 0 1 2.244 2.244.75.75 0 0 0 1.5 0 3.745 3.745 0 0 0-6.222-2.807.75.75 0 0 0 .157 1.23l1.474.749a.75.75 0 0 0 .679-1.338zM9.27 12.75a.75.75 0 0 1 .75.75 2.245 2.245 0 0 0 2.532 2.226l-.12-.06a.75.75 0 1 1 .68-1.338l1.474.749a.75.75 0 0 1 .157 1.23A3.745 3.745 0 0 1 8.52 13.5a.75.75 0 0 1 .75-.749"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.185 6.72a4.47 4.47 0 0 1 4.47-4.47h5.068c.763 0 1.493.31 2.02.861l3.792 3.95c.5.52.78 1.215.78 1.938v8.28a4.47 4.47 0 0 1-4.47 4.471h-7.19a4.47 4.47 0 0 1-4.47-4.472zm4.47-2.97a2.97 2.97 0 0 0-2.97 2.97v10.558a2.97 2.97 0 0 0 2.97 2.972h7.19a2.97 2.97 0 0 0 2.97-2.97V9c0-.336-.13-.659-.362-.901l-3.792-3.95a1.3 1.3 0 0 0-.938-.399z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSimcardRefreshOutline;
