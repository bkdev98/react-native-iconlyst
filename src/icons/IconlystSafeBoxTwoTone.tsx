import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSafeBoxTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.318 2.688H7.683A4.183 4.183 0 0 0 3.5 6.87v7.435a4.18 4.18 0 0 0 4.183 4.181h9.634a4.18 4.18 0 0 0 4.183-4.182V6.87a4.18 4.18 0 0 0-4.182-4.182"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.868 20.818h-2.262M8.397 20.818H6.134M14.912 7.367v1.074M14.912 12.734v1.075M12.12 8.98l.926.536M16.776 11.663l.927.537M12.12 12.2l.926-.537M16.776 9.516l.927-.537M16.43 9.066a2.148 2.148 0 1 1-3.038 3.038 2.148 2.148 0 0 1 3.038-3.038M8.8 7.375h-.39a1.11 1.11 0 0 0-1.11 1.11v4.204c0 .612.497 1.11 1.11 1.11h.39"
    />
  </Svg>
);
export default IconlystSafeBoxTwoTone;
