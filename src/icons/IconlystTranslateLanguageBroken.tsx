import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTranslateLanguageBroken = ({
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
      d="M9 14c-1.009-1.208-1.767-2.542-2.065-3.805m9.475 7.964c-1.711.117-3.76-.844-5.525-2.293M3.25 5.291h13.507M9.654 3.61v1.682"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.727 20.39 4.762-9.325 4.761 9.326M12.928 8.502c-1.01 2.755-3.438 6.545-9.094 8.275"
    />
  </Svg>
);
export default IconlystTranslateLanguageBroken;
