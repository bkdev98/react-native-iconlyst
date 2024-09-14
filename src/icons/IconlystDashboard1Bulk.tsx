import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard1Bulk = ({
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
      d="M7.734 20.406h10.499c.557 0 1.069-.203 1.44-.571a9.44 9.44 0 0 0 2.805-6.513c.118-5.115-4.098-9.566-9.205-9.723a9.43 9.43 0 0 0-6.905 2.675 9.43 9.43 0 0 0-2.887 6.825 9.42 9.42 0 0 0 2.806 6.733c.367.365.895.574 1.447.574"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.364 11.79c.213.387.335.833.335 1.307 0 1.5-1.22 2.72-2.72 2.72s-2.72-1.22-2.72-2.72 1.22-2.721 2.72-2.721c.482 0 .936.126 1.33.348l1.983-1.983a.749.749 0 1 1 1.06 1.06zm-3.606 1.307c0-.673.547-1.221 1.22-1.221s1.221.548 1.221 1.22a1.221 1.221 0 1 1-2.441 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDashboard1Bulk;
