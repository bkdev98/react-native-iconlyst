import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillSearchBroken = ({
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
      d="M19.77 11.274v-4.29c0-2.46-1.338-3.984-3.8-3.984H8.564C6.108 3 4.74 4.524 4.74 6.983l-.003 3.11M10.888 21l-2.174-.89a1.81 1.81 0 0 0-1.465.044l-.772.368a1.22 1.22 0 0 1-1.748-1.102l.005-6.219M18.751 19.5l1.392 1.39m-3.56-5.906a2.692 2.692 0 1 1 0 5.384 2.692 2.692 0 0 1 0-5.384M14.356 9.008h-4.97m2.487 3.86H9.389"
    />
  </Svg>
);
export default IconlystReceiptBillSearchBroken;
