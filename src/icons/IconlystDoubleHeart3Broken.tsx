import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleHeart3Broken = ({
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
      d="M4.685 17.01c-1.464-2.044-1.446-4.928.692-6.472a4.3 4.3 0 0 1 1.87-.744c.674-.097 1.42.148 2.065.366.394-.557.856-1.192 1.461-1.506a4.26 4.26 0 0 1 1.957-.48c2.635 0 4.326 2.344 4.328 4.858-.022 4.043-4.26 7.968-4.26 7.968s-3.009-.38-5.55-1.803"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.761 9.557c-.26-.71-.428-1.462-.439-2.214 0-2.245 1.514-4.333 3.864-4.343.616.01 1.211.146 1.754.428.543.281.95.846 1.305 1.347.585-.199 1.242-.418 1.838-.324.605.083 1.18.302 1.681.657 1.9 1.389 1.92 3.959.616 5.786a5.5 5.5 0 0 1-.897.988"
    />
  </Svg>
);
export default IconlystDoubleHeart3Broken;
