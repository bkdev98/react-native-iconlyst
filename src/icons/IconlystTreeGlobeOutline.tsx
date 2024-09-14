import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreeGlobeOutline = ({
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
      d="M12 6.237a.75.75 0 0 1 .586.283l3.034 3.805a.75.75 0 0 1-.586 1.217h-.438l.647 1.121a.75.75 0 0 1-.65 1.125H9.408a.75.75 0 0 1-.65-1.125l.647-1.12h-.438a.75.75 0 0 1-.586-1.218l3.034-3.805A.75.75 0 0 1 12 6.237m-1.476 3.805h.18a.75.75 0 0 1 .649 1.125l-.647 1.121h2.589l-.648-1.12a.75.75 0 0 1 .65-1.126h.18L12 8.19z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.077 12.288a.75.75 0 0 1 .75.75v2.02a.75.75 0 0 1-1.5 0v-2.02a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.41 11.204a8.589 8.589 0 1 1 12.583 7.605.75.75 0 0 1-.35.087H8.354a.75.75 0 0 1-.349-.087 8.59 8.59 0 0 1-4.595-7.605M12 4.115a7.089 7.089 0 0 0-3.454 13.28h6.908A7.089 7.089 0 0 0 12 4.116"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.221 17.542a.75.75 0 0 1 1.036.227l.815 1.272c.238.37.443.69.582.959.14.269.278.6.255.973a1.75 1.75 0 0 1-.713 1.305c-.302.22-.655.283-.958.31-.3.027-.68.027-1.12.027H8.886c-.44 0-.82 0-1.12-.027-.303-.027-.656-.09-.958-.31a1.75 1.75 0 0 1-.714-1.305c-.023-.373.115-.704.256-.973a14 14 0 0 1 .6-.987l.793-1.238a.75.75 0 1 1 1.263.809l-.793 1.238c-.261.407-.428.67-.533.87a1 1 0 0 0-.087.203.25.25 0 0 0 .09.163c.016.006.076.023.217.036a13 13 0 0 0 1.02.021h6.164c.483 0 .794 0 1.02-.02.14-.014.2-.031.218-.037a.25.25 0 0 0 .089-.163 1 1 0 0 0-.088-.203c-.104-.2-.271-.463-.532-.87l-.797-1.244a.75.75 0 0 1 .227-1.036"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTreeGlobeOutline;
