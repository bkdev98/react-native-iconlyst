import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTetherLight = ({
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
      d="M16.443 4.139H7.586c-.954 0-1.747.692-2.162 1.549l-2.16 4.506c-.523 1.045-.244 2.363.621 3.146l6.239 5.663c1.185 1.19 2.565 1.096 3.754 0l6.24-5.663c.855-.783 1.143-2.1.62-3.146l-2.16-4.506c-.424-.857-1.18-1.55-2.135-1.55"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.62 10.998c.648.24 1.044.571 1.044.948 0 .742-1.638 1.346-3.664 1.346s-3.664-.604-3.664-1.346c0-.377.396-.708 1.044-.948M8.96 7.857h6.082M12 15.465V7.857"
    />
  </Svg>
);
export default IconlystTetherLight;
