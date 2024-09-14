import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEnvatoSquareOutline = ({
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
      d="M3.74 3.897C4.725 2.841 6.127 2.25 7.782 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H7.782c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4.837 4.92C4.16 5.647 3.75 6.71 3.75 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.959 6.525a.75.75 0 0 1 .424.073c.37.184.54.51.64.7l.023.045c1.152 2.154 1.31 4.634.592 6.61-.727 1.998-2.384 3.528-4.796 3.528-3.855 0-6.246-4.186-4.101-8.076a.75.75 0 0 1 1.375.149c.205.69.456 1.206.693 1.586a8 8 0 0 1 .957-2.01c.838-1.247 2.176-2.36 4.193-2.605m-4.73 6.185-.381.646h-.001l-.002-.002-.003-.002-.009-.005-.022-.014-.063-.042a3 3 0 0 1-.19-.147 4.4 4.4 0 0 1-.571-.58 6 6 0 0 1-.52-.743c-.337 2.315 1.31 4.16 3.375 4.16 1.658 0 2.83-1.01 3.386-2.54.561-1.545.46-3.569-.489-5.361-1.275.266-2.139 1.01-2.728 1.887a6.7 6.7 0 0 0-1.036 2.826.75.75 0 0 1-1.127.563z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEnvatoSquareOutline;
