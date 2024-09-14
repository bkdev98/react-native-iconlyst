import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRainDropOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M3.99 3.897C4.975 2.841 6.377 2.25 8.032 2.25h8.435c1.66 0 3.062.59 4.046 1.648C21.49 4.948 22 6.398 22 8.026v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M5.087 4.92C4.41 5.647 4 6.71 4 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17m7.57 2.788-.407.63-.408-.63a.75.75 0 0 1 .816 0M12.25 9.26c-.134.101-.293.227-.467.373-.511.43-1.128 1.025-1.609 1.712-.4.637-.411 1.527-.027 2.283.373.737 1.092 1.285 2.103 1.285s1.73-.548 2.103-1.285c.384-.756.373-1.646-.027-2.283-.48-.687-1.098-1.281-1.609-1.712a12 12 0 0 0-.467-.373m-.408-1.55.408.629.408-.63.001.001.002.001.005.004.018.011a7 7 0 0 1 .278.195c.182.132.434.323.721.565.569.479 1.298 1.174 1.882 2.014l.017.025c.736 1.152.697 2.623.109 3.782-.6 1.183-1.804 2.106-3.441 2.106s-2.84-.923-3.441-2.106c-.588-1.16-.627-2.63.109-3.782l.016-.025c.585-.84 1.314-1.535 1.883-2.014a13 13 0 0 1 1-.76l.017-.011.005-.004h.002z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRainDropOutline;
