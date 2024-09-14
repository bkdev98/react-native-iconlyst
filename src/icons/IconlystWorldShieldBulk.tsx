import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldShieldBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M13.929 10.746C13.793 6.38 12.43 3.63 11.476 3.63s-2.316 2.75-2.452 7.115zM12.703 12.167h-3.68c.14 4.37 1.5 7.11 2.45 7.11.17 0 .35-.09.54-.26a5.5 5.5 0 0 1-.36-2c0-.84-.02-1.4-.02-1.79-.02-1.06-.04-1.98.89-2.91q.075-.075.18-.15M15.353 10.747h5.1c-.34-4.29-3.68-7.74-7.92-8.23 1.75 1.02 2.71 4.56 2.82 8.23M10.421 2.514a9.016 9.016 0 0 0-7.919 8.232H7.6c.11-3.67 1.07-7.208 2.821-8.232M7.6 12.168H2.501a9.02 9.02 0 0 0 7.92 8.232c-1.75-1.024-2.71-4.563-2.82-8.232" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.992 15.176c-.008.403-.02.983-.02 1.836 0 1.772-1.873 2.67-2.523 2.927-.65-.258-2.524-1.154-2.524-2.927 0-.855-.012-1.436-.02-1.839-.004-.222-.008-.423-.007-.553.516-.26 2.2-.846 2.528-.882.377.036 2.106.637 2.573.88.002.13-.003.333-.007.558m1.12-1.6c-.447-.454-3.109-1.338-3.663-1.338-.549 0-3.207.881-3.662 1.334-.405.408-.4.667-.382 1.631.008.397.02.968.02 1.81 0 3.252 3.651 4.393 3.807 4.44a.73.73 0 0 0 .435 0c.155-.047 3.805-1.189 3.805-4.44 0-.84.012-1.41.02-1.807.02-.967.023-1.226-.38-1.63"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWorldShieldBulk;
