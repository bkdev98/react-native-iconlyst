import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillSearchTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.138 21-2.174-.888a1.81 1.81 0 0 0-1.465.043l-.772.368a1.22 1.22 0 0 1-1.748-1.102l.01-12.438C4.99 4.523 6.357 3 8.812 3h7.408c2.462 0 3.8 1.524 3.8 3.983v4.291"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.001 19.5 1.392 1.39m-3.56-5.906a2.692 2.692 0 1 1 0 5.384 2.692 2.692 0 0 1 0-5.384M14.606 9.008h-4.97m2.487 3.86H9.639"
    />
  </Svg>
);
export default IconlystReceiptBillSearchTwoTone;
