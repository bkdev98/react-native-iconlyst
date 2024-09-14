import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphone2Broken = ({
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
      d="M18.219 17.152S7.72 14.991 6.421 14.665C5.123 14.343 3.5 12.64 3.5 10.447c0-2.192 1.623-3.894 2.921-4.22M9.25 5.61c3.519-.745 8.919-1.856 8.919-1.856"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.501 10.446c0 3.715-1.353 6.727-3.022 6.727s-3.022-3.012-3.022-6.727 1.353-6.727 3.022-6.727 3.022 3.012 3.022 6.727"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.066 20.208c-.432-.18-2.64-.637-5.452-.008-2.018.452-2.64-1.07-2.814-2.196L6.687 17"
    />
  </Svg>
);
export default IconlystSpeakerMegaphone2Broken;
