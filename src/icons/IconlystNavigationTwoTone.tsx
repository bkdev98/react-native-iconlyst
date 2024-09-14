import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationTwoTone = ({
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
      d="M20.037 4.724a1.87 1.87 0 0 0-2.096-.618L5.829 8.276c-1.648.567-1.71 2.875-.094 3.53l4.163 1.685c.255.103.482.26.668.457"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.037 4.723c.37.467.524 1.107.305 1.763l-4.093 12.226c-.554 1.653-2.863 1.734-3.53.122l-1.786-4.318a1.9 1.9 0 0 0-.368-.57"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNavigationTwoTone;
