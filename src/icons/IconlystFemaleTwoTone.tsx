import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFemaleTwoTone = ({
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
      d="m16.035 17.875-1.446-3.468c-.52-1.248-.78-1.873-1.1-2.126a1.58 1.58 0 0 0-1.959-.002c-.32.252-.58.876-1.104 2.124L8.97 17.87c-.351.836-.526 1.254-.518 1.593.016.606.377 1.149.93 1.398.309.14.762.14 1.669.14h2.9c.905 0 1.357 0 1.666-.14.552-.248.913-.79.93-1.395.01-.339-.165-.756-.513-1.591"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.734 5.783a2.783 2.783 0 1 0 5.566 0 2.783 2.783 0 0 0-5.566 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFemaleTwoTone;
