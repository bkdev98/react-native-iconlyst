import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFoldExpandHorizontalOutline = ({
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
      d="M7.983 8.016a.75.75 0 0 1 0 1.061l-2.922 2.924 2.922 2.922a.75.75 0 0 1-1.06 1.061L3.47 12.531a.75.75 0 0 1 0-1.06l3.453-3.454a.75.75 0 0 1 1.06 0M16.017 8.016a.75.75 0 0 1 1.06 0l3.453 3.454a.75.75 0 0 1 0 1.061l-3.453 3.453a.75.75 0 0 1-1.06-1.06L18.939 12l-2.922-2.924a.75.75 0 0 1 0-1.06M12 3.586a.75.75 0 0 1 .75.75v.958a.75.75 0 0 1-1.5 0v-.958a.75.75 0 0 1 .75-.75m0 3.832a.75.75 0 0 1 .75.75v2.395a.75.75 0 0 1-1.5 0V8.168a.75.75 0 0 1 .75-.75m0 5.27a.75.75 0 0 1 .75.75v2.394a.75.75 0 0 1-1.5 0v-2.395a.75.75 0 0 1 .75-.75m0 5.268a.75.75 0 0 1 .75.75v.958a.75.75 0 0 1-1.5 0v-.958a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFoldExpandHorizontalOutline;
