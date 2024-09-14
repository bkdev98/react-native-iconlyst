import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailSendngLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.007 20.1 5.41-.003c2.737.007 4.583-2.241 4.583-5.006v-6.18c0-2.764-1.846-5.015-4.583-5.015H7.582C4.845 3.896 3 6.147 3 8.91v1.681"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.688 9.162 3.998 3.252c.754.598 1.82.598 2.574 0l4.033-3.252M3 14.134h3.473m-1.078 2.984H9.74m-6.45 2.985 3.17-.001"
    />
  </Svg>
);
export default IconlystEmailSendngLight;
