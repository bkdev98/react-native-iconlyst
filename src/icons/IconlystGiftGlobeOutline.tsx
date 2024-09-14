import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftGlobeOutline = ({
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
      d="M15.22 17.542a.75.75 0 0 1 1.036.227l.816 1.272c.237.37.442.69.581.959.14.269.279.6.256.973a1.75 1.75 0 0 1-.714 1.305c-.302.22-.655.283-.957.31s-.682.027-1.121.027H8.885c-.44 0-.82 0-1.12-.027-.303-.027-.656-.09-.958-.31a1.75 1.75 0 0 1-.714-1.305c-.023-.373.116-.704.256-.973a14 14 0 0 1 .6-.987l.793-1.238a.75.75 0 1 1 1.263.809l-.793 1.238c-.261.407-.428.67-.533.87a1 1 0 0 0-.087.203.25.25 0 0 0 .09.163c.016.006.076.023.217.036a13 13 0 0 0 1.02.021h6.164a13 13 0 0 0 1.02-.02c.141-.014.201-.031.218-.037a.25.25 0 0 0 .09-.163 1 1 0 0 0-.088-.203c-.105-.2-.272-.463-.533-.87l-.796-1.244a.75.75 0 0 1 .226-1.036M9.506 8.446a.32.32 0 0 0-.322.322c0 .313.193.693.706 1.03.348.229.809.409 1.341.5-.125-1.131-.936-1.852-1.725-1.852m3.261 1.851a3.5 3.5 0 0 0 1.341-.5c.513-.336.707-.716.707-1.029a.32.32 0 0 0-.324-.322c-.787 0-1.598.72-1.724 1.851m-.768-2.033c.578-.79 1.453-1.318 2.492-1.318 1.007 0 1.823.815 1.823 1.822 0 .981-.604 1.772-1.382 2.283-.784.515-1.823.81-2.933.81s-2.149-.295-2.933-.81c-.777-.51-1.382-1.302-1.382-2.283 0-1.007.816-1.822 1.822-1.822 1.04 0 1.915.527 2.493 1.318"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 10.361a.75.75 0 0 1 .554.246l2.552 2.804a.75.75 0 0 1-1.11 1.01L12 12.226l-1.998 2.195a.75.75 0 0 1-1.11-1.01l2.553-2.804A.75.75 0 0 1 12 10.36"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.615a.75.75 0 0 1 .75.75v14.78a.75.75 0 0 1-1.5 0V3.366a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.454 11.161a.75.75 0 0 1 .75-.75h15.592a.75.75 0 1 1 0 1.5H4.204a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGiftGlobeOutline;
