import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardShrareMoneyBroken = ({
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
      d="M21.25 11.632V8.34c0-2.442-1.521-4.167-3.965-4.167H12.25M10.541 19.093H7.215c-2.444 0-3.965-1.725-3.965-4.167V8.339c0-2.442 1.528-4.167 3.965-4.167h1.517M3.25 9.47h14.417M19.513 19.828v-5.565M21.25 18.15l-1.737 1.676-1.737-1.676M14.914 13.765v5.565M13.177 15.44l1.737-1.675 1.737 1.675"
    />
  </Svg>
);
export default IconlystBankCardShrareMoneyBroken;
