import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleBed2TwoTone = ({
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
      d="M19.518 12.119V7.185c0-.656 0-.983-.095-1.246a1.6 1.6 0 0 0-.963-.964c-.263-.094-.59-.094-1.246-.094H8.249c-.655 0-.983 0-1.246.094a1.6 1.6 0 0 0-.963.964c-.095.263-.095.59-.095 1.246v4.934M14.732 9.581h1.977M8.73 9.581h1.978"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.73 19.12v-4.697c0-.655 0-.983-.094-1.246a1.6 1.6 0 0 0-.964-.963c-.262-.095-.59-.095-1.245-.095H6.034c-.655 0-.983 0-1.246.095a1.6 1.6 0 0 0-.963.963c-.095.263-.095.59-.095 1.246v4.696M3.73 17.88h18"
    />
  </Svg>
);
export default IconlystDoubleBed2TwoTone;
