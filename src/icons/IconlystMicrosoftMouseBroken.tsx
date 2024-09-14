import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftMouseBroken = ({
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
      d="M19.194 12.017V7.795A4.603 4.603 0 0 0 14.59 3.19h-4.184a4.604 4.604 0 0 0-4.604 4.605v8.444a4.603 4.603 0 0 0 4.605 4.603h4.183a4.604 4.604 0 0 0 4.604-4.604v-1.358M12.5 6.057v3.638M5.805 9.695h13.392"
    />
  </Svg>
);
export default IconlystMicrosoftMouseBroken;
