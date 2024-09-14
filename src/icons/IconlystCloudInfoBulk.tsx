import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudInfoBulk = ({
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
      d="M18.015 9.213a.21.21 0 0 1-.183-.18c-.294-2.108-2.009-4.74-5.33-4.74-3.572 0-5.041 2.91-5.326 4.742a.21.21 0 0 1-.183.177c-2.359.29-3.956 2.098-3.956 4.583a4.64 4.64 0 0 0 2.74 4.222 5 5 0 0 0 1.843.375h2.185a.2.2 0 0 0 .2-.2v-3.34c0-.495.148-.953.397-1.34a.22.22 0 0 0 0-.241 2.43 2.43 0 0 1-.397-1.331v-.061a2.5 2.5 0 1 1 4.588 1.371.22.22 0 0 0 .001.241c.257.392.411.857.411 1.361v3.34c0 .11.09.2.2.2h2.168c.347 0 1.05-.048 1.875-.378a4.64 4.64 0 0 0 2.715-4.219c0-2.483-1.593-4.29-3.948-4.582"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.505 14.102a.75.75 0 0 0-.75.75v4.107a.75.75 0 0 0 1.5 0v-4.107a.75.75 0 0 0-.75-.75M12.505 11.129a.75.75 0 0 0-.75.75v.06c0 .415.336.72.75.72s.75-.366.75-.78a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudInfoBulk;
