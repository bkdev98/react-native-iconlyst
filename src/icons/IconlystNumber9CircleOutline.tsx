import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber9CircleOutline = ({
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
      d="M12.5 13.937c-1.74 0-3.16-1.42-3.16-3.16s1.42-3.16 3.16-3.16 3.16 1.42 3.16 3.16-1.42 3.16-3.16 3.16m0-4.81c-.91 0-1.66.74-1.66 1.66s.74 1.66 1.66 1.66 1.66-.74 1.66-1.66-.74-1.66-1.66-1.66"
    />
    <Path
      fill={props.color}
      d="M12.08 17.13c-.23 0-.46-.11-.61-.31-.24-.34-.17-.8.17-1.05.03-.02 2.75-2.04 2.5-5.14-.03-.41.28-.77.69-.81.42-.01.77.28.81.69.31 3.96-2.98 6.37-3.12 6.47a.72.72 0 0 1-.44.14z"
    />
    <Path
      fill={props.color}
      d="M12.5 22.133c-5.38 0-9.75-4.37-9.75-9.75s4.37-9.75 9.75-9.75 9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
  </Svg>
);
export default IconlystNumber9CircleOutline;
