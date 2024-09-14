import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarcodeScanSearchBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M16.322 4.875h1.11a2.694 2.694 0 0 1 2.691 2.69v1.394a.75.75 0 0 0 1.5 0V7.565c0-2.311-1.88-4.19-4.19-4.19h-1.11a.75.75 0 0 0 0 1.5M2.875 9.709a.75.75 0 0 0 .75-.75V7.565a2.693 2.693 0 0 1 2.69-2.69h1.11a.75.75 0 0 0 0-1.5h-1.11a4.194 4.194 0 0 0-4.19 4.19v1.394c0 .414.336.75.75.75M7.456 18.878h-1.14a2.693 2.693 0 0 1-2.69-2.69v-1.393a.75.75 0 0 0-1.5 0v1.393a4.194 4.194 0 0 0 4.19 4.19h1.14a.75.75 0 0 0 0-1.5" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.913 8.108v7.531a1 1 0 0 0 2 0V8.108a1 1 0 0 0-2 0M14.517 11.134V8.108a1 1 0 0 0-2 0v3.026a1 1 0 0 0 2 0M15.817 8.108v1.793a1 1 0 0 0 2 0V8.108a1 1 0 0 0-2 0M10.213 10.954a1 1 0 0 0-1 1v3.594a1 1 0 0 0 2 0v-3.594a1 1 0 0 0-1-1M10.213 7.109a1 1 0 0 0-1 1v.948a1 1 0 0 0 2 0v-.948a1 1 0 0 0-1-1M15.217 15.862a2.05 2.05 0 0 1 2.048-2.048 2.05 2.05 0 0 1 2.048 2.048 2.05 2.05 0 0 1-2.048 2.049 2.05 2.05 0 0 1-2.048-2.05m6.364 3.056-.902-.9a4 4 0 0 0 .634-2.156 4.053 4.053 0 0 0-4.048-4.048 4.053 4.053 0 0 0-4.048 4.048 4.053 4.053 0 0 0 4.048 4.049c.712 0 1.372-.2 1.953-.524l.95.947c.195.195.45.292.706.292a1.002 1.002 0 0 0 .707-1.708"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarcodeScanSearchBulk;
