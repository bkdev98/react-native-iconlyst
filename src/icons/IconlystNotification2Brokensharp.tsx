import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotification2Brokensharp = ({
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
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M18.559 13.399a9.3 9.3 0 0 0 1.644 5.28H4.298a9.3 9.3 0 0 0 1.644-5.28v-2.793a6.309 6.309 0 0 1 12.542-.978M12.25 4.297V2.139M15.48 18.68v.23a3.23 3.23 0 0 1-6.457 0v-.23"
    />
  </Svg>
);
export default IconlystNotification2Brokensharp;
