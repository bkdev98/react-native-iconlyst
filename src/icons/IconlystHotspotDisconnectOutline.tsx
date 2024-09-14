import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHotspotDisconnectOutline = ({
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
      d="M2.861 2.813a.75.75 0 0 1 1.061 0l17.313 17.313a.75.75 0 0 1-1.06 1.06L9.166 10.18a3.75 3.75 0 0 0 .476 4.718.75.75 0 0 1-1.06 1.06 5.25 5.25 0 0 1-.492-6.854L5.956 6.969a8.245 8.245 0 0 0 .503 11.11.75.75 0 0 1-1.06 1.06C1.769 15.512 1.6 9.734 4.892 5.905l-2.03-2.03a.75.75 0 0 1 0-1.06m15.266 2.545a.75.75 0 0 1 1.061 0 9.75 9.75 0 0 1 1.991 10.905.75.75 0 0 1-1.367-.618 8.245 8.245 0 0 0-1.684-9.227.75.75 0 0 1 0-1.06m-3.18 3.18a.75.75 0 0 1 1.06 0 5.25 5.25 0 0 1 1.537 3.711.75.75 0 0 1-1.5 0c0-.994-.395-1.947-1.098-2.65a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHotspotDisconnectOutline;
