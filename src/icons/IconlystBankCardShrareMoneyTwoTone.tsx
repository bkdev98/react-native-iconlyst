import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardShrareMoneyTwoTone = ({
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
      d="M21.5 11.632V8.34c0-2.442-1.521-4.167-3.965-4.167H7.465C5.028 4.172 3.5 5.897 3.5 8.339v6.587c0 2.442 1.52 4.167 3.965 4.167h3.326"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 9.47h18M19.762 19.827v-5.565M21.5 18.15l-1.737 1.675-1.738-1.675"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.164 13.766v5.565m0-5.565-1.737 1.675m1.737-1.675L16.9 15.44"
    />
  </Svg>
);
export default IconlystBankCardShrareMoneyTwoTone;
