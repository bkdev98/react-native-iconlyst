import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartBrokensharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M21.5 9.636c-.01-2.536-1.34-4.921-3.963-5.766-1.8-.581-3.763-.258-5.287 1.93-1.524-2.188-3.486-2.511-5.287-1.93C4.34 4.715 3.01 7.1 3 9.637c-.024 5.044 5.087 8.903 9.25 10.748v-.001h.001c2.712-1.201 5.826-3.258 7.661-5.94"
    />
  </Svg>
);
export default IconlystHeartBrokensharp;
