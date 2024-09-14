import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailThumbsUpLikeBroken = ({
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
      d="M3 11.993V9.41c0-2.763 1.845-5.013 4.582-5.013h8.836c2.737 0 4.582 2.25 4.582 5.013v.345M12.982 20.599h3.436c2.737.008 4.582-2.24 4.582-5.006v-2.56"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.69 9.664 3.998 3.252c.753.598 1.82.598 2.574 0l4.033-3.252"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.126 20.718h.517c.402 0 .603 0 .771-.069a.93.93 0 0 0 .392-.3c.11-.145.162-.339.266-.727l.185-.683c.197-.733.296-1.1.214-1.389a1.09 1.09 0 0 0-.486-.633c-.258-.155-.637-.155-1.396-.155h-.697c-.13 0-.155-.05-.118-.165.503-1.565.245-2.187-.254-2.29-.19-.04-.27-.038-.421.11a77 77 0 0 1-1.763 1.964c-.116.126-.174.19-.215.26a.7.7 0 0 0-.083.212c-.018.08-.018.165-.018.336v2.088c0 .499 0 .748.096.94.088.175.23.317.405.405.192.096.441.096.94.096"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 20.57v-3.465"
    />
  </Svg>
);
export default IconlystEmailThumbsUpLikeBroken;
