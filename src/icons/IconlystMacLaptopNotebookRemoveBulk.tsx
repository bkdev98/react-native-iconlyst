import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacLaptopNotebookRemoveBulk = ({
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
      d="M4.326 14.82h15.34c.28 0 .5-.22.5-.5V6.68c0-1.79-1.34-2.91-3.51-2.91h-9.31c-2.17 0-3.52 1.12-3.52 2.91v7.64c0 .28.23.5.5.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.856 8.42a.754.754 0 0 1 0-1.06c.3-.29.77-.29 1.06 0l1.08 1.08 1.08-1.08c.3-.29.77-.29 1.06 0 .3.3.3.77 0 1.06l-1.08 1.08 1.08 1.08c.3.29.3.77 0 1.06-.14.15-.34.22-.53.22s-.38-.07-.53-.22l-1.08-1.08-1.08 1.08c-.29.29-.76.29-1.06 0a.754.754 0 0 1 0-1.06l1.08-1.08zM20.949 16.246H3.052a.8.8 0 0 0-.802.8v.507a2.68 2.68 0 0 0 2.679 2.678h14.142a2.68 2.68 0 0 0 2.679-2.678v-.507c0-.44-.36-.8-.801-.8"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMacLaptopNotebookRemoveBulk;
