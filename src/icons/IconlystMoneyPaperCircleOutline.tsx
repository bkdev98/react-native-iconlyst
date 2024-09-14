import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.563 3.92c.708-.763 1.711-1.182 2.877-1.182h11.622c1.168 0 2.172.42 2.88 1.181C21.645 4.676 22 5.71 22 6.847v4.41a.75.75 0 0 1-1.5 0v-4.41c0-.83-.256-1.475-.657-1.907-.395-.425-.985-.702-1.781-.702H6.44c-.793 0-1.383.277-1.779.702-.401.432-.658 1.078-.658 1.907v7.417c0 .83.256 1.476.656 1.907.395.425.985.702 1.781.702h4.62a.75.75 0 0 1 0 1.5H6.44c-1.168 0-2.172-.419-2.88-1.181-.702-.756-1.057-1.79-1.057-2.928V6.847c0-1.139.357-2.172 1.06-2.928"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.138 14.588a2.6 2.6 0 0 0-2.655-.637.75.75 0 0 1-.465-1.427A4.1 4.1 0 0 1 7.2 13.53a4.13 4.13 0 0 1 .948 4.352.75.75 0 1 1-1.408-.517 2.63 2.63 0 0 0-.602-2.775M7.165 2.783a.75.75 0 0 1 .97.43 4.12 4.12 0 0 1-.931 4.37l-.003.002A4.11 4.11 0 0 1 3.018 8.59a.75.75 0 0 1 .465-1.427 2.61 2.61 0 0 0 2.655-.636 2.62 2.62 0 0 0 .597-2.775.75.75 0 0 1 .43-.97M17.333 2.783a.75.75 0 0 1 .43.97 2.6 2.6 0 0 0 .605 2.772c.72.722 1.736.933 2.65.638a.75.75 0 0 1 .461 1.427 4.09 4.09 0 0 1-4.173-1.005 4.1 4.1 0 0 1-.942-4.372.75.75 0 0 1 .97-.43M9.215 10.555a3.04 3.04 0 0 1 3.037-3.043 3.04 3.04 0 0 1 3.038 3.043.75.75 0 0 1-1.5 0c0-.854-.69-1.543-1.538-1.543-.847 0-1.537.69-1.537 1.543 0 .854.69 1.544 1.537 1.544a.75.75 0 0 1 0 1.5 3.04 3.04 0 0 1-3.037-3.044M13.5 17.07c0-2.35 1.902-4.26 4.25-4.26S22 14.72 22 17.07s-1.902 4.259-4.25 4.259a4.255 4.255 0 0 1-4.25-4.26m4.25-2.76A2.755 2.755 0 0 0 15 17.07a2.755 2.755 0 0 0 2.75 2.759 2.755 2.755 0 0 0 2.75-2.76 2.755 2.755 0 0 0-2.75-2.758"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.75 15.734a.75.75 0 0 1 .75.75v1.17a.75.75 0 0 1-1.5 0v-1.17a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperCircleOutline;