import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamondLight = ({
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
      d="m19.77 9.187-4.958-4.958c-1.728-1.728-4.035-1.588-5.767.143L4.374 9.044c-1.732 1.732-1.877 4.033-.144 5.766l4.958 4.958c1.734 1.734 4.036 1.59 5.767-.142l4.672-4.672c1.732-1.732 1.876-4.034.143-5.767"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiamondLight;
