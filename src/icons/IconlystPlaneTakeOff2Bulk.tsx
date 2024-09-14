import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneTakeOff2Bulk = ({
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
      d="M19.043 19.26H4.954a.75.75 0 0 0 0 1.5h14.09a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.655 7.557c-.195-.697-.62-1.23-1.23-1.543-1.176-.605-2.577-.207-3.126-.01-1.086.393-2.136.854-3.23 1.296a162 162 0 0 0-3.602-3.214c-.82-.718-1.666-.98-2.516-.777-.46.105-.893.27-1.312.43q-.293.114-.599.222a.75.75 0 0 0-.448.995l2.07 5.019c-.718.3-1.599.676-2.428 1.028L4 11.526l-.306-.74a.75.75 0 0 0-1.389.566c.091.223.45 1.089.544 1.312l.051.118.008.018q.012.03.026.057c.891 1.938 2.368 2.967 4.155 2.967.675 0 1.395-.148 2.145-.448 3.553-1.43 7.116-2.925 10.266-4.247 1.358-.581 2.613-1.947 2.156-3.572"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPlaneTakeOff2Bulk;
