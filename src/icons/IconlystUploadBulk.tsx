import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUploadBulk = ({
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
        d="M6.447 22C3.996 22 2 19.97 2 17.475v-4.96C2 10.024 3.99 8 6.437 8h11.116C20.005 8 22 10.03 22 12.526v4.959C22 19.975 20.01 22 17.563 22H6.447"
        opacity={0.4}
      />
      <Path d="m11.455 2.221-2.91 2.846c-.3.294-.3.767.003 1.06a.785.785 0 0 0 1.089-.001l1.593-1.56v9.885c0 .414.345.75.77.75a.76.76 0 0 0 .77-.75V4.567l1.593 1.56c.3.293.787.294 1.089.001a.74.74 0 0 0 .227-.531.74.74 0 0 0-.225-.53l-2.908-2.845a.783.783 0 0 0-1.091 0" />
    </G>
  </Svg>
);
export default IconlystUploadBulk;
