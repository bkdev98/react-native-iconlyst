import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleSongAiLight = ({
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
      d="M18.991 16.348a2.716 2.716 0 1 1-5.432 0 2.716 2.716 0 0 1 5.432 0M8.453 18.284a2.715 2.715 0 1 1-5.431 0 2.715 2.715 0 0 1 5.43 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.457 18.282V5.394a20.6 20.6 0 0 0 3.758-.05"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.457 9.488q2.83.225 5.68.075M18.992 16.348v-5.11M17.875 8.653l.11-.297a4.1 4.1 0 0 1 2.416-2.42l.297-.11-.297-.11a4.1 4.1 0 0 1-2.416-2.419L17.875 3l-.11.297a4.1 4.1 0 0 1-2.416 2.42l-.296.11.296.11a4.1 4.1 0 0 1 2.416 2.42z"
    />
  </Svg>
);
export default IconlystDoubleSongAiLight;
