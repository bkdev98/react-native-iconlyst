import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldLock2Bulk = ({
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
      d="M19.356 5.137C18.652 4.431 13.026 2.5 12 2.5c-1.024 0-6.65 1.931-7.356 2.638-.56.562-.553.995-.509 3.398.018.973.042 2.299.042 4.134 0 6.408 7.602 8.785 7.678 8.809a.487.487 0 0 0 .291 0c.076-.024 7.678-2.401 7.678-8.809 0-1.831.024-3.155.041-4.128.044-2.408.052-2.841-.509-3.405"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.72 12.681a2.4 2.4 0 0 1-1.026.614l.001 1.533a.75.75 0 1 1-1.5 0v-1.573a2.4 2.4 0 0 1-.908-.579 2.4 2.4 0 0 1-.708-1.709c0-.646.252-1.256.71-1.717a2.44 2.44 0 0 1 3.43-.004l.004.004a2.43 2.43 0 0 1-.004 3.431m-2.641-1.713c0-.248.097-.482.27-.656a.936.936 0 0 1 1.312-.002.931.931 0 0 1-.633 1.585 1 1 0 0 0-.084-.005h-.029a.92.92 0 0 1-.566-.272.9.9 0 0 1-.27-.65"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldLock2Bulk;
