import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasHatBroken = ({
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
      d="M11.324 9.516c.648 1.474 2.417 4.736 4.315 5.987M14.278 14.64c-1.647.71-7.03.9-9.505 0-.113-2.035.358-5.669 2.566-7.818M21.5 16.196a2.705 2.705 0 1 0-1.483 2.414"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.829 12.637C2.945 13.12 2.5 14.134 2.5 16.196c0 2.747 1.186 3.634 4.969 3.884M10.56 5.201c5-.863 7.076 2.553 7.49 4.369l.824 3.467M10.997 20.167c3.84 0 6.024-.356 7.21-1.26"
    />
  </Svg>
);
export default IconlystChristmasHatBroken;
