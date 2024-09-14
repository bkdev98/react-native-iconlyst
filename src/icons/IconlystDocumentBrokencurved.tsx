import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentBrokencurved = ({
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
      d="M15.845 15.697h-7.22M15.845 11.937h-7.22M11.38 8.177H8.625M20.267 7.848c-.842-3.744-3.201-5.098-8.017-5.098-6.293 0-8.391 2.313-8.391 9.25s2.098 9.25 8.391 9.25 8.391-2.313 8.391-9.25"
    />
  </Svg>
);
export default IconlystDocumentBrokencurved;
