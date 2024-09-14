import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonLight = ({
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
      d="M21.114 12.717c-.471 5.897-6.638 10.209-13.009 7.408a8.07 8.07 0 0 1-4.147-4.18C1.225 9.588 5.51 3.482 11.388 3c-.56 2.524.137 5.47 1.973 7.306 1.837 1.838 5.02 3.027 7.753 2.41"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoonLight;
