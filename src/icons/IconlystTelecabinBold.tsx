import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelecabinBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.978 14.576a1.6 1.6 0 0 1-.925.972 1.6 1.6 0 0 1-.665.116H8.595l-.056.001a1.636 1.636 0 0 1-1.52-1.089 1.6 1.6 0 0 1-.086-.673L6.93 12.01c-.016-.192.013-.42.09-.636a1.637 1.637 0 0 1 .919-.964c.216-.089.453-.132.675-.118h6.784c.21-.015.442.031.653.117.209.086.404.218.563.384.16.168.282.364.358.583q.117.336.086.68l.002 1.887c.02.179-.008.415-.083.633m-3.202 4.604h-3.547a.75.75 0 0 1 0-1.5h3.547a.75.75 0 1 1 0 1.5m6.323-7.539a3.894 3.894 0 0 0-2.421-3.95 3.9 3.9 0 0 0-1.596-.281l-3.332.001V4.44l5.224-.57a.75.75 0 0 0-.162-1.491L6.028 3.665a.75.75 0 0 0 .162 1.491l5.06-.552v2.807H7.928a3.8 3.8 0 0 0-1.613.284c-.516.21-.971.521-1.353.923a3.85 3.85 0 0 0-.855 1.398 3.8 3.8 0 0 0-.207 1.581l.002 5.796a3.9 3.9 0 0 0 .208 1.622 3.892 3.892 0 0 0 2.206 2.318c.515.21 1.055.304 1.594.289h8.164l.133.002a3.903 3.903 0 0 0 3.684-2.607 3.8 3.8 0 0 0 .21-1.582z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTelecabinBold;
