import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesLockBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.77 12.027h-2.963a.725.725 0 0 0-.722.726v1.669c0 .4.324.726.722.726h2.964c.396 0 .72-.326.72-.726v-1.67c0-.4-.323-.725-.72-.725M13.307 10.527v-.32a1.02 1.02 0 0 0-.309-.714 1.07 1.07 0 0 0-.722-.29c-.555.008-.997.45-1.007 1.01v.314z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.99 14.422a2.225 2.225 0 0 1-2.22 2.226h-2.963a2.226 2.226 0 0 1-2.221-2.226v-1.669c0-.85.483-1.581 1.184-1.956v-.598a2.514 2.514 0 0 1 2.488-2.495c.652-.023 1.307.246 1.788.716.484.472.754 1.104.76 1.779v.598a2.22 2.22 0 0 1 1.185 1.956zm3.784-8.13a9.53 9.53 0 0 0-6.92-3.629 9.52 9.52 0 0 0-7.275 2.773c-2.806 2.815-3.571 7.136-1.914 10.731.11.274.443.896.99 1.847a.47.47 0 0 1-.023.509c-.223.314-.504.716-.723 1.045-.283.425-.31.967-.07 1.417.24.445.702.722 1.207.722h1.419c2.277-.001 5.07-.002 5.8 0h.034a9.5 9.5 0 0 0 7.272-3.397c2.898-3.437 2.983-8.492.203-12.018"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesLockBold;
