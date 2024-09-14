import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystErrorBadgeBold = ({
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
      d="M12.75 12.01a.75.75 0 0 1-1.5 0V8.994a.75.75 0 0 1 1.5 0zm-.752 3.774c-.414 0-.75-.312-.75-.726v-.047a.75.75 0 0 1 1.5 0c0 .414-.336.773-.75.773m8.707-5.696-.7-.7a1.7 1.7 0 0 1-.494-1.196v-1a2.703 2.703 0 0 0-2.7-2.701H15.81a1.68 1.68 0 0 1-1.197-.492l-.711-.71a2.68 2.68 0 0 0-1.903-.785h-.008a2.68 2.68 0 0 0-1.906.796l-.699.699a1.69 1.69 0 0 1-1.196.493H7.189a2.706 2.706 0 0 0-2.702 2.7v.998c0 .445-.178.882-.493 1.196l-.637.65a.5.5 0 0 0-.078.065 2.7 2.7 0 0 0 .018 3.813l.698.7c.319.32.494.745.494 1.196v1.005a2.7 2.7 0 0 0 2.7 2.699h.999a1.7 1.7 0 0 1 1.195.493l.713.712c.524.52 1.213.78 1.9.78.694 0 1.388-.264 1.915-.795l.699-.7a1.7 1.7 0 0 1 1.197-.493h1.004a2.704 2.704 0 0 0 2.7-2.696v-1.003c0-.45.175-.875.494-1.196l.71-.71a2.705 2.705 0 0 0-.01-3.818"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystErrorBadgeBold;
