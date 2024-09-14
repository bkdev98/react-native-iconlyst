import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnUpBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.438 7.304 8.385 4.25M6.323 6.18c-.32.32-.596.729-.993 1.126M8.383 4.25v10.857a5.14 5.14 0 0 0 4.83 5.133M18.669 6.668v8.438a5.14 5.14 0 0 1-2.472 4.395"
    />
  </Svg>
);
export default IconlystTurnUpBroken;
