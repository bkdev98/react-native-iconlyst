import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesTradeLight = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.277 21.207a8.97 8.97 0 0 0 6.92-3.22c2.72-3.227 2.807-8.071.194-11.386a8.988 8.988 0 0 0-13.448-.812c-2.75 2.76-3.345 6.849-1.804 10.191.13.322.626 1.204.96 1.784a.97.97 0 0 1-.05 1.048c-.22.31-.498.706-.715 1.033a.874.874 0 0 0 .723 1.362c2.348 0 6.326-.004 7.22 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.318 10.892 1.64-1.587 1.64 1.587M16.286 13.463l-1.64 1.587-1.64-1.587M14.645 15.048V9.775m-4.688-.47v5.272"
    />
  </Svg>
);
export default IconlystMessagesTradeLight;
