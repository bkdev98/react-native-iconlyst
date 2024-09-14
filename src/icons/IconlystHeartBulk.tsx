import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M11.776 21.837a36.3 36.3 0 0 1-6.328-4.957 12.7 12.7 0 0 1-3.03-4.805C1.28 8.535 2.603 4.49 6.3 3.288A6.28 6.28 0 0 1 12.007 4.3a6.29 6.29 0 0 1 5.706-1.012c3.697 1.201 5.03 5.247 3.893 8.787a12.7 12.7 0 0 1-3.013 4.805 36.6 36.6 0 0 1-6.328 4.957l-.249.163z"
        opacity={0.4}
      />
      <Path d="m12.01 22-.234-.163a36.3 36.3 0 0 1-6.337-4.957 12.7 12.7 0 0 1-3.048-4.805c-1.13-3.54.195-7.586 3.892-8.787a6.3 6.3 0 0 1 5.728 1.023zM18.23 10a.72.72 0 0 1-.517-.278.82.82 0 0 1-.167-.592c.022-.702-.378-1.341-.994-1.59-.391-.107-.628-.53-.53-.948.093-.41.477-.666.864-.573a.4.4 0 0 1 .138.052c1.236.476 2.036 1.755 1.972 3.155a.8.8 0 0 1-.229.56.7.7 0 0 1-.537.213" />
    </G>
  </Svg>
);
export default IconlystHeartBulk;
