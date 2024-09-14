import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBagTwoTone = ({
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
      d="M17.629 21H7.937c-2.23 0-4.04-1.81-4.04-4.607V9.336c0-1.665 1.81-3.474 4.04-3.474h9.692c2.23 0 4.04 1.809 4.04 3.474v7.058c0 2.798-1.81 4.607-4.04 4.607M9.248 14.322v-2.025m7.073 2.025v-2.025"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.166 5.861A2.86 2.86 0 0 0 13.305 3h-1.041a2.86 2.86 0 0 0-2.862 2.861M21.623 12.547a44.6 44.6 0 0 1-17.676 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBagTwoTone;
