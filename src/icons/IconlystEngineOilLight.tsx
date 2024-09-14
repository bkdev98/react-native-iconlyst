import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEngineOilLight = ({
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
      d="M16.742 21.885H7.758a2.99 2.99 0 0 1-2.988-2.989v-7.945c0-.88.387-1.714 1.059-2.282l4.553-3.85a3 3 0 0 1 1.93-.706h4.43a2.99 2.99 0 0 1 2.989 2.989v11.794a2.99 2.99 0 0 1-2.989 2.989M9.706 5.358 8.64 4.293a1.395 1.395 0 0 0-1.887-.079l-1.36 1.15a1.395 1.395 0 0 0-.086 2.052l.891.891M9.75 16.885h5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 13.885c-1.809 0-2.625-2.01-1.843-3.233.728-1.046 1.843-1.767 1.843-1.767s1.116.721 1.843 1.767c.782 1.223-.034 3.233-1.843 3.233"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEngineOilLight;
