import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaErrorOutline = ({
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
      d="M21.25 2.49a.75.75 0 0 1 .75.75v7.538a.75.75 0 0 1-1.5 0V3.24a.75.75 0 0 1 .75-.75m-6.026 3.932a.75.75 0 0 1 .75.75v3.606a.75.75 0 0 1-1.5 0V7.172a.75.75 0 0 1 .75-.75m-5.975 4.083a.75.75 0 0 1 .75.75v9.506a.75.75 0 1 1-1.5 0v-9.506a.75.75 0 0 1 .75-.75m5.444 4.033a.75.75 0 0 1 1.061 0l2.316 2.315 2.316-2.315a.75.75 0 1 1 1.06 1.06l-2.315 2.316 2.315 2.315a.75.75 0 0 1-1.06 1.06l-2.316-2.315-2.316 2.316a.75.75 0 0 1-1.06-1.061l2.315-2.315-2.315-2.315a.75.75 0 0 1 0-1.061m-11.443-.18a.75.75 0 0 1 .75.75v5.653a.75.75 0 0 1-1.5 0v-5.653a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAntenaErrorOutline;
