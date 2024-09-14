import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadphoneRemoveLight = ({
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
      d="m7.473 14.983-.07-.122a1.81 1.81 0 0 0-2.473-.665l-.208.121c-.544.312-.821.96-.63 1.556l.726 1.774"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.09 15.873a8.4 8.4 0 0 1-.389-2.534c0-4.783 3.884-8.65 8.65-8.65 1.557 0 3.018.416 4.28 1.134M9.046 17.75c.087.208.121.424.121.64 0 .623-.329 1.237-.908 1.574a1.78 1.78 0 0 1-1.548.121M3 19.459 18.667 3.79"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.925 19.304a1.81 1.81 0 0 1-3.136-1.809l1.521-2.636a1.81 1.81 0 0 1 2.472-.664l.213.123c.543.314.817.959.632 1.558-.33 1.068-.896 2.217-1.702 3.428"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.459 8.402A8.6 8.6 0 0 1 21 13.342c0 .846-.12 1.66-.345 2.43"
    />
  </Svg>
);
export default IconlystHeadphoneRemoveLight;
