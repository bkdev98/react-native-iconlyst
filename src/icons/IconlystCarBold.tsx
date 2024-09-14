import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarBold = ({
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
      d="M17.55 18.635c-.73 0-1.32-.59-1.32-1.31s.59-1.31 1.32-1.31c.72 0 1.31.59 1.31 1.31s-.59 1.31-1.31 1.31m-10.07 0c-.72 0-1.31-.59-1.31-1.31a1.314 1.314 0 0 1 2.63 0c0 .72-.59 1.31-1.32 1.31M3 6.915c0-.41.17-.81.45-1.1.29-.29.69-.45 1.1-.45h6.02c.11 0 .2.09.2.2v4.78a.2.2 0 0 1-.2.2H3.2a.2.2 0 0 1-.2-.2zm12.25.1c.09 0 .18.03.26.07.08.05.15.12.18.19l1.601 2.975a.2.2 0 0 1-.176.295H12.47a.2.2 0 0 1-.2-.2v-3.13c0-.11.09-.2.2-.2zm-3.4 6.03h1.13a.749.749 0 1 1 0 1.5h-1.13c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75m10.26-1.61c-.57-.57-1.36-.89-2.16-.89h-.79l-2.15-3.99c-.17-.3-.42-.56-.72-.75-.3-.18-.64-.28-1.01-.29h-3.01v-.42c-.01-.33-.14-.64-.37-.86-.23-.23-.53-.37-.88-.37H4.55c-.8 0-1.59.32-2.16.89-.57.58-.89 1.34-.89 2.16v8.45c0 .8.33 1.59.89 2.15.58.58 1.34.9 2.16.9h.34a2.82 2.82 0 0 0 2.59 1.72c1.3 0 2.39-.87 2.71-2.06h4.65a2.805 2.805 0 0 0 2.71 2.06c1.17 0 2.17-.72 2.6-1.73.73-.05 1.44-.37 1.96-.89.57-.58.89-1.34.89-2.15v-1.77c0-.82-.32-1.58-.89-2.16"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCarBold;
