import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCodeSandboxBulk = ({
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
      d="M20.6 8.732v6.54c0 1.04-.56 2.01-1.46 2.54l-1.86 1.07-1.5.86-2.32 1.34c-.22.13-.46.23-.71.29-.24.07-.49.1-.75.1s-.51-.03-.75-.1a2.6 2.6 0 0 1-.71-.29l-2.32-1.34-1.5-.86-1.85-1.07c-.91-.53-1.47-1.5-1.47-2.54v-6.54c0-.3.05-.6.14-.88.15-.49.43-.93.81-1.27.15-.15.33-.28.52-.39l2.42-1.4 1.5-.86 1.75-1.02c.9-.51 2.02-.51 2.92 0l1.75 1.02 1.5.86 2.42 1.4c.19.11.36.24.52.39.38.34.66.78.81 1.27.09.28.14.58.14.88"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.46 7.852-7.71 4.46v9.06c-.24.07-.49.1-.75.1s-.51-.03-.75-.1v-9.06l-7.71-4.46c.15-.49.43-.93.81-1.27l7.65 4.44 7.65-4.44c.38.34.66.78.81 1.27"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.6 11.272v1.73l-3.32 1.92v3.96l-1.5.86v-5.25c0-.27.14-.52.38-.65zM16.71 4.792l-4.33 2.5c-.12.07-.25.1-.38.1s-.26-.03-.37-.1l-4.34-2.5 1.5-.86L12 5.782l3.21-1.85zM8.22 14.492v5.25l-1.5-.86v-3.96l-3.32-1.92v-1.73l4.44 2.57c.24.13.38.38.38.65"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCodeSandboxBulk;
