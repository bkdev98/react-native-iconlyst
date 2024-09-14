import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToiletBulk = ({
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
      fill={props.color}
      d="M16.41 12.607h2.925a.75.75 0 0 1 0 1.5H18.25v1.06c0 1.397-.773 2.695-2.082 3.524v2.286h1.122a.75.75 0 0 1 0 1.5H8.686a.75.75 0 0 1 0-1.5h1.138v-2.286c-1.309-.828-2.082-2.127-2.082-3.525v-1.059h-1.1a.75.75 0 0 1 0-1.5h9.768"
    />
    <Path
      fill={props.color}
      d="M14.91 10.793v1.814h1.5v-1.814h.34c1.15 0 2.08-.93 2.08-2.08v-3.37c0-1.16-.95-2.12-2.12-2.12H9.74c-1.17 0-2.12.96-2.12 2.12v3.37c0 1.11.86 2.01 1.95 2.07v1.825l1.5-.001v-1.814z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M14.5 6.953h1.16c.41 0 .75-.329.75-.75 0-.41-.34-.75-.75-.75H14.5c-.41 0-.75.34-.75.75 0 .421.34.75.75.75"
    />
  </Svg>
);
export default IconlystToiletBulk;
