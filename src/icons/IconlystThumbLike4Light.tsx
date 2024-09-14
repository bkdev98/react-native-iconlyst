import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLike4Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.88 9.64c1.315-4.086.64-5.714-.664-5.982-.498-.102-.705-.097-1.099.287-1.275 1.503-3.428 3.857-4.603 5.131-.304.33-.456.494-.563.68q-.15.259-.216.551c-.047.21-.047.433-.047.878v5.454c0 1.303 0 1.954.25 2.454.23.458.6.83 1.06 1.059.498.25 1.15.25 2.453.25h5.7c1.049 0 1.573 0 2.013-.18a2.43 2.43 0 0 0 1.023-.783c.287-.378.423-.884.697-1.898l.481-1.785c.516-1.914.774-2.87.559-3.627a2.84 2.84 0 0 0-1.268-1.654c-.674-.406-1.665-.406-3.646-.406h-1.82c-.341 0-.406-.131-.31-.43M3 20.006v-9.049"
    />
  </Svg>
);
export default IconlystThumbLike4Light;
