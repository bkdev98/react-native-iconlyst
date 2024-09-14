import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEuroSquareBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.751 10.193a.75.75 0 0 1 0 1.5H10.77q-.049.375.001.75h2.98a.75.75 0 0 1 0 1.5h-2.31a3.32 3.32 0 0 0 2.6 1.19c.421-.041.764.307.779.72a.75.75 0 0 1-.718.778 4.71 4.71 0 0 1-4.304-2.388c-.055-.097-.098-.2-.145-.3h-.36a.746.746 0 0 1-.04-1.492 4.6 4.6 0 0 1 0-.767.746.746 0 0 1 .04-1.491h.357c.047-.104.09-.207.146-.307a4.72 4.72 0 0 1 4.306-2.392.75.75 0 0 1 .718.779c-.015.414-.362.76-.779.719a3.33 3.33 0 0 0-2.636 1.2zm2.466-7.63H7.782c-3.159 0-5.282 2.222-5.282 5.53v7.95c0 3.302 2.123 5.52 5.282 5.52h8.434c3.16 0 5.284-2.218 5.284-5.52v-7.95c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEuroSquareBold;
