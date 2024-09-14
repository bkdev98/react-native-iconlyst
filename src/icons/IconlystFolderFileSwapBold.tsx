import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileSwapBold = ({
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
      d="m15.837 15.003-1.688 1.696a.752.752 0 0 1-1.282-.53v-5.638a.75.75 0 0 1 1.5 0v3.823l.408-.41a.749.749 0 1 1 1.062 1.059m-4.254 1.166a.75.75 0 0 1-1.5 0v-3.82l-.406.409A.75.75 0 1 1 8.613 11.7l1.688-1.698a.748.748 0 0 1 1.282.528zm5.036-10.805h-2.652a1.67 1.67 0 0 1-1.314-.655l-.855-1.14a2.65 2.65 0 0 0-2.111-1.055H7.812c-3.423 0-5.087 1.906-5.087 5.828v7.312c0 3.653 2.185 5.833 5.844 5.833h7.297c3.652 0 5.832-2.18 5.832-5.83l.027-4.66c0-3.843-1.622-5.633-5.106-5.633"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileSwapBold;
