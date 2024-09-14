import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterPlusOutline = ({
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
      d="M12.026 2.25a.75.75 0 0 1 .75.75v1.877h1.877a.75.75 0 0 1 0 1.5h-1.877v1.88a.75.75 0 0 1-1.5 0v-1.88H9.397a.75.75 0 0 1 0-1.5h1.879V3a.75.75 0 0 1 .75-.75M6.157 4.62a1.93 1.93 0 0 0-1.932 1.932v2.05c0 .793.312 1.554.869 2.118l4.347 3.87.032.031c.428.429.67 1.01.67 1.617v3.222c0 .558.561.938 1.079.733l1.88-.75c.3-.119.497-.409.497-.731v-1.988c0-.643.27-1.253.741-1.686l4.911-4.857.025-.023a3.02 3.02 0 0 0 .998-2.243V6.552A1.93 1.93 0 0 0 18.34 4.62a.75.75 0 0 1 0-1.5 3.43 3.43 0 0 1 3.433 3.433v1.363a4.52 4.52 0 0 1-1.48 3.344l-4.91 4.856-.024.023a.8.8 0 0 0-.26.586v1.988c0 .937-.573 1.78-1.443 2.125l-1.88.75a2.288 2.288 0 0 1-3.134-2.127v-3.222a.8.8 0 0 0-.22-.545L4.08 11.826l-.031-.03A4.52 4.52 0 0 1 2.725 8.6V6.552A3.43 3.43 0 0 1 6.157 3.12a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilterPlusOutline;
