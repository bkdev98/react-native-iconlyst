import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadphoneBold = ({
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
      d="M18.876 11.672v.74a2.15 2.15 0 0 0-1.222.148 2.17 2.17 0 0 0-1.27 1.505l-.942 3.936c-.162.678 0 1.375.444 1.914a2.13 2.13 0 0 0 1.752.783q.336-.013.68-.082a4.25 4.25 0 0 0 3.287-3.096c.411-1.593-.078-3.208-1.23-4.273v-1.575c0-4.618-3.756-8.374-8.374-8.374s-8.375 3.756-8.375 8.374v1.574c-1.152 1.063-1.642 2.678-1.232 4.274a4.26 4.26 0 0 0 3.969 3.178l.096.002c.642 0 1.24-.284 1.656-.787A2.18 2.18 0 0 0 8.559 18l-.943-3.934a2.17 2.17 0 0 0-1.27-1.507 2.17 2.17 0 0 0-1.22-.148v-.739A6.88 6.88 0 0 1 12 4.798a6.88 6.88 0 0 1 6.875 6.874"
    />
    <Path
      fill={props.color}
      d="m12.623 14.438.061.002a.75.75 0 0 0 .632-.346l.8-1.25h.65a.75.75 0 0 0 0-1.5h-1.062a.75.75 0 0 0-.632.346l-.257.402-.81-1.89a.75.75 0 0 0-1.323-.108l-.798 1.25h-.652a.75.75 0 0 0 0 1.5h1.063a.76.76 0 0 0 .633-.346l.256-.402.811 1.89a.75.75 0 0 0 .628.451"
    />
  </Svg>
);
export default IconlystHeadphoneBold;
