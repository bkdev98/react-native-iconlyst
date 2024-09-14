import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowGlobeOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M3.411 11.204a8.589 8.589 0 1 1 12.583 7.605.75.75 0 0 1-.35.087H8.355a.75.75 0 0 1-.349-.087 8.59 8.59 0 0 1-4.595-7.605M12 4.115a7.089 7.089 0 0 0-3.454 13.28h6.908A7.089 7.089 0 0 0 12 4.116"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.001 7.242a.75.75 0 0 1 .75.75v6.423a.75.75 0 0 1-1.5 0V7.992a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.432 9.223a.75.75 0 0 1-.275 1.025l-5.562 3.211a.75.75 0 0 1-.75-1.299l5.562-3.211a.75.75 0 0 1 1.025.274"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.432 13.185a.75.75 0 0 0-.275-1.025L9.595 8.95a.75.75 0 0 0-.75 1.299l5.562 3.212a.75.75 0 0 0 1.025-.275M15.22 17.542a.75.75 0 0 1 1.036.227l.816 1.272c.237.37.442.69.581.959.14.269.279.6.256.973a1.75 1.75 0 0 1-.714 1.305c-.302.22-.655.283-.957.31s-.682.027-1.121.027H8.885c-.44 0-.82 0-1.12-.027-.303-.027-.656-.09-.958-.31a1.75 1.75 0 0 1-.714-1.305c-.023-.373.116-.704.256-.973a14 14 0 0 1 .6-.987l.793-1.238a.75.75 0 1 1 1.263.809l-.793 1.238c-.261.407-.428.67-.533.87a1 1 0 0 0-.087.203.25.25 0 0 0 .09.163c.016.006.076.023.217.036a13 13 0 0 0 1.02.021h6.164a13 13 0 0 0 1.02-.02c.141-.014.201-.031.218-.037a.25.25 0 0 0 .09-.163 1 1 0 0 0-.088-.203c-.105-.2-.272-.463-.533-.87l-.796-1.244a.75.75 0 0 1 .226-1.036"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSnowGlobeOutline;