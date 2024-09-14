import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailThumbsUpLikeTwoTone = ({
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
      d="M3.5 11.494V8.912C3.5 6.15 5.345 3.9 8.082 3.9h8.836c2.737 0 4.582 2.25 4.582 5.013v6.182c0 2.765-1.845 5.013-4.582 5.005h-3.436"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.19 9.165 3.998 3.252c.753.598 1.82.598 2.574 0l4.033-3.252M8.27 16.1c.504-1.566.245-2.19-.255-2.293-.191-.04-.27-.037-.421.11a78 78 0 0 1-1.766 1.968c-.116.126-.174.189-.216.26a.7.7 0 0 0-.082.212c-.018.08-.018.165-.018.336v2.092c0 .5 0 .75.095.94.088.176.23.319.407.407.191.095.44.095.94.095H9.14c.402 0 .604 0 .772-.068a.93.93 0 0 0 .393-.3c.11-.145.162-.34.267-.728l.185-.685c.197-.734.296-1.1.214-1.39a1.1 1.1 0 0 0-.486-.635c-.259-.156-.639-.156-1.399-.156h-.698c-.13 0-.155-.05-.118-.165M3.5 20.075v-3.47"
    />
  </Svg>
);
export default IconlystEmailThumbsUpLikeTwoTone;
