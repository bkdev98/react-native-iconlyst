import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTriangle2Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M12.75 13.507a.6.6 0 0 0 .3.52l8.014 4.623c.168.097.383.01.41-.182a2.45 2.45 0 0 0-.304-1.557l-6.96-12.21a2.47 2.47 0 0 0-1.087-1.013c-.18-.086-.373.057-.373.257zM10.95 14.026a.6.6 0 0 0 .3-.52V3.998c0-.204-.202-.348-.383-.253a2.43 2.43 0 0 0-.982.944l-7.048 12.21a2.46 2.46 0 0 0-.311 1.567c.026.193.242.28.41.182z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.299 15.324a.6.6 0 0 0-.6 0l-7.867 4.538c-.182.106-.2.362-.016.465.353.198.753.311 1.18.311h14.007c.427 0 .826-.113 1.18-.31.184-.103.166-.36-.017-.465z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTriangle2Bulk;
