import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStripeSquareOutline = ({
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
      d="M13.586 9.128c-.305-.216-.86-.394-1.457-.377-.504.014-.91.145-1.17.34-.234.175-.388.424-.388.824 0 .374.243.718.702.955l2.07.892.04.019c.776.39 1.546 1.163 1.546 2.304 0 .88-.382 1.57-.988 2.024-.58.434-1.316.62-2.028.64-.867.024-1.753-.22-2.365-.652a.75.75 0 1 1 .866-1.225c.305.216.86.394 1.457.377.504-.014.91-.146 1.17-.34.234-.175.388-.424.388-.824 0-.374-.243-.718-.702-.955l-2.07-.892-.04-.019c-.775-.39-1.546-1.163-1.546-2.304 0-.88.382-1.57.988-2.024.58-.434 1.316-.62 2.028-.64.867-.024 1.753.22 2.365.652a.75.75 0 1 1-.866 1.225"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStripeSquareOutline;
