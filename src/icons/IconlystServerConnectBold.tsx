import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerConnectBold = ({
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
      d="M12.8 17.725c0 .48-.37.85-.85.85s-.85-.37-.85-.85.37-.85.85-.85.85.37.85.85m-1.65-8.95h-4.6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.6c.41 0 .75.34.75.75s-.34.75-.75.75m7.4-4.85H5.45c-1.71 0-2.9 1.15-2.9 2.8v2.6c0 1.65 1.19 2.8 2.9 2.8h5.75v3.38c-.7.23-1.24.77-1.47 1.47H5.65c-.41 0-.75.34-.75.75s.34.75.75.75h4.08c.31.94 1.17 1.6 2.22 1.6s1.91-.66 2.22-1.6h4.18c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-4.18c-.23-.7-.77-1.24-1.47-1.47v-3.38h5.85c1.76 0 2.9-1.1 2.9-2.8v-2.6c0-1.65-1.19-2.8-2.9-2.8"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerConnectBold;
