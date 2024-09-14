import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeGlobeOutline = ({
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
      d="M3.41 11.204a8.589 8.589 0 1 1 12.583 7.605.75.75 0 0 1-.35.087H8.354a.75.75 0 0 1-.349-.087 8.59 8.59 0 0 1-4.595-7.605M12 4.115a7.089 7.089 0 0 0-3.454 13.28h6.908A7.089 7.089 0 0 0 12 4.116"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.221 17.542a.75.75 0 0 1 1.036.227l.816 1.272c.237.37.442.69.581.959.14.269.278.6.255.973a1.75 1.75 0 0 1-.713 1.305c-.302.22-.655.283-.958.31-.3.027-.68.027-1.12.027H8.886c-.44 0-.82 0-1.12-.027-.303-.027-.656-.09-.958-.31a1.75 1.75 0 0 1-.714-1.305c-.023-.373.115-.704.256-.973a14 14 0 0 1 .6-.987l.793-1.238a.75.75 0 1 1 1.263.809l-.793 1.238c-.261.407-.428.67-.533.87a1 1 0 0 0-.087.203.25.25 0 0 0 .09.163c.016.006.076.023.217.036a13 13 0 0 0 1.02.021h6.164c.483 0 .794 0 1.02-.02.14-.014.2-.031.218-.037a.25.25 0 0 0 .089-.163 1 1 0 0 0-.088-.203c-.104-.2-.271-.463-.532-.87l-.797-1.244a.75.75 0 0 1 .227-1.036M13.141 10.035l3.91 3.208a.75.75 0 1 1-.952 1.16l-3.91-3.208a.3.3 0 0 0-.378 0L7.9 14.402a.75.75 0 0 1-.951-1.16l3.909-3.207a1.8 1.8 0 0 1 2.282 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.08 12.458a.75.75 0 0 1 .844.641l.672 4.91a.75.75 0 0 1-1.486.203l-.672-4.91a.75.75 0 0 1 .641-.844"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.117 9.825a.75.75 0 0 1 .75.75v1.846a.75.75 0 0 1-1.5 0v-1.846a.75.75 0 0 1 .75-.75M15.377 8.65a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M10.764 6.701a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M6.082 9.751a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M12 15.17a.75.75 0 0 1 .75.75v2.19a.75.75 0 0 1-1.5 0v-2.19a.75.75 0 0 1 .75-.75M15.918 12.457c.41.055.7.432.645.842l-.65 4.91a.75.75 0 1 1-1.488-.197l.651-4.91a.75.75 0 0 1 .842-.645"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeGlobeOutline;
