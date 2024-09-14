import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrinningSquintingOutline = ({
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
      d="M3.99 3.897C4.975 2.841 6.377 2.25 8.032 2.25h8.435c1.66 0 3.062.59 4.046 1.648C21.49 4.948 22 6.398 22 8.026v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M5.087 4.92C4.41 5.647 4 6.71 4 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.99 7.6a.75.75 0 0 1 1.032-.24L9.858 8.5a.75.75 0 0 1 .002 1.273l-1.836 1.15a.75.75 0 1 1-.796-1.272l.817-.511-.815-.507A.75.75 0 0 1 6.99 7.6M17.51 7.6a.75.75 0 0 1-.24 1.033l-.816.507.817.51a.75.75 0 0 1-.796 1.272L14.64 9.773a.75.75 0 0 1 .002-1.272l1.836-1.142a.75.75 0 0 1 1.033.241M7.886 13.324a.75.75 0 0 1 .75-.75h7.229a.75.75 0 0 1 .75.75c0 2.509-1.904 4.636-4.365 4.636-2.46 0-4.364-2.127-4.364-4.636m1.581.75c.312 1.4 1.475 2.386 2.783 2.386 1.31 0 2.472-.986 2.784-2.386z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGrinningSquintingOutline;
