import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystComputerCodeLight = ({
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
      d="M7.028 3.285h9.943A4.03 4.03 0 0 1 21 7.315v5.456a4.03 4.03 0 0 1-4.03 4.029H7.029A4.03 4.03 0 0 1 3 12.77V7.315a4.03 4.03 0 0 1 4.028-4.029M7.055 20.715h9.888M9.883 16.797l-.637 3.917M14.115 16.797l.637 3.917M12.662 12.613h3.047"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.29 7.707 2.187 2.188-2.188 2.189"
    />
  </Svg>
);
export default IconlystComputerCodeLight;
