import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleBed2Light = ({
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
      d="M18.787 12.119V7.185c0-.656 0-.983-.095-1.246a1.6 1.6 0 0 0-.963-.964c-.263-.094-.59-.094-1.246-.094H7.52c-.656 0-.983 0-1.246.094a1.6 1.6 0 0 0-.964.964c-.094.263-.094.59-.094 1.246v4.934M14.002 9.581h1.977M8 9.581h1.977M21 19.12v-4.697c0-.655 0-.983-.095-1.246a1.6 1.6 0 0 0-.963-.963c-.263-.095-.59-.095-1.246-.095H5.304c-.655 0-.983 0-1.246.095a1.6 1.6 0 0 0-.963.963C3 13.44 3 13.767 3 14.423v4.696M3 17.88h18"
    />
  </Svg>
);
export default IconlystDoubleBed2Light;
