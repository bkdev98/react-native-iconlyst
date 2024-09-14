import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPin2LinesOutline = ({
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
      d="M10.937 20.775H8.485a4.65 4.65 0 0 1-4.647-4.646V6.897A4.653 4.653 0 0 1 8.485 2.25h6.713a4.65 4.65 0 0 1 4.65 4.647v3.184a.75.75 0 1 1-1.5 0V6.897A3.15 3.15 0 0 0 15.2 3.75H8.488A3.15 3.15 0 0 0 5.34 6.897v9.235a3.15 3.15 0 0 0 3.147 3.146h2.452a.75.75 0 1 1 0 1.5z"
    />
    <Path
      fill={props.color}
      d="M17.097 21.746a.75.75 0 0 1-.75-.75v-1.135h-1.423a1.39 1.39 0 0 1-1.387-1.388 2.34 2.34 0 0 1 .933-1.865 1 1 0 0 1 .09-.057q.236-.13.451-.29.001-.117-.014-.233a3 3 0 0 0-.3-.252 1.77 1.77 0 0 1-.48-1.968 1.74 1.74 0 0 1 1.63-1.105h2.5a1.748 1.748 0 0 1 1.218 3.006c-.164.13-.3.245-.37.315a1.4 1.4 0 0 0 0 .235q.213.158.446.284a1 1 0 0 1 .09.058 2.35 2.35 0 0 1 .931 1.865 1.39 1.39 0 0 1-1.388 1.388h-1.426v1.142a.75.75 0 0 1-.75.75m.04-3.385h2.011a.83.83 0 0 0-.29-.526c-.812-.454-.966-.76-1.018-.86a2.22 2.22 0 0 1-.02-1.577c.036-.087.151-.354.772-.82a.4.4 0 0 0-.012-.217.25.25 0 0 0-.236-.158h-2.5a.254.254 0 0 0-.177.435c.302.182.545.448.7.764a2.2 2.2 0 0 1-.02 1.572c-.05.1-.2.4-1.017.861a.83.83 0 0 0-.29.526h2.012a1 1 0 0 1 .084 0M11.022 14.231H9.436a.75.75 0 1 1 0-1.5h1.585a.75.75 0 1 1 0 1.5m2.3-4.2H9.436a.75.75 0 1 1 0-1.5h3.886a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystDocumentPin2LinesOutline;
