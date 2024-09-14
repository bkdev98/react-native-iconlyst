import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCucumberOutline = ({
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
      d="M10.003 21.75c-.41 0-.75-.34-.75-.75v-1.69c-4.11-1.35-6.61-5.45-5.88-9.77.76-4.45 4.87-7.64 9.36-7.26 4.5.38 8.02 4.21 8.02 8.72 0 5.93-4.83 10.75-10.75 10.75m2.01-18c-3.48 0-6.56 2.55-7.16 6.04a7.21 7.21 0 0 0 5.34 8.23c.33.09.56.38.56.73v1.47c4.75-.38 8.5-4.37 8.5-9.22 0-3.74-2.92-6.91-6.64-7.22q-.3-.03-.6-.03"
    />
    <Path
      fill={props.color}
      d="M10.653 8.87c-.28 0-.55-.16-.68-.43l-.45-.97a.753.753 0 0 1 .36-1c.37-.17.82-.01 1 .36l.45.97a.753.753 0 0 1-.68 1.07M13.803 15.609c-.28 0-.55-.16-.68-.43l-.45-.97a.753.753 0 0 1 .36-1c.38-.18.82-.01 1 .36l.45.97a.753.753 0 0 1-.68 1.07M8.143 13.552c-.28 0-.55-.16-.68-.43a.757.757 0 0 1 .37-1l.97-.45c.37-.17.82 0 1 .37.17.38.01.82-.37 1l-.97.45a.7.7 0 0 1-.31.07zM10.544 15.75c-.08 0-.17-.01-.26-.04a.75.75 0 0 1-.45-.96l.37-1.01a.75.75 0 1 1 1.41.51l-.37 1.01c-.11.3-.4.49-.7.49M13.083 8.762c-.09 0-.17-.01-.26-.04a.75.75 0 0 1-.45-.96l.37-1.01a.75.75 0 1 1 1.41.51l-.37 1.01c-.11.3-.4.49-.7.49M16.003 13.21c-.09 0-.17-.01-.26-.05l-1.01-.37a.75.75 0 1 1 .51-1.41l1.01.37c.39.14.59.57.45.96-.11.3-.4.49-.7.49zM9.013 10.66c-.08 0-.17-.01-.25-.04l-1.01-.36a.763.763 0 0 1-.46-.96c.14-.39.56-.59.96-.46l1.01.36c.39.14.59.57.46.96-.11.31-.4.5-.71.5"
    />
  </Svg>
);
export default IconlystCucumberOutline;
