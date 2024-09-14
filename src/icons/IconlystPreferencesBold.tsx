import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPreferencesBold = ({
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
      d="M8.762 21.5h8.435c3.16 0 5.284-2.221 5.284-5.526V8.026c0-3.305-2.123-5.526-5.283-5.526H8.762c-3.16 0-5.282 2.221-5.282 5.526v7.948c0 3.305 2.122 5.526 5.282 5.526m2.363-10.561a.75.75 0 0 1-.75-.75v-.517H8.807a.75.75 0 0 1 0-1.5h1.568v-.516a.75.75 0 0 1 1.5 0v2.533a.75.75 0 0 1-.75.75m2.17 5.404a.75.75 0 0 0 1.5 0V13.81a.75.75 0 0 0-1.5 0v.515H8.806a.75.75 0 0 0 0 1.5h4.489zm3.855-.517h-.648a.75.75 0 0 1 0-1.5h.648a.75.75 0 0 1 0 1.5m0-6.154h-3.566a.75.75 0 0 1 0-1.5h3.567a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPreferencesBold;
