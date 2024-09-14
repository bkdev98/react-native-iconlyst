import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShiningStarLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.824 16.396-.048-.129a11.04 11.04 0 0 0-6.521-6.521l-.129-.048.129-.048A11.04 11.04 0 0 0 9.776 3.13L9.824 3l.048.129a11.04 11.04 0 0 0 6.521 6.521l.129.048-.129.048a11.04 11.04 0 0 0-6.521 6.521zM17.573 21l-.026-.068a5.82 5.82 0 0 0-3.437-3.437l-.068-.026.068-.025a5.82 5.82 0 0 0 3.437-3.437l.026-.068.025.068a5.82 5.82 0 0 0 3.437 3.437l.068.025-.068.026a5.82 5.82 0 0 0-3.437 3.437zM10.208 20.37v-.01M4.308 4.61V4.6M3.438 18.956v-2.56M19.01 5.615v-1.56"
    />
  </Svg>
);
export default IconlystShiningStarLight;
