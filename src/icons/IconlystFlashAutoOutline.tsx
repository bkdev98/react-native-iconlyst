import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashAutoOutline = ({
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
      d="M16.027 18.71a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.527 14.215a.75.75 0 0 1 .679.432l2.724 5.826a.75.75 0 0 1-1.36.635l-2.044-4.372-2.044 4.372a.75.75 0 1 1-1.358-.635l2.723-5.826a.75.75 0 0 1 .68-.432M8.995 3.148c.95-1.307 3.016-.636 3.016.98v4.589h4.302c1.36 0 2.15 1.544 1.349 2.647l-6.174 8.503c-.95 1.31-3.017.636-3.017-.98V14.3H4.17c-1.363 0-2.15-1.545-1.35-2.648zm1.213.881-6.174 8.504a.167.167 0 0 0 .136.266h5.05a.75.75 0 0 1 .75.75v5.339c0 .055.016.084.03.102a.2.2 0 0 0 .087.058q.062.018.104.004c.021-.007.05-.02.083-.066l6.174-8.503a.168.168 0 0 0-.135-.266H11.26a.75.75 0 0 1-.75-.75v-5.34c0-.055-.015-.083-.029-.1a.2.2 0 0 0-.086-.059.2.2 0 0 0-.105-.004c-.021.007-.05.02-.083.065"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlashAutoOutline;
