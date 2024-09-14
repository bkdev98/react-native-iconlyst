import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordHideBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M10.693 10.675a1.011 1.011 0 0 1 2.02 0 1.011 1.011 0 0 1-2.021 0m-2.896 1.01a1.011 1.011 0 1 1 .002-2.022 1.011 1.011 0 0 1-.002 2.022m7.812-2.02a1.011 1.011 0 1 1-.002 2.022 1.011 1.011 0 0 1 .002-2.022m-3.8 7.145a7.4 7.4 0 0 1 2.154-2.938 5.45 5.45 0 0 1 3.367-1.236 5.6 5.6 0 0 1 1.626.264.34.34 0 0 0 .314-.062 2 2 0 0 1 1.515-.407c.207.03.418-.117.418-.326v-3.38c0-3.308-2.123-5.53-5.283-5.53H7.485c-3.16 0-5.282 2.222-5.282 5.53v4.05c0 3.307 2.123 5.53 5.282 5.53l3.88-.003c.213 0 .359-.216.325-.426a2 2 0 0 1 .119-1.066"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.484 17.556a4.6 4.6 0 0 1 1.226-1.56 2.68 2.68 0 0 1 1.635-.61c.32.004.635.071.932.188l-3.048 3.051a4.6 4.6 0 0 1-.745-1.069m6.55-3.68a.75.75 0 0 0-1.061 0l-.574.575a4.2 4.2 0 0 0-2.054-.565 4.2 4.2 0 0 0-2.588.951 6.14 6.14 0 0 0-1.788 2.439.75.75 0 0 0-.001.559 6.1 6.1 0 0 0 1.185 1.867l-.474.474a.75.75 0 1 0 1.06 1.061l6.295-6.3a.75.75 0 0 0 0-1.061M21.344 16.868a.746.746 0 0 0-.985.392c-.664 1.538-1.786 2.457-3.003 2.457a.75.75 0 0 0 0 1.5c1.834 0 3.471-1.257 4.38-3.364a.75.75 0 0 0-.392-.985"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordHideBold;
