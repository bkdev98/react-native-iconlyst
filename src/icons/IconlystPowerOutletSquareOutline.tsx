import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletSquareOutline = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.521 11.614v1.904a2.478 2.478 0 0 0 4.956 0v-1.904zm-1.5 1.904v-2.015c0-.767.623-1.39 1.39-1.39h5.177c.767 0 1.39.623 1.39 1.39v2.015a3.978 3.978 0 1 1-7.957 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.316 11.613a.75.75 0 0 1-.75-.75v-2a.75.75 0 1 1 1.5 0v2a.75.75 0 0 1-.75.75m3.368 0a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.74 4.397C4.725 3.341 6.127 2.75 7.782 2.75h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H13.5A2.25 2.25 0 0 1 11.25 20v-3.248a.75.75 0 0 1 1.5 0V20c0 .414.336.75.75.75h2.716c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.526c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17-.677.727-1.087 1.79-1.087 3.106v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17a.75.75 0 0 1 0 1.5c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.526c0-1.628.511-3.078 1.49-4.129"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPowerOutletSquareOutline;
