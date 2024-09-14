import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtone4Bulk = ({
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
      d="M9.65 17.775q-.002-.008-.003-.016h4.705q-.002.008-.003.016l1.497-.016h1.626a2.77 2.77 0 0 0 2.35-1.292 2.77 2.77 0 0 0 .168-2.675l-.466-.99a4.8 4.8 0 0 1-.457-2.043l-.001-1.318A7.074 7.074 0 0 0 12 2.375a7.074 7.074 0 0 0-7.066 7.066l-.001 1.318c0 .701-.158 1.407-.457 2.043l-.465.99a2.77 2.77 0 0 0 .167 2.675 2.77 2.77 0 0 0 2.35 1.292h1.625q-.002.008-.003.016z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m9.65 17.776-1.497-.017q0 .005-.002.008l-.001.009a3.854 3.854 0 0 0 3.849 3.85c2.123 0 3.847-1.743 3.847-3.866h-1.494q0 .003-.002.007l-.001.009a2.353 2.353 0 0 1-2.35 2.35 2.353 2.353 0 0 1-2.35-2.35"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtone4Bulk;
