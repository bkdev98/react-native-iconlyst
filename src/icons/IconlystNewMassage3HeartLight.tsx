import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewMassage3HeartLight = ({
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
      d="M11.562 3.474H7.634C4.774 3.474 3 5.499 3 8.359v7.677c0 2.86 1.74 4.876 4.634 4.876h8.169c2.859 0 4.633-2.017 4.633-4.876v-4.15M7.969 15.034h4.836M7.97 10.78h1.973"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.613 5.575c-.31-.97.053-2.077 1.07-2.405a1.74 1.74 0 0 1 1.57.264 1.75 1.75 0 0 1 1.568-.264c1.017.328 1.383 1.435 1.072 2.405-.482 1.535-2.64 2.718-2.64 2.718s-2.14-1.165-2.64-2.718"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNewMassage3HeartLight;
