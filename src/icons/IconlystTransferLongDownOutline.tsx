import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransferLongDownOutline = ({
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
      d="M5.314 14.064a.75.75 0 0 0 .13.808l6 6.631a.75.75 0 0 0 1.112 0l6-6.631A.75.75 0 0 0 18 13.618h-3.25V3a.75.75 0 0 0-1.5 0v11.368c0 .415.336.75.75.75h2.31L12 19.882l-4.31-4.764H10a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-1.5 0v10.618H6a.75.75 0 0 0-.686.446"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTransferLongDownOutline;
