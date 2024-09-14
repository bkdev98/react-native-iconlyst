import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtone4Outline = ({
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
      fill={props.color}
      d="M17.723 18.136H6.78a3.033 3.033 0 0 1-2.745-4.324l.467-.99a4.6 4.6 0 0 0 .432-1.936v-1.32a7.316 7.316 0 1 1 14.633 0v1.318a4.5 4.5 0 0 0 .432 1.936l.467.992a3.033 3.033 0 0 1-2.745 4.324zM12.252 3.75a5.823 5.823 0 0 0-5.817 5.816v1.317a6.1 6.1 0 0 1-.575 2.575l-.466.99a1.533 1.533 0 0 0 1.387 2.185h10.943a1.533 1.533 0 0 0 1.387-2.184l-.466-.991a6.1 6.1 0 0 1-.575-2.575V9.568a5.823 5.823 0 0 0-5.818-5.817"
    />
    <Path
      fill={props.color}
      d="M12.251 21.75a3.853 3.853 0 0 1-3.849-3.85.75.75 0 1 1 1.5 0 2.35 2.35 0 0 0 4.7 0 .75.75 0 0 1 1.5 0 3.854 3.854 0 0 1-3.85 3.85"
    />
  </Svg>
);
export default IconlystRingtone4Outline;
