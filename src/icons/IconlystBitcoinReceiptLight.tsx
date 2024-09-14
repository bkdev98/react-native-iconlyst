import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinReceiptLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.218 5.275V17.82a2.604 2.604 0 0 1-2.605 2.604h12.138c2.084 0 3.24-1.404 3.24-3.672L21 5.275c0-.829-.794-1.368-1.483-1.015l-.653.345a1.43 1.43 0 0 1-1.245.035l-1.845-.821a2.9 2.9 0 0 0-2.33 0l-1.845.82a1.43 1.43 0 0 1-1.245-.034L9.7 4.26c-.69-.353-1.483.195-1.483 1.015"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.89 9.412h1.958c.732 0 1.386.535 1.455 1.264a1.4 1.4 0 0 1-1.394 1.538H12.89"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.89 12.21h1.958c.732 0 1.386.536 1.455 1.265a1.4 1.4 0 0 1-1.394 1.538H12.89"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.348 15.843v-.826m0-5.609v-.826M5.613 20.425A2.604 2.604 0 0 1 3 17.82v-7.248c0-.83.795-1.368 1.484-1.014l.653.344c.388.203.838.212 1.244.035l1.245-.556c.097-.044.344.07.592.203"
    />
  </Svg>
);
export default IconlystBitcoinReceiptLight;
