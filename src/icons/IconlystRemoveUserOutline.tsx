import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRemoveUserOutline = ({
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
      d="M7.203 14.674c1.263-.423 2.928-.549 4.632-.549a.75.75 0 1 1 0 1.5c-1.672 0-3.134.13-4.155.471-.507.17-.849.375-1.057.591-.19.199-.293.428-.293.741 0 .314.102.546.293.746.208.218.549.424 1.054.596 1.018.346 2.479.48 4.158.48a.75.75 0 1 1 0 1.5c-1.714 0-3.38-.131-4.641-.56-.635-.216-1.222-.525-1.656-.98a2.51 2.51 0 0 1-.708-1.782 2.5 2.5 0 0 1 .712-1.78c.437-.454 1.026-.76 1.661-.974M11.837 4.75a3.245 3.245 0 1 0 0 6.49 3.245 3.245 0 0 0 0-6.49M7.091 7.996a4.745 4.745 0 1 1 9.49 0 4.745 4.745 0 0 1-9.49 0M14.518 17.066a.75.75 0 0 1 .75-.75h3.954a.75.75 0 0 1 0 1.5h-3.954a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRemoveUserOutline;
