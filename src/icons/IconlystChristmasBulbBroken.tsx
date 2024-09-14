import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasBulbBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.206 14.66a7.206 7.206 0 1 1-.723-3.15M12 5.162V3.365"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.492 5.854a.513.513 0 0 0-.48-.69H9.987a.513.513 0 0 0-.48.69l.66 1.782"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 11.626a1.37 1.37 0 0 0-.877.877 1.37 1.37 0 0 0-.877-.877c.416-.135.742-.461.877-.877.135.416.461.742.877.877"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.32 18.358a4.4 4.4 0 0 0-2.928-2.927 4.4 4.4 0 0 0 2.927-2.927 4.4 4.4 0 0 0 2.927 2.927 4.4 4.4 0 0 0-1.452.762M15.416 17.431l.01.01"
    />
  </Svg>
);
export default IconlystChristmasBulbBroken;
