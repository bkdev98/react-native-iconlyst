import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFeatherBulk = ({
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
      d="M22.07 3.533c-.737-1.404-3.16-.963-5.256-.402C7.707 6.487 4.485 13.307 3.354 17.37a.75.75 0 0 0-.094.344c-.448 1.724-.509 2.873-.51 2.91a.75.75 0 0 0 .717.78H3.5a.75.75 0 0 0 .75-.717c.004-.122.05-.961.333-2.215 2.508-.106 5.033-1.04 7.513-2.784a.75.75 0 0 0 .035-1.201l-1.144-.906 3.754-.368a.75.75 0 0 0 .414-.176 57 57 0 0 0 3.81-3.611c2.765-2.9 3.722-4.717 3.105-5.893"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.627 19.905h-6.41a.75.75 0 0 0 0 1.5h6.41a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFeatherBulk;
