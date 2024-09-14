import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardSendTwoTone = ({
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
      d="M21.5 11.609V8.533c0-2.44-1.52-4.166-3.965-4.166H7.465C5.028 4.367 3.5 6.092 3.5 8.533v6.589c0 2.44 1.52 4.166 3.965 4.166h4.802"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.451 9.346H17.55M21.5 17.584h-6.322M19.443 15.535l2.056 2.047-2.056 2.048"
    />
  </Svg>
);
export default IconlystBankCardSendTwoTone;
