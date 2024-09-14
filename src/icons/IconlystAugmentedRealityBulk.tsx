import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAugmentedRealityBulk = ({
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
      d="M16.25 2.495H7.815c-3.159 0-5.282 2.221-5.282 5.526v7.948c0 3.305 2.123 5.526 5.282 5.526h8.434c3.16 0 5.284-2.22 5.284-5.526V8.021c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.415 14.347a.75.75 0 1 1-1.283.778l-1.112-1.832h-.565v1.443a.75.75 0 0 1-1.5 0V9.253a.75.75 0 0 1 .75-.75h1.894a2.397 2.397 0 0 1 2.394 2.395c0 .95-.561 1.766-1.364 2.153zm-5.892.989a.748.748 0 0 1-.98-.404l-.423-1.017H7.94l-.423 1.017a.75.75 0 1 1-1.385-.577l2.206-5.297a.75.75 0 0 1 1.385 0l1.586 3.812.003.006.616 1.48a.75.75 0 0 1-.405.98m4.97-4.438a.895.895 0 0 0-.895-.895h-1.143v1.79h1.143a.895.895 0 0 0 .895-.895m-7.463.4.465 1.117h-.93z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAugmentedRealityBulk;
