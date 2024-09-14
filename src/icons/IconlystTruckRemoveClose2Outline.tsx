import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruckRemoveClose2Outline = ({
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
      d="M7.108 4.66a3.107 3.107 0 1 0-.001 6.214 3.107 3.107 0 0 0 0-6.214M2.5 7.766a4.607 4.607 0 1 1 9.215.002A4.607 4.607 0 0 1 2.5 7.766m10.038-1.868a.75.75 0 0 1 .75-.75h1.084A2.83 2.83 0 0 1 17.2 7.977v.533l2.944 1.299a3.11 3.11 0 0 1 1.855 2.846v3.441a2.83 2.83 0 0 1-2.827 2.829h-.163a2.667 2.667 0 0 1-5.118 0H9.87a2.667 2.667 0 0 1-5.136-.066 2.83 2.83 0 0 1-2.223-2.763v-3.061a.75.75 0 0 1 1.5 0v3.06c0 .539.32 1.002.78 1.21a2.668 2.668 0 0 1 5.08.12h4.021a2.67 2.67 0 0 1 1.809-1.81V7.978c0-.734-.595-1.329-1.328-1.329h-1.084a.75.75 0 0 1-.75-.75M17.2 10.15v5.467c.87.254 1.554.94 1.809 1.809h.163c.733 0 1.327-.594 1.327-1.329v-1.941h-1.65a.75.75 0 0 1 0-1.5h1.65a1.61 1.61 0 0 0-.96-1.474zM5.715 6.375a.75.75 0 0 1 1.06 0l.331.331.332-.33a.75.75 0 1 1 1.06 1.06l-.33.331.33.331a.75.75 0 0 1-1.06 1.061l-.332-.331-.33.331a.75.75 0 1 1-1.061-1.06l.33-.332-.33-.331a.75.75 0 0 1 0-1.06M7.31 17.01a1.166 1.166 0 1 0 .001 2.332 1.166 1.166 0 0 0 0-2.332m9.14 0a1.166 1.166 0 1 0 0 2.332 1.166 1.166 0 0 0 0-2.332"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTruckRemoveClose2Outline;
