import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDumbbell1TwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.076 13.357a.585.585 0 0 1-.77.057c-.36-.28-.94-.599-1.642-.464-.938.18-2.956 2.313-3.117 3.074-.133.516-.11 1.225 1.797 3.132s2.616 1.93 3.132 1.797c.76-.16 2.893-2.18 3.074-3.116.134-.703-.184-1.282-.464-1.643a.583.583 0 0 1 .057-.77m4.78-4.782a.586.586 0 0 1 .771-.056c.361.28.94.6 1.642.463.938-.18 2.956-2.314 3.116-3.073.133-.516.112-1.224-1.796-3.132-1.907-1.907-2.616-1.93-3.132-1.797-.76.16-2.894 2.179-3.074 3.117-.135.702.183 1.281.464 1.641.18.233.15.564-.057.77"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.076 13.357 4.781-4.78m-2.713 6.848 4.78-4.782"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDumbbell1TwoTone;
