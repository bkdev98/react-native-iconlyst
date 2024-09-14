import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphone2TwoTone = ({
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
      d="M18.219 17.15S7.72 14.99 6.421 14.667 3.5 12.64 3.5 10.446c0-2.192 1.623-3.894 2.921-4.22 1.299-.323 11.748-2.472 11.748-2.472"
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
      d="m6.422 14.666.379 3.338c.173 1.125.796 2.648 2.814 2.196 2.81-.629 5.02-.173 5.45.008"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSpeakerMegaphone2TwoTone;
