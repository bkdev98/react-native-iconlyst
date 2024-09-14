import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessSmartHomeOutline = ({
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
      d="M13.648 4.248a2.21 2.21 0 0 0-2.795 0l-5.574 4.54a2.22 2.22 0 0 0-.816 1.716v7.173a2.57 2.57 0 0 0 2.572 2.573h10.431a2.57 2.57 0 0 0 2.572-2.573v-7.173a2.22 2.22 0 0 0-.816-1.716zm.947-1.163a3.71 3.71 0 0 0-4.69 0l-5.574 4.54a3.72 3.72 0 0 0-1.368 2.88v7.172a4.07 4.07 0 0 0 4.072 4.073h10.431a4.07 4.07 0 0 0 4.072-4.073v-7.173a3.72 3.72 0 0 0-1.368-2.879zm1.003 9.16a5.365 5.365 0 0 0-6.696 0 .75.75 0 0 1-.938-1.171 6.865 6.865 0 0 1 8.572 0 .75.75 0 0 1-.938 1.17m-1.885 2.34a2.265 2.265 0 0 0-2.916.004.75.75 0 1 1-.974-1.141 3.765 3.765 0 0 1 4.858-.009.75.75 0 1 1-.967 1.147m-1.462.94a.75.75 0 0 1 .75.75v.041a.75.75 0 0 1-1.5 0v-.041a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessSmartHomeOutline;
