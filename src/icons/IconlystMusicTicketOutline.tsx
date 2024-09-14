import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMusicTicketOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.668 12.48a1.188 1.188 0 1 0 .001 2.377 1.188 1.188 0 0 0-.001-2.376M8.98 13.669a2.688 2.688 0 1 1 5.377.001 2.688 2.688 0 0 1-5.377-.001"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.303 7.582a.75.75 0 0 0-1.449.274v5.815a.75.75 0 0 0 1.5 0V9.809c.273.16.591.292.958.367a.75.75 0 0 0 .299-1.47c-.456-.093-.78-.36-1.005-.635a2.3 2.3 0 0 1-.303-.488m0-.001"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M16.844 20.046H7.65a8.4 8.4 0 0 1-2.269-.157 3.97 3.97 0 0 1-2.726-2.726 8.5 8.5 0 0 1-.156-2.268 3.4 3.4 0 0 1 .027-.563 1.2 1.2 0 0 1 .5-.85q.394-.274.824-.484a1.142 1.142 0 0 0-.009-2.024 6 6 0 0 1-.788-.447 1.22 1.22 0 0 1-.523-.86 3 3 0 0 1-.028-.534 8.5 8.5 0 0 1 .155-2.3 3.97 3.97 0 0 1 2.724-2.726 8.4 8.4 0 0 1 2.274-.158h9.187a8.4 8.4 0 0 1 2.28.158 3.98 3.98 0 0 1 2.718 2.719c.156.748.21 1.515.158 2.279q.014.285-.029.569a1.21 1.21 0 0 1-.518.854q-.36.245-.759.428a1.15 1.15 0 0 0-.653 1.042 1.14 1.14 0 0 0 .618 1.022q.416.191.795.45a1.22 1.22 0 0 1 .52.857q.036.282.027.565a8.3 8.3 0 0 1-.158 2.278 3.97 3.97 0 0 1-2.719 2.72 8.4 8.4 0 0 1-2.278.155M4.006 14.63C4 14.71 4 14.787 4 14.894a8 8 0 0 0 .1 1.853 2.48 2.48 0 0 0 1.7 1.7 8 8 0 0 0 1.852.1h9.193c.622.04 1.246.006 1.86-.1a2.48 2.48 0 0 0 1.7-1.7 8 8 0 0 0 .1-1.86v-.252c-.115-.07-.284-.158-.54-.293a2.65 2.65 0 0 1 0-4.694c.276-.144.442-.23.534-.282.007-.08.006-.155.006-.261a8 8 0 0 0-.1-1.861 2.48 2.48 0 0 0-1.7-1.7 8 8 0 0 0-1.86-.1H7.656a8 8 0 0 0-1.856.1 2.48 2.48 0 0 0-1.7 1.7 8.2 8.2 0 0 0-.1 1.857v.25c.114.07.282.158.538.293a2.65 2.65 0 0 1 1.42 2.354 2.69 2.69 0 0 1-1.375 2.312c-.293.16-.479.26-.578.32"
    />
  </Svg>
);
export default IconlystMusicTicketOutline;