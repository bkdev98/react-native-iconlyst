import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBowling2Bulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M8.395 9.496c-.01.03-.02.05-.03.08-.2.35-.46.76-.81 1.28-2.699 4.023-1.126 7.895.658 10.107a.204.204 0 0 1-.044.298c-.198.132-.386.235-.664.235h-2.18c-.29 0-.57-.1-.77-.29-1.43-1.35-3.27-4.49-1.08-7.77.93-1.39 1.24-2 1.24-2.93 0-.28-.14-.64-.28-1.02-.31-.84-.75-1.99.19-3 .45-.49 1.05-.77 1.69-.79.69-.01 1.36.27 1.87.77.95 1.02.52 2.18.21 3.03M19.445 21.206c-.21.19-.48.29-.77.29h-2.19a1.12 1.12 0 0 1-.648-.201c-.086-.06-.09-.18-.023-.26 1.814-2.2 3.442-6.108.721-10.18-.48-.72-.81-1.23-1.03-1.63-.29-.81-.56-1.83.29-2.74.45-.49 1.05-.77 1.68-.79.68-.01 1.36.27 1.88.77.95 1.02.52 2.18.21 3.03-.14.38-.27.74-.28 1.02-.03.94.29 1.51 1.24 2.92 2.19 3.28.35 6.42-1.08 7.77"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.528 11.86c-1.16-1.734-1.564-2.445-1.524-3.61.013-.363.175-.806.348-1.274.392-1.066.88-2.392-.227-3.573a3.1 3.1 0 0 0-2.202-.903c-.755.02-1.439.338-1.978.921-1.093 1.185-.6 2.493-.206 3.543.178.471.345.915.345 1.268 0 1.157-.38 1.921-1.524 3.627-2.63 3.927-.424 7.7 1.295 9.31.23.213.535.331.861.331h2.657c.325 0 .631-.118.861-.333 1.718-1.609 3.924-5.38 1.294-9.308"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBowling2Bulk;
