import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardShrareMoneyLight = ({
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
      d="M21 11.632V8.34c0-2.442-1.521-4.167-3.965-4.167H6.965C4.528 4.172 3 5.897 3 8.339v6.587c0 2.442 1.52 4.167 3.965 4.167h3.326M3 9.47h18M19.263 19.827v-5.565M21 18.148l-1.737 1.676-1.738-1.676M14.664 13.766v5.565"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.927 15.441 1.737-1.675L16.4 15.44"
    />
  </Svg>
);
export default IconlystBankCardShrareMoneyLight;
