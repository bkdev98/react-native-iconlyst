import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingOutline = ({
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
      d="M6.129 5.876a.75.75 0 0 1 1.06 0l.95.949a.75.75 0 0 1-1.061 1.06l-.95-.948a.75.75 0 0 1 0-1.061m2.01 10.233a.75.75 0 0 1 0 1.061l-1.722 1.722a.75.75 0 0 1-1.06-1.06l1.72-1.722a.75.75 0 0 1 1.061 0m8.224 0a.75.75 0 0 1 1.06 0l1.722 1.723a.75.75 0 1 1-1.06 1.06l-1.722-1.722a.75.75 0 0 1 0-1.06M12.25 3.965a.75.75 0 0 1 .75.75v.718a.75.75 0 0 1-1.5 0v-.718a.75.75 0 0 1 .75-.75m-9.191 8.033a.75.75 0 0 1 .75-.75h1.875a.75.75 0 0 1 0 1.5H3.81a.75.75 0 0 1-.75-.75m15.007 0a.75.75 0 0 1 .75-.75h2.434a.75.75 0 0 1 0 1.5h-2.434a.75.75 0 0 1-.75-.75m-5.816 5.816a.75.75 0 0 1 .75.75v2.434a.75.75 0 0 1-1.5 0v-2.434a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoadingOutline;
