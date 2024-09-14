import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewMassage3HeartTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.062 3.474H8.134c-2.86 0-4.634 2.025-4.634 4.885v7.677c0 2.86 1.74 4.876 4.634 4.876h8.168c2.86 0 4.634-2.017 4.634-4.876v-4.15"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.469 15.034h4.836M8.47 10.78h1.973"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.113 5.575c-.31-.97.053-2.077 1.07-2.405a1.74 1.74 0 0 1 1.57.264 1.75 1.75 0 0 1 1.568-.264c1.017.328 1.383 1.435 1.072 2.405-.482 1.535-2.64 2.718-2.64 2.718s-2.14-1.165-2.64-2.718"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNewMassage3HeartTwoTone;
