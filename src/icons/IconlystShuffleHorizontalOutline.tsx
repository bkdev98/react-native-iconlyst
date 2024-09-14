import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShuffleHorizontalOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.908 5.77h.06a.75.75 0 0 1 0 1.5c-1.52 0-2.972.011-4.294.617-1.273.583-2.524 1.773-3.468 4.368-1.027 2.823-2.235 4.387-3.706 5.196-1.415.778-2.954.778-4.388.778h-.083a.75.75 0 0 1 0-1.5c1.532 0 2.7-.016 3.748-.592 1.02-.561 2.053-1.737 3.019-4.394 1.049-2.884 2.538-4.433 4.253-5.22 1.643-.753 3.402-.753 4.859-.752"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M16.919 3.47a.75.75 0 0 1 1.06 0l2.522 2.521a.75.75 0 0 1 0 1.062l-2.521 2.52a.75.75 0 0 1-1.061 0 .75.75 0 0 1 0-1.061l1.991-1.99-1.991-1.99a.75.75 0 0 1 0-1.061"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.908 18.229h.06a.75.75 0 0 0 0-1.5c-1.52 0-2.972-.01-4.294-.617-1.273-.583-2.524-1.773-3.468-4.368C11.179 8.922 9.97 7.358 8.5 6.548c-1.415-.778-2.954-.778-4.388-.777h-.083a.75.75 0 1 0 0 1.5c1.532 0 2.7.015 3.748.592 1.02.56 2.053 1.736 3.019 4.394 1.049 2.883 2.538 4.433 4.253 5.22 1.643.752 3.402.752 4.859.752"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M16.919 20.529a.75.75 0 0 0 1.06 0l2.522-2.52a.75.75 0 0 0 0-1.062l-2.521-2.52a.75.75 0 0 0-1.061 0 .75.75 0 0 0 0 1.06l1.991 1.99-1.991 1.991a.75.75 0 0 0 0 1.06"
    />
  </Svg>
);
export default IconlystShuffleHorizontalOutline;
