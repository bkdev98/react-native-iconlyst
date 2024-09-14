import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaRefreshBulk = ({
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
      d="M8.002 9.76c.018.047.045.086.07.127.026.04.047.081.079.116.037.04.082.07.127.1.029.021.05.05.083.065.007.004.016.003.024.007.046.022.096.03.147.041.048.011.094.027.142.028.009.001.017.006.025.006h1.978a.75.75 0 0 0 0-1.5h-.327c.45-.297.979-.47 1.542-.47a2.83 2.83 0 0 1 2.825 2.83 2.825 2.825 0 0 1-2.825 2.82 2.81 2.81 0 0 1-2.417-1.36.749.749 0 1 0-1.281.78 4.3 4.3 0 0 0 3.698 2.08 4.326 4.326 0 0 0 4.325-4.32c0-2.388-1.94-4.33-4.325-4.33-.895 0-1.737.28-2.443.766V7.53a.75.75 0 0 0-1.5 0V9.5c0 .037.017.07.022.106.008.052.012.104.03.154"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.05 2.683a2.32 2.32 0 0 0-2.563.513L15.054 5.63a.207.207 0 0 0 .04.32 6.08 6.08 0 0 1 2.873 5.161c0 3.346-2.726 6.07-6.075 6.07-2.029 0-4.131-1.074-5.155-2.861a.21.21 0 0 0-.328-.049l-3.216 3.217a2.32 2.32 0 0 0-.508 2.565 2.31 2.31 0 0 0 2.17 1.447h14.296a2.35 2.35 0 0 0 2.35-2.349V4.85c0-.967-.556-1.797-1.451-2.167"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAntenaRefreshBulk;
