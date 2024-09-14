import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillDownBroken = ({
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
      d="m10.889 21-2.175-.888a1.81 1.81 0 0 0-1.465.043l-.772.368a1.22 1.22 0 0 1-1.747-1.102l.005-6.219M19.77 11.274v-4.29C19.77 4.523 18.43 3 15.97 3H8.562C6.107 3 4.739 4.524 4.739 6.983l-.003 3.11M14.358 9.043h-4.97m3.313 3.86H9.389M17.357 21v-6.14m-2.417 3.714L17.354 21l2.416-2.426"
    />
  </Svg>
);
export default IconlystReceiptBillDownBroken;
