import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowUpOutline = ({
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
      d="M12.439 3.683a.623.623 0 0 0-.881-.001q-1.43 1.426-2.865 2.866C7.583 7.66 6.47 8.774 5.36 9.878c-.403.401-.114 1.088.445 1.088H8.29c.707 0 1.28.573 1.28 1.28v7.627c0 .346.28.627.627.627H13.8c.347 0 .627-.28.627-.627v-7.628c0-.706.573-1.28 1.28-1.28h2.49c.559 0 .845-.682.444-1.081Q16.77 8.02 14.907 6.153zm-1.94-1.064a2.124 2.124 0 0 1 3 .003q1.239 1.237 2.473 2.474 1.86 1.865 3.726 3.725c1.344 1.338.401 3.645-1.502 3.645h-2.27v7.407A2.127 2.127 0 0 1 13.8 22h-3.602a2.127 2.127 0 0 1-2.127-2.127v-7.407H5.806c-1.908 0-2.848-2.314-1.502-3.652C5.417 7.706 6.52 6.6 7.626 5.494q1.43-1.435 2.873-2.875"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowUpOutline;
