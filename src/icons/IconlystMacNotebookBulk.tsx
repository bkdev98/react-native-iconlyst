import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacNotebookBulk = ({
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
      d="M4.335 14.819h15.33c.28 0 .5-.22.5-.5v-7.64c0-1.79-1.34-2.91-3.51-2.91h-9.31c-2.17 0-3.51 1.12-3.51 2.91v7.64c0 .28.22.5.5.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.445 6.068h1.35c.42 0 .75.33.75.75 0 .41-.33.75-.75.75h-1.35a.749.749 0 1 1 0-1.5M20.949 16.246H3.052a.8.8 0 0 0-.802.8v.507a2.68 2.68 0 0 0 2.679 2.678h14.142a2.68 2.68 0 0 0 2.679-2.678v-.507c0-.44-.36-.8-.801-.8"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMacNotebookBulk;
