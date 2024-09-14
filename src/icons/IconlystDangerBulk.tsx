import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDangerBulk = ({
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
        d="M4.723 21.167h-.04a2.833 2.833 0 0 1-2.476-3.89L9.53 4.45a2.833 2.833 0 0 1 4.946.009l7.273 12.728c.162.381.23.691.248 1.007a2.81 2.81 0 0 1-.725 2.042 2.8 2.8 0 0 1-1.956.93l-14.52.001z"
        opacity={0.4}
      />
      <Path d="M12 15.39c.482 0 .875.39.875.869a.88.88 0 0 1-.875.886.877.877 0 0 1 0-1.755m0-6.244c.482 0 .875.393.875.875v2.828a.876.876 0 0 1-1.75 0V10.02c0-.482.393-.875.875-.875" />
    </G>
  </Svg>
);
export default IconlystDangerBulk;
