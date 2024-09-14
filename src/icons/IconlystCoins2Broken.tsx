import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoins2Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.187 15.084c0 1.188 1.866 2.152 4.168 2.152.564 0 1.103-.058 1.594-.163"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.523 11.32v7.528c0 1.188-1.866 2.152-4.17 2.152-2.301 0-4.167-.964-4.167-2.152V11.32"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.988 9.34a7.6 7.6 0 0 0-1.634-.172c-2.302 0-4.168.963-4.168 2.152 0 1.188 1.866 2.153 4.168 2.153s4.17-.965 4.17-2.153q-.002-.3-.152-.576M9.646 11.07c-.871 0-1.68-.139-2.35-.375M8.24 14.707c-1.61-.298-2.763-1.093-2.763-2.027"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.478 5.152-.001 11.292c0 1.189 1.867 2.152 4.169 2.152M13.815 5.152V9.17"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.645 3c2.303 0 4.17.963 4.17 2.152 0 1.188-1.867 2.152-4.17 2.152S5.477 6.34 5.477 5.152c0-.594.466-1.132 1.22-1.522"
    />
  </Svg>
);
export default IconlystCoins2Broken;
