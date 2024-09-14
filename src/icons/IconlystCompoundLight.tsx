import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCompoundLight = ({
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
      strokeWidth={1.5}
      d="M13.453 21v-4.044a.78.78 0 0 0-.45-.694l-7.878-3.89a.787.787 0 0 0-1.125.69v2.922a.78.78 0 0 0 .435.694l8.568 4.24a.8.8 0 0 0 .825-.072l5.597-4.126a.78.78 0 0 0 .33-.63V7.648a.78.78 0 0 0-.435-.694l-7.877-3.879a.788.788 0 0 0-1.126.694v4.952"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.604 18.805v-6.501a.77.77 0 0 0-.435-.683L8.291 7.742a.788.788 0 0 0-1.125.694v4.937"
    />
  </Svg>
);
export default IconlystCompoundLight;
