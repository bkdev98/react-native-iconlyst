import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStairsAscendBold = ({
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
      d="M7.045 19.5a1.22 1.22 0 0 0 1.219-1.22v-2.256h3.295a1.22 1.22 0 0 0 1.219-1.219V12.4h3.295a1.22 1.22 0 0 0 1.219-1.219V9H20.5c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25h-16c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25zm8.504-.22a.75.75 0 0 1-.22-.532l.005-3.117a.75.75 0 1 1 1.5.003l-.002 1.302L20.47 13.3a.75.75 0 0 1 1.06 1.06l-3.636 3.636 1.299-.003a.75.75 0 0 1 .003 1.5l-3.115.006a.75.75 0 0 1-.532-.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStairsAscendBold;
