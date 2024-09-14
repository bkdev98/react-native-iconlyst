import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEnlargeContractHorizontalOutline = ({
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
      d="M12 3.75a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-1.5 0v-15a.75.75 0 0 1 .75-.75M20.53 8.016a.75.75 0 0 1 0 1.061l-2.922 2.924 2.922 2.923a.75.75 0 0 1-1.06 1.06l-3.453-3.453a.75.75 0 0 1 0-1.06l3.453-3.454a.75.75 0 0 1 1.06 0M3.47 8.016a.75.75 0 0 1 1.06 0l3.454 3.455a.75.75 0 0 1 0 1.06L4.53 15.985a.75.75 0 1 1-1.06-1.06L6.393 12 3.47 9.077a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEnlargeContractHorizontalOutline;
