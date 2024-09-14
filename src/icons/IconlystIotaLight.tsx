import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIotaLight = ({
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
      d="M7.071 12.768s-.629 5.43 2.576 7.648M8.783 12.543s-.453 4.55 4.94 8.116M10.475 11.94s.776 5.308 7.578 8.02M13.33 9.67S8.61 7.73 3 12.63M13.67 7.816s-3.485-2.693-9.088.482M14.17 6.108s-4.113-3.311-7.527-1.472M13.522 13.982S17.462 10.612 16.27 3M14.857 15.236s3.94-1.861 4.15-8.601M16.049 16.553s4.746-2.138 4.952-6.196"
    />
  </Svg>
);
export default IconlystIotaLight;
