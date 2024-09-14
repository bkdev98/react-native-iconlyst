import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesSearchLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.066 21.784c-.873-.003-4.76-.001-7.054 0a.854.854 0 0 1-.707-1.33c.214-.32.485-.708.7-1.01a.95.95 0 0 0 .048-1.023c-.326-.567-.812-1.43-.938-1.743-1.506-3.267-.925-7.261 1.763-9.957a8.78 8.78 0 0 1 13.139.792 8.7 8.7 0 0 1 1.719 3.843M8.697 10.922h4.695m-4.695 3.525h2.027"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.662 19.575 1.639 1.641m-3.672-6.835a2.993 2.993 0 0 1 2.987 2.998 2.994 2.994 0 0 1-2.987 2.999 2.994 2.994 0 0 1-2.988-3 2.993 2.993 0 0 1 2.988-2.997"
    />
  </Svg>
);
export default IconlystMessagesSearchLight;
