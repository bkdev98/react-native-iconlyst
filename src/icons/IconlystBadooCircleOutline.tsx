import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBadooCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.001 8.622a3.3 3.3 0 0 1 2.402-.945c1.514.037 2.765 1.085 3.188 2.44.27.864.156 1.764-.049 2.499-.37 1.321-1.196 2.45-2.187 3.25-.984.793-2.189 1.306-3.355 1.306s-2.372-.513-3.356-1.307c-.99-.798-1.817-1.928-2.186-3.25-.205-.734-.32-1.634-.05-2.498.426-1.363 1.689-2.416 3.215-2.44A3.28 3.28 0 0 1 12 8.622m-.684 1.597a1.78 1.78 0 0 0-1.663-1.043H9.65c-.831.013-1.56.595-1.809 1.389-.148.474-.104 1.051.063 1.647.274.98.902 1.856 1.683 2.486.787.635 1.67.974 2.414.974.743 0 1.626-.34 2.414-.974.781-.63 1.41-1.505 1.684-2.486.166-.596.21-1.172.062-1.647-.248-.793-.977-1.375-1.808-1.388l-.024-.001a1.79 1.79 0 0 0-1.646 1.045.75.75 0 0 1-1.365-.002"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBadooCircleOutline;
