import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotebookSearchOutline = ({
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
      d="M14.749 2.327a2.402 2.402 0 0 1 3.002 2.326v1.994a2.896 2.896 0 0 1 2.107 2.786v2.16a.75.75 0 0 1-1.5 0v-2.16c0-.77-.625-1.394-1.395-1.394H5.875v10.817c0 .77.625 1.394 1.395 1.394h3.744a.75.75 0 0 1 0 1.5H7.27a2.895 2.895 0 0 1-2.895-2.894V6.696c0-.996.675-1.865 1.64-2.114zM5.894 6.54H16.25V4.653a.902.902 0 0 0-1.127-.873L6.389 6.034a.69.69 0 0 0-.495.505m6.222 6.192c-.802 0-1.454.647-1.454 1.454a.75.75 0 0 1-1.5 0 2.953 2.953 0 0 1 2.954-2.954.75.75 0 0 1 0 1.5m4.253 2.367a2.18 2.18 0 1 0 0 4.36 2.18 2.18 0 0 0 0-4.36m3.017 4.288a3.68 3.68 0 1 0-1.092 1.03l1.117 1.115a.75.75 0 0 0 1.06-1.062z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNotebookSearchOutline;
