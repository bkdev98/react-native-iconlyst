import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGasCanLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.958 7.272h3.757M16.742 21.885H7.758a2.99 2.99 0 0 1-2.988-2.989v-7.945c0-.88.387-1.714 1.059-2.282l4.553-3.85a3 3 0 0 1 1.93-.706h4.43a2.99 2.99 0 0 1 2.989 2.989v11.794a2.99 2.99 0 0 1-2.989 2.989M9.706 5.358 8.64 4.293a1.395 1.395 0 0 0-1.887-.079l-1.36 1.15a1.395 1.395 0 0 0-.086 2.052l.891.891"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.081 19c-1.547 0-2.245-1.72-1.576-2.766.622-.894 1.576-1.512 1.576-1.512s.954.618 1.576 1.512c.67 1.046-.028 2.765-1.576 2.765M9.564 14.455c-1.136 0-1.649-1.262-1.158-2.03.457-.657 1.158-1.11 1.158-1.11s.7.453 1.157 1.11c.491.768-.021 2.03-1.157 2.03"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGasCanLight;
