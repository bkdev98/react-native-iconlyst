import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNoteShieldBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.794 21.325H8.202a4.12 4.12 0 0 1-4.119-4.12v-6.396M4.083 7.443a4.12 4.12 0 0 1 4.12-4.119h7.096a4.12 4.12 0 0 1 4.12 4.12v3.364M20.394 18.156c0 2.3-2.756 3.135-2.756 3.135s-2.755-.835-2.755-3.136c0-2.3-.1-2.228.121-2.449s2.273-.936 2.634-.936c.362 0 2.634.937 2.634.937M14.292 9.969H9.21m2.652 4.437H9.208"
    />
  </Svg>
);
export default IconlystNoteShieldBroken;
