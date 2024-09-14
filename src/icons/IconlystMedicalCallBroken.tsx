import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMedicalCallBroken = ({
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
      d="M7.517 16.484c6.895 6.894 8.857 3.907 9.166 3.66 2.466-2.465 1.347-2.855-.6-4.8-2.017-2.017-2.96 1.872-6.13-1.296-3.17-3.17.717-4.114-1.3-6.132-1.946-1.945-2.329-3.07-4.8-.598-.221.275-2.616 1.866 1.753 7.093M15.223 10.753a4.07 4.07 0 0 0 4.587-.814 4.063 4.063 0 1 0-5.748-5.748 4.07 4.07 0 0 0-.815 4.587c.09.222-.308 1.66.003 1.972.312.312 1.75-.087 1.973.003M16.936 8.23V5.9M18.098 7.064h-2.326"
    />
  </Svg>
);
export default IconlystMedicalCallBroken;
