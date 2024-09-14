import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWattpadLight = ({
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
      d="M13.331 4.925c2.166.139 2.154 3.013 1.894 4.59 1.022-1.401 3.345-4.781 5.528-4.087 1.003.437.933 1.586.165 2.724a54 54 0 0 0-3.808 6.626c-.637 1.277-1.56 2.772-3.222 2.569-2.257-.247-2.572-3.129-2.443-4.914-.707 1.155-1.227 2.409-1.813 3.626-.825 1.673-1.988 3.395-4.07 2.95-2.805-.898-3.08-5.21-3.061-7.606.032-1.89.137-5.706 2.675-5.955 1.366-.15 2.156.862 2.325 2.097.122.965.009 1.938-.083 2.9 1.139-1.943 3.16-5.717 5.913-5.52"
    />
  </Svg>
);
export default IconlystWattpadLight;
