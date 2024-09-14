import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScrollListBulk = ({
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
      d="M8.962 8.925a.999.999 0 1 0 1.416-1.412L7.54 4.669l-.002-.002-.01-.01a1 1 0 0 0-.319-.206 1.04 1.04 0 0 0-.757.004 1 1 0 0 0-.308.202q0 0-.003.003l-.007.007-.002.002-2.839 2.844a.999.999 0 1 0 1.416 1.412l1.127-1.13v8.407l-1.127-1.13a1 1 0 0 0-1.416 1.413l2.851 2.855a.99.99 0 0 0 .692.279 1 1 0 0 0 .692-.279l2.851-2.855a1 1 0 1 0-1.416-1.412L7.835 16.2V7.797zM20 11.098h-6.483a1 1 0 1 0 0 2H20a1 1 0 1 0 0-2"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M13.517 7.197H20a1 1 0 1 0 0-2h-6.483a1 1 0 1 0 0 2M20 16.799h-6.483a1 1 0 1 0 0 2H20a1 1 0 1 0 0-2" />
    </G>
  </Svg>
);
export default IconlystScrollListBulk;
