import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongTwoTone = ({
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
      d="M19.24 7.509c0-2.576-1.604-4.396-4.182-4.396H7.682c-2.57 0-4.182 1.82-4.182 4.396v6.95c0 2.575 1.604 4.395 4.182 4.395h3.484"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.241 18.532a2.356 2.356 0 1 1-4.712-.001 2.356 2.356 0 0 1 4.712 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.24 18.531v-7.425l2.259-.475v3.103l-2.259.512"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.688 10.983a2.318 2.318 0 1 0-4.636 0 2.318 2.318 0 0 0 4.636 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongTwoTone;
