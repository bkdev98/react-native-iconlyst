import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlowBrightnessBulk = ({
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
      d="M6.845 5.84A.999.999 0 1 0 5.43 7.253l1.857 1.86a.994.994 0 0 0 1.414 0A1 1 0 0 0 8.702 7.7zM17.007 9.407a1 1 0 0 0 .708-.293l1.856-1.861a.994.994 0 0 0-.001-1.414 1 1 0 0 0-1.414 0L16.299 7.7a1 1 0 0 0 .708 1.708M17.715 16.71a1 1 0 1 0-1.415 1.412l1.857 1.86a1 1 0 0 0 1.414.001 1 1 0 0 0 .001-1.414zM7.287 16.71 5.43 18.57a1 1 0 0 0 1.415 1.413l1.857-1.86a.999.999 0 1 0-1.415-1.414M7.127 12.916a1 1 0 0 0-1-1H3.5a1 1 0 0 0 0 2h2.627a1 1 0 0 0 1-1M21.5 11.916h-2.627a1 1 0 0 0 0 2H21.5a1 1 0 0 0 0-2M12.5 2.916a1 1 0 0 0-1 1v2.62a1 1 0 0 0 2 0v-2.62a1 1 0 0 0-1-1M12.5 18.286a1 1 0 0 0-1 1v2.63a1 1 0 0 0 2 0v-2.63a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGlowBrightnessBulk;
