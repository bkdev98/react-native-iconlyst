import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M22 15.94c0 2.79-2.24 5.05-5.03 5.06H7.05C4.27 21 2 18.75 2 15.96v-.01s.006-4.426.014-6.652a.498.498 0 0 1 .808-.392c2.376 1.885 6.625 5.322 6.678 5.367.71.57 1.61.89 2.53.89s1.82-.32 2.53-.9c.053-.036 4.207-3.37 6.619-5.286a.5.5 0 0 1 .81.39c.01 2.21.01 6.573.01 6.573"
        opacity={0.4}
      />
      <Path d="M21.476 5.674A5.04 5.04 0 0 0 17.03 3H7.05a5.04 5.04 0 0 0-4.446 2.674.864.864 0 0 0 .221 1.078l7.425 5.939c.52.42 1.15.629 1.78.629h.02c.63 0 1.26-.21 1.78-.63l7.425-5.938a.864.864 0 0 0 .221-1.078" />
    </G>
  </Svg>
);
export default IconlystMessageBulk;
