import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScooterBroken = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M5.216 19.179a2.216 2.216 0 1 0 0-4.432 2.216 2.216 0 0 0 0 4.432M18.784 19.179a2.216 2.216 0 1 0 0-4.432 2.216 2.216 0 0 0 0 4.432"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m6.014 14.895 2.61-9.237c.137-.492.6-.837 1.112-.837h1.585M16.815 17.987l-.315.128a3.2 3.2 0 0 1-1.221.246H7.44"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m7.47 9.804 2.304 1.723a2.21 2.21 0 0 1 .876 1.763v2.536"
    />
  </Svg>
);
export default IconlystScooterBroken;
