import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHouseLockBulk = ({
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
      d="m19.761 7.82-5.573-4.54a3.47 3.47 0 0 0-4.376 0L4.24 7.82a3.43 3.43 0 0 0-1.278 2.678v7.18a3.826 3.826 0 0 0 3.822 3.82h10.431a3.825 3.825 0 0 0 3.822-3.82v-7.18a3.43 3.43 0 0 0-1.276-2.677"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.697 15.523a2.24 2.24 0 0 1-2.238 2.237h-2.917a2.24 2.24 0 0 1-2.239-2.237v-1.648c0-.843.475-1.57 1.168-1.951v-.508a2.52 2.52 0 0 1 2.5-2.502H12a2.54 2.54 0 0 1 2.535 2.503v.509a2.23 2.23 0 0 1 1.163 1.95zm-5.155-2.301h2.917c.36 0 .654.293.654.654v1.648c0 .36-.293.653-.654.653h-2.917a.656.656 0 0 1-.656-.653v-1.648c0-.36.295-.654.656-.654m2.409-1.584v-.211c-.006-.522-.39-.948-.962-.93a.95.95 0 0 0-.935.932v.209z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHouseLockBulk;
