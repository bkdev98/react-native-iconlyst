import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPencilOutline = ({
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
      d="M13.712 8.467v.001L9.284 13.3c-.234.262-.38.59-.417.94l-.114 1.05a.39.39 0 0 0 .452.425l1.017-.17c.38-.064.724-.254.979-.54l.007-.007 4.383-4.783.002-.003a.647.647 0 0 0-.035-.913l-.935-.865a.646.646 0 0 0-.912.033m1.93-1.134a2.145 2.145 0 0 0-3.032.117l-.002.003-4.432 4.837-.006.007a3.2 3.2 0 0 0-.793 1.782l-.114 1.05a1.89 1.89 0 0 0 2.19 2.065l1.018-.17a3.18 3.18 0 0 0 1.847-1.016l4.377-4.777.002-.001c.803-.87.75-2.226-.118-3.031z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.672 8.487a.75.75 0 0 1 1.06-.041l2.984 2.762a.75.75 0 1 1-1.019 1.1l-2.984-2.762a.75.75 0 0 1-.04-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPencilOutline;
